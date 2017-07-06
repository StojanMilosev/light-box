//getting all images as an array
var img = document.getElementsByClassName("img");
//getting all demo-images as an array
var demo_img = document.getElementsByClassName("demo-img");
//geting modal and it's content by ID
var modal = document.getElementById("image-modal");
var modal_content_image = document.getElementById("modal-content-image");
//adding event click listeners to all images
//function shows modal and populates the modal content with the image
for(var i=0;i<img.length;i++){
    //add event listener for current image
    img[i].addEventListener('click',function(){
        //display modal
        modal.style.display = "block";
        //set modal_conten_image src atribute with the current image src value
        modal_content_image.src = this.src;
    });
}
//adding event click listeners to all demo images in the modal
//function populates the modal content with the clicked image
for(var i=0;i<demo_img.length;i++){
    //add event listener for current image
    demo_img[i].addEventListener('click',function(){
        //set modal_conten_image src atribute with the current image src value
        modal_content_image.src = this.src;
    });
}
//close button function
//geting close elemtns by id
var close = document.getElementById("close");
//hide modal when close element is clicked
close.onclick = function(){
    modal.style.display = "none";
};
//hide modal when clicked outside of modal content
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
};