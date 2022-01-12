<template>
  <div class="header" :class="headerTheme">
    <div class="header__bar" :class="{'transparent': menuActive}">
        <router-link to="/" class="header__bar-logo"><!-- loaded via css --></router-link>

        <!-- eslint-disable-next-line -->
        <div @click="menuSwitch" class="hamburger hamburger--elastic" v-bind:class="{'is-active': menuActive}">
            <div class="hamburger-box">
                <div class="hamburger-inner"></div>
            </div>
        </div>
    </div>
    <div class="header__menu" v-bind:class="{'reveal': menuActive === true}">
        <div class="header__menu-links">
            <router-link to="/about">About Us</router-link>
            <router-link to="/portfolio">Our Portfolio</router-link>
            <router-link to="/team">Our Team</router-link>
            <!-- <div class="menu-links__social">
                <router-link to="/">facebook</router-link>
                <router-link to="/">instagram</router-link>
                <router-link to="/">twitter</router-link>
                <router-link to="/">linkedIn</router-link>
            </div> -->
        </div>
        <!-- positioned elements -->
        <div class="header__menu-watermark">
            <span>AFRICA'S</span>
            <span>TALKING</span>
            <span>LABS</span>
        </div>
        <div class="header__menu-email">info@at-labs.io</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            headerTheme: 'default',
            menuActive: false,
            scrollEventListener: undefined,
        };
    },

    methods: {
        menuSwitch() {
            this.menuActive = !this.menuActive;
        },
    },

    watch: {
        $route(to) {
            this.menuActive = false; // always hide menu on routing

            // switch header theme based on the page we navigate to
            this.headerTheme = to.name === 'Contact' ? 'light' : 'default';
        },
    },
};
</script>

<style scoped>
.header {
    position: relative;
    min-height: 1px;
}

.header__bar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 0 10px;
    transition: all 0.3s ease-in;
}

.header__bar.transparent{
    /* make header bar transparent (when menu is active) */
    background-color: transparent !important;
}

.header__bar-logo {
    margin-left: 3vw;
    display: block;
    width: 80px;
    height: 41px;
    background: transparent url('../../assets/images/labs_logo_white.svg') no-repeat center;
    background-size: cover;
}

.hamburger {
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0 3vw 0 0;
  overflow: visible;
}

.hamburger:hover {
    opacity: 0.7;
}

.hamburger.is-active:hover {
    opacity: 0.7;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
    background-color: #fff !important;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 22px;
    height: 2px;
    border-radius: 4px;
    position: absolute;
    margin: 3px 0;
    right: 0;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
}

.hamburger-inner::after {
    width: 11px;
}

.hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block;
}

.hamburger-inner::before {
    top: -10px;
}

.hamburger-inner::after {
    bottom: -10px;
}


/* hamburger clicked */
.hamburger--elastic .hamburger-inner {
    top: 2px;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger--elastic .hamburger-inner::before {
    top: 5px;
    transition: opacity 0.125s 0.275s ease;
}

.hamburger--elastic .hamburger-inner::after {
    top: 14px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(135deg);
  transition-delay: 0.075s;
}

.hamburger--elastic.is-active .hamburger-inner::before {
    transition-delay: 0s;
    opacity: 0;
}

.hamburger--elastic.is-active .hamburger-inner::after {
    width: 22px;
    transform: translate3d(0, -17px, 0) rotate(-270deg);
    transition-delay: 0.075s;
}

.header__menu {
    visibility: hidden;
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 45;
    background-color: var(--primary);
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
}

.header__menu.reveal {
    visibility: visible;
    opacity: 1;
}

.header__menu-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 17vw;
    height: 100%;
}


.header__menu-links a{
    position: relative;
    display: inline-block;
    margin: 30px 0;
    padding: 15px;
    font-size: 3.6vw;
    font-family: var(--bold);
    color: #fff;
}

/* header__menu-links animation */

.header__menu-links a:before, .header__menu-links a:after {
  content: '';
  position: absolute;
  width: 0%;
  height: 5px;
  top: 50%;
  margin-top: -0.5px;
  border-radius: 15px;
  background: #fff;
}

.header__menu-links a:before {
  left: -2.5px;
}

.header__menu-links a:after {
  right: 2.5px;
  background: #fff;
  transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.header__menu-links a:hover:before {
  width: 100%;
  transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.header__menu-links a:hover:after {
  background: transparent;
  width: 100%;
  transition: 0s;
}

.menu-links__social {
    margin-top: 50px;
}

.menu-links__social a {
    margin-right: 60px;
    color: var(--accent);
    font-size: 15px;
}

.menu-links__social a:before, .menu-links__social a:after {
    height: 1px;
    background: var(--accent);
}

.header__menu-watermark {
    position: absolute;
    bottom: 5vh;
    right: 3vw;
    z-index: -1;
}

.header__menu-watermark span{
    display: block;
    margin: 100px 0;
    font-family: var(--bold);
    font-size: 8vw;
    color: var(--secondary);
    text-transform: uppercase;
}

.header__menu-email {
    position: absolute;
    right: 0;
    top: 30vh;
    transform: translateX(-20%) rotate(-90deg);
}

/* -------------------------
    HEADER THEMES
----------------------------*/
.header.default .hamburger-inner,
.header.default .hamburger-inner::before,
.header.default .hamburger-inner::after {
    background-color: #fff;
}

.header.default .header__bar{
    background-color: var(--primary);
}

.header.light .hamburger-inner,
.header.light .hamburger-inner::before,
.header.light .hamburger-inner::after {
    background-color: var(--grey);
}

.header.light .header__bar{
    /* overrides header line default primary color(min height) */
    background-color: var(--bg);
}

.header.light .header__bar-logo{
    background: transparent url('../../assets/images/logo_colored.svg') no-repeat top;
}

/* -------------------------
    RESPONSIVE STYLES
----------------------------*/

@media only screen and (max-width : 1500px) { /* laptop */
    .menu-links__social {
        margin-top: 20px;
    }

    .header__menu-watermark span {
        margin: 70px 0;
    }
}

@media only screen and (max-width : 992px) { /* Tablet-potrait */
    .header__menu-links {
        align-items: center;
        margin: 0;
        height: 100vh;
    }

    .header__menu-links a {
        font-size: 40px;
        margin: 20px 0;
    }

    .menu-links__social {
        display: flex;
        flex-direction: row;
        width: 80%;
        justify-content: space-around;
        margin-top: 30px;
    }

    .menu-links__social a {
        font-size: 20px;
        margin: 0;
    }

    .header__menu-watermark {
        display: none;
    }
}

@media only screen and (max-width : 768px) { /* Tablet-potrait */
    .header__menu-email {
        display: none;
    }
}

@media only screen and (max-width : 480px) { /* mobile-landscape */

    .header__menu-links a {
        font-size: 30px;
        margin: 10px 0;
    }

    .menu-links__social {
        width: 100%;
    }

    .menu-links__social a {
        font-size: 13px;
    }
}
</style>
