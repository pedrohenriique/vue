<template>
  <div>
    <div class="col-xs-12" id="bem-vindo">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Seja bem vindo {{ user.nome }}, escolha uma das opções abaixo:</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4 btn-group-vertical">
        <router-link class="route" style="color: white" to="/saldo">
          <button class="btn btn-primary btn-lg">
            <div class="card">
              <h4 class="card-title">
                Saldo
              </h4>
            </div>
          </button>
        </router-link>
      </div>
      <div class="col-xs-4 btn-group-vertical ">
        <router-link style="color: white" to="/saque">
          <button type="button" class="btn btn-primary btn-lg">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  Saque
                </h4>
              </div>
            </div>
          </button>
        </router-link>
      </div>
      <div class="col-xs-4 btn-group-vertical ">
        <router-link style="color: white" to="/deposito">
          <button type="button" class="btn btn-primary btn-lg">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  Depósito
                </h4>
              </div>
            </div>
          </button>
        </router-link>
      </div>
      <div class="col-xs-4 btn-group-vertical" id="sair">
        <router-link style="color: white" to="/logout">
          <button class="btn btn-danger btn-lg">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  Sair
                </h4>
              </div>
            </div>
          </button>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      user: '',
    }
  },

  mounted() {
    this.atualizar();
  },

  methods: {
    atualizar() {
      const token = localStorage.getItem('token')
      axios.post(`http://localhost:8001/api/dashboard?token=` + token).then(response => {
        if (response.status === 200) {
          this.user = response.data;
        }
      }).catch(error => error)
    },
  }
}

</script>

<style scoped>

#sair {
  padding-top: 30px;
}

#bem-vindo {
  padding-top: 10px;
  padding-bottom: 20px;
}

.route {
  padding: 35px;
  size: 20px;
}
</style>