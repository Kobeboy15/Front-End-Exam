<template>
    <div class="news">
        <div class="news__container">
            <div class="news__header">
                <h2>News</h2>
                <p
                    v-if="navRef && navRef.isLoggedIn"
                    @click="createPost"
                >
                    Create New Post
                </p>
            </div>
            <transition-group name="list" tag="div" class="news__body">
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
            <div class="news__footer">
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

        props: {
            navRef: {
                type: Object,
                required: false,
            }
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
            },

            createPost() {
                this.$router.push({name: 'create-article'})
            }
        },

        computed: {
            filtedArticles() {
                return this.articles.filter( (el, index) => index < this.articleFeedLimit);
            },
        }
    }

    
</script>

<style scoped>

    .news {
        font-family: 'Montserrat', sans-serif;
        background: white;
        width: 1366px;
        margin: auto;
    }

    .news__container {
        padding: 98px 0;
    }

    .news__header {
        margin-bottom: 65px;
        display: flex;
        align-items: center;
    }

    .news__header h2 {
        flex: 1;
    }

    .news__header p {
        font-size: 20px;
        font-weight: bold;
        text-decoration: underline;
        letter-spacing: 2px;
        margin: 0;

        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    .news__body {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 60px 50px;
        margin-bottom: 70px;
    }

    .news__footer {
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
        font-family: 'Montserrat', sans-serif;
        width: 420px;
        padding: 23px 30px;
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