import Link from 'next/link';
import * as A from './styles';
import Region from './region';
import { HowToUse } from '../../../common/libraries';
import { useEffect, useRef } from 'react';

export default function Main() {
    const scrollRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 화면에 들어오면
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show'); // show 클래스 추가
                    }
                });
            },
            { threshold: 0.2 } // 요소가 20% 보일 때 실행
        );

        scrollRefs.current.forEach((el) => {
            if (el) observer.observe(el); // 저장된 모든 요소를 감시 대상으로 등록
        });

        return () => observer.disconnect(); // 컴포넌트가 사라질 때 감시 중단
    }, []);

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !scrollRefs.current.includes(el)) {
            scrollRefs.current.push(el);
        }
    };

    return (
        <section className="Wrap">
            <A.Contents>
                {/* 메인 섹션 */}
                <A.ScrollSection ref={addToRefs}>
                    <A.Content>
                        <A.TitleBox>
                            <div>
                                <A.TitleSubTit>쓰면 쓸수록, 경기돕니다.</A.TitleSubTit>
                                <A.Title>경기지역화폐</A.Title>
                                <A.TitleSubTxt>경기지역화폐는 지역경제 활성화를 위해 31개 시,군에서 발행하고 사용하는 대안화폐 입니다.</A.TitleSubTxt>
                            </div>
                            <A.TitleImg src="/images/img_01.png" alt="카드 이미지" />
                        </A.TitleBox>
                    </A.Content>
                </A.ScrollSection>

                {/* 지역별 현황 */}
                <A.ScrollSection ref={addToRefs}>
                    <A.Content>
                        <A.SubTitle>지역별 현황</A.SubTitle>
                        <Region />
                    </A.Content>
                </A.ScrollSection>

                <A.ScrollSection ref={addToRefs}>
                    <A.Content>
                        <A.MenuListBox>
                            <A.Contact>
                                <A.MenuTitle>
                                    <A.MenuImg src="/images/icon_phone.png" /> 문의전화 안내
                                </A.MenuTitle>
                                <A.MenuSubTitle>운영대행사(코나아이) 1899-7997</A.MenuSubTitle>
                                <A.MenuSubTitle>카드발급, 결제오류 등</A.MenuSubTitle>
                            </A.Contact>

                            <A.MenuSubBox>
                                <Link href="/storeSearchPage">
                                    <A.Search>
                                        <A.MenuTitle>
                                            <A.MenuImg src="/images/icon_search.png" /> 가맹점 찾기
                                        </A.MenuTitle>
                                    </A.Search>
                                </Link>
                                <Link href="/registrationPage">
                                    <A.Report>
                                        <A.MenuTitle>
                                            <A.MenuImg src="/images/icon_megaphone.png" /> 차별거래 신고
                                        </A.MenuTitle>
                                    </A.Report>
                                </Link>
                            </A.MenuSubBox>
                        </A.MenuListBox>
                    </A.Content>
                </A.ScrollSection>

                {/* 사용처 슬라이더 */}
                <A.ScrollSection ref={addToRefs}>
                    <A.Content>
                        <A.Category>
                            <A.SubTitle>지역화폐 이용 가능 사용처</A.SubTitle>
                            <A.CategoryBox>
                                <A.CategoryContainer>
                                    {[...HowToUse, ...HowToUse].map((el, i) => (
                                        <A.CategoryCard key={`${el.id}-${i}`}>
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
                </A.ScrollSection>
            </A.Contents>
        </section>
    );
}
