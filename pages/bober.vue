<template>

  <div class="container">
    <h1 class="score">{{ score }}</h1>
    <ClickerButton @click="addScore" />
  </div>
</template>

<script setup>
const token = useCookie('token')
const score = ref(0)

const { data: response } = await useFetch(`${api_url}/user/me`, {
  method: 'GET',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': `${token.value}` 
  },
})
score.value = response.value?.balance

const addScore = async () => {
  score.value++
  
  const { data: response } = await useFetch(`${api_url}/click`, {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `${token.value}` 
    },
  })
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
}

.score {
  margin: 1rem;
  font-size: 2.5rem;
  background: none;
  display: inline-block;
  text-shadow: 
    0 0 20px #ff1f4b,
    0 0 30px #ff1f4b,
    0 0 40px #ff1f4b;
}
</style>
  