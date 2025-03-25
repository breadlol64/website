<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2443238834565226"
     crossorigin="anonymous"></script>

<template>
  <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2443238834565226"
     crossorigin="anonymous"></script>
  </head>

  <div class="apps-layout">
    <div class="apps">
      <App v-for="id in appIds" :key="id" :app-id="id" />
    </div>
  </div>
</template>

<script setup>
const appIds = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(`${api_url}/app/ids`);
    if (response.ok) {
      appIds.value = await response.json();
    } else {
      console.error('Failed to fetch app IDs:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching app IDs:', error);
  }
});
</script>

<style scoped>
.apps-layout {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

/* Center the posts container with a max-width for larger screens */
.apps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
}

/* Media query for mobile devices */
@media (max-width: 600px) {
  .apps {
    max-width: 100%;
    padding: 0 0rem;
  }
}
</style>
