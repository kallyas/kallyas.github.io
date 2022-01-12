<template>
  <div class="container hero__container">
      <h1 class="hero__title">Create The Future</h1>
      <div class="hero__textbox">
        <p class="hero__textbox-text">
          AT Labs is a Startup Studio dedicating to building Startups.
          We develop ideas into products and products into companies.
          <button class="animated_button" v-scroll-to="{ element: '#projects' }">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Explore</span>
          </button>
        </p>
      </div>
      <!-- positioned elements -->
      <div class="hero__background"></div>
      <div class="hero__background-mobile"></div>
      <div class="hero__email">info@at-labs.io</div>
  </div>
</template>

<script>
export default {
    name: 'Hero',
};
</script>

<style scoped>
.hero__container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}

.hero__title {
  font-size: 10vw;
  margin: 0.9em 0;
  align-self: center;
}

.hero__textbox {
  border-top: 1px solid var(--accent);
  width: 350px;
  margin-top: 1em;
}

.hero__textbox-text {
  margin-top: 2em;
  font-size: 15px;
}

.hero__textbox-text a{
  color: var(--accent);
  border-bottom: 1px dotted var(--accent);
  padding: 1px;
}

.hero__textbox-text .button {
  background-color: var(--accent);
  color: #fff;
  padding: 10px 15px;
  display: block;
  width: 35%;
  border-radius: 15px;
  text-align: center;
}

.hero__background {
  position: absolute;
  right: 8vw;
  width: 844px;
  height: 620px;
  background: transparent url('../../assets/images/ATLABS copy 4.png') 0% 0% no-repeat padding-box;
  z-index: -1;
}

.hero__background::before{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  opacity: 0.3;
}

.hero__background-mobile{
  display: none;
  position: absolute;
  top: 60%;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('../../assets/images/small2.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9;
  z-index: -2;
}

.hero__background-mobile::after{
  content: '';
  position: absolute;
  background-color: var(--primary);
  top: 0;
  bottom: 40%;
  left: 0;
  right: 0;
  border-bottom-right-radius: 100vw;
}

.hero__email {
  position: absolute;
  right: 20px;
  bottom: 100px;
  transform: rotate(-90deg);
}

/* -------------------------
    That awesome button \0/
----------------------------*/

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}
button.animated_button {
  width: 11rem;
  height: auto;
}
button.animated_button .circle {
  -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: var(--accent);
  border-radius: 1.625rem;
}
button.animated_button .circle .icon {
  -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}
button.animated_button .circle .icon.arrow {
  -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}
button.animated_button .circle .icon.arrow::before {
  position: absolute;
  content: '';
  top: -0.25rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
button.animated_button .button-text {
  -webkit-transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}

button:hover .circle {
  width: 100%;
}
button:hover .circle .icon.arrow {
  background: #fff;
  -webkit-transform: translate(1rem, 0);
          transform: translate(1rem, 0);
}
button:hover .button-text {
  color: #fff;
}

button.animated_button {
  display: block;
  position: absolute;
  margin-top: 20px;
}

/* -------------------------
    RESPONSIVE STYLES
----------------------------*/

@media only screen and (max-width : 1500px) { /* Laptops */
  .hero__background {
    width: 40vw;
    height: 60%;
    background-size: contain;
    background-repeat: repeat-y;
  }
}

@media only screen and (max-width : 992px) { /* Tablet-landscape */
  .hero__background {
    width: 50vw;
  }

}

@media only screen and (max-width : 768px) { /* Tablet-potrait */
  .hero__background, .hero__email {
    display: none;
  }

  .hero__background-mobile{
    display: initial;
  }
}

@media only screen and (max-width : 480px) { /* mobile-landscape */
  .hero__textbox{
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
  }

  .hero__textbox-text {
    margin-top: 2em;
    font-size: 13px;
    text-align: center;
  }

  .hero__textbox-title {
    justify-content: unset;
    border-bottom: unset;
    padding: 0 10px;
  }

  .hero__textbox-title img{
    position: relative;
    margin-top: -10px;
    margin-left: 10px;
  }

  button.animated_button {
    margin-top: 40px;
    transform: translateX(-50%);
    left: 50%;
  }

  button:hover .circle {
    width: 100%;
  }

  button:hover .circle .icon.arrow {
    background: #fff;
    -webkit-transform: translate(1rem, 0);
            transform: translate(1rem, 0);
  }

  button:hover .button-text {
    color: #fff;
  }

}
</style>
