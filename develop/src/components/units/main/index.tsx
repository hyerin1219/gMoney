import Link from 'next/link';
import * as A from './styles';
import Region from './region';

export default function Main() {
    console.log('Main 컴포넌트 렌더링!');
    const HowToUse = [
        { id: 'gas', label: '주유소', img: 'gaspump' },
        { id: 'market', label: '전통시장, 골목상권', img: 'basket' },
        { id: 'leisure', label: '레저업소', img: 'dumbbell' },
        { id: 'hospital', label: '병·의원', img: 'hospital' },
        { id: 'store', label: '편의점', img: 'basket' },
        { id: 'academy', label: '학원', img: 'pencil' },
        { id: 'hygiene', label: '보건위생', img: 'barberpole' },
        { id: 'medical', label: '기타의료기관', img: 'veterinarian' },
    ];

    return (
        <section className="Wrap">
            <A.Contents>
                {/* 경기지역화폐 */}
                <A.Content>
                    <A.TitleBox>
                        <div>
                            <A.TitleSubTit>쓰면 쓸수록, 경기돕니다.</A.TitleSubTit>
                            <A.Title>경기지역화폐</A.Title>
                            <A.TitleSubTxt>경기지역화폐는 지역경제 활성화를 위해 31개 시,군에서 발행하고 사용하는 대안화폐 입니다.</A.TitleSubTxt>
                        </div>
                        <A.TitleImg src="/images/img_01.png" alt="카드 이미지 " />
                    </A.TitleBox>
                </A.Content>

                {/* 지역별 지역화폐 */}
                <A.Content>
                    <A.SubTitle>지역별 현황</A.SubTitle>
                    <Region />
                </A.Content>

                {/* 메뉴 */}
                <A.Content>
                    <A.MenuListBox>
                        <A.Contact>
                            <A.MenuTitle>
                                <A.MenuImg src="/images/icon_phone.png"></A.MenuImg> 문의전화 안내
                            </A.MenuTitle>
                            <A.MenuSubTitle>운영대행사(코나아이) 1899-7997 </A.MenuSubTitle>
                            <A.MenuSubTitle>카드발급, 결제오류, 결제 단말기 추가등</A.MenuSubTitle>
                        </A.Contact>

                        <A.MenuSubBox>
                            <A.Search>
                                <Link href="/storeSearchPage">
                                    <A.MenuTitle>
                                        <A.MenuImg src="/images/icon_search.png"></A.MenuImg> 가맹점 찾기
                                    </A.MenuTitle>
                                </Link>
                            </A.Search>
                            <A.Report>
                                <Link href="/registrationPage">
                                    <A.MenuTitle>
                                        <A.MenuImg src="/images/icon_megaphone.png"></A.MenuImg> 차별거래 신고
                                    </A.MenuTitle>
                                </Link>
                            </A.Report>
                        </A.MenuSubBox>
                    </A.MenuListBox>
                </A.Content>

                {/* 사용처 */}
                <A.Content>
                    <A.Category>
                        <A.SubTitle>지역화폐 이용 가능 사용처</A.SubTitle>

                        <A.CategoryBox>
                            <A.CategoryContainer>
                                {HowToUse.map((el) => (
                                    <A.CategoryCard key={el.id}>
                                        <A.CategoryIconBox>
                                            <A.CategoryIcon alt={el.label} src={`/images/howtouse/icon_${el.img}.png`} />
                                        </A.CategoryIconBox>
                                        <A.CategoryLabel>{el.label}</A.CategoryLabel>
                                    </A.CategoryCard>
                                ))}

                                {HowToUse.map((el) => (
                                    <A.CategoryCard key={`${el.id}-clone`}>
                                        <A.CategoryIconBox>
                                            <A.CategoryIcon alt={el.label} src={`/images/howtouse/icon_${el.img}.png`} />
                                        </A.CategoryIconBox>
                                        <A.CategoryLabel>{el.label}</A.CategoryLabel>
                                    </A.CategoryCard>
                                ))}
                            </A.CategoryContainer>
                        </A.CategoryBox>
                    </A.Category>
                </A.Content>
            </A.Contents>
        </section>
    );
}
