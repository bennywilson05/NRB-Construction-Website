const galleryImage1 = document.getElementById("gallery-image1");
const galleryImage2 = document.getElementById("gallery-image2");
const galleryImage3 = document.getElementById("gallery-image3")
const galleryButton1 = document.getElementById("galleryButton1");
const galleryButton2 = document.getElementById("galleryButton2");
const galleryButton3 = document.getElementById("galleryButton3");
const getanestimatebutton = document.getElementById("get-an-estimate-button");
const getanestimatesection = document.getElementById("get-an-estimate-form");
const gallerybutton = document.getElementById("gallery-button");
const companylogobutton = document.getElementById("company-logo");
const fullgallerybutton = document.getElementById("full-gallery-button");
const contactbutton = document.getElementById("contact-button");


document.addEventListener("DOMContentLoaded", function(){
    if(galleryImage1 && galleryButton1){
        showImage(galleryImage1);
        galleryClicked(galleryButton1);
        
    }
});

function showImage(image) {
    galleryImage3.classList.remove("active");
    galleryImage2.classList.remove("active");
    galleryImage1.classList.remove("active");
    image.classList.add("active");
};

function galleryClicked(button){
    galleryButton1.classList.remove("selected");
    galleryButton2.classList.remove("selected");
    galleryButton3.classList.remove("selected");
    button.classList.add("selected");
};

if (galleryButton1 && galleryImage1) {
    galleryButton1.onclick = function() {
        galleryClicked(galleryButton1);
        showImage(galleryImage1);
    };
};

if (galleryButton2 && galleryImage2) {
    galleryButton2.onclick = function() {
        galleryClicked(galleryButton2);
        showImage(galleryImage2);
    };
};

if (galleryButton3 && galleryImage3) {
    galleryButton3.onclick = function() {
        galleryClicked(galleryButton3);
        showImage(galleryImage3);
    };
};

getanestimatebutton.onclick = function(){
    
    if(getanestimatesection){
        getanestimatesection.scrollIntoView({
        behavior: "smooth"
    });
    }
    
    else{
        window.location.href = "MainPage.html#get-an-estimate-form";
    }
};

if (fullgallerybutton) {
    fullgallerybutton.onclick = function() {
        window.location.href = "GalleryPage.html";
    };
}

gallerybutton.onclick = function(){
    window.location.href = "GalleryPage.html";
};

companylogobutton.onclick = function(){
    window.location.href = "MainPage.html";
};

contactbutton.onclick = function(){
    window.location.href = "ContactPage.html";
};

