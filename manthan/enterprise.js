function validateForm() {
    var returnval = true;

    //       check validation 
      
    var City=document.getElementById("city").value;
   
  
    var name = document.getElementById("PersonName").value;


    var CompanyName = document.getElementById("CompanyName").value;
    

    var Mobile = document.getElementById("number").value;
  

    var Email = document.getElementById("Email").value;
   

    var MontlyTrip=document.getElementById("MontlyTrip").value;
  

    //validating City
     if(City==="Select city"){
            document.getElementsByClassName("formerror")[0].innerHTML = "*Select the City";
            returnval = false;
     }else if(City!=="Select city"){
            document.getElementsByClassName("formerror")[0].innerHTML = "";
            returnval = true;
     }


    //  validating Name
    if (name.length === 0 || name.length < 3) {
            document.getElementsByClassName("formerror")[1].innerHTML = "*Enter a Name";
            returnval = false;
    }else{
            document.getElementsByClassName("formerror")[1].innerHTML = ""; 
            returnval = true;  
    }

    //  validating CompanyName
    if (CompanyName.length === 0 || CompanyName.length < 3) {
            document.getElementsByClassName("formerror")[2].innerHTML = "*Enter a Company Name";
            returnval = false;
    }else{
            document.getElementsByClassName("formerror")[2].innerHTML = ""; 
            returnval = true;  
    }
      
   //  validating Mobile
    if (Mobile.length !=10) {
            document.getElementsByClassName("formerror")[3].innerHTML = "*Please Enter 10 digit number";
            returnval = false;
    }else if(Mobile.length===10){
            document.getElementsByClassName("formerror")[3].innerHTML = "";
            returnval = true;
    }
   
    //  validating MonthlyTrip
    if(MontlyTrip==="Montlytrip"){ 
            document.getElementsByClassName("formerror")[4].innerHTML = "*Select the Monthly Trip";
            returnval = false;
    }else if(MontlyTrip!=="Montlytrip"){
            document.getElementsByClassName("formerror")[4].innerHTML = "";
            returnval = true;
     }

     // validating Email

     if (returnval === false){
        if(Email.length===0){
            document.getElementsByClassName("formerror")[5].innerHTML = "*You have entered an invalid email address!";   
            returnval = false;
     }else if (Email.length!==0){

            document.getElementsByClassName("formerror")[5].innerHTML = "";   
            returnval = true;
    }
     }
   

    
    if (returnval === true) {
            document.getElementById("form-enterprize").innerHTML = "Thank you so much " + name + " of contacting Porter\n We will get back to you shortly ";
    }

    return returnval;
}
