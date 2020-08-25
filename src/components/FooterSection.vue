<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <div class="footer-banner">
                <div class="footer-info">
                    <img src="../assets/company-logo-white.png" />
                    <p>
                        サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト
                    </p>
                </div>
                <div class="footer-top-button">
                    <div class="top-button">
                    </div>
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
    }
</script>

<style scoped>

    .footer-wrapper {
        background: #292929;
    }

    .footer-container {
        width: 1366px;
        margin: auto;
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

    img {
        margin-bottom: 47px;
    }

    p {
        color: white;
        font-weight: bold;
        margin: 0;
    }

</style>