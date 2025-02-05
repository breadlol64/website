<template>
    <div class="contain">
        <div class="container">
            <input type="text" placeholder="username" name="username" id="usrfield"> <br>
            <input type="password" name="password" id="pwfield" placeholder="password"> <br>
            <div class="button-container">
                <button id="loginbtn" @click="">login</button>
                <button id="regbtn" @click="">register</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            var usr = document.getElementById("usrfield").value;
            var pw = document.getElementById("pwfield").value;
        },
        reg() {
            var usr = document.getElementById("usrfield").value;
            var pw = document.getElementById("pwfield").value;
        }
    }
}
</script>

<style scoped>
    .contain {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 95vh;
    }
    .container {
        gap: 10px;
        padding: 50px;
        border: 3px solid #232323;
        border-radius: 10px;
        box-shadow: 5px 5px 5px black;
    }
    .button-container {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }
</style>

