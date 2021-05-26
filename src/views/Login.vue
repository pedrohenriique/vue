<template>
  <div class="form-horizontal">
    <div class="form-group">
      <label for="agencia" class="col-xs-2 control-label">Agência:</label>
      <div class="col-xs-10">
        <input type="text" v-model="form.agencia" id='agencia' class="form-control" placeholder="Agência">
      </div>
    </div>
    <div class="form-group">
      <label for="conta" class="col-xs-2 control-label">Conta:</label>
      <div class="col-xs-10">
        <input type="text" v-model="form.conta" id='conta' class="form-control" placeholder="Conta">
      </div>
    </div>
    <div class="form-group">
      <label for="password" class="col-xs-2 control-label">Senha:</label>
      <div class="col-xs-10">
        <input type="password" v-model="form.password" id='password' class="form-control" placeholder="Senha">
      </div>
    </div>
    <button @click="login" class="btn btn-sucess">Entrar</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        conta: '',
        agencia: '',
        password: ''
      }
    }
  },
  mounted() {

  },
  methods: {
    login() {
      axios.post(`http://localhost:8001/api/login`, this.form).then(response => {
        if (response.status === 200) {
          localStorage.token = response.data.access_token;
          this.$router.push({name: 'Dashboard'});
        }
      })
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
