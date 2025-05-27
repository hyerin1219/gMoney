import * as A from "./index.styles"
import SubPageMenuComponent from "../../common/subPageMenu";
import { FirstsubMenu } from "../../../common/stores/menuList";
import { GameData } from "./event.data";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function EventPageComponent(): JSX.Element {

    const router = useRouter()

    const [angle, setAngle] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{ rouletteItem: string } | null>(null);

    // 룰렛 아이템
    const rouletteItem = GameData;
    const spins = 5;

    const audioRef = useRef(null);

    // 룰렛 게임 함수
    const rouletteGame = () => {
        if (isSpinning) return;

        const randomIndex = Math.floor(Math.random() * rouletteItem.length);
        const selected = rouletteItem[randomIndex];
    
        const degreesPerItem = 360 / rouletteItem.length;
        const newAngle = 360 * spins + (360 - randomIndex * degreesPerItem);
    
        setIsSpinning(true);
        setAngle(prev => prev + newAngle);

        if (audioRef.current) {
            (audioRef.current as HTMLAudioElement).loop = true;
            (audioRef.current as HTMLAudioElement).play();
        }
    
        setTimeout(() => {
            setSelectedItem(selected);
            setIsSpinning(false);

            if (audioRef.current) {
                (audioRef.current as HTMLAudioElement).loop = false;
                
            }
        }, 3500);
    }

    // 게임 리셋
    const onClickReset = () => {
        setSelectedItem(null);
        setAngle(0);

        router.push("./")
    }

    return (
        <>
            {/* modal */}
            {!isSpinning && selectedItem && (
                    <A.ResultText>
                        <A.ModalHeader>
                            <A.NodalHeaderBall></A.NodalHeaderBall>
                            <A.NodalHeaderBall></A.NodalHeaderBall>
                            <A.NodalHeaderBall></A.NodalHeaderBall>
                        </A.ModalHeader>
                        <div>
                            {
                                selectedItem.rouletteItem == "꽝" ?

                                <div>
                                    <p>아쉬워요!</p>
                                    <p>꽝이예요!</p>
                                </div>

                                :

                                <div>
                                    <p><strong>{selectedItem.rouletteItem}</strong></p>
                                    당첨되었습니다!!
                                </div>
                            }
                            
                        </div>

                        <A.CloseButton onClick={onClickReset}>확인</A.CloseButton>
                    </A.ResultText>
            )}

            <div className="Container">
                <SubPageMenuComponent
                    subMenuTitle={FirstsubMenu}
                    index={1}
                    menuTitle={"경기지역화폐"}
                    src={"./images/bg_submenu03.png"}
                />

                <A.ContentWrap
                    style={{
                        pointerEvents: !isSpinning && selectedItem ? "none" : "auto"
                    }}
                >
                    <A.GameContainer>
                        <A.MainText>롤렛 돌리고 포인트 받자!!</A.MainText>

                        <A.GameBox>
                            <audio ref={audioRef} src="media/default_effect.mp3"/>
                            <A.GameContent
                                style={{
                                    transform: `rotate(${angle}deg)`,
                                    transition: isSpinning ? 'transform 3s ease-out' : 'none'
                                }}
                            >
                            </A.GameContent>

                            <A.StartButton onClick={rouletteGame} />
                            <A.ArrowIco
                                isSpinning={isSpinning}
                            />
                        </A.GameBox>

                    </A.GameContainer>
                </A.ContentWrap>
            </div>
        </>
    )
}
