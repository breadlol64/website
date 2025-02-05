<template>
  <div>
    <button class="circle-btn" aria-label="Circle Button" @click="onclickfunc">
        <img src="/public/bober.png" alt="Button Icon">
    </button>
  </div>
</template>

<script>
export default {
    name: 'ClickerButton',
    props: {
        onclickfunc: {
            type: Function,
            required: true
        }
    }
}
</script>

<style>
    .circle-btn {
        /* Create circle shape */
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden; /* Hide image overflow */
        
        /* Remove default button styles */
        border: none;
        padding: 0;
        background: none;
        -webkit-tap-highlight-color: transparent;
        
        /* Add hover effect */
        cursor: pointer;
        transition: transform 0.2s;
    }
    .circle-btn:hover {
        transform: scale(1.05);
    }
    .circle-btn img {
        /* Make image fill button */
        width: 100%;
        height: 100%;
        object-fit: cover; /* Maintain aspect ratio */
    }
    .circle-btn:active {
            transform: scale(0.9); /* Shrink to 90% of original size */
        }
</style>