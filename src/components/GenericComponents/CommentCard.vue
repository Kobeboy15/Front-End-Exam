<template>
    <div class="comment-container">
        <p>{{ comment }}</p>
        <p>{{ date }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CommentCard',

        props: {
            comment: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            }

        },
    }
</script>

<style scoped>

    .comment-container {
        background: #F5F5F5;
        padding: 40px;
        margin-bottom: 50px;
    }

    p:first-child {
        line-height: 40px;
        font-size: 18px;
        margin-bottom: 20px;
    }

    p:last-child {
        font-weight: bold;
        letter-spacing: 1px;
    }

</style>