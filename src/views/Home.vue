<template>
  <Navigation />
    <div class="home">

      <Carousel :navigation="true" :pagination="true" :startAutoPlay="true" :timeout="5000" class="carousel " v-slot="{currentSlide}">
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="`${imageUrl}${slide}`" alt="">
         </div>
        </Slide>
      </Carousel>
  
     <br />

     <br />
      <div class="container-fluid">
      <div class="row ">
        <h2 class="col-12 text-left margin-left text-light"> Top Rated </h2>
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
  
  <script >

  // @ is an alias to /src
  import Navigation from '../components/Navigation.vue';
import Carousel from '../components/Carousel.vue'
import Footer from "../components/Footer.vue";
  import Slide from '../components/Slide.vue'
import Moviebox from '../components/Moviebox.vue'
import axios from "axios";
import router from '../router';
  
  export default {
    name: 'Home',
    components: { Carousel, Slide, Moviebox,Navigation,Footer },
    data(){
      return {
        items: [],
      };
    },
    created(){
      this.getRatedMovies();
    },
    methods: {


      gotomovie(id){
        router.push('/movie/' + id);
        console.log(id);
      },
      //get top rated movies
      async getRatedMovies(){
        try{
            const response = await axios.get("movies/topRated");
            this.items = response.data;
        }catch(err){
          console.log(err);
        }
      },
    },
    setup() {
      const carouselSlides = ['promo2.webp' , 'promo1.webp', 'promo3.jpeg'];
      const imageUrl = new URL("../", import.meta.url).href;
      return { carouselSlides, imageUrl };
      },
  };
  
  </script>
  
  <style lang="scss" scoped>

.box:hover{
cursor: pointer;
transition: 0.3s ease all;
filter: brightness(80%) contrast(90%);
}

.carousel{
  position: relative;
  max-height: 80vh;
  height: 70vh;
  width: 100%;
  background-color: black;
  @media(max-width:768px){
    height: 40vh;
  }
  @media(min-width:1920px){
    height:80vh;
  }

  .slide-info {
position: absolute;
top: 0;
left: 0;
width: 100%;
max-height: 100%;
height: 100%;

    img{
      width: 100%;
      height: 100%;
      object-fit: fill;
      
    }
  }
}
.rated{

  img{
    max-width: 100%;
    width:100%;
    height: 100%;
    max-height: 80%;
  }
}



  </style>
  