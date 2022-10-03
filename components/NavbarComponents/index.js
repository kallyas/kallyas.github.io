/* eslint-disable */
import React from "react";
import styles from "./NavbarComponents.module.css";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const socialIcons = [<FaGithub />, <FaTwitter />];

export const Logo = (
  <Link href="/">
    <a className={styles.navbar__logo}>Kallyas</a>
  </Link>
);

export const navItems = [
  {
    name: "Home",
    id: "/",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Projects",
    id: "portfolio",
  },
  {
    name: "FAQ",
    id: "faq",
  },
  {
    name: "Appointment",
    id: "appointment",
  },
];
