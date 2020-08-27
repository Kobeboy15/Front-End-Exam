<template>
    <div class="home-page">
        <Navbar />
        <BodySection />
        <NewsSection />
        <FooterSection />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import BodySection from '@/components/BodySection.vue';
import NewsSection from '@/components/NewsSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    name: 'Home',

    components: {
        Navbar,
        BodySection,
        NewsSection,
        FooterSection
    }

}
</script>
