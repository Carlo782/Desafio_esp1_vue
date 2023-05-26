<template>
    <div>
       <h1>MOSTRADOR DE POKEMON</h1>
        <form @submit.prevent="initialList()">
            <label>Cuantos pokemons quiere mostrar? <span >(si no se elije numero se mostraran 20)</span></label><br>
            <label >limit:  &nbsp;</label>
            <input type="number" v-model="limit">
            <label > &nbsp; offset: &nbsp;</label>
            <input type="number" v-model="offset">&nbsp;&nbsp;&nbsp;
            <button type="submit" class="btn btn-dark"> Generar</button><br><br>
        </form>
        
       

        <p v-for="pokemon in save_data" :key="pokemon.name">{{ pokemon.name }}</p>

    </div>
    </template>
    
    <script>
    import axios from 'axios'
    
    export default{
        name: "Info_Pokemon",
        data(){
            return{
                save_data:[],
                limit:0,
                offset:0
            }
        }, 
        
        created(){
        },

        methods:{
            initialList(){
                axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`)
                .then(response =>{
                    this.save_data=response.data.results;
                    console.log(this.save_data)
                })
    
            },
        }
    
    }
    
    </script>