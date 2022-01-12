<template>
  <div class="projects__container">
      <div class="project__container">
        <div class="project__textbox">
            <h3 class="project__textbox-name"><span>01</span>Mteja</h3>
            <h2 class="project__textbox-title">Communicate Seamlessly with Customers.</h2>
            <p class="project__textbox-description">
              Mteja is a plug and play solution that makes it easy for businesses
              to run conversations over mobile technologies - Messaging (Bulk SMS,
              Whatsapp, Telegram) and IVR/Call Center. With Mteja, an African
              business that's operational in multiple markets businesses can set up
              it's omni-channel communication system in a matter of minutes.
            </p>
            <span class="project__textbox-meta">
              <a href="https://mteja.io" target="blank">VIEW WEBSITE</a>
            </span>
        </div>
        <div class="project__imagebox">
            <div class="project__imagebox-image mteja"></div>
        </div>
      </div>

      <div class="project__container">
        <div class="project__textbox">
            <h3 class="project__textbox-name"><span>02</span>Decoded</h3>
            <h2 class="project__textbox-title">News Skills for A New World.</h2>
            <p class="project__textbox-description">
                Decoded for Devs is an online source for technical content that caters to the
                developer market in Africa. Developers can read and share practical ‘How to’
                articles with the latest technologies and tools. We’re a platform that enables
                developers to grow, upskill and share their insights with their communities.
            </p>
            <span class="project__textbox-meta">
              <a href="https://decoded.com" target="blank">VIEW WEBSITE</a>
            </span>
        </div>
        <div class="project__imagebox">
            <div class="project__imagebox-image decoded"></div>
        </div>
      </div>

      <div class="project__container">
        <div class="project__textbox">
            <h3 class="project__textbox-name"><span>03</span>Beba-Beggie</h3>
            <h2 class="project__textbox-title">Lock It Away!</h2>
            <p class="project__textbox-description">
              Beba-Beggie is a storage tech that seeks to provide
              convenient and reliable solutions to help with easy
              package pickups using state of the art technology in
              luggage storage and parcel delivery services; giving
              them the ultimate experience of comfort
            </p>
            <span class="project__textbox-meta">
              <a href="https://bebabeggie.com" target="blank">VIEW WEBSITE</a>
            </span>
        </div>
        <div class="project__imagebox">
            <div class="project__imagebox-image bebabeggie"></div>
        </div>
      </div>

      <div class="projects__link-container">
        <router-link to="/portfolio" class="projects__link">
            <span>See all projects</span>
            <img src="../../assets/images/right-arrow-orange.svg">
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Projects',
};
</script>

<style scoped>
.project__container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow-y: auto;
    padding: 0 3.4vw 0 8.9vw;
    margin-top: 3vw;
}

.project__container:nth-child(even) {
  flex-direction: row-reverse;
}

.project__textbox {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.project__container:nth-child(even) .project__textbox  {
  padding-left: 2vw;
}

.project__textbox-name {
    font-size: 18px;
    color: #FEFEFE;
}

.project__textbox-name span {
    display: inline-block;
    margin-right: 25px;
}

.project__textbox-title {
    font-size: 2.5vw;
    margin: 10px 0;
    color: #FEFEFE;
    line-height: 4vw;
}

.project__textbox-description {
    padding-right: 14vw;
    margin-bottom: 50px;
}

.project__textbox-meta {
    position: relative;
    font-family: var(--bold);
    font-size: 16px;
    color: var(--accent);
}

.project__textbox-meta:after {
    content: '';
    position: absolute;
    width: 183px;
    height: 2px;
    margin-left: 15px;
    top: 15px;
    background-color: var(--accent);
}

.project__textbox-meta a {
  color: var(--accent);
}

.project__imagebox {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2vw;
}

.project__imagebox-image {
    background-size: cover;
    height: 80%;
    border-radius: 15px;
    position: relative;
    background-position: center center;
}

.project__imagebox-image::after {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(24, 4, 45, 0.3);
}

.project__imagebox-image.decoded {
   background-image: url('../../assets/images/startups/Decoded.png');
}

.project__imagebox-image.mteja {
   background-image: url('../../assets/images/startups/Mteja.png');
}

.project__imagebox-image.bebabeggie {
   background-image: url('../../assets/images/startups/Bebabeggie.png');
}

.projects__link-container {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.projects__link{
  transform: translate(-15%, -150%);
  color: var(--accent);
}

.projects__link img {
  width: 15px;
  vertical-align: middle;
  display: inline-block;
  margin-left: 15px;
}

/* -------------------------
    RESPONSIVE STYLES
----------------------------*/

@media only screen and (max-width : 1500px) { /* Laptops */
    .project__textbox-title {
        font-size: 2.7vw;
    }

    .project__textbox-description {
        font-size: 14px;
        padding-right: 7.5vw;
        margin-bottom: 30px;
    }

    .project__textbox-meta {
        font-size: 13px;
    }

    .project__textbox-name {
        font-size: 15px;
    }

    .project__imagebox {
        padding-right: 1vw;
    }
}

@media only screen and (max-width : 768px) {
    .project__textbox {
        padding: 0;
    }

    .project__textbox-title {
        font-size: 4.5vw;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .project__textbox-description {
        padding-right: 6vw;
        font-size: 13px;
    }

    .project__textbox-meta:after {
        width: 150px;
    }
}

@media only screen and (max-width : 480px) {
    .project__container:nth-child(even), .project__container {
      flex-direction: column-reverse;
    }

    .project__container {
        height: unset;
        position: relative;
        padding: 40px 0;
        width: 90vw;
        margin: auto;
    }

    .project__textbox {
        padding: 0;
    }

    .project__textbox-name {
      margin: 18px 0;
    }

    .project__textbox-title {
        font-size: 7.7vw;
        margin: 18px 0;
        line-height: 9vw;
    }

    .project__textbox-description {
        font-size: 12px;
        padding-right: 7vw;
        margin-bottom: 25px;
    }

    .project__textbox-meta {
        font-size: 12px;
    }

    .project__imagebox-image {
        min-height: 40vh;
    }

    .project__textbox-meta:after {
        width: 83px;
    }
}
</style>
