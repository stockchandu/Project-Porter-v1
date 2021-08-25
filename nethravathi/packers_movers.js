//screen moving
function done(){
    document.getElementById("div3").style.display="none"; 
    document.getElementById("div1").style.display="block"; 
}

//FAQs
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

  
}


function seterror(id, error) {
    element = id;
console.log('element:', element)

}
function proceed() {
   var returnval = true;

   //       check validation 
    var city =document.getElementById("city").value;

   var name = document.getElementById("PersonName").value;
   
   var phnumber = document.getElementById("number").value;
   
   var from = document.getElementById("mfrom").value;

   var to = document.getElementById("mto").value;
  
   if(city.length == 0){
    document.getElementsByClassName("formerror")[0].innerHTML ="Select the city" ;
    returnval = false;
   }


   if (name.length === 0 || name.length<3) {
           document.getElementsByClassName("formerror")[1].innerHTML ="Length is too short" ;
           returnval = false;
   }
   
   if(phnumber.length<10){
           document.getElementsByClassName("formerror")[2].innerHTML ="Enter Valid Mobile number!" ;
           returnval = false;
   }
   if(from.length === 0){
           document.getElementsByClassName("formerror")[3].innerHTML ="Enter the initial location" ;
           returnval = false;
   }
   if(to.length === 0){
    document.getElementsByClassName("formerror")[4].innerHTML ="Select the destination" ;
    returnval = false;
    }

   if(returnval === true){
    document.getElementById("div1").style.display="none"; 
    document.getElementById("div2").style.display="block"; 
   }
     
   return returnval;
}


function estim(){
    var returnval = true;
    var date = document.getElementById("date");

    if(date === ""){
        document.getElementsByClassName("formerror")[1].innerHTML ="Select Date" ;
        returnval = false;
    }

    if(returnval === true){
        document.getElementById("div2").style.display="none"; 
        document.getElementById("div3").style.display="block"; 
       }
         
       return returnval;
}
