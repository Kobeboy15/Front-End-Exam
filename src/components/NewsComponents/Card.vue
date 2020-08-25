<template>
    <div class="card-container">
        <div class="image-container">
            <img src="../../assets/cardphoto.png" />
        </div>
        <div class="details-container">
            <p>2019.06.19</p>
            <p>サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
    }
</script>

<style scoped>

    .card-container {
        border: 1px solid black;

        padding: 40px 30px;
    }

    img {
        width: 100%;
    }

    p:first-child {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }

    p {
        font-size: 20px;
        font-weight: bold;
    }

</style>