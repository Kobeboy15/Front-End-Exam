<template>
    <div class="navbar-wrapper">
        <div class="navbar-container">
            <div class="logo-container">
                <img src="../assets/company-logo.png" />
            </div>
            <p>Login</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<style scoped>

    .navbar-wrapper {
        background: white;
        
    }

    .navbar-container {
        width: 1366px;
        height: 100px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .logo-container {
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