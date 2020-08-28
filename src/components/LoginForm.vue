<template>
    <div class="login-container">
        <div class="login-form">
            <div key="loginForm">
                <div class="header-title">
                    <h2>Login</h2>
                </div>
                <div class="login login-email">
                    <p>Email</p>
                    <input type="text" />
                </div>
                <div class="login login-pass">
                    <p>Password</p>
                    <input type="password" />
                </div>
                <div class="login-actions">
                    <input 
                        type="button" 
                        value="Login"
                        @click="logUserIn"
                    />
                    <p>No account yet? 
                        <span @click="openRegisterForm">
                            Register Here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginForm',

        methods: {
            openRegisterForm() {
                this.$router.push({name: 'register'})
            },

            logUserIn() {
                this.$attrs.data.logUserIn();
            }
        }
    }
</script>

<style scoped>

    h2, p {
        margin: 0;
    }

    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }
    .slide-enter, .slide-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .login-container {
        width: 460px;
        height: 666px;
        margin: auto;
    }

    @keyframes slide {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {opacity: 1;}
    }

    .login-form {
        font-family: 'Montserrat', sans-serif;

        animation-name: slide;
        animation-duration: 1s;
    }

    .header-title {
        text-transform: uppercase;
        margin-bottom: 50px;
    }

    .header-title h2 {
        letter-spacing: 2px;
    }

    .login {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .login p {
        font-size: 18px;
        margin: 5px 0;
        letter-spacing: 1px;
    }

    .login input {
        padding: 12px;
        border-radius: 0;
        border: 1px solid #101010
    }

    .login-actions p {
        text-align: center;
        letter-spacing: 1px;
    }

    .login-actions span {
        cursor: pointer;
        font-weight: bold;
        text-transform: uppercase;
    }

    .login-actions span:hover {
        text-decoration: underline;
    }

    input[type=button] {
        width: 100%;
        padding: 23px 30px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        background: #101010;
        color: white;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 20px;
        border: 0;
        border: 1px solid #101010;
        margin-bottom: 40px;
        

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