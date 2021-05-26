<template>
    <div class="container">
        <h2>{{user.nome}} o seu saldo é de R$: {{this.saldo}}</h2>
        <div class="row">
            <div class="form-group text-left">
                <label>Valor para Saque:</label>
                <input type="text" v-model="form.saque" class="form-control" placeholder="Valor">
            </div>
        </div>
        <button @click="fazerSaque()" class="btn btn-success">Confirmar</button>
        <div class="row">
            <div class="alert alert-success" role="alert" v-if="preload">Saque feito com sucesso!</div>
            <div class="alert alert-danger" role="alert" v-if="erro">O valor não pode ser ZERO, vazio ou ser maior do que o seu saldo.
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Saque",
        data() {
            return {
                preload: false,
                erro: false,
                form: {
                    saque: '',
                    id: '',
                },
                saldo: '',
                user: '',
            }
        },

        mounted() {
            this.veSaldo();
        },

        methods: {
            veSaldo() {
                const token = localStorage.getItem('token');
                axios.post(`http://localhost:8001/api/saldo?token=` + token).then(response => {
                    if (response.status === 200) {
                        this.saldo = response.data.saldo.saldo;
                        this.form.id = response.data.saldo.id;
                        this.user = response.data.user;
                    }else{
                        this.$router.push({name: 'Login'});
                    }
                }).catch(error => error)
            },
            fazerSaque() {
                const token = localStorage.getItem('token');
                if (this.form.saque > 0 || this.form.saque <= this.saldo) {
                    axios.put(`http://localhost:8001/api/saque?token=` + token, this.form).then(response => {
                        if (response.status === 200) {
                            this.form.saque = [];
                            this.preload = true;
                            this.erro = false;
                            this.veSaldo();
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