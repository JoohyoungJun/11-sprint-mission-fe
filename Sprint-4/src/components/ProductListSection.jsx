import { useState } from 'react';
import { ProductList } from './ProductList';
import { Pagination } from './Pagination';
import { useDebouncedCallback } from 'use-debounce';
import searchIcon from '../assets/icons/search.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

const DELAY = 500;

export function ProductListSection() {
  const [orderBy, setOrderBy] = useState('recent');
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleOrderBy = (orderBy) => {
    setOrderBy(orderBy);
    setIsOpen(false);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = useDebouncedCallback((e) => {
    const value = e.target.value;
    setKeyword(value);
  }, DELAY);

  const handlePage = () => {
    setCurrentPage();
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
          <a
            href="../pages/login.html"
            className="
              flex items-center justify-center
              h-[42px] px-4
              rounded-[12px]
              bg-[#3692ff]
              text-white font-semibold
              hover:bg-[#1967d6]
              whitespace-nowrap
            "
          >
            상품 등록하기
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={handleIsOpen}
              className="flex items-center justify-between
                          h-[42px] px-4
                          rounded-[12px] 
                          bg-[#F3F4F6]
                          text-[#111827]
                          min-w-[120px]"
            >
              {orderBy === 'recent' ? '최신순' : '좋아요순'}
              <span className="ml-2">
                <img src={arrowDown} />
              </span>
            </button>
            {isOpen && (
              <ul
                className="absolute right-0 mt-2
                             w-full rounded-[12px]
                             bg-white shadow-lg
                             border z-10"
              >
                <li>
                  <button type="button" onClick={() => handleOrderBy('recent')}>
                    최신순
                  </button>
                </li>
                <li>
                  <button
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

      <ProductList orderBy={orderBy} keyword={keyword} />
      <Pagination
        totalCount={ProductListSection.totalCount}
        pageSize={10}
        currentPage={currentPage}
        handlePageChange={handlePage}
      />
    </section>
  );
}
