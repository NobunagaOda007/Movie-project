<template>
<div class="container-fluid bg-blue">
    <br />
    <div class="row text-light ">
        <div class="col-12 col-md-4 text-center ">
            <h3 >LINKS</h3>
            <p><router-link class="link " :to="{name: 'movies'}">Movies</router-link></p>
            <p><router-link class="link " :to="{name: 'Home'}">Top Rated Movies</router-link></p>
            <p><router-link class="link " :to="{name: 'about'}">About us</router-link></p>
        </div>
        <div class="col-12 col-md-4 text-center ">
        <h3 >MEMBERSHIP</h3>
        <p><router-link class="link " :to="{name: 'login'}">Login</router-link></p>
        <p><router-link class="link " :to="{name: 'register'}">Register</router-link></p>
        </div>
        <div class="col-12 col-md-4 text-center ">
        <h3 >SHARE US</h3>
        <p> <a class="link ">Instagram</a> </p>
        <p > <a class="link ">Facebook</a> </p>
        </div>
    </div>
   
</div>


</template>


<script>

export default{
    name: "footers",
    data() {
        return {
         
        };
    },
    methods: {
 
    },
}

</script>



<style lang="scss" scoped>
.bg-blue{
    background-color: rgba(1, 1, 17, 0.9);
    padding-bottom: 1rem;
}
 .link{
            font-weight: 500;
            color: #fff;
            list-style: none;
            text-decoration: none;
           

            font-size: 16px;
            transition: .5s ease all;
            padding-bottom: 2px;
            cursor: pointer;
            
 }
 .link:hover{
    filter: brightness(80%);
    transition: 0.3s ease all;
 }

</style>