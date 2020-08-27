<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',

        mounted() {
            this.$router.push({name: 'dashboard'})
        }
    }
</script>

<style>
    body {
        margin: 0;
    }
</style>
