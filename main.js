var img = document.getElementsByClassName("img");
var modal = document.getElementById("image-modal");
var btn = document.getElementById("btn");

for(var i=0;i<img.length;i++){
    img[i].addEventListener('click',function(){
        modal.style.display = "block";
    });
}
//close button function
var close= document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
    close[i].addEventListener('click',function(){
        modal.style.display = "none";
    });
}