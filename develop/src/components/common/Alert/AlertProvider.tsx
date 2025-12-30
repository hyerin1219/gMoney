import { createContext, useCallback, useContext, useRef, useState } from 'react';
import Alert from '.';

type AlertContextType = {
    triggerAlert: (message: string) => void;
};

const AlertContext = createContext<AlertContextType | null>(null);

export function AlertProvider({ children }: { children: React.ReactNode }) {
    const [showAlert, setShowAlert] = useState(false);
    const [alertValue, setAlertValue] = useState('');
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const triggerAlert = useCallback((message: string) => {
        setAlertValue(message);
        setShowAlert(true);

        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }, []);

    return (
        <AlertContext.Provider value={{ triggerAlert }}>
            {children}
            {showAlert && <Alert alertValue={alertValue} />}
        </AlertContext.Provider>
    );
}

export function useAlert() {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used within AlertProvider');
    }
    return context;
}
