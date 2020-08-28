<template>
    <div class="news-wrapper">
        <div class="news-container">
            <div class="news-header">
                <h2>News</h2>
                <p>Create New Post</p>
            </div>
            <transition-group name="list" tag="div" class="news-body">
                <div 
                    v-for="(article, index) in filtedArticles" 
                    :key="`article-${index}`"
                    @click="openViewArticle"
                >
                    <Card 
                        :image="article.imageLink"
                        :date="article.date"
                        :description="article.description"
                    />
                </div>
            </transition-group>
            <div class="news-footer">
                <input 
                    type="button" 
                    v-if="articles.length > articleFeedLimit" 
                    @click="articleFeedLimit += 6" 
                    value="Load More"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/GenericComponents/Card.vue';

    export default {
        name: 'NewsSection',

        components: {
            Card,
        },

        data() {
            return {
                feedArticles: [],
                articles: [
                    {
                        "imageLink": "cardphoto.png",
                        "date": "2019.06.19",
                        "description": "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト"
                    },
                    {
                        "imageLink": "cardphoto.png",
                        "date": "2019.06.19",
                        "description": "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト"
                    },
                    {
                        "imageLink": "cardphoto.png",
                        "date": "2019.06.19",
                        "description": "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト"
                    },
                    {
                        "imageLink": "cardphoto.png",
                        "date": "2019.06.19",
                        "description": "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト"
                    },
                    {
                        "imageLink": "cardphoto.png",
                        "date": "2019.06.19",
                        "description": "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト"
                    },
                    {
                        "imageLink": "cardphoto.png",
                        "date": "2019.06.19",
                        "description": "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト"
                    },
                    {
                        "imageLink": "cardphoto.png",
                        "date": "2019.06.19",
                        "description": "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト"
                    },
                    {
                        "imageLink": "cardphoto.png",
                        "date": "2019.06.19",
                        "description": "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト"
                    },
                    {
                        "imageLink": "cardphoto.png",
                        "date": "2019.06.19",
                        "description": "サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト"
                    },
                ],
                articleFeedLimit: 3,
            }
        },

        methods: {
            openViewArticle() {
                this.$router.push({name: 'view-article'}) 
            }
        },

        computed: {
            filtedArticles() {
                return this.articles.filter( (el, index) => index < this.articleFeedLimit);
            }
        }
    }

    
</script>

<style scoped>

    .news-wrapper {
        font-family: 'Montserrat', sans-serif;
        background: white;
        width: 1366px;
        margin: auto;
    }

    .news-container {
        padding: 98px 0;
    }

    .news-header {
        margin-bottom: 65px;
        display: flex;
    }

    .news-header h2 {
        flex: 1;
    }

    .news-header p {
        font-size: 20px;
        font-weight: bold;
        text-decoration: underline;
        letter-spacing: 2px;

        cursor: pointer;
        transition: 0.2s ease-in-out;
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

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
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