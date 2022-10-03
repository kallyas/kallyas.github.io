import React from "react";
import { Logo, navItems, socialIcons } from "../NavbarComponents";
import styles from "./FooterNav.module.css";

const FooterNav = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__nav__container}>
        <div className={styles.footer__nav}>
          {navItems.map((item, index) => (
            <a href={item.id} key={index} className={styles.footer__nav__item}>
              {item.name}
            </a>
          ))}
        </div>
        <div className={styles.footer__nav__social}>
          {socialIcons.map((item, index) => (
            <a key={index} className={styles.footer__social__icon} href="#">
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.footer__logo__container}>{Logo}</div>
      <h6 className={styles.footer__copy__right}>
        © {new Date().getFullYear()} All rights reserved. Designed by Kallyas
      </h6>
    </div>
  );
};

export default FooterNav;
