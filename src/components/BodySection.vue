<template>
    <div class="body-wrapper">
        <div class="body-container">
            <i class="material-icons arrows">keyboard_arrow_left</i>
            <i class="material-icons arrows">keyboard_arrow_right</i>
            <div class="slide-section">
                <img src="../assets/photo1.png" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BodySection',
    }
</script>

<style scoped>

    .body-container {
        width: 1366px;
        margin: auto;
        position: relative;
        display: flex;
        align-items: center;
    }

    .arrows {
        position: absolute;
        display: flex;
        align-items: center;
        padding: 0 30px;

        cursor: pointer;
        transition: 0.2s ease-in-out
    }

    .arrows:not(:first-child) {
        right: 0;
    }

    .arrows:hover {
        background: rgba(0, 0, 0, 0.2);

        transition: 0.2s ease-in-out
    }

    .slide-section, img {
        display: block;
        width: 100%;
    }

</style>