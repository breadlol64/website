<template>
  <div class="app-container">
    <div class="sidebar">
      <NuxtLink to="/"><div class="sidebar-item">profile</div></NuxtLink>
      <NuxtLink to="/bober"><div class="sidebar-item">🤑bober kombaet🤑</div></NuxtLink>
      <NuxtLink to="/posts"><div class="sidebar-item">posts</div></NuxtLink>
    </div>
    <div class="page-content">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 3px solid #232323;
  border-radius: 20px;
  width: 225px;
}

.sidebar-item {
  display: flex;
  margin: 10px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color:#232323;
  border-radius: 5px;
}

.sidebar-item:hover {
  background-color: #333;
  cursor: pointer;
}

.page-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
