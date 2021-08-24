

    let div_slide = document.getElementById("slide_div");
    let create_image = document
    let i = 0;
    let arr = [];

    arr[0] = "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/desktop_2W_heroimage.jpg";
    arr[1] = "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/desktop_house_shifting_webbanner.jpg";
    arr[2] = "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/outstation_webbanner.jpg";
    arr[3] = "https://s3-ap-southeast-1.amazonaws.com/porter-website-banners/prod/home/all/landing_pg_heroimage.png";

    function slide_show() {

        document.slide.src = arr[i];

    if (i < arr.length - 1) {
        i++
    } else {
        i = 0;
            }

    setTimeout("slide_show()", 1000)
        }

    slide_show()
