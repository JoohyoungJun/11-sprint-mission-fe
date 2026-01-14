import { useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import { Pagination } from '../Pagination/Pagination';
import { useDebouncedCallback } from 'use-debounce';
import searchIcon from '../../assets/icons/search.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';
import { Link } from 'react-router-dom';

const DELAY = 500;

export function ProductListSection() {
  const [orderBy, setOrderBy] = useState('recent');
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);

  const [itemList, setItemList] = useState([]);
  const [totalPageNum, setTotalPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize()); // 초기값

  function getPageSize() {
    const width = window.innerWidth;
    if (width < 768) return 4;
    else if (width < 1280) return 6;
    else return 10;
  }

  const fetchSortedData = async ({ orderBy, page, pageSize, keyword }) => {
    const params = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
      orderBy,
      keyword,
    });

    const res = await fetch(
      `https://panda-market-api.vercel.app/products?${params.toString()}`
    );
    const products = await res.json();

    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

  useEffect(() => {
    const handleResize = () => {
      const newSize = getPageSize();
      setPageSize(newSize);
      setPage(1);
    };

    window.addEventListener('resize', handleResize);
    fetchSortedData({ orderBy, page, pageSize, keyword });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [orderBy, page, pageSize, keyword]);

  const handleOrderBy = (nextOrderBy) => {
    setOrderBy(nextOrderBy);
    setIsOpen(false);
    setPage(1);
  };

  const handleIsOpen = () => setIsOpen(!isOpen);

  const handleSearch = useDebouncedCallback((e) => {
    setKeyword(e.target.value);
    setPage(1);
  }, DELAY);

  const handlePageChange = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <section className="mt-10">
      <div className="flex justify-between">
        <h2 className="text-[#111827] font-bold text-[20px] leading-8">
          판매 중인 상품
        </h2>

        <div className="flex gap-3 items-center">
          <div className="relative">
            <img
              src={searchIcon}
              alt=""
              className="absolute top-1/2 -translate-y-1/2 left-4"
            />
            <input
              name="search"
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              className="w-[325px] h-[42px] rounded-[12px]
                bg-[#F3F4F6] py-[9px] pr-[20px] pl-[44px]
                text-[#111827] placeholder:text-[#9CA3AF]
                outline-none"
              onChange={handleSearch}
            />
          </div>

          <Link
            to="/registration"
            className="flex items-center justify-center h-[42px] px-4 rounded-[12px]
              bg-[#3692ff] text-white font-semibold hover:bg-[#1967d6] whitespace-nowrap"
          >
            상품 등록하기
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={handleIsOpen}
              className="flex items-center justify-between h-[42px] !px-4 rounded-[12px]
                bg-[#F3F4F6] text-[#111827] min-w-[120px] "
            >
              {orderBy === 'recent' ? '최신순' : '좋아요순'}
              <span className="ml-2">
                <img src={arrowDown} alt="" />
              </span>
            </button>

            {isOpen && (
              <ul className="absolute right-0 mt-2 w-full rounded-[12px] bg-white shadow-lg border z-10">
                <li>
                  <button
                    className="!px-4"
                    type="button"
                    onClick={() => handleOrderBy('recent')}
                  >
                    최신순
                  </button>
                </li>
                <li>
                  <button
                    className="!px-4"
                    type="button"
                    onClick={() => handleOrderBy('favorite')}
                  >
                    좋아요순
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <ProductList products={itemList} />

      <div className="paginationWrapper">
        <Pagination
          totalPageNum={totalPageNum}
          activePageNum={page}
          handlePageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
