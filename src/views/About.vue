<template>
<Navigation />
<header class="welcome bg-top">
                <h1 class="logo">MOVIE CLUB</h1>
</header>
          
<div class="row bg-top">
            <h2 class="offset-1 col-11 text-light logo">About us</h2>
</div>
<div class="row  bg-dark">

    <div class="offset-1 col-10 text-center text-light">
        <h2>Our Vision</h2>
    </div>
    <div class="offset-1 col-10 text-center text-light">
        <p>We want to provide our customers with best experience where you feel like at home and can achieve maximum comfort. To be first choice of cinema for our visitors, best employer to our employees and for business partners trustworthy partner and socially responsible company.</p>    
    </div>
    <div class="offset-1 col-10 text-center text-light">
        <h2>Our Mision</h2>
    </div>
    <div class="offset-1 col-10 text-center text-light">
        <p>To enable for each visitor best quality for their payment trough top services and cinema experience. To provide biggest comfort and pleasurable experience in our theater, provide variety of movies which will satisfy fans of all kinds of movie genres. Movie experience is unique with on board service during showtimes. We take pride in our quality, service, trust, innovativeness and understanding of our customers.</p>
        <p>Movie club brand is continuously trying to expand and find new ways to improve cinema experience.</p>
    </div>
    <div class="offset-1 col-10 text-center text-light ">
        <h2>Join us</h2>
    </div>
    <div class="col-12">
        <iframe class="col-12" src="https://www.google.com/maps/d/embed?mid=1u9ooWmZSMPOeRDaAcU311oW0H-o&ehbc=2E312F" width="100%" allowfullscreen loading="lazy" style="border:0;" height="480"></iframe>
    </div>
    <br />
    
</div>
    <Footer />
</template>


<script>
  import Navigation from '../components/Navigation.vue';
  import Footer from "../components/Footer.vue";
export default{
    name: 'about',
    components: {Navigation,Footer},
}

</script>


<style scoped>
.logo{
    display:inline-block;
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 5px;
    padding: 0.5rem;
    width: fit-content;
    padding-right: calc(0.5rem - 5px);
    border: 2px solid white;
    color: white;
    margin-bottom: 1.5rem;
}

.bg-top{
    background-color: rgb(1, 21, 51);
}

.welcome{
    padding: 1.5rem;
}


</style>