<template>
    <div class="contain">
        <div class="container">
            <input type="text" placeholder="username" name="username" id="usrfield"> <br>
            <input type="password" name="password" id="pwfield" placeholder="password"> <br>
            <div class="button-container">
                <button id="loginbtn" @click="login">login</button>
                <button id="regbtn" @click="reg">register</button>
            </div>
            <div id="status">{{ response }}</div>
        </div>
    </div>
</template>

<script>
import { api_url } from "../utils/constants.js";

export default {
  data() {
    return {
      response: "",
    };
  },
  setup() {
    const tokenCookie = useCookie("token", { maxAge: 60 * 60 * 24 * 14, path: "/" });

    const login = async () => {
      const usr = document.getElementById("usrfield").value;
      const pw = document.getElementById("pwfield").value;

      try {
        const { data: response } = await useFetch(`${api_url}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: usr, password: pw }),
        });

        if (response.value?.token) {
          tokenCookie.value = response.value.token;
          document.getElementById("status").innerHTML = "logged in";
        } else {
          document.getElementById("status").innerHTML = response.value;
        }
      } catch (error) {
        document.getElementById("status").innerHTML = "An error occurred.";
      }
    };
    const reg = async () => {
      const usr = document.getElementById("usrfield").value;
      const pw = document.getElementById("pwfield").value;

      try {
        const { data: response } = await useFetch(`${api_url}/reg`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: usr, password: pw }),
        });
        console.log(response);
        if (response.value?.msg == "User registered successfully") {
          login();
        } else {
          document.getElementById("status").innerHTML = response.value;
        }
      } catch (error) {
        document.getElementById("status").innerHTML = "An error occurred.";
      }
    };

    return {
      login, reg
    };
  },
};
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

