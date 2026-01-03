import MyPageComponent from '../../src/components/units/mypage';
import { useLoginCheck } from '../../src/hooks/useLoginCheck';

export default function MyPage(): JSX.Element {
    useLoginCheck();

    return <MyPageComponent />;
}
