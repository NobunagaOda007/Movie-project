<template>
<header :class="{'scrolled-nav': scrolledNav}">
    <nav>
        <div class="branding">
         <img src="@/assets/Club_logo.png" alt="Logo" >
        </div>
         <ul v-if="!mobile" class="navigation">
             <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
             <li><router-link class="link" :to="{name: 'about'}">About</router-link></li>
             <li v-if="loggedon" ><router-link  class="link" :to="{name: 'reservations'}">Reservations</router-link></li>
             <li @click ="isOpen = true" @mouseleave="isOpen = false" ><router-link class="link" :to="{name: 'movies'}">Movies </router-link> <svg viewBox="0 0 1030 638" width="10"><path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path></svg>
                <transition name="fade" appear>
                    <li class="sub-menu" v-if="isOpen" >
                        <div v-for="(genre, i) in genres" :key="i" class="">
                        <router-link @click="getthemes(themes)" @mouseenter="getMoviesOfGenre(genre.title)" :to="{name: 'movies'}" class="link">{{genre.title}}</router-link>
                        </div>
                    </li>
                </transition>
            </li>
             <li @click="Logout" v-if="loggedon" ><a class="link">  Logout</a></li>
             <li   v-else><router-link class="link" :to="{name: 'login'}">Login</router-link></li>
         </ul>
         <div class="icon">
            <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav }"></i>
         </div>
         <transition name="mobile-nav">
            <ul v-if="mobileNav" class="dropdown-nav bg-dark ">
             <li><router-link class="link text-light" :to="{name: 'Home'}">Home</router-link></li>
             <li><router-link class="link text-light" :to="{name: 'about'}">About</router-link></li>
             <li @click ="isOpen = !isOpen"  ><router-link class="link text-light " :to="{name: 'movies'}">Movies</router-link> <svg viewBox="0 0 1030 638" width="10"><path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path></svg>
                <transition name="fade" appear>
                    <li class="" v-if="isOpen" >
                        <div v-for="(genre, i) in genres" :key="i" class="">
                            <br />
                        <router-link @click="getthemes(themes)" @mouseenter="getMoviesOfGenre(genre.title)" :to="{name: 'movies'}" class="link text-light">{{genre.title}}</router-link>
                        <br /> 
                        </div>
                    </li>
                </transition>
            </li>
             <li v-if="loggedon"><router-link class="link text-light" :to="{name: 'reservations'}">Reservations</router-link></li>
             <li @click="Logout" v-if="loggedon"><a class="link text-light">  Logout</a></li>
             <li  v-else><router-link class="link text-light" :to="{name: 'login'}">Login</router-link></li>
         </ul>
         </transition>
    </nav>

</header>
</template>


<script>
import {useRouter} from 'vue-router';
import axios from 'axios';


export default{
    name: "navigation",
    props: {
        getthemes:Function
    },
    data() {
        return {
            isOpen: false,
            scrolledNav: null,
            mobile: false,
            mobileNav: null,
            windowWidth: null,
            loggedon: false,
            themes: [],
            genres: [
                {
                title: 'Sci-fi',
            },
            {
                title: 'Action',
            },
            {
                title: 'Thriller',
            },
            {
                title: 'Horror',
            },
            {
                title: 'Drama',
            },
        ]
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
        this.checkloggedon();
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    
    },

    methods: {
     
        async getMoviesOfGenre(genre){
            try{
            const response = await axios.get("movies/genres/" + genre);
            this.themes = response.data;
        }catch(err){
          console.log(err);
        }
        },

        async checkloggedon(){
            try{
             const  response =  await axios.get('logstatus');
              if(response.data == "logged"){
                this.loggedon=true;
                console.log(response, "response from loggedon");
               
              }
              else{
                console.log("not logged in hii");
                this.loggedon=false;
                console.log(this.loggedon, "logged on status - not");
                
              }

        }catch(err){
            console.log(err, "This is some issue");
        }
            
        },

        

       async Logout() {
            try{
                const response = await axios.get('loggingout');
                this.loggedon = false;
                 alert("You have been logged out");
            }catch(err){
                console.log(err);
            }
        },

        async checkAndLogout(){
            await this.Logout();
            await this.checkloggedon();
         
          
        },

        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 768) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
    },
};
</script>


<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active{
    transition:  .5s ease-in-out;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.sub-menu{
position:absolute;
background-color: black;
top: calc(50%);
right: 3%;
transform: translateX(-60%);
width: max-content;
border-radius: 0px 0px 16px 16px;
}


header {
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
    width: 100%;
    position: sticky ;
    transition: 0.5s ease all;
    color:#fff;

    nav{
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 8px 0;
        transition: .5s ease all;
        width: 90%;
        margin: 0 auto;
        @media(min-width: 1140px) {
            max-width:1140px;
        }

        ul,.link{
            font-weight: 500;
            color: #fff;
            list-style: none;
            text-decoration: none;
        }

        li{
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
        }

        .link{
            font-size: 14px;
            transition: .5s ease all;
            padding-bottom: 3px;
            border-bottom: 1px solid transparent;
            cursor: pointer;


             &:hover{
                color: #00afea;
                border-color: #00afea;
            }
        }
        .branding{
            display:flex;
            align-items: center;
        }
        img {
            width:70px;
            transition: .5s ease all;
        }

        .navigation{
            display:flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;

            i{
                cursor: pointer;
                font-size: 24px;
                transition: .8s ease all;
            }
        }

        .icon-active{
            transform: rotate(180deg);
        }

        .dropdown-nav {
            display:flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: #fff;
            top:0;
            left:0;

            li{
                margin-left: 0;
                .link{
                    color:#000;
                }
            }
        }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: 1s ease all;
        }

        .mobile-nav-enter-from,.mobile-nav-leave-to {
            transform: translateX(-250px);
        }

        .mobile-nav-enter-to{
            transform: translateX(0);
        }

    }
}

.scrolled-nav{
    background-color: #000;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);

    nav {
        padding: 8px 0;

        .branding{
            img {
                width: 40px;
                box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
            }
        }
    }
}

</style>