<template>
<Navigation />

    <div class="row text-start align-items-start text-light">
        <div class="col-2 offset-1 offset-md-1 col-md-1">
            <img class="text-center align-items-center col-12" :src="`${imageUrl}${movie.image}`" alt="movie_image" />
        </div>
        <div class=" col-9 col-md-10">
                <h2 class="movietitle">{{movie.title}}</h2>
                <p class="movieparagraph">Showing at Movie Club {{shows.start_time}} - {{shows.end_time}} </p>
                <p class="movieparagraph">on day:{{shows.day}}.{{shows.month}}.{{shows.year}}</p>
                <p class="movieparagraph">Price: 10$</p>
          </div>
          
    </div>


    <div class="container-fluid ">
      
        <div class="row">

            <div class="col-12 col-md-6 offset-md-3 row seats">
                <div class="col-10 offset-1">     
                    <div class="screen"></div>
                </div>
                <div class="col-2 col-md-2 text-center align-items-center " v-for="seat in seats" :key="seats.Seat_id">
                
                    <button @click=" () => togglePopup('buttonTrigger')" @mouseenter="saveseat(seat.Seat_id)" class="text-light text-end button-40" v-if="seat.occupied == 0">{{seat.name}}</button>
                    <button class="text-light text-end button-40 occupied" v-else>{{seat.name}}</button>

                </div>
                    
                   <div class="col-4 text-center align-items-center">

                            <button class="  text-light text-center align-items-center button-40 occupied " >Occupied</button>

                        </div>

                        <div class="col-4 text-center align-items-center">

                            <button class="  text-light text-center align-items-center button-40  showcase" >Available</button>

                        </div>

                        <div class="col-4 text-center align-items-center">

                            <button class=" text-light text-center align-items-center button-40 selected " >Selected</button>

                        </div>

            </div>


        </div>

    </div>

    <div class="container">
        <Paywall class="row"
         v-if="popupTriggers.buttonTrigger" 
         :TogglePopup="() => togglePopup('buttonTrigger')">


         <form @submit.prevent="handleSubmit" class="offset-3 text-start row">

                <label class="col-12 text-start">
                    <span>Credit card</span>
                    <input 
                    type="tel"
                    maxlength="16"
                    min-length="13"
                    pattern="[0-9]+"
                    title="Only numbers are allowed"
                    v-model="carddata.card"
                    required
                    placeholder="4811 0432 9228 2416" />
                </label>

                <label class="col-md-6 col-12 text-start">
                    <span>Expiration date</span>
                    <input 
                    type="tel" 
                    maxlength="4" 
                    v-model="carddata.exp"
                    pattern="[0-9]+"
                    required
                    placeholder="MM/YY"
                    title="Please fill it out as format MM/YY" />
                </label>

                <label class="col-md-6 col-12 text-start">
                    <span>CVC</span>
                    <input 
                    type="text"
                    v-model="carddata.cvc"
                    pattern="[0-9]{3}"
                    maxlength="3"
                    title="only numbers are allowed"
                    required
                    placeholder="212" />
                </label>

                <label class="col-md-12 col-12 text-start">
                    <span>Name on card</span>
                    <input 
                    type="text"
                    v-model="carddata.name"
                    required
                    placeholder="John Doe" />
                </label>

                <label class="col-md-12 col-12 text-start">
                    <span>Country/Region</span>
                    <select name="country" class="form-control" id="country" required v-model="carddata.country">
        <option value="0" label="Select a country ... " selected="selected">Select a country ... </option>
        <optgroup id="country-optgroup-Africa" label="Africa">
            <option value="DZ" label="Algeria">Algeria</option>
            <option value="AO" label="Angola">Angola</option>
            <option value="BJ" label="Benin">Benin</option>
            <option value="BW" label="Botswana">Botswana</option>
            <option value="BF" label="Burkina Faso">Burkina Faso</option>
            <option value="BI" label="Burundi">Burundi</option>
            <option value="CM" label="Cameroon">Cameroon</option>
            <option value="CV" label="Cape Verde">Cape Verde</option>
            <option value="CF" label="Central African Republic">Central African Republic</option>
            <option value="TD" label="Chad">Chad</option>
            <option value="KM" label="Comoros">Comoros</option>
            <option value="CG" label="Congo - Brazzaville">Congo - Brazzaville</option>
            <option value="CD" label="Congo - Kinshasa">Congo - Kinshasa</option>
            <option value="CI" label="Côte d’Ivoire">Côte d’Ivoire</option>
            <option value="DJ" label="Djibouti">Djibouti</option>
            <option value="EG" label="Egypt">Egypt</option>
            <option value="GQ" label="Equatorial Guinea">Equatorial Guinea</option>
            <option value="ER" label="Eritrea">Eritrea</option>
            <option value="ET" label="Ethiopia">Ethiopia</option>
            <option value="GA" label="Gabon">Gabon</option>
            <option value="GM" label="Gambia">Gambia</option>
            <option value="GH" label="Ghana">Ghana</option>
            <option value="GN" label="Guinea">Guinea</option>
            <option value="GW" label="Guinea-Bissau">Guinea-Bissau</option>
            <option value="KE" label="Kenya">Kenya</option>
            <option value="LS" label="Lesotho">Lesotho</option>
            <option value="LR" label="Liberia">Liberia</option>
            <option value="LY" label="Libya">Libya</option>
            <option value="MG" label="Madagascar">Madagascar</option>
            <option value="MW" label="Malawi">Malawi</option>
            <option value="ML" label="Mali">Mali</option>
            <option value="MR" label="Mauritania">Mauritania</option>
            <option value="MU" label="Mauritius">Mauritius</option>
            <option value="YT" label="Mayotte">Mayotte</option>
            <option value="MA" label="Morocco">Morocco</option>
            <option value="MZ" label="Mozambique">Mozambique</option>
            <option value="NA" label="Namibia">Namibia</option>
            <option value="NE" label="Niger">Niger</option>
            <option value="NG" label="Nigeria">Nigeria</option>
            <option value="RW" label="Rwanda">Rwanda</option>
            <option value="RE" label="Réunion">Réunion</option>
            <option value="SH" label="Saint Helena">Saint Helena</option>
            <option value="SN" label="Senegal">Senegal</option>
            <option value="SC" label="Seychelles">Seychelles</option>
            <option value="SL" label="Sierra Leone">Sierra Leone</option>
            <option value="SO" label="Somalia">Somalia</option>
            <option value="ZA" label="South Africa">South Africa</option>
            <option value="SD" label="Sudan">Sudan</option>
            <option value="SZ" label="Swaziland">Swaziland</option>
            <option value="ST" label="São Tomé and Príncipe">São Tomé and Príncipe</option>
            <option value="TZ" label="Tanzania">Tanzania</option>
            <option value="TG" label="Togo">Togo</option>
            <option value="TN" label="Tunisia">Tunisia</option>
            <option value="UG" label="Uganda">Uganda</option>
            <option value="EH" label="Western Sahara">Western Sahara</option>
            <option value="ZM" label="Zambia">Zambia</option>
            <option value="ZW" label="Zimbabwe">Zimbabwe</option>
        </optgroup>
        <optgroup id="country-optgroup-Americas" label="Americas">
            <option value="AI" label="Anguilla">Anguilla</option>
            <option value="AG" label="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="AR" label="Argentina">Argentina</option>
            <option value="AW" label="Aruba">Aruba</option>
            <option value="BS" label="Bahamas">Bahamas</option>
            <option value="BB" label="Barbados">Barbados</option>
            <option value="BZ" label="Belize">Belize</option>
            <option value="BM" label="Bermuda">Bermuda</option>
            <option value="BO" label="Bolivia">Bolivia</option>
            <option value="BR" label="Brazil">Brazil</option>
            <option value="VG" label="British Virgin Islands">British Virgin Islands</option>
            <option value="CA" label="Canada">Canada</option>
            <option value="KY" label="Cayman Islands">Cayman Islands</option>
            <option value="CL" label="Chile">Chile</option>
            <option value="CO" label="Colombia">Colombia</option>
            <option value="CR" label="Costa Rica">Costa Rica</option>
            <option value="CU" label="Cuba">Cuba</option>
            <option value="DM" label="Dominica">Dominica</option>
            <option value="DO" label="Dominican Republic">Dominican Republic</option>
            <option value="EC" label="Ecuador">Ecuador</option>
            <option value="SV" label="El Salvador">El Salvador</option>
            <option value="FK" label="Falkland Islands">Falkland Islands</option>
            <option value="GF" label="French Guiana">French Guiana</option>
            <option value="GL" label="Greenland">Greenland</option>
            <option value="GD" label="Grenada">Grenada</option>
            <option value="GP" label="Guadeloupe">Guadeloupe</option>
            <option value="GT" label="Guatemala">Guatemala</option>
            <option value="GY" label="Guyana">Guyana</option>
            <option value="HT" label="Haiti">Haiti</option>
            <option value="HN" label="Honduras">Honduras</option>
            <option value="JM" label="Jamaica">Jamaica</option>
            <option value="MQ" label="Martinique">Martinique</option>
            <option value="MX" label="Mexico">Mexico</option>
            <option value="MS" label="Montserrat">Montserrat</option>
            <option value="AN" label="Netherlands Antilles">Netherlands Antilles</option>
            <option value="NI" label="Nicaragua">Nicaragua</option>
            <option value="PA" label="Panama">Panama</option>
            <option value="PY" label="Paraguay">Paraguay</option>
            <option value="PE" label="Peru">Peru</option>
            <option value="PR" label="Puerto Rico">Puerto Rico</option>
            <option value="BL" label="Saint Barthélemy">Saint Barthélemy</option>
            <option value="KN" label="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="LC" label="Saint Lucia">Saint Lucia</option>
            <option value="MF" label="Saint Martin">Saint Martin</option>
            <option value="PM" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="VC" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
            <option value="SR" label="Suriname">Suriname</option>
            <option value="TT" label="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="TC" label="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="VI" label="U.S. Virgin Islands">U.S. Virgin Islands</option>
            <option value="US" label="United States">United States</option>
            <option value="UY" label="Uruguay">Uruguay</option>
            <option value="VE" label="Venezuela">Venezuela</option>
        </optgroup>
        <optgroup id="country-optgroup-Asia" label="Asia">
            <option value="AF" label="Afghanistan">Afghanistan</option>
            <option value="AM" label="Armenia">Armenia</option>
            <option value="AZ" label="Azerbaijan">Azerbaijan</option>
            <option value="BH" label="Bahrain">Bahrain</option>
            <option value="BD" label="Bangladesh">Bangladesh</option>
            <option value="BT" label="Bhutan">Bhutan</option>
            <option value="BN" label="Brunei">Brunei</option>
            <option value="KH" label="Cambodia">Cambodia</option>
            <option value="CN" label="China">China</option>
            <option value="GE" label="Georgia">Georgia</option>
            <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>
            <option value="IN" label="India">India</option>
            <option value="ID" label="Indonesia">Indonesia</option>
            <option value="IR" label="Iran">Iran</option>
            <option value="IQ" label="Iraq">Iraq</option>
            <option value="IL" label="Israel">Israel</option>
            <option value="JP" label="Japan">Japan</option>
            <option value="JO" label="Jordan">Jordan</option>
            <option value="KZ" label="Kazakhstan">Kazakhstan</option>
            <option value="KW" label="Kuwait">Kuwait</option>
            <option value="KG" label="Kyrgyzstan">Kyrgyzstan</option>
            <option value="LA" label="Laos">Laos</option>
            <option value="LB" label="Lebanon">Lebanon</option>
            <option value="MO" label="Macau SAR China">Macau SAR China</option>
            <option value="MY" label="Malaysia">Malaysia</option>
            <option value="MV" label="Maldives">Maldives</option>
            <option value="MN" label="Mongolia">Mongolia</option>
            <option value="MM" label="Myanmar [Burma]">Myanmar [Burma]</option>
            <option value="NP" label="Nepal">Nepal</option>
            <option value="NT" label="Neutral Zone">Neutral Zone</option>
            <option value="KP" label="North Korea">North Korea</option>
            <option value="OM" label="Oman">Oman</option>
            <option value="PK" label="Pakistan">Pakistan</option>
            <option value="PS" label="Palestinian Territories">Palestinian Territories</option>
            <option value="YD" label="People's Democratic Republic of Yemen">People's Democratic Republic of Yemen</option>
            <option value="PH" label="Philippines">Philippines</option>
            <option value="QA" label="Qatar">Qatar</option>
            <option value="SA" label="Saudi Arabia">Saudi Arabia</option>
            <option value="SG" label="Singapore">Singapore</option>
            <option value="KR" label="South Korea">South Korea</option>
            <option value="LK" label="Sri Lanka">Sri Lanka</option>
            <option value="SY" label="Syria">Syria</option>
            <option value="TW" label="Taiwan">Taiwan</option>
            <option value="TJ" label="Tajikistan">Tajikistan</option>
            <option value="TH" label="Thailand">Thailand</option>
            <option value="TL" label="Timor-Leste">Timor-Leste</option>
            <option value="TR" label="Turkey">Turkey</option>
            <option value="TM" label="Turkmenistan">Turkmenistan</option>
            <option value="AE" label="United Arab Emirates">United Arab Emirates</option>
            <option value="UZ" label="Uzbekistan">Uzbekistan</option>
            <option value="VN" label="Vietnam">Vietnam</option>
            <option value="YE" label="Yemen">Yemen</option>
        </optgroup>
        <optgroup id="country-optgroup-Europe" label="Europe">
            <option value="AL" label="Albania">Albania</option>
            <option value="AD" label="Andorra">Andorra</option>
            <option value="AT" label="Austria">Austria</option>
            <option value="BY" label="Belarus">Belarus</option>
            <option value="BE" label="Belgium">Belgium</option>
            <option value="BA" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="BG" label="Bulgaria">Bulgaria</option>
            <option value="HR" label="Croatia">Croatia</option>
            <option value="CY" label="Cyprus">Cyprus</option>
            <option value="CZ" label="Czech Republic">Czech Republic</option>
            <option value="DK" label="Denmark">Denmark</option>
            <option value="DD" label="East Germany">East Germany</option>
            <option value="EE" label="Estonia">Estonia</option>
            <option value="FO" label="Faroe Islands">Faroe Islands</option>
            <option value="FI" label="Finland">Finland</option>
            <option value="FR" label="France">France</option>
            <option value="DE" label="Germany">Germany</option>
            <option value="GI" label="Gibraltar">Gibraltar</option>
            <option value="GR" label="Greece">Greece</option>
            <option value="GG" label="Guernsey">Guernsey</option>
            <option value="HU" label="Hungary">Hungary</option>
            <option value="IS" label="Iceland">Iceland</option>
            <option value="IE" label="Ireland">Ireland</option>
            <option value="IM" label="Isle of Man">Isle of Man</option>
            <option value="IT" label="Italy">Italy</option>
            <option value="JE" label="Jersey">Jersey</option>
            <option value="LV" label="Latvia">Latvia</option>
            <option value="LI" label="Liechtenstein">Liechtenstein</option>
            <option value="LT" label="Lithuania">Lithuania</option>
            <option value="LU" label="Luxembourg">Luxembourg</option>
            <option value="MK" label="Macedonia">Macedonia</option>
            <option value="MT" label="Malta">Malta</option>
            <option value="FX" label="Metropolitan France">Metropolitan France</option>
            <option value="MD" label="Moldova">Moldova</option>
            <option value="MC" label="Monaco">Monaco</option>
            <option value="ME" label="Montenegro">Montenegro</option>
            <option value="NL" label="Netherlands">Netherlands</option>
            <option value="NO" label="Norway">Norway</option>
            <option value="PL" label="Poland">Poland</option>
            <option value="PT" label="Portugal">Portugal</option>
            <option value="RO" label="Romania">Romania</option>
            <option value="RU" label="Russia">Russia</option>
            <option value="SM" label="San Marino">San Marino</option>
            <option value="RS" label="Serbia">Serbia</option>
            <option value="CS" label="Serbia and Montenegro">Serbia and Montenegro</option>
            <option value="SK" label="Slovakia">Slovakia</option>
            <option value="SI" label="Slovenia">Slovenia</option>
            <option value="ES" label="Spain">Spain</option>
            <option value="SJ" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="SE" label="Sweden">Sweden</option>
            <option value="CH" label="Switzerland">Switzerland</option>
            <option value="UA" label="Ukraine">Ukraine</option>
            <option value="SU" label="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</option>
            <option value="GB" label="United Kingdom">United Kingdom</option>
            <option value="VA" label="Vatican City">Vatican City</option>
            <option value="AX" label="Åland Islands">Åland Islands</option>
        </optgroup>
        <optgroup id="country-optgroup-Oceania" label="Oceania">
            <option value="AS" label="American Samoa">American Samoa</option>
            <option value="AQ" label="Antarctica">Antarctica</option>
            <option value="AU" label="Australia">Australia</option>
            <option value="BV" label="Bouvet Island">Bouvet Island</option>
            <option value="IO" label="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="CX" label="Christmas Island">Christmas Island</option>
            <option value="CC" label="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
            <option value="CK" label="Cook Islands">Cook Islands</option>
            <option value="FJ" label="Fiji">Fiji</option>
            <option value="PF" label="French Polynesia">French Polynesia</option>
            <option value="TF" label="French Southern Territories">French Southern Territories</option>
            <option value="GU" label="Guam">Guam</option>
            <option value="HM" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
            <option value="KI" label="Kiribati">Kiribati</option>
            <option value="MH" label="Marshall Islands">Marshall Islands</option>
            <option value="FM" label="Micronesia">Micronesia</option>
            <option value="NR" label="Nauru">Nauru</option>
            <option value="NC" label="New Caledonia">New Caledonia</option>
            <option value="NZ" label="New Zealand">New Zealand</option>
            <option value="NU" label="Niue">Niue</option>
            <option value="NF" label="Norfolk Island">Norfolk Island</option>
            <option value="MP" label="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="PW" label="Palau">Palau</option>
            <option value="PG" label="Papua New Guinea">Papua New Guinea</option>
            <option value="PN" label="Pitcairn Islands">Pitcairn Islands</option>
            <option value="WS" label="Samoa">Samoa</option>
            <option value="SB" label="Solomon Islands">Solomon Islands</option>
            <option value="GS" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
            <option value="TK" label="Tokelau">Tokelau</option>
            <option value="TO" label="Tonga">Tonga</option>
            <option value="TV" label="Tuvalu">Tuvalu</option>
            <option value="UM" label="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>
            <option value="VU" label="Vanuatu">Vanuatu</option>
            <option value="WF" label="Wallis and Futuna">Wallis and Futuna</option>
        </optgroup>
                    </select>
                    
                </label>

                <label class="col-md-12 col-12 text-start">
                    <span>ZIP</span>
                    <input 
                    type="text"
                    required
                    v-model="carddata.zip"
                    placeholder="10000" />
                </label>

                <input class="col-md-6 col-12 text-start"
                @mouseenter="checkloggedon()"
                type="Submit"
                value="Pay 10$"/>
                <button @click=" () => togglePopup('buttonTrigger')" class="popup-close col-md-6 col-12 text-start">
                Return
            </button>
                </form>
              
        </Paywall>
    </div>
    <br />
    <Footer />
