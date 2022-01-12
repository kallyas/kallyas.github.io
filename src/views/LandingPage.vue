<template>
  <div class="landing-page">
    <section class="hero" :style="{'height': `100vh`}">
      <Hero/>
    </section>

    <section id="projects" class="projects">
      <Projects/>
    </section>

    <section class="cta">
      <CallToAction/>
    </section>

    <section>
      <AppFooter/>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/landingPage/Hero.vue';
import Projects from '@/components/landingPage/Projects.vue';
import CallToAction from '@/components/generic/CallToAction.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

import { vueWindowSizeMixin } from 'vue-window-size';

export default {
    name: 'LandingPage',
    components: {
        Hero,
        Projects,
        CallToAction,
        AppFooter,
    },
    mixins: [vueWindowSizeMixin],
    data() {
        return {
            height: window.document.documentElement.clientHeight,
        };
    },
};
</script>

<style scoped>
section.cta {
    background-color: var(--bg);
    padding: 21vh 0;
}
</style>
