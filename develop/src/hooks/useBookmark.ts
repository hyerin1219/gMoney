import { useEffect, useState } from 'react';
import { IStoreItem } from '../common/stores/types';
import { useAuth } from './useAuth';
import { doc, getDoc, getFirestore } from 'firebase/firestore/lite';
import { firebaseApp } from '../common/libraries/firebase';

type RegionsMap = Record<string, IStoreItem[]>;

export function useBookmark() {
    const { user } = useAuth();
    const db = getFirestore(firebaseApp);

    const [regions, setRegions] = useState<RegionsMap>({});

    useEffect(() => {
        if (!user) {
            setRegions({});
            return;
        }

        const fetchBookmarks = async () => {
            const ref = doc(db, 'bookMarkerStore', user.sub);
            const snap = await getDoc(ref);

            if (!snap.exists()) {
                setRegions({});
                return;
            }

            setRegions(snap.data().regions ?? {});
        };

        fetchBookmarks();
    }, [user, db]);

    return { regions };
}
