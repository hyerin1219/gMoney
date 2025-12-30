import RegistrationComponent from '../../src/components/units/registration';
import { useLoginCheck } from '../../src/hooks/useLoginCheck';

export default function RegistrationPage(): JSX.Element | null {
    useLoginCheck();

    return <RegistrationComponent />;
}
