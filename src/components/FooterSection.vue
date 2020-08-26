<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <div class="footer-banner">
                <div class="footer-info">
                    <img src="../assets/company-logo-white.png" class="logo"/>
                    <p>
                        サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト
                    </p>
                </div>
            </div>
            <div class="top-button-container" @click="scrollToTop" >
                <div class="top-button">
                    <img src="../assets/Path_3.png"/>
                    <p>Top</p>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>Copyright©2007-2019 Blog Inc.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterSection',

        methods: {
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<style scoped>

    .footer-wrapper {
        background: #292929;
    }

    .footer-container {
        width: 1366px;
        margin: auto;

        display: flex;
    }


    .footer-banner {
        flex: 1;
    }

    .top-button-container {
        background: white;
        width: 70px;
        height: 70px;
        text-align: center;
        align-self: flex-end;
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
    }

    .top-button p {
        color: #101010;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 16px;
        letter-spacing: 1px;
    }

    .footer-info {
        width: 414px;
        padding: 78px 0 68px;
    }

    .footer-copyright {
        background: #101010;
    }

    .footer-copyright p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        padding: 35px 0;
        letter-spacing: 2px;
        text-align: center;
    }

    .logo {
        margin-bottom: 47px;
    }

    p {
        color: white;
        font-weight: bold;
        margin: 0;
    }

</style>