<template>
    <div class="home-page">
        <router-view :navRef="$attrs.navRef"/>
        <NewsSection :navRef="$attrs.navRef"/>
    </div>
</template>

<script>
import NewsSection from '@/components/NewsSection.vue';

export default {
    name: 'Home',

    components: {
        NewsSection,
    },
}
</script>
