<template>
  <Navigation />

  <div class="container-fluid">
      <div class="row ">
         <Moviebox  class="col-12 col-sm-12 col-md-6 col-lg-6  col-xl-6  rated "  >
              <img class="text-center align-items-center col-12" :src="`${imageUrl}${items.image}`" alt="movie_image" />
              <h4 class="text-light col-12 text-center">Showtimes</h4>
              <div class="row">
                     <div class="col-6 align-items-center text-center" v-for="show in shows" :key="shows.Show_id">
                         <button 
                         @click="checkloggedon(show.Show_id)"
                          class="col-12 button-40 " >
                          {{show.day}}/{{show.month}}/{{show.year}} {{show.start_time}} - {{show.end_time}}
                        </button>
                  </div>
              </div>
          </Moviebox>
          <div class ="col-12 col-sm-12 col-md-6 col-lg-6  col-xl-6">
                <div class="row">
                     <h3 class="text-light text-center align-items-center col-12" >Name : {{items.title}}</h3>

                         <p class="text-light col-12 text-left"><i class="fas fa-solid fa-star"></i> {{items.rating}}</p>
                         <p class="text-light col-12 text-left">{{items.description}}</p>
                         <p class="text-light col-12 text-left">Duration: {{items.length}} min</p>
                         <p class="text-light col-12 text-left">Genre: {{items.genre}}</p>
                         <p class="text-light col-12 text-left">Release : {{items.year}}</p>
                         <p class="text-light col-12 text-left">Country : {{items.country}}</p>

                 </div>
            </div>    
         </div>
    </div>
    <br />
    <Footer />
</template>

<script>
 import axios from 'axios';
import Navigation from '../components/Navigation.vue';
import Moviebox from '../components/Moviebox.vue';
import Footer from "../components/Footer.vue";
import router from '../router';
export default {
   props: ['id'],
    name: 'movie',
    components: {Navigation, Moviebox,Footer},
    data(){
        return {
          items: [],
          shows: [],
          loggedon: false,
        }
    },
    mounted(){
         this.fetchMovieById();
         this.getShowsForMovie();
        },
    methods: {

        async checkloggedon(Show_id){
            try{
             const  response =  await axios.get('logstatus');
              if(response.data == "logged"){
                this.loggedon=true;
                this.gotoreservation(Show_id);
                console.log(response, "response from loggedon");
               
              }
              else{
                console.log("not logged in hii");
                this.loggedon=false;
                alert("Please log in before reserving seats");
                router.push('/login');
                
              }

        }catch(err){
            console.log(err, "This is some issue");
        }
            
        },

        gotoreservation(Show_id){
        router.push('/reservation/' + Show_id);
      },
      async fetchMovieById(){
      const response = await axios.get('movies/' + this.id);
      this.items = response.data;
      console.log(this.items);
       },
       async getShowsForMovie(){
        try{
            const response = await axios.get('movies/shows/' + this.id);
            this.shows = response.data;
            console.log(this.shows);
        }catch(err){
            console.log(err);
        }
    }
    },
    setup() {
    
      const imageUrl = new URL("../assets/", import.meta.url).href;
      return { imageUrl };
      },
}
</script>

<style lang="scss" scoped>
.rated{

img{
  max-width: 100%;
  width:100%;
  height: auto;
  max-height: 78vh;
  object-fit: contain;
}
}


/* CSS */
.button-40 {
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: 2rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 600;
  margin-top:5px;
  line-height: 1.5rem;
  padding: .5rem 1rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}

.button-40:hover {
  background-color: #374151;
}

.button-40:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

@media (min-width: 768px) {
  .button-40 {
    padding: .75rem 1.5rem;
  }
}
</style>