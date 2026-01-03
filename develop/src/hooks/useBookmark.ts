import { useState } from 'react';
import { doc, getDoc, deleteDoc, setDoc, getFirestore } from 'firebase/firestore/lite';
import { firebaseApp } from '../common/libraries/firebase';
import { useAuth } from './useAuth';

export function useBookmark() {
    // Firestore 인스턴스
    const db = getFirestore(firebaseApp);
    const { user } = useAuth();
    // 즐겨찾기 상태 관리
    const [star, setStar] = useState<{ [key: string]: boolean }>({});

    const onClickStar = async (storeId: string): Promise<void> => {
        if (!user) return;

        try {
            const starRef = doc(db, 'bookMarkerStore', user, 'stores', storeId);

            // 현재 즐겨찾기 상태 확인
            const starSnap = await getDoc(starRef);
            const isStarred = starSnap.exists();

            if (isStarred) {
                // 즐겨찾기 해제 (Firestore에서 삭제)
                await deleteDoc(starRef);
                setStar((prev) => ({ ...prev, [storeId]: false }));
            } else {
                // 즐겨찾기 추가
                await setDoc(starRef, { starred: true });
                setStar((prev) => ({ ...prev, [storeId]: true }));
            }
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return { star, onClickStar };
}
