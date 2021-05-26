<template>
  <div></div>
</template>

<script>

import axios from "axios";

export default {
  name: "Logout",

  mounted() {

    const token = localStorage.getItem('token')

    axios.post(`http://localhost:8001/api/logout?token=` + token).then(response => {
      if (response.status === 200) {
        this.$router.push({name: 'Login'});
      }

    }).catch(error => error)
  }

}
</script>

<style scoped>

</style>