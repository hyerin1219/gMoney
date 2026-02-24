import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore/lite';
import { firebaseApp } from '../common/libraries/firebase';

export const useRegistrationList = () => {
    const [stores, setStores] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태

    const fetchStores = async () => {
        try {
            setIsLoading(true);
            const db = getFirestore(firebaseApp);

            const storeCollection = collection(db, 'registrationStore');
            const querySnapshot = await getDocs(storeCollection);

            const storeList = querySnapshot.docs.map((doc) => ({
                documentId: doc.id,
                ...doc.data(),
            }));

            setStores(storeList);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        void fetchStores();
    }, []);

    return { stores, isLoading, refetch: fetchStores };
};
