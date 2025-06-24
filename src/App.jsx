import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faTag, 
  faFileAlt, 
  faUserFriends, 
  faPhoneAlt,
  faStore,
  faLeaf,
  faArrowRight,
  faShoppingCart,
  faTruck,
  faSeedling,
  faMapMarkerAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
 

      {/* Hung Vuong Food Market Content */}
      {/* Header */}
      <header className="header-container">
        <div className="logo-container">
          <img
            src="https://www.hungvuongs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.1b0126b9.jpg&w=256&q=75"
            alt="Hung Vuong Food Market logo with green and yellow H and Chinese text 恒发超市"
            className="logo-img"
            width="60"
            height="40"
          />
        </div>
        <nav className="nav-menu">
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
            <div>主页</div>
            <div className="nav-subtext">Home</div>
          </a>
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon={faTag} className="nav-icon" />
            <div>每周特惠</div>
            <div className="nav-subtext">Weekly Ad</div>
          </a>
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
            <div>商铺租赁</div>
            <div className="nav-subtext">Leasing</div>
          </a>
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon={faUserFriends} className="nav-icon" />
            <div>加入我们</div>
            <div className="nav-subtext">Career</div>
          </a>
          <a href="#" className="nav-link">
            <FontAwesomeIcon icon={faPhoneAlt} className="nav-icon" />
            <div>联系我们</div>
            <div className="nav-subtext">Contact</div>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://www.hungvuongs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBerwyn.0f7a7ad1.jpg&w=3840&q=100"
          alt="Supermarket building exterior with Hung Vuong Food Market sign in gold letters on white wall, cloudy sky"
          className="hero-image"
          width="1200"
          height="700"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              <FontAwesomeIcon icon={faStore} style={{ color: '#4ade80', fontSize: '1.875rem' }} />
              <span>恒发超市</span>
            </h1>
            <h2 className="hero-subtitle">
              <FontAwesomeIcon icon={faLeaf} style={{ marginRight: '0.5rem' }} />
              Hung Vuong Food Market
            </h2>
            <div className="hero-buttons">
              <button type="button" className="hero-button">
                新鲜优质
              </button>
              <button type="button" className="hero-button">
                天天低价
              </button>
              <button type="button" className="hero-button hero-button-red">
                <span>每周特惠</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="hero-description">
              <p>
                恒发超市成立于2004年，用心经营19年，致力于打造最懂亚洲商品的超市。十几年来一直坚持品质第一、服务第一、顾客第一的经营宗旨，天天新鲜、日日低价的服务理念。
              </p>
              <p>
                超市以经营生鲜农产品（包括蔬菜、水果、肉类、水产、家禽、干货等）、食品和加工食品为主，同时经营进口食品和其他各种品牌的日用品百货。
              </p>
            </div>
          </div>
          <div className="hero-cta-buttons">
            <button type="button" className="cta-button cta-button-yellow">
              <FontAwesomeIcon icon={faUserFriends} style={{ fontSize: '0.875rem' }} />
              <span>招聘中</span>
            </button>
            <button type="button" className="cta-button cta-button-blue">
              <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '0.875rem' }} />
              <span>商铺租赁</span>
            </button>
          </div>
        </div>
      </section>

      {/* Store Locations Section */}
      <section className="locations-section">
        <div className="locations-container">
          <header className="locations-header">
            <div className="locations-title">
              <FontAwesomeIcon icon={faStore} style={{ fontSize: '1.5rem' }} />
              <h1>恒发超市全美分店</h1>
            </div>
            <div className="locations-subtitle">
              <span>Hung Vuong Markets in USA</span>
              <FontAwesomeIcon icon={faShoppingCart} />
              <FontAwesomeIcon icon={faTruck} />
              <FontAwesomeIcon icon={faSeedling} />
            </div>
          </header>
          <main className="locations-grid" role="list" aria-label="Store locations">
            {/* Card 1 */}
            <article className="location-card" role="listitem">
              <div className="location-image-container">
                <img
                  src="https://www.hungvuongs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBerwyn.0f7a7ad1.jpg&w=3840&q=90"
                  alt="Photo of Hung Vuong Markets Berwyn store building with cloudy sky"
                  className="location-image"
                  width="600"
                  height="300"
                />
                <span className="location-badge">New Store: Space Available 美食广场二楼招商中</span>
              </div>
              <h2 className="location-name">
                <FontAwesomeIcon icon={faShoppingCart} />
                BERWYN
                <span className="location-name-normal">(KING OF PRUSSIA 附近)</span>
              </h2>
              <ul className="location-details">
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="location-detail-icon" />
                  254 Swedesford Rd Berwyn, PA 19312
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faPhoneAlt} className="location-detail-icon" />
                  484-320-8433
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faClock} className="location-detail-icon" />
                  8:30am–8:30pm
                </li>
              </ul>
              <a href="#" className="location-link">
                <span>查看详情 <FontAwesomeIcon icon={faArrowRight} /></span>
                <span className="location-link-subtext">View Details</span>
              </a>
            </article>

            {/* Card 2 */}
            <article className="location-card" role="listitem">
              <div className="location-image-container">
                <img
                  src="https://www.hungvuongs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDelaware.80479922.jpg&w=3840&q=90"
                  alt="Photo of Hung Vuong Food Market Delaware store building with blue sky"
                  className="location-image"
                  width="600"
                  height="300"
                />
                <span className="location-badge location-badge-yellow">New Store: Hiring 诚招兼职多职位</span>
              </div>
              <h2 className="location-name">
                <FontAwesomeIcon icon={faShoppingCart} />
                DELAWARE
                <span className="location-name-normal">特拉华州</span>
              </h2>
              <ul className="location-details">
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="location-detail-icon" />
                  10 Geoffrey Dr, Newark, DE 19702
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faPhoneAlt} className="location-detail-icon" />
                  302-294-6984
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faClock} className="location-detail-icon" />
                  8:30am–8:30pm
                </li>
              </ul>
              <a href="#" className="location-link">
                <span>查看详情 <FontAwesomeIcon icon={faArrowRight} /></span>
                <span className="location-link-subtext">View Details</span>
              </a>
            </article>

            {/* Card 3 */}
            <article className="location-card" role="listitem">
              <div className="location-image-container">
                <img
                  src="https://www.hungvuongs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FChinatown.1a5b7a4d.jpg&w=3840&q=90"
                  alt="Photo of Chinatown Philadelphia store front with green sign and red brick building"
                  className="location-image"
                  width="600"
                  height="300"
                />
              </div>
              <h2 className="location-name">
                <FontAwesomeIcon icon={faShoppingCart} />
                CHINATOWN
                <span className="location-name-normal">费城 (唐人街)</span>
              </h2>
              <ul className="location-details">
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="location-detail-icon" />
                  130 N 10th St, Philadelphia, PA 19107
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faPhoneAlt} className="location-detail-icon" />
                  215-928-8989
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faClock} className="location-detail-icon" />
                  8:00am–8:00pm
                </li>
              </ul>
              <a href="#" className="location-link">
                <span>查看详情 <FontAwesomeIcon icon={faArrowRight} /></span>
                <span className="location-link-subtext">View Details</span>
              </a>
            </article>

            {/* Card 4 - MAYFAIR */}
            <article className="location-card" role="listitem">
              <div className="location-image-container">
                <img
                  src="https://www.hungvuongs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMayfair.81ef32f6.jpg&w=3840&q=90"
                  alt="Photo of Hung Vuong Markets Mayfair store building"
                  className="location-image"
                  width="600"
                  height="300"
                />
              </div>
              <h2 className="location-name">
                <FontAwesomeIcon icon={faShoppingCart} />
                MAYFAIR
                <span className="location-name-normal">费城 (东北区)</span>
              </h2>
              <ul className="location-details">
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="location-detail-icon" />
                  6410-42 Frankford Ave #22, Philadelphia, PA 19149
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faPhoneAlt} className="location-detail-icon" />
                  215-904-7599
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faClock} className="location-detail-icon" />
                  8:00am–8:00pm
                </li>
              </ul>
              <a href="#" className="location-link">
                <span>查看详情 <FontAwesomeIcon icon={faArrowRight} /></span>
                <span className="location-link-subtext">View Details</span>
              </a>
            </article>

            {/* Card 5 - CHERRY HILL */}
            <article className="location-card" role="listitem">
              <div className="location-image-container">
                <img
                  src="https://www.hungvuongs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCherryHill.dea0b088.jpg&w=3840&q=90"
                  alt="Photo of Hung Vuong Markets Cherry Hill store building"
                  className="location-image"
                  width="600"
                  height="300"
                />
              </div>
              <h2 className="location-name">
                <FontAwesomeIcon icon={faShoppingCart} />
                CHERRY HILL
                <span className="location-name-normal">新泽西洲</span>
              </h2>
              <ul className="location-details">
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="location-detail-icon" />
                  1445 Brace Rd Cherry Hill, NJ 08034
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faPhoneAlt} className="location-detail-icon" />
                  856-857-1189
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faClock} className="location-detail-icon" />
                  8:00am–8:00pm
                </li>
              </ul>
              <a href="#" className="location-link">
                <span>查看详情 <FontAwesomeIcon icon={faArrowRight} /></span>
                <span className="location-link-subtext">View Details</span>
              </a>
            </article>

            {/* Card 6 - SOUTH PHILADELPHIA */}
            <article className="location-card" role="listitem">
              <div className="location-image-container">
                <img
                  src="https://www.hungvuongs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSouthPhilly.14d2ec8f.jpg&w=3840&q=90"
                  alt="Photo of Hung Vuong Markets South Philadelphia store building"
                  className="location-image"
                  width="600"
                  height="300"
                />
              </div>
              <h2 className="location-name">
                <FontAwesomeIcon icon={faShoppingCart} />
                SOUTH PHILADELPHIA
                <span className="location-name-normal">(南费城)</span>
              </h2>
              <ul className="location-details">
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="location-detail-icon" />
                  1122 Washington Ave, Philadelphia, PA 19147
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faPhoneAlt} className="location-detail-icon" />
                  215-336-2803
                </li>
                <li className="location-detail-item">
                  <FontAwesomeIcon icon={faClock} className="location-detail-icon" />
                  8:00am–7:40pm
                </li>
              </ul>
              <a href="#" className="location-link">
                <span>查看详情 <FontAwesomeIcon icon={faArrowRight} /></span>
                <span className="location-link-subtext">View Details</span>
              </a>
            </article>
          </main>
        </div>
      </section>

      {/* Footer Section */}
      <div className="footer-container">
        <div className="footer-gallery">
          <img alt="Frozen food section in supermarket with glass door freezers filled with various packaged frozen foods" className="footer-image" height="120" src="https://storage.googleapis.com/a1aa/image/bf2b57a7-6c48-4e87-8fa8-651366740d9b.jpg" width="300"/>
          <img alt="Colorful ceramic cups and saucers displayed on white shelves in a store" className="footer-image" height="120" src="https://storage.googleapis.com/a1aa/image/e93ede72-d466-402f-1625-d301ee93be4a.jpg" width="300"/>
          <img alt="Pharmacy shelves fully stocked with various medicines and health products with price tags" className="footer-image" height="120" src="https://storage.googleapis.com/a1aa/image/7c0264ae-a316-4ea2-5506-d0e3e92ce352.jpg" width="300"/>
          <img alt="Young child sitting in shopping cart holding a blue balloon in a supermarket aisle" className="footer-image" height="120" src="https://storage.googleapis.com/a1aa/image/95700679-6206-47e4-2c47-df54bb41dd78.jpg" width="300"/>
        </div>
        <footer className="footer-content">
          <div className="footer-main">
            <div className="footer-logo-section">
              <img alt="Heng Vuong Food Market logo in yellow" className="footer-logo" height="40" src="https://www.hungvuongs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.1b0126b9.jpg&w=384&q=75" width="120"/>
              <p className="footer-description">
                恒发超市，您身边的亚洲美食专家。我们提供优质的亚洲食品和生活用品，让您享受便捷的一站式购物体验。
              </p>
              <div className="footer-social">
                <a aria-label="Facebook" className="social-link" href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a aria-label="Twitter" className="social-link" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a aria-label="Instagram" className="social-link" href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a aria-label="LinkedIn" className="social-link" href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
            <div className="footer-links-section">
              <h3 className="footer-links-title">
                门店 Stores
              </h3>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <span className="footer-link-bullet"></span>
                  每周特惠 Weekly Ad
                </li>
                <li className="footer-link-item">
                  <span className="footer-link-bullet"></span>
                  商铺租赁 Leasing
                </li>
              </ul>
            </div>
            <div className="footer-links-section">
              <h3 className="footer-links-title">
                关于我们 About
              </h3>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <span className="footer-link-bullet"></span>
                  加入我们 Career
                </li>
                <li className="footer-link-item">
                  <span className="footer-link-bullet"></span>
                  联系我们 Contact
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © 2025 Hung Vuong Markets. All rights reserved.
            </p>
            <div className="footer-legal-links">
              <a className="legal-link" href="#">
                Privacy Policy
              </a>
              <a className="legal-link" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;