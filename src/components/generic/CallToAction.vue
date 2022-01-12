<template>
  <div class="cta__container">
      <h1 class="cta__title">Let’s Make Something Together</h1>
      <span class="cta__subtitle">Start by <router-link to="contact">Saying Hi</router-link></span>
  </div>
</template>

<script>
export default {
    name: 'CallToAction',
};
</script>

<style scoped>
.cta__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5.7vw;
    background-color: var(--bg);
}

.cta__title, .cta__subtitle {
    color: var(--grey);
}

.cta__title {
    font-size: 5.3vw;
    padding-bottom: 5.3vh;
}

.cta__subtitle {
    display: block;
    font-family: var(--regular);
    font-size: 4.7vw;
}

.cta__subtitle a {
    position: relative;
    color: var(--accent);
}

.cta__subtitle a:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    bottom: -10%;
    left: 0;
    background-color: var(--accent);
}

/* -------------------------
    RESPONSIVE STYLES
----------------------------*/

@media only screen and (max-width : 480px) {
    .cta__container {
      height: 100%;
    }

    .cta__title {
        padding-bottom: 3.3vh;
        font-size: 5.7vw;
    }

    .cta__subtitle {
        font-size: 5vw;
    }
}
</style>
