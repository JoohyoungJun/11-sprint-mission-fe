import './Pagination.css';
import arrowLeft from '../../assets/icons/arrow_left.svg';
import arrowRight from '../../assets/icons/arrow_right.svg';

export function Pagination({ totalPageNum, activePageNum, handlePageChange }) {
  const maxVisiblePages = 5;
  let startPage;

  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else { // totalPageNum > 5
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div className="paginationBar">
      <button
        className="paginationButton"
        disabled={activePageNum === 1}
        onClick={() => handlePageChange(activePageNum - 1)}
      >
        <img src={arrowLeft} alt="left_arrow.png" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`paginationButton ${
            activePageNum === page ? 'active' : ''
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="paginationButton"
        disabled={activePageNum === totalPageNum}
        onClick={() => handlePageChange(activePageNum + 1)}
      >
        <img src={arrowRight} alt="right_arrow.png" />
      </button>
    </div>
  );
}
