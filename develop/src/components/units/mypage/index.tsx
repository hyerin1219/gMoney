import { useAuth } from '../../../hooks/useAuth';

export default function MyPageComponent(): JSX.Element {
    const { user } = useAuth();

    return (
        <>
            <div>나의 즐겨찾기</div>
        </>
    );
}
