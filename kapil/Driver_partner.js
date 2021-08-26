/*function register() {
    var el = document.querySelector("form");
    //console.log(el);
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;

    var myselect = document.getElementById("myselect").selectedIndex;
    var city = document.getElementsByTagName("option")[myselect].value;
    console.log(city);

    var myselect2 = document.getElementById("myselect2").selectedIndex;
    console.log(myselect2);
    var vehicle = document.getElementsByTagName("option")[myselect2].value;
    console.log(vehicle);
}*/

var name = document.getElementById("name").value;

var div = document.getElementById("extradiv");
var blk = document.getElementById("entername").value;

div.appendChild(blk);
 


 

function regis(){
    document.getElementById("details").style.display="none"; 
    document.getElementById("extradiv").style.display="block"; 
    
}

function back(){
    document.getElementById("extradiv").style.display="none"; 
    document.getElementById("details").style.display="block"; 
}

