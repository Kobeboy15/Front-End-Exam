<template>
    <div class="card__container">
        <div>
            <img :src="passedImage" />
        </div>
        <div>
            <p>
                {{ date }}
            </p>
            <p>
                {{ description }}
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
            },
            date: {
                type: String,
                required: true
            },
            description: {
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

    .card__container {
        border: 1px solid black;
        padding: 40px 30px;
        cursor: pointer;
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