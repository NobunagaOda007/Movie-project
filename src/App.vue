
<template>
<div class="app">
  
    <router-view  />

</div>
</template>

<script>
import Navigation from "../src/components/Navigation.vue"
export default{
    name: "App",
    components:{
        Navigation
    },
    
  
}

</script>

<style lang="scss">
@import'../node_modules/bootstrap/dist/css/bootstrap.css';
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;


}

.app {
  min-height: 100vh;
  overflow-y: hidden;
  position: relative;
  background: url("../src/assets/background_main.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow-x: hidden;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}


</style>
