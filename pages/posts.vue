<template>
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
  .posts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
   width: 100%; /* Ensure the container does not shrink or grow unnecessarily */
    max-width: 700px; /* Set a reasonable max width to control post size */
  }

</style>
