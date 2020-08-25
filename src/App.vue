<template>
    <div id="app">
        <Navbar />
        <BodySection />
        <NewsSection />
        <FooterSection />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import BodySection from './components/BodySection.vue';
import NewsSection from './components/NewsSection.vue';
import FooterSection from './components/FooterSection.vue';

    export default {
        name: 'App',

        components: {
            Navbar,
            BodySection,
            NewsSection,
            FooterSection,
        },
    }
</script>

<style>
    body {
        margin: 0;
        /* width: 1366px;
        margin: auto; */
    }
</style>
