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
                <p 
                    v-if="$attrs.navRef.isLoggedIn && !enableEditMode"
                    @click="editInformation"
                >
                    Edit Post
                </p>
                <p 
                    v-if="enableEditMode"
                    @click="saveEditInfo"
                >
                    Save Post
                </p>
                <p 
                    v-if="enableEditMode"
                    @click="cancelEditInfo"
                >
                    Cancel
                </p>
            </div>
            <div class="article-header">
                <p>{{ this.article.date_posted }}</p>
                <h2 v-if="!enableEditMode">{{ this.article.title }}</h2>
                <textarea
                    maxlength="47"
                    v-model="article.title"
                    v-if="enableEditMode"
                />
            </div>
            <div class="article-body">
                <div>
                    <img :src="getImgUrl(article.image)" />
                </div>
                <p
                    v-if="!enableEditMode"
                >
                    {{ this.article.description }}
                </p>
                <textarea 
                    v-model="article.description"
                    v-if="enableEditMode"
                />
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
                    image: 'photo1.png',
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
                enableEditMode: false,
                tempTitle: '',
                tempDesc: '',
                
            }
        },

        methods: {
            editInformation() {
                this.tempTitle = this.article.title;
                this.tempDesc = this.article.description;
                this.enableEditMode = true;
            },

            saveEditInfo() {
                this.enableEditMode = false;
            },

            cancelEditInfo() {
                this.article.title = this.tempTitle;
                this.article.description = this.tempDesc
                this.enableEditMode = false;
            },


            goToDashboard() {
                this.$router.push({name: 'home'})
            },

            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            },

            getImgUrl(fileName) {
                return require('../assets/'+fileName);
            },

            submitComment() {
                let commentObj = {};
                if(this.commentField) {
                    commentObj.date_posted = "A moment ago...";
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
        height: 60px;
        justify-content: flex-end;
    }

    .actions-wrapper p {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        text-decoration: underline;
        margin-bottom: 30px;
        margin-left: 50px;
        cursor: pointer;
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

    .article-header {
        display: flex;
        flex-direction: column; 
    }

    .article-header p {
        font-size: 20px;
        letter-spacing: 2px;
    }

    .article-header h2 {
        margin: 30px 0;
        font-size: 40px;
        word-break: keep-all;
    }

    .article-header textarea {
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

    .article-body {
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
    }

    .article-body img {
        margin-bottom: 60px;
    }

    .article-body p {
        font-size: 18px;
        line-height: 40px;
        height: 354px;
    }

    .article-body textarea {
        font-size: 18px;
        line-height: 40px;
        height: 354px;
        resize: none;
        border-radius: 0;
        outline: none;
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