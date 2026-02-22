import facebookLogo from '../../assets/icons/facebook.svg';
import twitterLogo from '../../assets/icons/twitter.svg';
import youtubeLogo from '../../assets/icons/youtube.svg';
import instagramLogo from '../../assets/icons/instagram.svg';

export function Footer() {
  return (
    <footer
      className="w-full bg-[#111827] px-[200px] py-8
                       max-[1199px]:px-6
                       max-[743px]:px-4"
    >
      <div className="flex items-center justify-between w-full">
        <p className="text-[#9ca3af] text-base font-normal">©codeit - 2024</p>

        <div className="flex gap-[30px]">
          <a
            href="./privacy.html"
            className="text-[#e5e7eb] text-base font-normal hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="./faq.html"
            className="text-[#e5e7eb] text-base font-normal hover:underline"
          >
            FAQ
          </a>
        </div>

        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/codeit.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} alt="facebook" className="w-5 h-5" />
          </a>

          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="twitter" className="w-5 h-5" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeLogo} alt="youtube" className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/codeit_kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="instagram" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
