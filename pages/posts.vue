<template>
  <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2443238834565226"
     crossorigin="anonymous"></script>
  </head>

  <div class="posts-layout">
    <div class="posts">
      <NewPost />
      <Post v-for="id in postIds" :key="id" :post-id="id" />
    </div>
  </div>
</template>

<script setup>
const postIds = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(`${api_url}/post/ids`);
    if (response.ok) {
      postIds.value = await response.json();
    } else {
      console.error('Failed to fetch post IDs:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching post IDs:', error);
  }
});
</script>

<style scoped>
.posts-layout {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

/* Center the posts container with a max-width for larger screens */
.posts {
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
  .posts {
    max-width: 100%;
    padding: 0 0rem;
  }
}
</style>
