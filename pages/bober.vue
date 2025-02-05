<template>
    <div class="container">
        <h1 class="score">{{ score }}</h1>
        <ClickerButton :onclickfunc="addscore"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                score: 0
            }
        },
        methods: {
            addscore() {
                this.score++
            }
        }
    }
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem; /* Adds space between score and button */
    padding-top: 2rem; /* Adds some space from the top */
}

.score {
    margin: 0; /* Remove default margin */
    font-size: 2.5rem; /* Make score larger, adjust as needed */
}
</style>
