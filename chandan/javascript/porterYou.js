let first_parent_show = document.getElementById("show_parent_1");
let image_change = document.getElementById("change_image");

function change_clr() {
    document.getElementById("border_select").style.border = "2px solid blue"
    document.getElementById("select_city").style.color = "blue"


    if (document.getElementById("box_select").value === "surat") {


        image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/2_wheeler-947e3c6aac74dcdd11fdd4059e4ee72132b276200dff063d6dff2c445f7aab5b.png"
        document.getElementById("change_name").innerText = "RENT 2 WHEELER";
        document.getElementById("rent_price_show").innerText = "₹ 30";
        document.getElementById("base_price").innerText = "25";
        document.getElementById("kg_price").innerText = "20 kg";
        document.getElementById("size_LBH").innerText = " 40cm x 40cm x 40 cm";


        let parent_div = document.createElement("div");

        parent_div.setAttribute("id", "parent_select_box");

        let sub_parent_1 = document.createElement("div");
        let sub_parent_2 = document.createElement("div");
        let sub_parent_3 = document.createElement("div");
        let sub_parent_4 = document.createElement("div");

        sub_parent_1.setAttribute("class", "sub_parent1");
        sub_parent_2.setAttribute("class", "sub_parent1");
        sub_parent_3.setAttribute("class", "sub_parent1");
        sub_parent_4.setAttribute("class", "sub_parent1");

        let child_1 = document.createElement("div");
        let child_2 = document.createElement("div");
        let child_3 = document.createElement("div");
        let child_4 = document.createElement("div");

        let create_img_1 = document.createElement("img");
        create_img_1.src = "bike.png";

        create_img_1.setAttribute("id", "bike");

        let create_txt_1 = document.createElement("p");
        create_txt_1.innerText = "2 WHEELER";

        let create_img_2 = document.createElement("img");
        create_img_2.src = "tataAce.png";

        let create_txt_2 = document.createElement("p");
        create_txt_2.innerText = "TATA ACE";


        let create_img_3 = document.createElement("img");
        create_img_3.src = "tatabold.png";

        let create_txt_3 = document.createElement("p");
        create_txt_3.innerText = "PICKUP 8FT";


        let create_img_4 = document.createElement("img");
        create_img_4.src = "wheeler.png";

        let create_txt_4 = document.createElement("p");
        create_txt_4.innerText = "3 WHEELER";

        child_1.append(create_img_1, create_txt_1);
        child_2.append(create_img_2, create_txt_2);
        child_3.append(create_img_3, create_txt_3);
        child_4.append(create_img_4, create_txt_4);


        sub_parent_1.append(child_1);
        sub_parent_2.append(child_2);
        sub_parent_3.append(child_3);
        sub_parent_4.append(child_4);



        parent_div.append(sub_parent_1, sub_parent_2, sub_parent_3, sub_parent_4);
        document.getElementById("show_parent").append(parent_div);

        first_parent_show.style.display = "none"
        // first_parent_show.style.visibility = "hidden"
        get_btn_show(create_img_1, create_img_2, create_img_3, create_img_4);
    } else if (document.getElementById("box_select").value === "bangalore") {
        first_parent_show.style.display = "flex"
        image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_ace-e92a36b3508e6e3b1804fd2015adbfb6c948bc35afab36699440785ed83b5b24.png";
        document.getElementById("show_parent").style.visibility = "hidden"
        // document.getElementById("show_parent").style.display = "none"
        // first_parent_show.style.visibility = "visible"
    }

}

// change_clr()


let sl_bx_vl = document.getElementById("box_select").addEventListener("change", change_clr);



function get_btn_show(img_1, img_2, img_3, img_4) {
    // console.log(img)
    img_1.onclick = function () {

        image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/2_wheeler-947e3c6aac74dcdd11fdd4059e4ee72132b276200dff063d6dff2c445f7aab5b.png"

        document.getElementById("change_name").innerText = "RENT 2 WHEELER";
        document.getElementById("rent_price_show").innerText = "₹ 30";
        document.getElementById("base_price").innerText = "25";
        document.getElementById("kg_price").innerText = "20 kg";
        document.getElementById("size_LBH").innerText = " 40cm x 40cm x 40 cm";

    }

    img_2.onclick = function () {

        image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_ace-e92a36b3508e6e3b1804fd2015adbfb6c948bc35afab36699440785ed83b5b24.png"

        document.getElementById("change_name").innerText = "RENT TATA ACE";
        document.getElementById("rent_price_show").innerText = "₹ 220";
        document.getElementById("base_price").innerText = "70";
        document.getElementById("kg_price").innerText = "750 kg";
        document.getElementById("size_LBH").innerText = " 7ft x 4.5ft x 6ft";

    }

    img_3.onclick = function () {

        image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/pickup_8ft-5daaf8cf8ab115b87e6ead485301f032ae8722c594537af99b45732905087eed.png"

        document.getElementById("change_name").innerText = "RENT PICKUP 8FT";
        document.getElementById("rent_price_show").innerText = "₹ 275";
        document.getElementById("base_price").innerText = "80";
        document.getElementById("kg_price").innerText = "1000 kg";
        document.getElementById("size_LBH").innerText = " 8ft x 4.5ft x 5.5ft";

    }

    img_4.onclick = function () {

        image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/3_wheeler-022fc2284832545607afeea8be6e567e0d2e99ff2e4e035e4f66374b22fa92db.png"

        document.getElementById("change_name").innerText = "RENT 3 WHEELER";
        document.getElementById("rent_price_show").innerText = "₹ 130";
        document.getElementById("base_price").innerText = "60";
        document.getElementById("kg_price").innerText = "500 kg";
        document.getElementById("size_LBH").innerText = " 5.5ft x 4.5ft x 5ft";

    }



}

