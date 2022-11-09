<template>
<Navigation :getthemes="getThemeTitles" />
<div class="main">
<div class="container-fluid">
      <div class="row ">
         <Moviebox @click="gotomovie(item.Movie_id)" class="col-6 col-md-4 col-lg-3  col-xl-3 rated box " v-for="item in items" :key="item.Movie_id" >
              <img class="text-center align-items-center" :src="`${imageUrl}${item.image}`" alt="movie_image" />
           <template #description>
              <h3 class="text-light text-left align-items-left">{{item.title}}</h3>
                 <div class="row">
                   <p class="text-light col-6 text-left">{{item.year}}</p>
                   <p class="text-light col-6 text-end">{{item.length}} min</p>
               </div>
        </template>      
          </Moviebox>
      </div>
    </div>
    <br />
    <Footer />
</div>
</template>


<script>
  import Navigation from '../components/Navigation.vue';
  import Footer from "../components/Footer.vue";
  import Moviebox from '../components/Moviebox.vue'
import axios from "axios";
import router from '../router';
export default{
    name: 'movies' ,
    components: {Navigation,Moviebox,Footer},
    data(){
      return {
        items: [],
      };
    },
    created(){
      this.getAllMovies();
    },
    methods: { 

        getThemeTitles(themes){
            console.log(themes, "these are movies");
            this.items=themes;
        },

        gotomovie(id){
        router.push('/movie/' + id);
        console.log(id);
      },

        async getAllMovies(){
            try{
            const response = await axios.get("movies");
            this.items = response.data;
        }catch(err){
          console.log(err);
        }
        },

    },
    setup() {
      const imageUrl = new URL("../", import.meta.url).href;
      return {imageUrl };
      },
}

</script>


<style lang="scss" scoped>
.box:hover{
cursor: pointer;
transition: 0.3s ease all;
filter: brightness(80%) contrast(90%);
}

.rated{

  max-height: 40rem;

img{
  max-width: 100%;
  width:100%;
  height: 100%;
  max-height: 80%;
}
}


</style>