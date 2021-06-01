function initialReason() {
    var x = document.forms["OB-form"]["reason-for-registering"].value;

    if (x == "reason-blank") {
        document.getElementById("form-field-1").innerHTML = "";
        document.getElementById("form-field-2").innerHTML = "";
        $("#form-field-3").addClass("hidden");
    }
    if (x == "reason-behalf") {
        document.getElementById("form-field-1").innerHTML = `
            <legend>Please complete the short form below:</legend>
            <label for="custentity_ob_referrerfirstname">First name:</label>
            <input type="text" id="custentity_ob_referrerfirstname" name="custentity_ob_referrerfirstname" required><br>
            <label for="custentity_ob_referrerlastname">Last name:</label>
            <input type="text" id="custentity_ob_referrerlastname" name="custentity_ob_referrerlastname" required><br>
            <label for="custentity_ob_referreremail">Email address:</label>
            <input type="custentity_ob_referreremail" id="custentity_ob_referreremail" name="email" required><br>
            <label for="custentity_ob_referrerphone">Phone number:</label>
            <input type="tel" id="custentity_ob_referrerphone" name="custentity_ob_referrerphone" required><br>
            <label for="custentity_ob_referrerzip">Post code/Zip code:</label>
            <input type="text" id="custentity_ob_referrerzip" name="custentity_ob_referrerzip" required><br>
            <label for="custentity_ob_referrerstateorcountry">State or Country:</label>
            <input type="text" id="custentity_ob_referrerstateorcountry" name="custentity_ob_referrerstateorcountry"><br>
            <br>
            <label for="custentity_ob_referraltype">I am applying on behalf of:</label>
            <select id="custentity_ob_referraltype" name="custentity_ob_referraltype" required>
                <option></option>
                <option value="child">My child</option>
                <option value="relative">My relative</option>
                <option value="friend">My friend</option>
                <option value="other">Someone else</option>
            </select><br>
            <label for="firstname">Their first name:</label>
            <input type="text" id="firstname" name="firstname" required><br>
            <label for="lastname">Their last name:</label>
            <input type="text" id="lastname" name="lastname" required><br>
            <label for="custentity_ob_userdateofbirth">Their date of birth:</label>
            <input type="date" id="custentity_ob_userdateofbirth" name="custentity_ob_userdateofbirth" required><br>
            <br>
        `;
        document.getElementById("form-field-2").innerHTML = `
            <label for="custentity_ob_userchirality">What side is their limb difference?</label>
            <select name="custentity_ob_userchirality" id="custentity_ob_userchirality">
                <option></option>
                <option name="custentity_ob_userchirality" value="left">Left</option>
                <option name="custentity_ob_userchirality" value="right">Right</option>
                <option name="custentity_ob_userchirality" value="both">Both</option>
            </select><br>
            <label for="custentity_ob_userlimbdifference">What is the nature of their upper limb difference?</label>
            <select name="custentity_ob_userlimbdifference" id="custentity_ob_userlimbdifference" onchange="aboveElbow()">
                <option></option>
                <option name="custentity_ob_userlimbdifference" value="below-elbow">Below elbow</option>
                <option name="custentity_ob_userlimbdifference" value="unsure">Unsure</option>
                <option name="custentity_ob_userlimbdifference" value="partial-hand">Partial hand</option>
                <option name="custentity_ob_userlimbdifference" value="above-elbow">Above elbow</option>
            </select><br>
            <div class="hidden" id="above-elbow-disclaimer">
                <p>The Hero Arm is our first product, and is only available for people with below elbow differences. Please register your interest anyway and we'll get in touch if we develop prostheses for above elbow and partial hand.</p>
            </div>
            <label for="custentity_ob_userresiduallengthfreetext">What is the distance between their elbow crease and end of their residual limb?</label>
            <input type="text" id="custentity_ob_userresiduallengthfreetext" name="custentity_ob_userresiduallengthfreetext"><br>
        `;
        $("#form-field-3").removeClass("hidden");
    }
    if (x == "reason-uld") {
        document.getElementById("form-field-1").innerHTML = `
            <legend>Please complete the short form below:</legend>
            <label for="firstname">First name:</label>
            <input type="text" id="firstname" name="firstname" required><br>
            <label for="lastname">Last name:</label>
            <input type="text" id="lastname" name="lastname" required><br>
            <label for="custentity_ob_userdateofbirth">Date of birth:</label>
            <input type="date" id="custentity_ob_userdateofbirth" name="custentity_ob_userdateofbirth" required><br>
            <label for="email">Email address:</label>
            <input type="email" id="email" name="email" required><br>
            <label for="phone">Phone number:</label>
            <input type="tel" id="phone" name="phone" required><br>
            <label for="address1">Address Line 1:</label>
            <input type="text" id="address1" name="address1" required><br>
            <label for="address2">Address Line 2:</label>
            <input type="text" id="address2" name="address2"><br>
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required><br>
            <label for="state">State:</label>
            <input type="text" id="state" name="state" required><br>
            <label for="country">Country:</label>
            <select id="country" name="country" required><br>
                <option></option>
                <option value="Afganistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bonaire">Bonaire</option>
                <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Canary Islands">Canary Islands</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Channel Islands">Channel Islands</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Island">Cocos Island</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote DIvoire">Cote DIvoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curaco">Curacao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Ter">French Southern Ter</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Great Britain">Great Britain</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="Indonesia">Indonesia</option>
                <option value="India">India</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea North">Korea North</option>
                <option value="Korea Sout">Korea South</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Malawi">Malawi</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Midway Islands">Midway Islands</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Nambia">Nambia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherland Antilles">Netherland Antilles</option>
                <option value="Netherlands">Netherlands (Holland, Europe)</option>
                <option value="Nevis">Nevis</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau Island">Palau Island</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Phillipines">Philippines</option>
                <option value="Pitcairn Island">Pitcairn Island</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Republic of Montenegro">Republic of Montenegro</option>
                <option value="Republic of Serbia">Republic of Serbia</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="St Barthelemy">St Barthelemy</option>
                <option value="St Eustatius">St Eustatius</option>
                <option value="St Helena">St Helena</option>
                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                <option value="St Lucia">St Lucia</option>
                <option value="St Maarten">St Maarten</option>
                <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                <option value="Saipan">Saipan</option>
                <option value="Samoa">Samoa</option>
                <option value="Samoa American">Samoa American</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Tahiti">Tahiti</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Erimates">United Arab Emirates</option>
                <option value="United States of America">United States of America</option>
                <option value="Uraguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City State">Vatican City State</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                <option value="Wake Island">Wake Island</option>
                <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                <option value="Yemen">Yemen</option>
                <option value="Zaire">Zaire</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </select>
            <br>
            <br>
        `;
        document.getElementById("form-field-2").innerHTML = `
            <label for="custentity_ob_userchirality">What side is your limb difference?</label>
            <select name="custentity_ob_userchirality" id="custentity_ob_userchirality">
                <option></option>
                <option name="custentity_ob_userchirality" value="left">Left</option>
                <option name="custentity_ob_userchirality" value="right">Right</option>
                <option name="custentity_ob_userchirality" value="both">Both</option>
            </select><br>
            <label for="custentity_ob_userlimbdifference">What is the nature of your upper limb difference?</label>
            <select name="custentity_ob_userlimbdifference" id="custentity_ob_userlimbdifference" onchange="aboveElbow()">
                <option></option>
                <option name="custentity_ob_userlimbdifference" value="below-elbow">Below elbow</option>
                <option name="custentity_ob_userlimbdifference" value="unsure">Unsure</option>
                <option name="custentity_ob_userlimbdifference" value="partial-hand">Partial hand</option>
                <option name="custentity_ob_userlimbdifference" value="above-elbow">Above elbow</option>
            </select><br>
            <div class="hidden" id="above-elbow-disclaimer">
                <p>The Hero Arm is our first product, and is only available for people with below elbow differences. Please register your interest anyway and we'll get in touch if we develop prostheses for above elbow and partial hand.</p>
            </div>
            <label for="custentity_ob_userresiduallengthcm">What is the distance between your elbow crease and end of your residual limb?</label>
            <input type="text" id="custentity_ob_userresiduallengthcm" name="custentity_ob_userresiduallengthcm"><br>
        `;
        $("#form-field-3").removeClass("hidden");
    }
    if (x == "reason-tech") {
        document.getElementById("form-field-1").innerHTML = "Interested in tech form";
        document.getElementById("form-field-2").innerHTML = "";
        $("#form-field-3").removeClass("hidden");
    }
}

function aboveElbow() {
    var y = document.getElementById("custentity_ob_userlimbdifference").value;

    if (y == "above-elbow") {
        $("#above-elbow-disclaimer").removeClass("hidden");
    } else {
        $("#above-elbow-disclaimer").addClass("hidden");
    }
}