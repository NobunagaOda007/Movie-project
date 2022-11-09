import {createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Movie from '../views/Movie.vue'
import Movies from '../views/Movies.vue'
import Reservation from '../views/Reservation.vue'
import Reservations from '../views/Reservations.vue'

const routes =[
{
    path: '/',
    name: 'Home',
    component: Home,
/*     meta: {
            requiresAuth: true
    }   */
},
{   
    path: '/login',
    name: 'login',
    component: Login,

},
{   
    path: '/register',
    name: 'register',
    component: Register,

},
{   
    path: '/movie/:id',
    name: 'movie',
    component: Movie,
    props: true,

},
{   
    path: '/reservation/:Show_id',
    name: 'reservation',
    component: Reservation,
    props: true,

},
{   
    path: '/reservations',
    name: 'reservations',
    component: Reservations,

},
{   
    path: '/allmovies',
    name: 'movies',
    component: Movies,

},

{   
    path: '/about',
    name: 'about',
    component: About,

},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});




export default router;