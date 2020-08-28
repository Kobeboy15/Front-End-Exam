<template>
    <div class="view-article-wrapper">
        <div class="header-nav-panel">
            <div class="nav-panel-container">
                <p @click="goToDashboard">HOME</p>
                <p>></p>
                <p>{{ this.article.title }}</p>
            </div>
        </div>
        <div class="article-wrapper">
            <div class="actions-wrapper">
                <p>Edit Post</p>
                <p v-if="false">Save Post</p>
                <p v-if="false">Cancel</p>
            </div>
            <div class="article-header">
                <p>{{ this.article.date_posted }}</p>
                <h2>{{ this.article.title }}</h2>
            </div>
            <div class="article-body">
                <img src="../assets/photo1.png" />
                <p>
                    {{ this.article.description }}
                </p>
            </div>
            <div class="article-comments">
                <hr>
                <h2>Comment</h2>
                <div class="comment-section" name="list" tag="div">
                    <transition-group>
                        <CommentCard 
                            v-for="(item, index) in comments"
                            :key="`comments-${index}`"
                            :comment="item.comment"
                            :date="item.date_posted"
                        />
                    </transition-group>
                    <div class="input-section">
                        <textarea placeholder="Write comment" v-model="commentField" />
                        <input type="button" value="Submit" @click="submitComment"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CommentCard from '@/components/GenericComponents/CommentCard.vue';

    export default {
        name: 'ViewArticle',

        components: {
            CommentCard,
        },

        mounted() {
            this.scrollToTop();
        },

        data() {
            return{
                article: {
                    title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト',
                    date_posted: '2019.06.19',
                    description: 'ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここには'+
                    'テキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここに'+
                    'はテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。'+
                    'ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。'+
                    'ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが'+
                    '入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキ'+
                    'ストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここには'+
                    'テキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。',
                },
                comments: [
                    {
                        comment: "ここにはテキストが入ります。"+
                        "ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここに"+
                        "はテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りま"+
                        "すここにはテキストが入りますここにはテキストが入ります。",
                        date_posted: "3 months ago"
                    }
                ],
                commentField: '',
            }
        },

        methods: {
            goToDashboard() {
                this.$router.push({name: 'home'})
            },

            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            },

            submitComment() {
                let commentObj = {};
                if(this.commentField) {
                    commentObj.date_posted = "3 months ago";
                    commentObj.comment = this.commentField;

                    this.comments.unshift(commentObj);
                }

                this.commentField = "";
                window.scrollTo({
                    top: 1500,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<style scoped>

    p {
        margin: 0;
    }

    .header-nav-panel {
        background: #F5F5F5;
        display: flex;
        width: 100%;
        height: 80px;
    }

    .nav-panel-container {
        display: flex;
        width: 1366px;
        margin: auto;
        align-items: center;
        text-transform: uppercase;
    }

    .nav-panel-container p:first-child {
        cursor:pointer;
    }

    .nav-panel-container p:first-child:hover {
        text-decoration: underline;
    }

    .nav-panel-container p:nth-child(2) {
        margin: 0 10px;
    }

    .actions-wrapper {
        display: flex;
        justify-content: flex-end;
    }

    .actions-wrapper p {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        text-decoration: underline;
        margin-bottom: 30px;
        margin-left: 50px;
    }

    @keyframes slide {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {opacity: 1;}
    }

    .article-wrapper {
        width: 1366px;
        margin: auto;
        font-family: 'Montserrat', sans-serif;
        padding: 30px 0;

        animation-name: slide;
        animation-duration: 1s;
    }

    .article-header p {
        font-size: 20px;
        letter-spacing: 2px;
    }

    .article-header h2 {
        font-size: 40px;
        word-break: keep-all;
    }

    .article-body {
        margin-bottom: 40px;
    }

    .article-body img {
        margin-bottom: 60px;
    }

    .article-body p {
        font-size: 18px;
        line-height: 40px;
        height: 354px;
    }

    .article-comments h2 {
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .input-section {
        display: flex;
        flex-direction: column;
    }

    .input-section textarea {
        font-family: 'Montserrat', sans-serif;
        font-size: 19px;
        letter-spacing: 1px;
        height: 160px;
        padding: 40px;
        resize: none;
        border-radius: 0;
        outline: none;
        margin-bottom: 40px;
    }

    input[type=button] {
        align-self: flex-end;
        padding: 23px 60px;
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

</style>