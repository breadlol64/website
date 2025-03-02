<template>
    <div class="container">
        <input type="text" id="title" placeholder="Title"> 
        <textarea id="content" placeholder="Content"></textarea>
        <button @click="post">Otpravit</button>
    </div>
</template>
  
<script setup>
    const post = async () => {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const token = useCookie('token');
        try {
            const { data: response } = await useFetch(`${api_url}/post/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token.value}`,
                },
                body: JSON.stringify({
                    title,
                    content,
                }),
                server: false
            });
            console.log('Post created:', response);
            window.location.reload();
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };
    
</script>
  
<style scoped>
    .container {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 3px solid #232323;
        border-radius: 20px;
        width: 100%; /* Ensure it adapts to the parent width */
        max-width: 700px; /* Same as `.posts` */
        box-sizing: border-box; /* Ensures padding doesn't overflow */
    }
    #title, #content, button {
        width: 600px;
    }
</style>
  