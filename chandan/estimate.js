
function show_error() {

    let box_1 = document.getElementById("select_box_1").value;
    // input value from user
    let pickUp = document.getElementById("pick_up").value;
    let dropOf = document.getElementById("drop_off").value;
    let mobile_number = document.getElementById("mobile").value;
    let req_value = document.getElementById("select_box_2").value;

    // upper div 
    let errpickup = document.getElementById("err_pick_up");
    let errdropoff = document.getElementById("err_drop_off");
    let errmobilenum = document.getElementById("err_mobile_num");
    let errrequirement = document.getElementById("err_requirement");

    // input parent 
    let errDiv_1 = document.getElementById("err_div_1");
    let errDiv_2 = document.getElementById("err_div_2");
    let errDiv_3 = document.getElementById("err_div_3");
    let errDiv_4 = document.getElementById("err_div_4");

    if (pickUp === "" || dropOf === "" || mobile_number === "" || req_value === "requirement") {
        // pickup input
        errpickup.innerText = "Enter pickup address";
        errpickup.style.border = "1px solid red";
        errpickup.style.backgroundColor = "white";
        errpickup.style.color = "red";
        errpickup.style.textAlign = "center";
        errpickup.style.width = "15%";
        errpickup.style.marginLeft = "5%";
        errpickup.style.fontSize = "13px";
        errpickup.style.padding = "2px";
        errpickup.style.borderRadius = "5px";
        errDiv_1.style.border = "1px solid red";
        //dropoff input
        errdropoff.innerText = "Enter dropoff address";
        errdropoff.style.border = "1px solid red";
        errdropoff.style.backgroundColor = "white";
        errdropoff.style.color = "red";
        errdropoff.style.textAlign = "center";
        errdropoff.style.width = "15%";
        errdropoff.style.marginLeft = "5%";
        errdropoff.style.fontSize = "13px";
        errdropoff.style.padding = "2px";
        errdropoff.style.borderRadius = "5px";
        errDiv_2.style.border = "1px solid red";
        // mobile number input
        errmobilenum.innerText = "Enter mobile number";
        errmobilenum.style.border = "1px solid red";
        errmobilenum.style.backgroundColor = "white";
        errmobilenum.style.color = "red";
        errmobilenum.style.textAlign = "center";
        errmobilenum.style.width = "15%";
        errmobilenum.style.marginLeft = "5%";
        errmobilenum.style.fontSize = "13px";
        errmobilenum.style.padding = "2px";
        errmobilenum.style.borderRadius = "5px";
        errDiv_3.style.border = "1px solid red";

        // requirement input
        errrequirement.innerText = "Select requirement";
        errrequirement.style.border = "1px solid red";
        errrequirement.style.backgroundColor = "white";
        errrequirement.style.color = "red";
        errrequirement.style.textAlign = "center";
        errrequirement.style.width = "15%";
        errrequirement.style.marginLeft = "5%";
        errrequirement.style.fontSize = "13px";
        errrequirement.style.padding = "2px";
        errrequirement.style.borderRadius = "5px";
        errDiv_4.style.border = "1px solid red";

    } else if (mobile_number.length != 10 || isNaN(mobile_number)) {
        errmobilenum.innerText = "Enter correct number";
        errmobilenum.style.border = "1px solid red";
        errmobilenum.style.backgroundColor = "white";
        errmobilenum.style.color = "red";
        errmobilenum.style.textAlign = "center";
        errmobilenum.style.width = "15%";
        errmobilenum.style.marginLeft = "5%";
        errmobilenum.style.fontSize = "13px";
        errmobilenum.style.padding = "2px";
        errmobilenum.style.borderRadius = "5px";
        errDiv_3.style.border = "1px solid red";

    }
}



function validate() {
    let errpickup = document.getElementById("err_pick_up");
    let errdropoff = document.getElementById("err_drop_off");


    let errDiv_1 = document.getElementById("err_div_1");
    let errDiv_2 = document.getElementById("err_div_2");


    let pickUp = document.getElementById("pick_up").value;
    let dropOf = document.getElementById("drop_off").value;
    let mumbai = [
        {
            city_1: "navi",
            city_2: "thane",
        }
    ]


    mumbai.forEach(function (ele) {

        if (pickUp != ele.city_1 && dropOf != ele.city_2) {
            errpickup.innerText = "Enter radious address";
            errpickup.style.border = "1px solid red";
            errpickup.style.backgroundColor = "white";
            errpickup.style.color = "red";
            errpickup.style.textAlign = "center";
            errpickup.style.width = "15%";
            errpickup.style.marginLeft = "5%";
            errpickup.style.fontSize = "13px";
            errpickup.style.padding = "2px";
            errpickup.style.borderRadius = "5px";
            errDiv_1.style.border = "1px solid red";
        } else {
            console.log("match")
        }
    })



}






















// onfocus color change
function on_color_change_1() {
    document.getElementById("name_1").style.color = "blue"
}
function on_color_change_2() {
    document.getElementById("name_2").style.color = "blue"
}
function on_color_change_3() {
    document.getElementById("name_4").style.color = "blue"
    document.getElementById("name_4").innerText = "Name(Optional)"
}

function on_color_change_4() {
    document.getElementById("name_3").style.color = "blue"
}

function on_color_change_5() {
    let option_value = document.getElementById("name_5");

    let value_option = document.getElementById("select_box_2").value;


    if (value_option === "personal" || value_option === "business" || value_option === "houseshifting") {

        option_value.style.color = "blue"
        option_value.style.visibility = "visible"
    }


}



document.getElementById("pick_up").addEventListener("focus", on_color_change_1);
document.getElementById("drop_off").addEventListener("focus", on_color_change_2);
document.getElementById("mobile").addEventListener("focus", on_color_change_4);
document.getElementById("option_name").addEventListener("focus", on_color_change_3);