</template>

<script> //Note to self: Check on buttons if seat is occupied then run v:if with instance where button has no @click method if it is also change its css to red if it is
         //Seat you click you reserve, can only reserve 1 seat per reservation.
import router from '../router';

import { ref } from 'vue';
 import axios from 'axios';
import Navigation from '../components/Navigation.vue';
import Footer from "../components/Footer.vue";
import Paywall from '../components/Paywall.vue';
export default {

    props: ['Show_id'],
    name: 'reservation',
    components: { Navigation, Paywall,Footer },
    data(){
        return {
            seats: [],
            shows: [],
            movie: [],
            movieid: '',
           seat:'',
           carddata: {},
           loggedon:false,
        }
    },
    created(){
        this.getSeatsForShow();
        this.getShowbyShowId();

    },
    mounted(){
  
    },
    methods: {

        async handleSubmit(){
            try{
                
                const response = await axios.post('reserve',{seat:this.seat,Show_id:this.Show_id,carddata:this.carddata});
                alert("Thank you for purchasing");
                router.push('/');
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
                console.log("not logged in");
                this.loggedon=false;
                alert("Please log in before reserving seats");
                router.push('/login');
                
              }

        }catch(err){
            console.log(err, "This is some issue");
        }
            
        },

        saveseat(Seat_id){
            this.seat=Seat_id;
        //    console.log("Chosen seat = ", this.seat);
        },

        async getSeatsForShow(){
            try{
            //    console.log(this.Show_id , "THIS IS THE SHOW ID");
            const response = await axios.get("movies/reservations/" + this.Show_id);
            this.seats = response.data;
           console.log(this.seats, "there are the seats");
        }catch(err){
          console.log(err);
        }
        },

        async getShowbyShowId(){
        try{
            const response = await axios.get('movies/show/' + this.Show_id);
            this.shows = response.data;
            this.movieid = response.data.movie_id;
            const respo = await axios.get('movies/' + this.movieid);
            this.movie = respo.data;
          //  console.log(this.movieid, this.movie, "<<<< Movie data");
        }catch(err){
            console.log(err);
        }
    },

    },
    setup() {
    const popupTriggers = ref({
        buttonTrigger: false,
        timedTrigger:false,
    });
    const togglePopup = (trigger) => {
        popupTriggers.value[trigger] = ! popupTriggers.value[trigger];
    }
    const imageUrl = new URL("../assets/", import.meta.url).href;


//payment form below


    
    

    return { 
        imageUrl,
        Paywall ,
        popupTriggers,
        togglePopup,
    };
    },
   }

