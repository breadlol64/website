<template>
  <div class="container">
    <h1 class="score">{{ score }}</h1>
    <ClickerButton @click="addScore" />
  </div>
</template>

<script setup>
const token = useCookie('token')
const score = ref(0)

const { data: response } = await useFetch(`${api_url}/user`, {
  method: 'GET',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': `${token.value}` 
  },
})
score.value = response.value?.coins

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

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
}

.score {
  margin: 0;
  font-size: 2.5rem;
}
</style>
  