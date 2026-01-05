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

        const ref = doc(db, 'bookMarkerStore', user.sub);
        const snap = await getDoc(ref);

        const newItem: IStoreItem = { storeId, name, address };

        // ⭐ 최초 생성
        if (!snap.exists()) {
            await setDoc(ref, {
                regions: {
                    [region]: [newItem],
                },
            });

            setStar((prev) => ({ ...prev, [storeId]: true }));
            return;
        }

        const data = snap.data();
        const regionStores: IStoreItem[] = data.regions?.[region] ?? [];

        const isStarred = regionStores.some((store) => store.storeId === storeId);

        // 제거 (마지막이면 region 삭제)
        if (isStarred) {
            const filtered = regionStores.filter((store) => store.storeId !== storeId);

            await updateDoc(ref, {
                ...(filtered.length === 0 ? { [`regions.${region}`]: deleteField() } : { [`regions.${region}`]: filtered }),
            });

            setStar((prev) => ({ ...prev, [storeId]: false }));
        } else {
            // 추가
            await updateDoc(ref, {
                [`regions.${region}`]: [...regionStores, newItem],
            });

            setStar((prev) => ({ ...prev, [storeId]: true }));
        }
    };

    return { star, onClickStar };
}
