<template>
    <div class="register__form">
        <div class="register__container">
            <div class="register__title">
                <h2>Register</h2>
            </div>
            <div class="register__item">
                <p>Email</p>
                <input type="text" v-model="registerEmail"/>
            </div>
            <div class="register__item">
                <p>Password</p>
                <input type="password" v-model="registerPass"/>
            </div>
            <div class="register__item">
                <p>Confirm Password</p>
                <input type="password" v-model="registerConfirm"/>
            </div>
            <div class="register__actions" >
                <input 
                    type="button" 
                    value="register"
                    @click="registerUserIn"
                />
                <p>Already have an account? 
                    <span @click="openLoginForm">Login Here</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RegisterForm',

        data() {
            return{
                registerEmail: '',
                registerPass: '',
                registerConfirm: ''
            }
        },

        methods: {
            openLoginForm() {
                this.$router.push({name: 'login'})
            },

            registerUserIn() {
                this.$attrs.navRef.logUserIn()
            }
        }
    }
</script>

<style scoped>

    h2, p {
        margin: 0;
    }

    .register__form {
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

    .register__container {
        font-family: 'Montserrat', sans-serif;

        animation-name: slide;
        animation-duration: 1s;
    }

    .register__title {
        text-transform: uppercase;
        margin-bottom: 50px;
    }

    .register__title h2 {
        letter-spacing: 2px;
    }

    .register__item {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .register__item p {
        font-size: 18px;
        margin: 5px 0;
        letter-spacing: 1px;
    }

    .register__item input {
        padding: 12px;
        border-radius: 0;
        border: 1px solid #101010
    }

    .register__actions p {
        text-align: center;
        letter-spacing: 1px;
    }

    .register__actions span {
        cursor: pointer;
        font-weight: bold;
        text-transform: uppercase;
    }

    .register__actions span:hover {
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