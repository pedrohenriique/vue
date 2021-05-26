<template>
    <div>
        <h2>{{user.nome}} o seu saldo é de R$: {{this.saldo}}</h2>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Saldo",
        data() {
            return {
                saldo: '',
                user: '',
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
                        this.saldo = response.data.saldo.saldo;
                        this.user = response.data.user;
                    }
                }).catch(error => error)
            },
        }

    }
</script>

<style scoped>

</style>