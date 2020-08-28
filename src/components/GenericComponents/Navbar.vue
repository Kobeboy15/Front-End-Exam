<template>
    <div class="navbar">
        <div class="navbar__container">
            <div class="logo__container">
                <img src="../../assets/company-logo.png" />
            </div>
            <p
                v-if="getCurrentRoute == 'login' || getCurrentRoute == 'register'"
                @click="goToDashboard"
            >
                Close
            </p>
            <p 
                v-else-if="!isLoggedIn"
                @click="openLoginForm"
            >
                Login
            </p>
            <p 
                v-else
                @click="logUserOut"
            >
                Logout
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',

        data() {
            return{
                isLoggedIn: false,
            }
        },

        methods: {
            openLoginForm() {
                this.$router.push({path: '/login'})
            },

            goToDashboard() {
                this.$router.push({name: 'home'})
            },

            logUserIn() {
                this.isLoggedIn = true;
                this.$router.push({name: 'home'});
            },

            logUserOut() {
                this.isLoggedIn = false;
                this.$router.push({name: 'home'}).catch(error => {
                    if (error.name != "NavigationDuplicated") {
                        throw error;
                    }
                });
            },
        },

        computed: {
            getCurrentRoute() {
                return this.$route.name;
            }
        }
    }
</script>

<style scoped>

    .navbar {
        background: white;
        
    }

    .navbar__container {
        width: 1366px;
        height: 100px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .logo__container {
        flex: 1;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        color: #101010;
        font-size: 18px;
        margin: 0;

        cursor: pointer;
    }

</style>