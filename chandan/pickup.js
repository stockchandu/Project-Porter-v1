let image = [];
let i = 0;
image[0] = "https://d35ppnqksufxmo.cloudfront.net/frontend_website/dc62acbd47448f7408a42cafd2373ff4.jpg";
image[1] = "https://d35ppnqksufxmo.cloudfront.net/frontend_website/06836ba0537d528a5e6d67162486c5dd.png";
image[2] = "https://d35ppnqksufxmo.cloudfront.net/frontend_website/f2aa8b1ddc884cb99c166ef3f0126d11.jpg";
image[3] = "https://d35ppnqksufxmo.cloudfront.net/frontend_website/f5523c6e547962ddd0c9e4a671aab308.jpg";

function rotate_image() {
    document.slide.src = image[i]
    if (i < image.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout("rotate_image()", 1000)
}

rotate_image()
