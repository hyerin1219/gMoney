import { useState } from 'react';
import { doc, getDoc, deleteDoc, setDoc, getFirestore } from 'firebase/firestore/lite';
import { firebaseApp } from '../common/libraries/firebase';

export function useBookmark() {
    // Firestore 인스턴스
    const db = getFirestore(firebaseApp);

    // 즐겨찾기 상태 관리
    const [star, setStar] = useState<{ [key: string]: boolean }>({});

    const onClickStar = async (storeId: string): Promise<void> => {
        // 로그인 안했으면 리턴하기
        const token = localStorage.getItem('kakao_e203d9a5eda596228bf93e7983cf46a3');
        if (!token) {
            window.alert('로그인 후 이용해 주세요');
            return;
        }

        // 현재 로그인한 사용자 ID
        const userId = token;

        try {
            const starRef = doc(db, 'bookMarkerStore', userId, 'stores', storeId);

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