</script>

<style lang="scss" scoped>



.container-fluid{
    margin-top:0%;
    padding-top:3%;
    padding-bottom:5%;
   // background-color: rgb(2, 2, 34);
}
.background{
    background-color: rgba(10, 8, 110, 0.178);

}
.movietitle,.movieparagraph{
    font-size: 1rem;
    @media(max-width:768px){
        font-size: 0.75rem;
    }
}

img{
    max-width: 100%;
    width:100%;
    height: auto;
    max-height: 85%;
    min-height: 85%;
  }

.screen {
  background-color: #fff;
  height: 5rem;
  width: 100%;
  margin: 15px 0;
  transform: rotateX(-45deg);
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
}

.seats{
    background-color: gray;
    padding-top:1%;
    padding-bottom:1%;
    border-radius: 3rem;
}


.button-40 {
  background-color: #06183f;
  border: 0.5px solid transparent;
  border-radius: 2rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1rem;
  padding: 4% 30%;
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
  margin-top:5px;
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
    padding: 4% 26%;
  }
}


.occupied{
    background-color: darkred;
    cursor:not-allowed;
}

.occupied:hover{
    background-color: darkred;
}

.showcase:hover{
    background-color: #06183f;
}

.selected{
    background-color: #374151;
}


//payment form below


form{
border-radius: 1.5rem;
background-color: rgb(217, 219, 226);
box-shadow: 0px -6px 18px 4px rgba(0,0,0,1);
color: black;
padding: 4rem 1.5rem;
width: 50%;
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
@media(max-width: 768px){
    font-size: 1rem;
    padding:0.5rem;
}
}

input[type="submit"]:hover {
background-color: rgb(1, 1, 80);
}

.popup-close{
    appearance: none;
    outline: none;
    border: none;
    background: none;
    display:block;
    width:fit-content;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 700;
    color:white;
    background-color: red;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.2s ease;
    @media(max-width: 768px){
    font-size: 1rem;
    padding:0.5rem;
}
}


.popup-close:hover {
    background-color: darkred;
}

</style>
