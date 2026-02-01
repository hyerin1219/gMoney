import { useState } from 'react';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp, deleteField, getFirestore } from 'firebase/firestore/lite';

import { firebaseApp } from '../../../common/libraries/firebase';
import { useAuth } from '../../../hooks/useAuth';
import { useAlert } from '../../common/alert/AlertProvider';
import { IStoreItem } from '../../../common/stores/types';

export function Bookmark() {
    const db = getFirestore(firebaseApp);
    const { user } = useAuth();
    const { triggerAlert } = useAlert();
    const [star, setStar] = useState<Record<string, boolean>>({});

    const handleClickStar = async (region: string, storeId: string, name: string, address: string, lat: string, logt: string) => {
        if (!user) {
            triggerAlert('로그인 후 이용해 주세요.');
            return;
        }

        // 현재 상태를 반전시켜서 미리 보여줌
        setStar((prev) => ({ ...prev, [storeId]: !prev[storeId] }));

        try {
            const ref = doc(db, 'bookMarkerStore', user.sub);
            const snap = await getDoc(ref);
            const newItem: IStoreItem = { storeId, name, address, lat, logt };

            // 최초 생성
            if (!snap.exists()) {
                await setDoc(ref, {
                    regions: { [region]: [newItem] },
                });
                return;
            }

            const data = snap.data();
            const regionStores: IStoreItem[] = data.regions?.[region] ?? [];
            const isStarred = regionStores.some((store) => store.storeId === storeId);

            // 제거 또는 추가 로직 수행
            if (isStarred) {
                const filtered = regionStores.filter((store) => store.storeId !== storeId);
                await updateDoc(ref, {
                    [`regions.${region}`]: filtered.length === 0 ? deleteField() : filtered,
                });
            } else {
                await updateDoc(ref, {
                    [`regions.${region}`]: [...regionStores, newItem],
                });
            }
        } catch (error) {
            console.error('북마크 저장 실패:', error);

            setStar((prev) => ({ ...prev, [storeId]: !prev[storeId] }));
            triggerAlert('저장에 실패했습니다. 다시 시도해 주세요.');
        }
    };

    const handleDeleteBookmark = async (region: string, storeId: string) => {
        if (!user) return;

        try {
            const ref = doc(db, 'bookMarkerStore', user.sub);
            const snap = await getDoc(ref);

            if (!snap.exists()) return;

            const data = snap.data();
            const regionStores: IStoreItem[] = data.regions?.[region] ?? [];

            // 해당 아이템 제외하고 필터링
            const filtered = regionStores.filter((store) => store.storeId !== storeId);

            await updateDoc(ref, {
                // 해당 지역에 남은 가게가 없으면 필드 삭제, 있으면 업데이트
                [`regions.${region}`]: filtered.length === 0 ? deleteField() : filtered,
            });

            triggerAlert('삭제되었습니다.');
            return true; // 성공 시 true 반환
        } catch (error) {
            console.error('삭제 실패:', error);
            triggerAlert('삭제에 실패했습니다.');
            return false;
        }
    };
    return { star, handleClickStar, handleDeleteBookmark };
}
