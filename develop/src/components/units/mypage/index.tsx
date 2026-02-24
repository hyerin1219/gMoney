import * as A from './styles';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect, useState, useMemo } from 'react';
import { useBookmark } from '../../../hooks/useBookMark';
import { useRouter } from 'next/router';
import { Bookmark } from '../storeList/bookMark';
import { useRegistrationList } from '../../../hooks/useRegistrationList';

export default function MyPageComponent(): JSX.Element | null {
    const { user } = useAuth();
    const { regions } = useBookmark();
    const [activeRegion, setActiveRegion] = useState<string | null>(null);
    const router = useRouter();
    const { stores } = useRegistrationList();
    const { handleDeleteBookmark } = Bookmark();

    // regions가 없을 때를 대비해 빈 배열로  처리
    const regionList = useMemo(() => (regions ? Object.keys(regions) : []), [regions]);

    // 로그아웃 감지 시 메인으로 이동
    useEffect(() => {
        if (user === null) {
            router.replace('/');
        }
    }, [user, router]);

    // 첫 번째 지역 자동 선택
    useEffect(() => {
        if (!activeRegion && regionList.length > 0) {
            setActiveRegion(regionList[0]);
        }
    }, [regionList, activeRegion]);

    // 내가 작성한 신고 내역
    const myRegistrationList = stores.filter((store) => store.id?.sub === user?.sub);

    if (!user || !regions) return null;

    return (
        <section className="Wrap">
            <A.Content>
                <A.Title>
                    <strong>{user?.nickname}</strong>님의 페이지
                </A.Title>

                {/* 즐겨찾기 */}
                {regionList.length === 0 ? (
                    <A.NullStoreBox>즐겨찾기한 가게가 없습니다.</A.NullStoreBox>
                ) : (
                    <>
                        {/* 지역 버튼 선택 탭 */}
                        <A.SubTitle>즐겨찾기</A.SubTitle>
                        <A.RegionsButtonMark>
                            {regionList.map((region) => (
                                <A.RegionsButton key={region} active={activeRegion === region} onClick={() => setActiveRegion(region)}>
                                    {region}
                                </A.RegionsButton>
                            ))}
                        </A.RegionsButtonMark>

                        {activeRegion && regions[activeRegion] && (
                            <A.BookMark>
                                <ul>
                                    {regions[activeRegion].map((store) => (
                                        <A.BookMarkList key={store.storeId}>
                                            <A.Star src="/images/icon_star.png" alt="star" />
                                            {store.name} | {store.address}
                                            <A.DeletedButton
                                                onClick={() => {
                                                    handleDeleteBookmark(activeRegion, store.storeId);
                                                }}
                                            >
                                                삭제
                                            </A.DeletedButton>
                                        </A.BookMarkList>
                                    ))}
                                </ul>
                            </A.BookMark>
                        )}
                    </>
                )}

                {/* 차별거래 신고 */}
                <A.SubTitle>차별거래 신고 내역</A.SubTitle>

                <A.RegistrationListBox>
                    {myRegistrationList.length === 0 ? (
                        <p>신고 내역이 없습니다.</p>
                    ) : (
                        myRegistrationList.map((el) => (
                            <A.RegistrationList key={el.documentId}>
                                <p>{el.title}</p>
                                <p>{el.id.nickname.slice(0, 1) + '**'}</p>
                            </A.RegistrationList>
                        ))
                    )}
                </A.RegistrationListBox>
            </A.Content>
        </section>
    );
}
