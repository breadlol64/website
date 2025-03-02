<template>
    <div class="container">
      <div class="userinfo">
        <img :src="pfpurl" alt="profile picture" class="pfp" />
        <h4 class="username">{{ username }}</h4>
      </div>
      <div class="content">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
      </div>
    </div>
</template>
  
<script setup>
  const props = defineProps({
    postId: { type: String, required: true },
  });

  const username = ref("breadlol64");
  const title = ref("Loading...");
  const content = ref("Loading content...");
  const pfpurl = ref("https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Breaking-Bad-things-Walter-White-feature.jpg");

  const token = useCookie("token");

  const data = $fetch(`${api_url}/post?id=${props.postId}`).then((response) => { 
    title.value = response.title
    content.value = response.content

    username.value = response.authorId.username
    pfpurl.value = response.authorId.profile_pic
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
  