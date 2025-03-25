<template>
    <div class="contain">
        <div class="container">
            <div class="button-container">
                <button id="loginbtn" @click="login">login with discord <img src="/public/Discord-Symbol-White.svg" width="20" height="20"></img></button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { api_url } from "../utils/constants.js";

const login = async () => {
  window.location.href = "https://discord.com/oauth2/authorize?client_id=1350792860256960522&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=identify+email";
}

useHead({
  script: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      crossorigin: 'anonymous',
      'data-ad-client': 'ca-pub-2443238834565226',
    },
  ],
})
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
    .button-container button {
      background-color: #5865F2;
      font-size: 20px;
    }
</style>

