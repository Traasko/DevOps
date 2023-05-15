<style>
    *{
        color: white;   
        text-align: center;
    }
</style>

<template>
    <h1> HOME  </h1>
  <ul> Users :
    <li :id="user.id" v-for="(user, index) in users" :key="index">{{user.email}}</li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },
  async mounted(){
    this.users = await this.getUsers();
  },
  methods: {
    async getUsers(){
      let users = await axios({
            method: "get",
            url: process.env.VUE_APP_API_URL + "users/",
      });

      console.log("users", users);

      return users.data.users;
    }
  }
}
</script>