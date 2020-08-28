<template>
    <div class="login__form">
        <div class="login__container">
            <div class="login__title">
                <h2>Login</h2>
            </div>
            <div class="login__item">
                <p>Email</p>
                <input type="email" v-model="loginEmail"/>
            </div>
            <div class="login__item">
                <p>Password</p>
                <input type="password" v-model="loginPassWord" />
            </div>
            <div class="login__actions">
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
</template>

<script>
    export default {
        name: 'LoginForm',

        data() {
            return{
                loginEmail: '',
                loginPassWord: ''
            }
        },

        methods: {
            openRegisterForm() {
                this.$router.push({name: 'register'})
            },

            logUserIn() {
                this.$attrs.navRef.logUserIn();
            }
        }
    }
</script>

<style scoped>

    h2, p {
        margin: 0;
    }

    .login__form {
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

    .login__container {
        font-family: 'Montserrat', sans-serif;

        animation-name: slide;
        animation-duration: 1s;
    }

    .login__title {
        text-transform: uppercase;
        margin-bottom: 50px;
    }

    .login__title h2 {
        letter-spacing: 2px;
    }

    .login__item {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .login__item p {
        font-size: 18px;
        margin: 5px 0;
        letter-spacing: 1px;
    }

    .login__item input {
        padding: 12px;
        border-radius: 0;
        border: 1px solid #101010
    }

    .login__actions p {
        text-align: center;
        letter-spacing: 1px;
    }

    .login__actions span {
        cursor: pointer;
        font-weight: bold;
        text-transform: uppercase;
    }

    .login__actions span:hover {
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