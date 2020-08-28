<template>
    <div class="create__article">
        <div class="navigation__panel">
            <div class="navigation__container">
                <p
                    @click="returnHome"
                >
                    HOME
                </p>
                <p>></p>
                <p>
                    Create New Post
                </p>
            </div>
        </div>
        <div class="article__container">
            <div class="actions__container">
                <p>Save Post</p>
                <p
                    @click="cancelCreate"
                >
                    Cancel 
                </p>
            </div>
            <div class="article__header">
                <p>2019.06.19</p>
                <textarea
                    maxlength="47"
                    placeholder="Title"
                />
            </div>
            <div class="article__body">
                <div class="img__container">
                    <input 
                        type="button" 
                        value="Upload Image"
                    />
                </div>
                <textarea placeholder="Content" />
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'CreateArticle',

        methods: {

            returnHome() {
                this.$router.push({name: 'home'})
            },

            cancelCreate() {
                if(confirm('Are you sure you want to discard changes')){
                    this.$router.push({name: 'home'})
                }
            }
        }
    }
</script>

<style scoped>

    p {
        margin: 0;
    }

    .navigation__panel {
        background: #F5F5F5;
        display: flex;
        width: 100%;
        height: 80px;
    }

    .navigation__container {
        display: flex;
        width: 1366px;
        margin: auto;
        align-items: center;
        text-transform: uppercase;
    }

    .navigation__container p:first-child {
        cursor: pointer;
    }

    .navigation__container p:first-child:hover {
        text-decoration: underline;
    }

    .navigation__container p:nth-child(2) {
        margin: 0 10px;
    }

    .actions__container {
        display: flex;
        height: 60px;
        justify-content: flex-end;
    }

    @keyframes slide {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {opacity: 1;}
    }

    .actions__container p {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        text-decoration: underline;
        margin-bottom: 30px;
        margin-left: 50px;
        cursor: pointer;
    }

    .article__container {
        width: 1366px;
        margin: auto;
        font-family: 'Montserrat', sans-serif;
        padding: 30px 0;

        animation-name: slide;
        animation-duration: 1s;
    }

    .article__header {
        display: flex;
        flex-direction: column; 
    }

    .article__header p {
        font-size: 20px;
        letter-spacing: 2px;
    }

    .article__header textarea {
        font-size: 40px;
        padding: 15px;
        height: 150px;
        word-break: keep-all;
        font-weight: bold;
        resize: none;
        border-radius: 0;
        outline: none;
        margin: 30px 0;
    }

    .article__body {
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
    }

    .img__container {
        background: #D6D6D6;
        height: 666px;
        margin-bottom: 60px;
        position: relative;
    }

    .article__body textarea {
        font-size: 18px;
        padding: 15px;
        line-height: 40px;
        height: 354px;
        resize: none;
        border-radius: 0;
        outline: none;
    }

    input[type=button] {
        padding: 23px 30px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        background: #101010;
        color: white;
        text-transform: uppercase;
        font-size: 20px;
        border: 0;
        border: 1px solid #101010;
        position: absolute;
        bottom: 0;
        

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

</style>