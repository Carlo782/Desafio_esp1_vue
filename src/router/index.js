import { createRouter, createWebHistory } from 'vue-router'

import Home from "../pages/HomePage";
import InfoA from "../pages/InfoCat";
import InfoP from "../pages/InfoPokemon";


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/infoCat',
    name: 'infoC',
    component: InfoA
  },
  {
    path: '/infoPokemon',
    name: 'infoP',
    component: InfoP
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
