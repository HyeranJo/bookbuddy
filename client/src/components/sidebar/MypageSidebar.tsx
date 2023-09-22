import { Styled_MypageSidebar } from './MypageSidebar.style';
import { useSetRecoilState } from 'recoil';
import { NavScrollAtom } from '../../recoil/Sidebars';
import { useNavigate } from 'react-router-dom';

const MypageSidebar = () => {
  const setNavScroll = useSetRecoilState(NavScrollAtom);
  const navigate = useNavigate();

  const handleScrollView = (e: any) => {
    const menu = e.target.innerText;
    const category: { [key: string]: number } = {
      마이페이지: 0,
      '전체 주문 내역': 1,
      '1:1 문의 내역': 2,
      '북마크 리스트': 3,
    };
    navigate('/mypage');
    setNavScroll(category[menu]);
  };

  return (
    <Styled_MypageSidebar.Container>
      <Styled_MypageSidebar.Div>
        <Styled_MypageSidebar.TitleDiv>
          <span onClick={handleScrollView}>마이페이지</span>
        </Styled_MypageSidebar.TitleDiv>
        <Styled_MypageSidebar.CategoryDiv>
          <span onClick={handleScrollView}>전체 주문 내역</span>
          <span onClick={handleScrollView}>1:1 문의 내역</span>
          <span onClick={handleScrollView}>북마크 리스트</span>
        </Styled_MypageSidebar.CategoryDiv>
      </Styled_MypageSidebar.Div>
    </Styled_MypageSidebar.Container>
  );
};

export default MypageSidebar;
