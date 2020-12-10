function initialReason() {
    var x = document.forms["OB-form"]["reason-for-registering"].value;

    if (x == "reason-blank") {
        document.getElementById("form-field-1").innerHTML = "";
        document.getElementById("form-field-2").innerHTML = "";
    }
    if (x == "reason-behalf") {
        document.getElementById("form-field-1").innerHTML = `
            <legend>Please complete the short form below:</legend>
            <label for="custentity_ob_referrerfirstname">Your first name</label>
            <input type="text" id="custentity_ob_referrerfirstname" name="custentity_ob_referrerfirstname"><br>
            <label for="custentity_ob_referrerlastname">Your last name</label>
            <input type="text" id="custentity_ob_referrerlastname" name="custentity_ob_referrerlastname"><br>
            <label for="custentity_ob_referreremail">Your email</label>
            <input type="text" id="custentity_ob_referreremail" name="custentity_ob_referreremail"><br>
            <label for="custentity_ob_referrerphone">Your telephone</label>
            <input type="text" id="custentity_ob_referrerphone" name="custentity_ob_referrerphone"><br>
            <label for="custentity_ob_referrerstateorcountry">Your address</label>
            <input type="text" id="custentity_ob_referrerstateorcountry" name="custentity_ob_referrerstateorcountry"><br>
        
            <label for="custentity_ob_referraltype">I am applying on behalf of:</label>
            <select name="custentity_ob_referraltype" id="custentity_ob_referraltype">
                <option></option>
                <option name="custentity_ob_referraltype" value="child">My child</option>
                <option name="custentity_ob_referraltype" value="relation">A relation</option>
                <option name="custentity_ob_referraltype" value="friend">A friend</option>
                <option name="custentity_ob_referraltype" value="other">Someone else</option>
            </select>
            <br>

            <label for="glommedname">Their first name</label>
            <input type="text" id="glommedname" name="glommedname"><br>
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
            <select name="custentity_ob_userlimbdifference" id="custentity_ob_userlimbdifference">
                <option></option>
                <option name="custentity_ob_userlimbdifference" value="below-elbow">Below elbow</option>
                <option name="custentity_ob_userlimbdifference" value="unsure">Unsure</option>
                <option name="custentity_ob_userlimbdifference" value="partial-hand">Partial hand</option>
            </select><br>
            <label for="custentity_ob_userresiduallengthcm">What is the distance between your/their elbow crease and end of your/their residual limb?</label>
            <input type="text" id="custentity_ob_userresiduallengthcm" name="custentity_ob_userresiduallengthcm"><br>
        `;
    }
    if (x == "reason-uld") {
        document.getElementById("form-field-1").innerHTML = `
            <legend>Please complete the short form below:</legend>
            <label for="glommedname">Your first name</label>
            <input type="text" id="glommedname" name="glommedname"><br>
            <label for="email">Your email</label>
            <input type="text" id="email" name="email"><br>
            <label for="phone">Your telephone</label>
            <input type="text" id="phone" name="phone"><br>
            <label for="defaultaddress">Your address</label>
            <input type="text" id="defaultaddress" name="defaultaddress"><br>
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
            <select name="custentity_ob_userlimbdifference" id="custentity_ob_userlimbdifference">
                <option></option>
                <option name="custentity_ob_userlimbdifference" value="below-elbow">Below elbow</option>
                <option name="custentity_ob_userlimbdifference" value="unsure">Unsure</option>
                <option name="custentity_ob_userlimbdifference" value="partial-hand">Partial hand</option>
            </select><br>
            <label for="custentity_ob_userresiduallengthcm">What is the distance between your/their elbow crease and end of your/their residual limb?</label>
            <input type="text" id="custentity_ob_userresiduallengthcm" name="custentity_ob_userresiduallengthcm"><br>
        `;
    }
    if (x == "reason-tech") {
        document.getElementById("form-field-1").innerHTML = "Interested tech form";
        document.getElementById("form-field-2").innerHTML = "";
    }
}


