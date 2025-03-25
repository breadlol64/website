<template>
  <div>
    <p>code: {{ code }}</p>
  </div>
</template>

<script lang="ts" setup>
  const code = useRoute().query.code;

  if(process.client && code) {
    fetch(`${api_url}/auth/discord?code=${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log(data);
        // localStorage.setItem("token", data.token);
        // window.location.href = "/";
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
</script>

<style>

</style>