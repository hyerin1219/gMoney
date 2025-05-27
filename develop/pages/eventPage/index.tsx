import { useLoginCheck } from "../../src/components/common/componentWrap/hocs";
import EventPageComponent from "../../src/components/units/event";


export default function MyPage(): JSX.Element {
    useLoginCheck();

    return <EventPageComponent />
}
