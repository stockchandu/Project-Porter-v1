let get_item = localStorage.getItem("city_val");

        let convert_obj = JSON.parse(get_item);

        document.getElementById("pick_up_location").innerText = convert_obj[0].pick_up;
        document.getElementById("drop_off_location").innerText = convert_obj[0].drop_of;

        let btn = document.getElementById("show_edit_option");

        function showDiv() {

            let main_parent = document.createElement("div");

            main_parent.setAttribute("id", "m_p");

            let main_div_1 = document.createElement("div");
            main_div_1.setAttribute("id", "m_d_1");

            let main_div_1_child_1 = document.createElement("div");
            main_div_1_child_1.innerText = "Get Trip Estimate";

            let main_div_1_child_2 = document.createElement("div");

            let cross_image = document.createElement("img");
            cross_image.src = "https://simg.nicepng.com/png/small/242-2425648_close-remove-delete-exit-cross-cancel-trash-comments.png";

            main_div_1_child_2.append(cross_image);

            main_div_1.append(main_div_1_child_1, main_div_1_child_2);


            let main_div_2 = document.createElement("div");
            main_div_2.setAttribute("id", "m_d_2");


            let main_div_2_child_1 = document.createElement("div");
            let main_div_2_child_2 = document.createElement("div");
            let main_div_2_child_3 = document.createElement("div");
            let main_div_2_child_4 = document.createElement("div");




            let input_1 = document.createElement("input");
            input_1.setAttribute("type", "text");
            input_1.placeholder = "Pick Up";

            let input_2 = document.createElement("input");
            input_2.setAttribute("type", "text");
            input_2.placeholder = "Drop Location";

            let button = document.createElement("button");
            button.innerText = "GET ESTIMATE"

            let select = document.createElement("select");
            let option_1 = document.createElement("option");
            option_1.innerText = "CITY"
            let option_2 = document.createElement("option");
            option_2.value = "mumbai";
            option_2.innerText = "MUMBAI";
            let option_3 = document.createElement("option");
            option_3.value = "delhi";
            option_3.innerText = "DELHI NCR";
            let option_4 = document.createElement("option");
            option_4.value = "bangalore";
            option_4.innerText = "BANGALORE";

            select.append(option_1, option_2, option_3, option_4);

            main_div_2_child_1.append(select);
            main_div_2_child_2.append(input_1);
            main_div_2_child_3.append(input_2);
            main_div_2_child_4.append(button);

            main_div_2.append(main_div_2_child_1, main_div_2_child_2, main_div_2_child_3, main_div_2_child_4);

            main_parent.append(main_div_1, main_div_2);
            document.getElementById("main_parent_fare").append(main_parent);

            document.getElementById('fare_parent_1').style.visibility = "hidden"

            remove_show(cross_image, main_parent);

        }

        btn.addEventListener("click", showDiv);



        function remove_show(img, main_parent) {


            img.onclick = function () {
                document.getElementById('fare_parent_1').style.visibility = "visible";
                main_parent.style.display = "none";
            }

        }

