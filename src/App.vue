<template>
    <div id="app">
        <Navbar ref="nav"/>
        <router-view :data="$refs.nav"/>
        <FooterSection />
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import FooterSection from '@/components/FooterSection.vue';

    export default {
        name: 'App',

        components: {
            Navbar,
            FooterSection,
        },
    }
</script>

<style>
    body {
        margin: 0;
    }
</style>
