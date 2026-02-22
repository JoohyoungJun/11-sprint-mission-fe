import Img_home_top from '../../assets/images/Img_home_top.png';
import Img_home_01 from '../../assets/images/Img_home_01.png';
import Img_home_02 from '../../assets/images/Img_home_02.png';
import Img_home_03 from '../../assets/images/Img_home_03.png';
import Img_home_bottom from '../../assets/images/Img_home_bottom.png';

import styles from './MainPage.module.css';
import { Link } from 'react-router-dom';

export function MainPage() {
  return (
    <>
      <div className={styles.mainTop}>
        <div className={styles.mainTopBox}>
          <div className={styles.mainTopBoxLeft}>
            <h2 className={styles.mainTopBoxLeftText}>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h2>
            <button className={styles.buttonItems}>
              <Link className={styles.linkItems} to="/items">
                구경하러 가기
              </Link>
            </button>
          </div>
          <div className={styles.mainTopBoxRight}>
            <img
              className={styles.imgHometop}
              src={Img_home_top}
              alt="img_top.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionBox}>
          <img className={styles.imgSec1} src={Img_home_01} alt="img01.png" />
          <div className={styles.textSecRight}>
            <p className={styles.textBlue}>Hot item</p>
            <h1 className={styles.secH1}>
              인기 상품을
              <br />
              확인해보세요
            </h1>
            <p className={styles.textBlack}>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionBox}>
          <div className={styles.textSecLeft}>
            <p className={styles.textBlue}>Search</p>
            <h1 className={styles.secH1}>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h1>
            <p className={styles.textBlack}>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
          <img className={styles.imgSec2} src={Img_home_02} alt="img02.png" />
        </div>
        <div className={styles.sectionBox}></div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionBox}>
          <img className={styles.imgSec3} src={Img_home_03} alt="img03.png" />
          <div className={styles.textSecRight}>
            <p className={styles.textBlue}>Register</p>
            <h1 className={styles.secH1}>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h1>
            <p className={styles.textBlack}>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mainBottom}>
        <div className={styles.mainBottomBox}>
          <h2 className={styles.mainBottomBoxLeftText}>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>
          <div className={styles.mainBottomBoxRight}>
            <img
              className={styles.imgHomeBottom}
              src={Img_home_bottom}
              alt="Img_home_bottom.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
