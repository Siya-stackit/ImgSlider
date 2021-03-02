var images = [
    "C:/Users/siyab/Documents/WEBSITES/Glass skeleton/1.jpg",
     "C:/Users/siyab/Documents/WEBSITES/Glass skeleton/2.jpg",
    "C:/Users/siyab/Documents/WEBSITES/Glass skeleton/3.jpg",
    "C:/Users/siyab/Documents/WEBSITES/Glass skeleton/4.jpg"
];

var num = 0;

function Next(){
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length){
        num = 0;
    }

    slider.src = images[num];

}

function prev(){
    var slider = document.getElementById("slider");
    num--;
    if (num = 0) {
        
        num = images.length-1;
    }

    slider.src = images[num];
}