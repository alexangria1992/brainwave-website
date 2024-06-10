import styles from '../styles/Header.module.css';
import { brainwave } from '../assets';
import { navigation } from '../constants';
import { useLocation } from 'react-router-dom';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import Button from './Button';
import { useState } from 'react';
import { disablePageScroll, enablepageScroll } from 'scroll-lock';

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablepageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablepageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={`${
        styles.headerSection
      }     top-0 bg-n-8/90 border-n-6 backdrop-blur-sm  ${
        openNavigation ? styles.mobileNavBackground : styles.desktopBackground
      }`}
    >
      <div className={styles.headerContainer}>
        <a href='#hero' className={styles.logo}>
          <img src={brainwave} width={190} height={40} alt='Brainwave' />
        </a>
        <nav
          className={`${styles.navbar} ${
            openNavigation ? styles.mobileNavbar : styles.hideNavbar
          }`}
        >
          <div className={styles.navItems}>
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`${styles.navLinks} ${
                  item.onlyMobile ? styles.mobileNav : ''
                } ${
                  item.url === pathname.hash
                    ? styles.activeLink
                    : styles.inactiveLink
                } transition-color   `}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href='#signup'
          className={`${styles.navbarSignUpLink} transition-colors`}
          onClick={handleClick}
        >
          New Account
        </a>
        <Button href='#login' className={styles.signupButton}>
          Sign In
        </Button>
        <Button
          className={styles.menuButton}
          px='px-3'
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