// let image_change = document.getElementById("change_image");
function Ace_Helper() {

    image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/ace_helper-13b68258cbd75d2985ef458b6840d37c90735c3d50378dd07392ed6eb09073c9.png";

    document.getElementById("change_name").innerText = "RENT ACE (HELPER)";
    document.getElementById("rent_price_show").innerText = "₹ 200";
    document.getElementById("base_price").innerText = "75";
    document.getElementById("kg_price").innerText = "750 kg";
    document.getElementById("size_LBH").innerText = "7ft x 4ft x 5ft";

}

function tata_407() {

    image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_407-b968c07406c8b63fca431ef8ea2152caf5272b0013502a73d2390289f1138505.png";

    document.getElementById("change_name").innerText = "RENT TATA 407";
    document.getElementById("rent_price_show").innerText = "₹ 500";
    document.getElementById("base_price").innerText = "100";
    document.getElementById("kg_price").innerText = "2500 kg";
    document.getElementById("size_LBH").innerText = "9ft x 5.5ft x 6ft";


}

function pick_up_8FT() {

    image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/pickup_8ft-5daaf8cf8ab115b87e6ead485301f032ae8722c594537af99b45732905087eed.png";

    document.getElementById("change_name").innerText = "RENT PICKUP 8FT";
    document.getElementById("rent_price_show").innerText = "₹ 300";
    document.getElementById("base_price").innerText = "75";
    document.getElementById("kg_price").innerText = "1200kg";
    document.getElementById("size_LBH").innerText = "8ft x 4.5ft x 5.5ft";

}

function three_wheeler_single() {

    image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/3_wheeler-022fc2284832545607afeea8be6e567e0d2e99ff2e4e035e4f66374b22fa92db.png";

    document.getElementById("change_name").innerText = "RENT 3 WHEELER";
    document.getElementById("rent_price_show").innerText = "₹ 150";
    document.getElementById("base_price").innerText = "50";
    document.getElementById("kg_price").innerText = "500 kg";
    document.getElementById("size_LBH").innerText = "5.5ft x 4.5ft x 5ft";

}
function three_wheeler_help_person() {

    image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/3_wheeler_helper-51343864a9a26168e4bfc00ad299c33515cc01b793fc8b797c380aa46abf19c3.png";

    document.getElementById("change_name").innerText = "RENT 3 WHEELER (HELPER)";
    document.getElementById("rent_price_show").innerText = "₹ 150";
    document.getElementById("base_price").innerText = "55";
    document.getElementById("kg_price").innerText = "500 kg";
    document.getElementById("size_LBH").innerText = " 6ft x 5ft x 5ft";

}
function tata_help_ace() {

    image_change.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_ace-e92a36b3508e6e3b1804fd2015adbfb6c948bc35afab36699440785ed83b5b24.png";

    document.getElementById("change_name").innerText = "RENT TATA ACE";
    document.getElementById("rent_price_show").innerText = "₹ 200";
    document.getElementById("base_price").innerText = "70";
    document.getElementById("kg_price").innerText = "750 kg";
    document.getElementById("size_LBH").innerText = " 7ft x 4ft x 5ft";

}
document.getElementById("ace_image").addEventListener("click", Ace_Helper);
document.getElementById("tata_407").addEventListener("click", tata_407);
document.getElementById("pick_up_2").addEventListener("click", pick_up_8FT)
document.getElementById('three_wheeler').addEventListener("click", three_wheeler_single)
document.getElementById('three_wheeler_helper').addEventListener("click", three_wheeler_help_person)
document.getElementById('tata_ACE').addEventListener("click", tata_help_ace)
