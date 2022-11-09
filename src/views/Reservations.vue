<template>
<Navigation />

<div class="container-fluid main">
        <div class="row">
            <div class="col-12 text-light text-center"><h1>Reservations</h1></div>
            <table class="tg">
                        <thead>
                           
                        <tr class="text-light bg-dark ">
                            <th class="tg-0pky">Theater</th>
                            <th class="tg-0pky">Location</th>
                            <th class="tg-0pky">Movie</th>
                            <th class="tg-0pky">Time</th>
                            <th class="tg-0pky">Date</th>
                            <th class="tg-0pky">Seat</th>
                            <th class="tg-0pky">Price</th>
                            <th class="tg-0pky">Remove</th>
                        </tr>
                   
                        </thead>
                        <tbody class="" v-for="item in data" :key="data.Reservations_id">
           
                        <tr class="text-light bg-secondary">
                            <td class="tg-0pky"> {{item.theatre}} </td>
                            <td class="tg-0pky"> {{item.location}} </td>
                            <td class="tg-0pky"> {{item.title}} </td>
                            <td class="tg-0pky"> {{item.start_time}} - {{item.end_time}} </td>
                            <td class="tg-0pky"> {{item.day}}/{{item.month}} </td>
                            <td class="tg-0pky"> {{item.name}} </td>
                            <td class="tg-0pky"> {{item.price}}$ </td>
                            <td  class="tg-0pky"> <button @click="deleteReservation(item.Reservations_id,item.seat_number)" @mouseleave="getReservations()"> Delete </button> </td>
                        </tr>
                        
                      
        </tbody>
        </table>
        </div>
</div>
<br />
    <Footer />
</template>

<script>
import Navigation from '../components/Navigation.vue';
import axios from 'axios';
import Footer from "../components/Footer.vue";
import router from '../router';
export default{
    name: 'reservations',
    components: {Navigation,Footer},
    data(){
        return{
            customer_id: '',
            email: '',
            data:'',
        }
    },

    created(){
        this.getUserbyEmail();
    },
    mounted(){
    },
    methods:{
        async resetSeat(seat){
            try{
                await axios.put('movies/seat/' + seat)
            }catch(err){
                console.log(err)
            }
        },
        async deleteReservation(id,seat){
            try{ await axios.delete('movies/reserved/' + id);
            this.deleteTicket(seat);
            this.resetSeat(seat);
            alert("Your reservation has been removed");
            }catch(err){
                console.log(err)
            }
           
        },

        async deleteTicket(seat){
            try{ await axios.delete('/movies/reserved/ticket/' + seat);
            }catch(err){
                console.log(err)
            }
        },

        async getReservations(){
            try{
                const response = await axios.get('movies/allresevations/' + this.customer_id);
                this.data = response.data;
                console.log(this.data,response.data,response.name);
            }catch(err){
                console.log(err);
            }
        },
        
        async getUserbyEmail(){
        try{
            const response = await axios.get('specificuser');
            this.customer_id = response.data.Customer_id;
            this.getReservations();
        }catch(err){
            console.log(err);
        }
    },

    async getEmail(){
        try{
            const response = await axios.get('email');
            this.email = response.data;
        }catch(err){
            console.log(err);
        }
    },
    },
}

</script>  

<style scoped>

.main{
height:70vh;
}

.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:7px 2px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:7px 2px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:center;vertical-align:middle}

button{
display:block;
width:fit-content;
margin: 0 auto;
font-size: 1rem;
font-weight: 700;
color:rgb(196, 181, 181);
background-color: darkred;
padding: 0.3rem;
border-radius: 0.5rem;
cursor: pointer;
transition: 0.2s ease;
}

button:hover {
background-color: rgb(1, 1, 58);
}

</style>