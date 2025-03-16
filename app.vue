<template>
  <div class="app-container">
    <div :class="['sidebar', { collapsed: isCollapsed }]">
      <!-- Toggle Button -->
      <button class="toggle-btn" @click="toggleSidebar">
        {{ isCollapsed ? '>' : '<' }}
      </button>
      <!-- Sidebar Links -->
      <NuxtLink to="/"><div class="sidebar-item">profile</div></NuxtLink>
      <NuxtLink to="/bober"><div class="sidebar-item">🤑bober kombaet🤑</div></NuxtLink>
      <NuxtLink to="/posts"><div class="sidebar-item">posts</div></NuxtLink>
      <br>
      <NuxtLink to="/store"><div class="sidebar-item">store</div></NuxtLink>

    </div>
    <div class="page-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isCollapsed = ref(false)

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

/* Base sidebar style */
.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 3px solid #232323;
  border-radius: 20px;
  width: 225px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #1a1a1a;
  padding-top: 20px;
  transition: width 0.3s ease;
}

/* Collapsed sidebar style */
.sidebar.collapsed {
  width: 35px; /* Adjust the collapsed width as needed */
}

/* Sidebar item styles */
.sidebar-item {
  display: flex;
  margin: 10px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #232323;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  transition: opacity 0.3s ease;
}

/* Hide sidebar items when collapsed */
.sidebar.collapsed .sidebar-item {
  opacity: 0;
  pointer-events: none;
}

/* Toggle button styles */
.toggle-btn {
  margin: 10px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}

/* Page content adjustment */
.page-content {
  margin-left: 225px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 20px;
  transition: margin-left 0.3s ease;
}

/* Adjust page content when sidebar is collapsed */
.sidebar.collapsed + .page-content {
  margin-left: 60px;
}
</style>
