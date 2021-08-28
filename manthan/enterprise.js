function validateForm() {
        var returnval = true;

        //       check validation 

        var City = document.getElementById("city").value;


        var name = document.getElementById("PersonName").value;


        var CompanyName = document.getElementById("CompanyName").value;


        var Mobile = document.getElementById("number").value;


        var Email = document.getElementById("Email").value;


        var MontlyTrip = document.getElementById("MontlyTrip").value;


        //validating City
        if (City === "Select city") {
                document.getElementsByClassName("formerror")[0].innerHTML = "*Select the City";
                returnval = false;
        } else if (City !== "Select city") {
                document.getElementsByClassName("formerror")[0].innerHTML ="";

        }


        //  validating Name
        if (name.length === 0 || name.length < 3) {
                document.getElementsByClassName("formerror")[1].innerHTML = "*Enter a Name";
                returnval = false;
        } else {
                document.getElementsByClassName("formerror")[1].innerHTML = "";

        }

        //  validating CompanyName
        if (CompanyName.length === 0 || CompanyName.length < 3) {
                document.getElementsByClassName("formerror")[2].innerHTML = "*Enter a Company Name";
                returnval = false;
        } else {
                document.getElementsByClassName("formerror")[2].innerHTML = "";

        }

        //  validating Mobile
        if (Mobile.length != 10) {
                document.getElementsByClassName("formerror")[3].innerHTML = "*Please Enter 10 digit number";
                returnval = false;
        } else if (Mobile.length === 10) {
                document.getElementsByClassName("formerror")[3].innerHTML = "";

        }

        //  validating MonthlyTrip
        if (MontlyTrip === "Montlytrip") {
                document.getElementsByClassName("formerror")[4].innerHTML = "*Select the Monthly Trip";
                returnval = false;
        } else if (MontlyTrip !== "Montlytrip") {
                document.getElementsByClassName("formerror")[4].innerHTML = "";

        }

        // validating Email

        if (Email.length === 0 || Email.length < 6) {
                document.getElementsByClassName("formerror")[5].innerHTML = "*You have entered an invalid email address!";
                returnval = false;
        } else if (Email.length !== 0) {
                document.getElementsByClassName("formerror")[5].innerHTML = "";

        }


        // let data="thank-you"



        // creating thank you massage div

        let data_div=document.getElementById("thanks");

      
                let div= document.createElement("p");
                div.innerHTML="Thank you for contacting us";

                let p_name=document.createElement("h2");
                 p_name.innerText="Porter";

                let lastline=document.createElement("p");
                lastline.innerText="We will get back to You shortly";
                

                data_div.append(div,p_name,lastline);
              
                
        

        if (returnval === true) {
                document.getElementById("form").innerHTML ="" ;
                // document.getElementById("Email").innerHTML ="" ;
                document.getElementById("thanks").style.display ="block";
        }
        

        return returnval;
}
