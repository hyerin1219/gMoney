import { useState } from 'react';
import { doc, getDoc, deleteDoc, setDoc, getFirestore } from 'firebase/firestore/lite';
import { firebaseApp } from '../common/libraries/firebase';

import { useAlert } from '../components/common/alert/AlertProvider';
import { useAuth } from './useAuth';

export function useBookmark() {
    const db = getFirestore(firebaseApp);
    const { user } = useAuth();
    const { triggerAlert } = useAlert();

    const [star, setStar] = useState<{ [key: string]: boolean }>({});

    const onClickStar = async (region: string, storeId: string): Promise<void> => {
        if (!user) {
            triggerAlert('로그인 후 이용해 주세요.');
            return;
        }
        const userSub = user.sub;
        try {
            const starRef = doc(db, 'bookMarkerStore', userSub, 'regions', region, 'stores', storeId);

            // 현재 즐겨찾기 상태 확인
            const starSnap = await getDoc(starRef);
            const isStarred = starSnap.exists();

            if (isStarred) {
                // 즐겨찾기 해제 (Firestore에서 삭제)
                await deleteDoc(starRef);
                setStar((prev) => ({ ...prev, [storeId]: false }));
            } else {
                // 즐겨찾기 추가
                await setDoc(starRef, { starred: true, region, storeId });
                setStar((prev) => ({ ...prev, [storeId]: true }));
            }
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return { star, onClickStar };
}
