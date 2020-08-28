<template>
    <div id="app">
        <Navbar ref="nav"/>
        <router-view :navRef="navRef"/>
        <FooterSection />
    </div>
</template>

<script>
    import Navbar from '@/components/GenericComponents/Navbar.vue';
    import FooterSection from '@/components/GenericComponents/FooterSection.vue';

    export default {
        name: 'App',

        data() {
            return{
                navRef: null,
            }
        },

        components: {
            Navbar,
            FooterSection,
        },

        created() {
            this.$nextTick(() => {
                this.navRef = this.$refs.nav;
            })
        },

        mounted() {
            if(this.$route.name == 'main'){
                this.$router.push({name: 'home'});
            }
        },
    }
</script>

<style>
    body {
        margin: 0;
    }
</style>
