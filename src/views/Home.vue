<template>
    <div class="home-page">
        <router-view :data="$attrs.data"/>
        <NewsSection />
    </div>
</template>

<script>
import NewsSection from '@/components/NewsSection.vue';

export default {
    name: 'Home',

    components: {
        NewsSection,
    },

    created() {
        this.$router.push({name: 'home'}).catch(error => {
            if (error.name != "NavigationDuplicated") {
                throw error;
            }
        });
    },
}
</script>
