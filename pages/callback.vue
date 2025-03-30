<template>
  <div>
    <p>code: {{ code }}</p>
    <p>please wait...</p>
  </div>
</template>

<script lang="ts" setup>
  const code = useRoute().query.code;

  if(import.meta.client && code) {
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
        let token = useCookie("token", { maxAge: 60 * 60 * 24 * 30, path: "/" })
        token.value = data.token;
        console.log(token.value);
        navigateTo("/");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
</script>

<style>

</style>