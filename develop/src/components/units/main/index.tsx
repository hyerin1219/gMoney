import { useRouter } from 'next/router';
import * as A from './styles';
import Region from './region';
import SkipMenu from '../../common/layout/skipMenu';

export default function Main() {
    const router = useRouter();

    const HowToUse = [
        { id: 'gas', title: '주유소', img: 'gaspump' },
        { id: 'market', title: '전통시장, 골목상권', img: 'basket' },
        { id: 'leisure', title: '레저업소', img: 'dumbbell' },
        { id: 'hospital', title: '병·의원', img: 'hospital' },
        { id: 'store', title: '편의점', img: 'basket' },
        { id: 'academy', title: '학원', img: 'pencil' },
        { id: 'hygiene', title: '보건위생', img: 'barberpole' },
        { id: 'medical', title: '기타의료기관', img: 'veterinarian' },
    ];

    const onClickMenu = (link: string): void => {
        void router.push(`/${link}`);
    };

    return (
        <section className="Wrap">
            <A.Content>
                {/* 경기지역화폐 */}
                <A.TitleBox>
                    <div>
                        <A.TitleSubTit>쓰면 쓸수록, 경기돕니다.</A.TitleSubTit>
                        <A.Title>경기지역화폐</A.Title>
                        <A.TitleSubTxt>경기지역화폐는 지역경제 활성화를 위해 31개 시,군에서 발행하고 사용하는 대안화폐 입니다.</A.TitleSubTxt>
                    </div>
                    <A.TitleImg src="/images/img_01.png" alt="카드 이미지 " />
                </A.TitleBox>

                {/* 지역별 지역화폐 */}
                <div>
                    <A.SubTitle>지역별 지역화폐</A.SubTitle>
                    <Region />
                </div>

                {/* 메뉴 */}
                <A.MenuListBox>
                    <A.Contact>
                        <A.MenuTitle>
                            <A.MenuImg src="/images/icon_phone.png"></A.MenuImg> 문의전화 안내
                        </A.MenuTitle>
                        <A.MenuSubTitle>운영대행사(코나아이) 1899-7997 </A.MenuSubTitle>
                        <A.MenuSubTitle>카드발급, 결제오류, 결제 단말기 추가등</A.MenuSubTitle>
                    </A.Contact>

                    <A.MenuSubBox>
                        <A.Search onClick={() => onClickMenu('storeSearchPage')}>
                            <A.MenuTitle>
                                <A.MenuImg src="/images/icon_search.png"></A.MenuImg> 가맹점 찾기
                            </A.MenuTitle>
                        </A.Search>
                        <A.Report onClick={() => onClickMenu('registrationPage')}>
                            <A.MenuTitle>
                                <A.MenuImg src="/images/icon_megaphone.png"></A.MenuImg> 차별거래 신고
                            </A.MenuTitle>
                        </A.Report>
                    </A.MenuSubBox>
                </A.MenuListBox>

                {/* 사용처 */}
                <A.Category>
                    <A.SubTitle>지역화폐 이용 가능 사용처</A.SubTitle>

                    <A.CategoryBox>
                        <A.CategoryContainer>
                            {HowToUse.map((el) => (
                                <A.CategoryCard key={el.id}>
                                    <A.CategoryIconBox>
                                        <A.CategoryIcon alt={el.title} src={`/images/howtouse/icon_${el.img}.png`} />
                                    </A.CategoryIconBox>
                                    <A.CategoryLabel>{el.title}</A.CategoryLabel>
                                </A.CategoryCard>
                            ))}

                            {HowToUse.map((el) => (
                                <A.CategoryCard key={`${el.id}-clone`}>
                                    <A.CategoryIconBox>
                                        <A.CategoryIcon alt={el.title} src={`/images/howtouse/icon_${el.img}.png`} />
                                    </A.CategoryIconBox>
                                    <A.CategoryLabel>{el.title}</A.CategoryLabel>
                                </A.CategoryCard>
                            ))}
                        </A.CategoryContainer>
                    </A.CategoryBox>
                </A.Category>
            </A.Content>
        </section>
    );
}
