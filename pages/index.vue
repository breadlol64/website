<template>
    <div class="userinfo">
        <img :src="pfpurl" alt="profile picture" class="pfp">
        <h2 class="username">{{ username }}</h2>
    </div>
    <div class="settings">
        <div class="newpfp">
            <input type="text" id="pfpurl" placeholder="Profile Picture URL">
            <button @click="submitpfp">Submit</button>
        </div>
        <br>
        <input type="text" id="recipient" placeholder="komu otpravit">
        <input type="text" id="amount" placeholder="skolko otpravit">
        <button @click="send">Send</button>
        <p id="status"></p>
        <br>
        <button @click="logout">Log out</button> 
    </div>
</template>

<script setup>
    const token = useCookie("token")
    const username = ref("dddd")
    const pfpurl = ref("")
    const verified = ref(false)

    const { data: response } = await useFetch(`${api_url}/user/me`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `${token.value}` 
      },
    })

    username.value = response.value?.username
    pfpurl.value = response.value?.avatar
    verified.value = response.value?.verified

    const submitpfp = async () => {
        const newpfp = document.getElementById("pfpurl").value
        const { data: response } = await useFetch(`${api_url}/setpfp?url=${newpfp}`, {
          method: 'get',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `${token.value}` 
          },
        })
        pfpurl.value = newpfp
    }

    const logout = () => {
        token.value = null
        navigateTo("/login")
    }

    const send = async () => {
        const recipient = document.getElementById("recipient").value
        const amount = document.getElementById("amount").value
        const { data: response } = await useFetch(`${api_url}/send/${recipient}?amount=${amount}`, {
          method: 'get',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `${token.value}` 
          },
        })
        document.getElementById("status").innerText = response.value?.message
        // !!! ADD COMMISION !!!
    }
</script>

<style scoped>
    .pfp {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }
    .userinfo {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        margin: 1.5rem;
        padding: 1rem;
        width: 80vh;
        border: 2px solid #191528;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(100, 100, 100, 1);
    }
    .username {
        align-self: center;
        margin: 1rem;
    }
    .settings {
        display: flex;
        align-self: center;
        justify-self: start;
        flex-direction: column;
    }
    
</style>
