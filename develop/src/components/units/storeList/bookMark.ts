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

    const onClickStar = async (region: string, storeId: string, name: string, address: string) => {
        if (!user) {
            triggerAlert('로그인 후 이용해 주세요.');
            return;
        }

        // 1. [낙관적 업데이트] 서버 통신 전에 UI 상태부터 즉시 바꿉니다.
        // 현재 상태를 반전시켜서 미리 보여줌 (체감 속도 0ms)
        setStar((prev) => ({ ...prev, [storeId]: !prev[storeId] }));

        try {
            const ref = doc(db, 'bookMarkerStore', user.sub);
            const snap = await getDoc(ref);
            const newItem: IStoreItem = { storeId, name, address };

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
            // 2. 에러 발생 시 UI를 다시 원래대로 되돌립니다 (Rollback)
            setStar((prev) => ({ ...prev, [storeId]: !prev[storeId] }));
            triggerAlert('저장에 실패했습니다. 다시 시도해 주세요.');
        }
    };

    return { star, onClickStar };
}
