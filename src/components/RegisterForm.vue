<template>
    <div class="register-container">
        <div class="register-form">
            <div class="header-title">
                <h2 key="title-key">Register</h2>
            </div>
            <div class="register register-email">
                <p>Email</p>
                <input type="text" v-model="registerEmail"/>
            </div>
            <div class="register register-pass">
                <p>Password</p>
                <input type="password" v-model="registerPass"/>
            </div>
            <div class="register register-pass">
                <p>Confirm Password</p>
                <input type="password" v-model="registerConfirm"/>
            </div>
            <div class="register-actions" >
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

    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }
    .slide-enter, .slide-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .register-container {
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

    .register-form {
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

    .register {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .register p {
        font-size: 18px;
        margin: 5px 0;
        letter-spacing: 1px;
    }

    .register input {
        padding: 12px;
        border-radius: 0;
        border: 1px solid #101010
    }

    .register-actions p {
        text-align: center;
        letter-spacing: 1px;
    }

    .register-actions span {
        cursor: pointer;
        font-weight: bold;
        text-transform: uppercase;
    }

    .register-actions span:hover {
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