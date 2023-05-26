<template>
<div>
    <h1>DATOS CURIOSOS DE GATITOS</h1>
    <form @submit.prevent="initialList()">
            <label>cuantos datos curiosos de gatitos quiere generar?</label><br>
            <label >Cantidad:&nbsp;</label>
            <input type="number" v-model="count">&nbsp;
            <button type="submit" class="btn btn-dark"> Generar</button><br><br>
    </form>

    <p v-for="(puss, index) in save_data" :key="index" >{{puss}}</p>
        
    
</div>
</template>

<script>
import axios from 'axios'

export default{
    name: "Info_Cat",
    data(){
        return{
            save_data:[],
            count:0
        }
    },

    methods:{

        initialList(){
            axios.get(`https://meowfacts.herokuapp.com/?lang=esp&count=${this.count}`)
            .then(response =>{
                this.save_data=response.data.data;
                console.log(this.save_data)
            })

        }

    }

}

</script>