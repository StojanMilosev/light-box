var img = document.getElementsByClassName("img");
var demo_img = document.getElementsByClassName("demo-img");
var modal = document.getElementById("image-modal");
var modal_content_image = document.getElementById("modal-content-image");
var btn = document.getElementById("btn");
//adding event click listeners to all images,function shows modal and populates the mdoal content with the image
for(var i=0;i<img.length;i++){
    img[i].addEventListener('click',function(){
        modal.style.display = "block";
        modal_content_image.src = this.src;
    });
}
//adding event click listeners to all demo images in the modal
//function populates the mdoal content with the clicked image
for(var i=0;i<demo_img.length;i++){
    demo_img[i].addEventListener('click',function(){
       modal_content_image.src = this.src;
    });
}
//close button function
var close= document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
    close[i].addEventListener('click',function(){
        modal.style.display = "none";
    });
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
};