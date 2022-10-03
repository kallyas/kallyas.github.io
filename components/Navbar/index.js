import Link from "next/link";
import React from "react";
import { Logo, navItems, socialIcons } from "../NavbarComponents";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [navMenu, setNavMenu] = React.useState(false);

  const closeMenu = () => setNavMenu(false);
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", closeMenu);
  }

  const hamburgerMenu = (
    <a
      href="#"
      className={styles.hamburger__container}
      onClick={() => setNavMenu(!navMenu)}
    >
      <div className={navMenu ? styles.close__hamburger : styles.hamburger}>
        <span className={styles.hamburger__line}></span>
        <span className={styles.hamburger__line}></span>
        <span className={styles.hamburger__line}></span>
      </div>
    </a>
  );
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__icon__container}>
        {socialIcons.map((icon, index) => (
          <a href="#" key={index} className={styles.navbar__icon}>
            {icon}
          </a>
        ))}
      </div>
      <div className={styles.navbar__logo__container}>{Logo}</div>
      {hamburgerMenu}
      {navMenu && (
        <div className={styles.show__nav__items}>
          <div className={styles.dropdown__close}>{hamburgerMenu}</div>
          {navItems.map((item, index) => (
            <Link
              href={item.id}
              key={index}
              onClick={() => setNavMenu(!navMenu)}
            >
              <a className={styles.navbar__item}>{item.name}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
