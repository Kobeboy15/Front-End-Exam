<template>
    <div class="body-wrapper">
        <div class="body-container">
            <div class="action-container">
                <img 
                    src="../assets/Path_2.png" 
                    @click="prev" 
                    class="arrows" 
                />
                <Pagination 
                    :currentPage="currentIndex"
                    :maxPage="images.length-1"
                    @switchPage = "changePage"
                />
                <img 
                    src="../assets/Path_1.png" 
                    @click="next" 
                    class="arrows" 
                />
            </div>
            <transition-group 
                :name="transitionType" 
                tag="div" 
                class="img-slider"
            >
                <div v-for="number in [currentIndex]" :key="number" class="image-container">
                    <img :src="currentImg" />
                    <div class="hero-banner-text-container">
                        <div class="hero-banner-text-wrapper">
                            <div class="hero-title">
                                <span>{{ images[currentIndex].description }}</span>
                            </div>
                            <small>{{ images[currentIndex].date }}</small>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import Pagination from './GenericComponents/Pagination.vue';

    export default {
        name: 'BodySection',

        components: {
            Pagination
        },

        data() {
            return {
                images: [
                    {
                        "name": "photo1.png",
                        "description": "サンプルテキスト サンプル ルテキストサンプルテキスト",
                        "date": "2019.06.19"
                    },
                    {
                        "name": "photo1.png",
                        "description": "サンプルテキスト サンプル ルテキストサンプルテキスト",
                        "date": "2019.06.19"
                    },
                    {
                        "name": "photo1.png",
                        "description": "サンプルテキスト サンプル ルテキストサンプルテキスト",
                        "date": "2019.06.19"
                    },
                ],
                currentIndex: 0,
                timer: null,
                transitionType: "",
                disabledButton: false,
                timeout: null,
            }
        },
        
        mounted() {
            this.transitionType = "slide-next";
            this.startSlide();
        },

        methods: {
            startSlide() {
                this.timer = setInterval(() => {
                    if(this.transitionType != "slide-next") {
                        this.transitionType = "slide-next"
                    }
                    if(this.currentIndex != 0 && Math.abs(this.currentIndex + 1) % this.images.length == 0){
                        this.currentIndex = 0;
                    } else {
                        this.currentIndex += 1;
                    }
                }, 5000);
            },

            next() {
                if(!this.disabledButton) {
                    this.disabledButton = true;

                    this.transitionType = "slide-next"
                    if(this.currentIndex != 0 && Math.abs(this.currentIndex + 1) % this.images.length == 0){
                        this.currentIndex = 0;
                    } else {
                        this.currentIndex += 1;
                    }
                    clearInterval(this.timer);
                    this.startSlide();

                    this.timeout = setTimeout(() => {
                        this.disabledButton = false;
                    }, 1000);
                }
            },

            prev() {
                if(!this.disabledButton){
                    this.disabledButton = true;

                    this.transitionType = "slide-prev";
                    if(this.currentIndex == 0) {
                        this.currentIndex = this.images.length - 1;
                    } else {
                        this.currentIndex -= 1;
                    }
                    clearInterval(this.timer);
                    this.startSlide();

                    this.timeout = setTimeout(() => {
                        this.disabledButton = false;
                    }, 1000);
                }
            },

            changePage(page) {
                if(!this.disabledButton){
                    this.disabledButton = true;

                    if(page < this.currentIndex) {
                        this.transitionType = "slide-prev";
                    } else {
                        this.transitionType = "slide-next";
                    }

                    this.currentIndex = page;
                    clearInterval(this.timer);
                    this.startSlide();

                    this.timeout = setTimeout(() => {
                        this.disabledButton = false;
                    }, 1000);
                }
            }
        },

        computed: {
            currentImg() {
                return require('../assets/'+this.images[Math.abs(this.currentIndex) % this.images.length].name);
            }
        }
    };
</script>

<style scoped>

    .body-container {
        width: 1366px;
        margin: auto;
        position: relative;
        align-items: center;
    }
    
    .action-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1;
    }

    .arrows {
        margin: 0 30px;
        padding: 12px 12px;
        cursor: pointer;
        transition: 0.2s ease-in-out;

        cursor: pointer;
    }

    .arrows:hover {
        background: rgba(0, 0, 0, 0.2);

        transition: 0.2s ease-in-out
    }

    .pagination-container {
        align-self: flex-end;
    }

    .slide-next-leave-active,
    .slide-next-enter-active {
        transition: 1s;
    }

    .slide-prev-leave-active,
    .slide-prev-enter-active {
        transition: 1s;
    }

    .slide-prev-enter {
        transform: translate(-100%, 0);
    }

    .slide-next-enter {
        transform: translate(100%, 0);
    }

    .slide-prev-leave-to {
        transform: translate(100%, 0);
    }

    .slide-next-leave-to {
        transform: translate(-100%, 0);
    }

    .img-slider {
        overflow: hidden;
        position: relative;
        width: 100%;
        max-height: 666px;
        min-height: 666px;
    }

    .img-slider img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        object-fit: cover;
    }

    .hero-banner-text-container {
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        height: 666px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .hero-banner-text-wrapper {
        padding-right: 123px;
        text-align: right;
        width: 40em;
    }

    .image-container {
        position: relative;
    }

    .hero-title {
        margin-bottom: 25px;
    }

    .hero-title span {
        display: inline;
        font-size: 60px;
        font-weight: bold;
        background: #101010;
        padding: 12px;
        line-height: 1.8;
        color: white;
        text-align: right;
    }

    small {
        font-size: 26px;
        letter-spacing: 6px;
    }

</style>