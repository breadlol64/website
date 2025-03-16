<template>
  <div class="container">
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
      <button @click="buy">Buy for <strong>{{ cost }}₿</strong></button>
      <p id="status"></p>
    </div>
  </div>
</template>

<script setup>
  const buy = async () => {
    const token = useCookie("token")

    const resp = $fetch(`${api_url}/app/add?id=${props.appId}`, { headers: { "Authorization": token.value } }).then((response) => { 
      document.getElementById("status").textContent = response.message
    })
  }

  const props = defineProps({
    appId: { type: String, required: true },
  });

  const title = ref("Loading...");
  const content = ref("Loading content...");
  const cost = ref(0)

  const data = $fetch(`${api_url}/app?id=${props.appId}`).then((response) => { 
    title.value = response.title
    content.value = response.desc
    cost.value = response.cost
  })

</script>


<style scoped>
.container {
display: flex;
flex-direction: column;
border: 3px solid #232323;
border-radius: 20px;
width: 100%; /* Ensure it adapts to the parent width */
max-width: 700px; /* Same as `.posts` */
box-sizing: border-box; /* Ensures padding doesn't overflow */
}
.userinfo {
  display: flex;
  align-self: start;
  margin: 1rem 1rem 0 1rem;
}
.username {
  margin: 0 0 0 1rem;
  align-self: center;
}
.content {
  margin: 0 1rem 1rem;
  text-wrap-mode: wrap;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
h3, p {
  white-space: normal; 
  overflow-wrap: break-word; 
  word-break: break-word; 
}
</style>
