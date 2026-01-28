import * as A from './styles';

export default function LayoutFooter(): JSX.Element {
    return (
        <A.FooterWrapper>
            <A.FooterContent>
                <A.FooterText>경기 지역화폐 가맹점 안내 서비스 경기도 지역경제 활성화를 위한 공공데이터 기반 정보 제공 플랫폼입니다. </A.FooterText>
                <A.FooterText> 데이터 출처: 경기도 Open API </A.FooterText>
                <A.FooterText>
                    이미지 출처:{' '}
                    <a target="_blank" href="https://icons8.com/illustrations/illustration/65eeac57df8ce30001ecc22a">
                        App
                    </a>{' '}
                    icon by{' '}
                    <a target="_blank" href="https://icons8.com">
                        Icons8
                    </a>{' '}
                    <p>지자체 로고, 지역화폐 이미지 : 경기도 및 각 시·군(수원시, 용인시 등 31개 지자체) 공식 홈페이지</p>
                </A.FooterText>
                <A.FooterText>본 서비스는 경기도 공식 서비스가 아닙니다. </A.FooterText>
                <A.FooterText>© 2025 경기 지역화폐 안내 서비스</A.FooterText>
            </A.FooterContent>
        </A.FooterWrapper>
    );
}
