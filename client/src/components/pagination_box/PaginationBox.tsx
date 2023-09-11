import Pagination from 'react-js-pagination';
import { Styled_PaginationBox } from './PaginationBox.style';
import { useRecoilState } from 'recoil';
import { PageAtom } from '../../recoil/Sidebars';

const PaginationBox = () => {
  const [page, setPage] = useRecoilState(PageAtom);

  return (
    <Styled_PaginationBox.Div>
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={60}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={page => {
          setPage(page);
        }}
      />
    </Styled_PaginationBox.Div>
  );
};

export default PaginationBox;
