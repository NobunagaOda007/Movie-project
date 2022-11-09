<template>
    <Navigation />
    <div class="register">
        <header class="welcome">
            <h1 class="logo">MOVIE CLUB</h1>

            <h2>Register</h2>
            <p>Login or create an account</p>
        </header>

        <form @submit.prevent="handleSubmit">

            <label>
                <span>Enter your username</span>
                <input 
                type="text"
                 v-model="data.name"
                 placeholder="John Doe" />
            </label>

            <span 
            v-for="error in v$.name.$errors"
            :key="error.$uid"
            class="text-danger"> 
            {{error.$message}}
            </span>

            <label>
                <span>Enter your phone number</span>
                <input 
                type="tel"
                 v-model="data.phone"
                 placeholder="385 91 231 1423" />
            </label>

            <span 
            v-for="error in v$.phone.$errors"
            :key="error.$uid"
            class="text-danger"> 
            {{error.$message}}
            </span>

            <label>
                <span>Enter your email</span>
                <input 
                type="email"
                 v-model="data.u_email"
                 placeholder="johndoe@gmail.com" />
            </label>

            <span 
            v-for="error in v$.u_email.$errors"
            :key="error.$uid"
            class="text-danger"> 
            {{error.$message}}
            </span>

            <label>
                <span>Enter your password</span>
                <input 
                type="password"
                 v-model="data.password"
                 placeholder="*********" />
            </label>

            <span 
            v-for="error in v$.password.$errors"
            :key="error.$uid"
            class="text-danger"> 
            {{error.$message}}
            </span>

            <label>
                <span>Repeat your password</span>
                <input 
                type="password"
                 v-model="data.conf_password"
                 placeholder="*********" />
            </label>

            <span 
            v-for="error in v$.conf_password.$errors"
            :key="error.$uid"
            class="text-danger"> 
            {{error.$message}}
            </span>

            <input
             type="Submit"
             value="Register"/>
        </form>

        <footer class="reg">
            <p>
                Already have an account? <router-link to="/login">Login</router-link>
            </p>   
            <Footer />
        </footer>

    </div>
    

</template>

<script setup>
import Navigation from '../components/Navigation.vue';
import Footer from "../components/Footer.vue";
import axios from 'axios';
import router from '../router';
import useVuelidate from '@vuelidate/core';
import {required, minLength ,email,sameAs,maxLength,numeric  } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

    
const data = reactive({
                name: "",
                u_email: "",
                phone: "",
                password: "",
                conf_password: "",
                isUser: '1',
            });
            
            const rules = computed(() =>{
                return {
                    
                name: {required,maxLength : maxLength(20)},
                u_email: {required,email},
                phone: {required,numeric,maxLength: maxLength(12), minLength: minLength(11)},
                password: {required},
                conf_password: {required,sameAs: sameAs(data.password)},
       
                };
            }) ;

            const v$ = useVuelidate(rules,data);
    
     const handleSubmit = async ()=> {
           
       

            
            const result = await v$.value.$validate();

           

            if(result) {
                try{
            await axios.post('register', data).catch(function(error){
                 alert("Error! Most likely email already exists");
                 throw error;
            
            })
            router.push('/login');
            return alert("You have been registered");
            
        }catch(err){
            console.log(err);
        }
            }else{
                return alert("you have an error in your form");
               
            }
            
        
         
        }
    


</script>

<style scoped>
.register{
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
background-color: navy;
color: white;
}

.logo{
display:inline-block;
font-size: 1rem;
font-weight: 900;
letter-spacing: 5px;
padding: 0.5rem;
padding-right: calc(0.5rem - 5px);
border: 2px solid white;
color: white;
margin-bottom: 1.5rem;
}

.welcome{
padding: 1.5rem;
}

.reg{
background-color: white;
width:100%;
color:black;
text-align: center;
padding:1.5 ;
padding-bottom: 3;
}

h2{
font-size: 2.125rem;
margin-bottom: 1rem;
}

h2 ~ p{
font-weight: 500;
font-size: 1rem;
}

form{
flex: 1 1 0%;
display: block;
border-radius: 1.5rem 1.5rem 0 0;
background-color: rgb(217, 219, 226);
box-shadow: 0px -6px 18px 4px rgba(0,0,0,1);
color: black;
padding: 4rem 1.5rem;
width: 100%;
}

label{
display:block;
margin-bottom: 1.5rem;
}

label span{
display: block;
color: gray;
font-size: 1rem;
font-weight: 500;
margin-bottom: 0.5rem;
}

input{
appearance: none;
outline: none;
border: none;
background: none;
}

input:not([type="submit"]){
display: block;
width:100%;
padding: 0.5rem 0.5rem;
border: 1px solid gray;
border-radius: 0.5rem;
font-size: 1rem;
font-weight: 500;
color:black;
background-color: white;

}

input:not([type="submit"])::placeholder{
color:gray;
font-style:italic;
}

input[type="submit"]{
display:block;
width:fit-content;
margin: 0 auto;
font-size: 1.5rem;
font-weight: 700;
color:white;
background-color: darkblue;
padding: 1rem;
border-radius: 0.5rem;
cursor: pointer;
transition: 0.2s ease;
}

input[type="submit"]:hover {
background-color: rgb(1, 1, 80);
}


</style>