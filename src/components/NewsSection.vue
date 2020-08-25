<template>
    <div class="news-wrapper">
        <div class="news-container">
            <div class="news-header">
                <h2>News</h2>
            </div>
            <div class="news-body">
                <Card v-for="index in 9" :key="index"/>
            </div>
            <div class="news-footer">
                <input type="button" value="Load More">
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/NewsComponents/Card.vue';

    export default {
        name: 'NewsSection',

        components: {
            Card,
        }
    }

    
</script>

<style scoped>

    .news-wrapper {
        background: white;
        width: 1366px;
        margin: auto;
    }

    .news-container {
        
        padding: 98px 0;
        
    }

    .news-header {
        margin-bottom: 65px;
    }

    .news-body {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 60px 50px;
        margin-bottom: 70px;
    }

    .news-footer {
        text-align: center;
    }

    input[type=button] {
        width: calc(100% / 3);
        padding: 23px 30px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        background: #101010;
        color: white;
        text-transform: uppercase;
        font-size: 20px;
        border: 0;
        border: 1px solid #101010;
        

        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    input[type=button]:hover {
        background: white;
        color: #101010;
        border: 1px solid #101010;

        transition: 0.2s ease-in-out;
    }

    input[type=button]:focus {
        border: 1px solid;
        border-radius: 0;
        outline: none;
    }

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 50px;
        letter-spacing: 8px;
        text-transform: uppercase;
        color: #101010;
        margin: 0;
    }
    

</style>