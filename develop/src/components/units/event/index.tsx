import * as A from "./index.styles"
import SubPageMenuComponent from "../../common/subPageMenu";
import { FirstsubMenu } from "../../../common/stores/menuList";

export default function EventPageComponent(): JSX.Element {

    const rouletteGame = () => {

    }

    return (
        <>
            <div className="Container">
                <SubPageMenuComponent
                    subMenuTitle={FirstsubMenu}
                    index={1}
                    menuTitle={"경기지역화폐"}
                    src={"./images/bg_submenu03.png"}
                />

                <A.ContentWrap>
                    <A.GameContainer>
                        <A.MainText>롤렛 돌리고 포인트 받자!!</A.MainText>

                        <A.GameBox>
                            <A.GameContent>
                                <A.StartButton onClick={rouletteGame} />
                                <A.ArrowIco/>
                            </A.GameContent>
                        </A.GameBox>

                    </A.GameContainer>
                </A.ContentWrap>
            </div>
        </>
    )
}
