import logo from '../../assets/logo-with-text.svg'; // '../assets/logo.png'
import { ItemsPage } from '../ItemsPage/ItemsPage';

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white border-b border-[#dfdfdf]">
        <nav
          className="h-[70px]
          flex items-center justify-between
          px-[200px]
          max-[1199px]:px-6
          max-[743px]:px-4"
        >
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-end gap-2">
              <img src={logo} alt="panda-logo" className="h-[40px]" />
            </a>
            <a
              href="/"
              className="ml-6 text-gray-700 font-medium hover:text-black"
            >
              자유게시판
            </a>
            <a
              href="/items"
              className="ml-4 text-gray-700 font-medium hover:text-black"
            >
              중고마켓
            </a>
          </div>
          <a
            href="/login"
            className="
              flex items-center justify-center
              w-[128px] h-[48px]
              rounded-lg
              bg-[#3692ff]
              text-white font-semibold
              hover:bg-[#1967d6]
            "
          >
            로그인
          </a>
        </nav>
      </header>
    </>
  );
}
