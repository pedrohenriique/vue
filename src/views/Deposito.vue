<template>
    <div class="container">
        <div class="row">
            <div class="form-group text-left">
                <label>Valor para Depósito:</label>
                <input type="text" v-model="form.deposito" class="form-control" placeholder="Valor">
            </div>
        </div>
        <button @click="fazerDeposito()" class="btn btn-success">Confirmar</button>
        <div class="row">
            <div class="alert alert-success" role="alert" v-if="preload">Deposito feito com sucesso!</div>
            <div class="alert alert-danger" role="alert" v-if="erro">O valor não pode ser ZERO ou o campo está vazio.
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Deposito",
        data() {
            return {
                preload: false,
                erro: false,
                form: {
                    deposito: '',
                    id: '',
                },
            }
        },

        mounted() {
          this.buscarSaldo();
        },

        methods: {
            buscarSaldo() {
                const token = localStorage.getItem('token');
                axios.post(`http://localhost:8001/api/saldo?token=` + token).then(response => {
                    if (response.status === 200) {
                        this.form.id = response.data.saldo.id;
                    }
                }).catch(error => error)
            },
            fazerDeposito() {
                const token = localStorage.getItem('token');
                if (this.form.deposito > 0) {
                    axios.put(`http://localhost:8001/api/deposito?token=` + token, this.form).then(response => {
                        if (response.status === 200) {
                            this.form.deposito = [];
                            this.preload = true;
                            this.erro = false;
                        }
                    }).catch(error => error)
                } else {
                    this.preload = false;
                    this.erro = true;
                }
            }
        }

    }
</script>

<style scoped>

</style>