<template>
    <div class="home-page">
        <Navbar />
        <router-view />
        <NewsSection />
        <FooterSection />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NewsSection from '@/components/NewsSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    name: 'Home',

    components: {
        Navbar,
        NewsSection,
        FooterSection
    }
}
</script>
