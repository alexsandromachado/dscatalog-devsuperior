import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import './styles.css';

const Pagination = () => {
  return (
    <div className="pagination-container">
      <ArrowIcon className="arrow-previous arrow-inactive"/>
      <div className="pagination-itens active">1</div>
      <div className="pagination-itens">2</div>
      <div className="pagination-itens">3</div>
      <div className="pagination-itens">...</div>
      <div className="pagination-itens">10</div>
      <ArrowIcon className="arrow-next arrow-active"/>
    </div>
  );
};

export default Pagination;