import * as A from "./LayoutFooter.styles"
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

export default function LayoutFooter():JSX.Element {
  const items: MenuProps['items'] = [
  
  {
    label: (
      <a href="https://www.gg.go.kr/" target="_blank" rel="noopener noreferrer">
        경기도청
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a href="https://ggwf.gg.go.kr/" target="_blank" rel="noopener noreferrer">
        경기복지재단
      </a>
    ),
    key: '1',
  },
  {
    label: (
      <a href="https://www.ggss.or.kr/" target="_blank" rel="noopener noreferrer">
        경기도지역사회서비스지원단
      </a>
    ),
    key: '1',
  },
];

  return (
    <>
      <A.FooterWrapper>
        <A.FooterContent>
          <A.FooterContentTopArea>
            <div>
              <div><b>개인정보처리방침</b></div>

              <div>경기도청 16508 경기도 수원시 영통구 도청로 30 / 북부청사 11780 의정부시 청사로 1</div>
              <div>지역화폐 홈페이지는 경기도시장상권진흥원을 통해 운영하고 있습니다.</div>
              <div>지역화폐앱,결제문의 : 1899-7997 | 홈페이지 관련문의 : 1600-8001</div>
              <div>코나카드 고객센터 : 1899-7997(주말, 공휴일 제외 09:00 - 18:00)</div>

              <div>© GYEONGGI PROVINCE. All Rights Reserved.</div>
            </div>

            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <A.SpaceBox>
                  관련기관 바로가기
                  <DownOutlined />
                </A.SpaceBox>
              </a>
            </Dropdown>

          </A.FooterContentTopArea>
          
        </A.FooterContent>
      </A.FooterWrapper>
    </>
  )
}