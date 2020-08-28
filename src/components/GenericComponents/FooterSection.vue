<template>
    <div class="footer">
        <div class="footer__container">
            <div class="footer__logo">
                <div class="logo__container">
                    <img src="../../assets/company-logo-white.png" class="logo"/>
                    <p>
                        サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト
                    </p>
                </div>
            </div>
            <div class="button-container" @click="scrollToTop" >
                <div class="button__top">
                    <img src="../../assets/Path_3.png"/>
                    <p>Top</p>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
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

    .footer {
        background: #292929;
    }

    .footer__container {
        width: 1366px;
        margin: auto;

        display: flex;
    }

    .footer__logo {
        flex: 1;
    }

    .logo__container {
        width: 414px;
        padding: 78px 0 68px;
    }
    
    .logo {
        margin-bottom: 47px;
    }

    .button-container {
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

    .button__top p {
        color: #101010;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 16px;
        letter-spacing: 1px;
    }

    .footer__copyright {
        background: #101010;
    }

    .footer__copyright p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        padding: 35px 0;
        letter-spacing: 2px;
        text-align: center;
    }

    p {
        color: white;
        font-weight: bold;
        margin: 0;
    }

</style>