<template>
    <div class="card-container">
        <div class="image-container">
            <img :src="passedImage" />
        </div>
        <div class="details-container">
            <p>
                <slot name="date" />
            </p>
            <p>
                <slot name="description" />
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',

        props: {
            image: {
                type: String,
                required: true
            }
        },

        computed: {
            passedImage() {
                return require('../../assets/'+this.image);
            }
        }
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