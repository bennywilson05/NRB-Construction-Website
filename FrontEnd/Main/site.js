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

getanestimatebutton.onclick = function() {
    
    if (getanestimatesection) {
        getanestimatesection.scrollIntoView({
            behavior: "smooth"
        });
    }
    
    else {
        window.location.href = "/#get-an-estimate-form";
    }
};

if (fullgallerybutton) {
    fullgallerybutton.onclick = function() {
        window.location.href = "/gallery";
    };
}

gallerybutton.onclick = function() {
    window.location.href = "/gallery";
};

companylogobutton.onclick = function() {
    window.location.href = "/";
};

contactbutton.onclick = function() {
    window.location.href = "/contact";
};

const requestForm = document.getElementById("get-an-estimate-form");

if (requestForm) {
    requestForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(requestForm);
        const data = Object.fromEntries(formData);

      
        document.querySelectorAll(".field-error").forEach(function(error) {
            error.textContent = "";
            error.style.display = "none";
        });

        const formError = document.getElementById("form-error");
        const formSuccess = document.getElementById("form-success");

  
        formError.textContent = "";
        formError.style.display = "none";

        formSuccess.textContent = "";
        formSuccess.style.display = "none";

        let hasError = false;


       
        if (!data.fname.trim()) {
            const error = document.getElementById("fname-error");

            error.textContent = "This field is required";
            error.style.display = "block";

            hasError = true;
        }


   
        if (!data.lname.trim()) {
            const error = document.getElementById("lname-error");

            error.textContent = "This field is required";
            error.style.display = "block";

            hasError = true;
        }


       
        if (!data.email.trim()) {
            const error = document.getElementById("email-error");

            error.textContent = "This field is required";
            error.style.display = "block";

            hasError = true;
        }


        
        if (!data.zipcode.trim()) {
            const error = document.getElementById("zipcode-error");

            error.textContent = "This field is required";
            error.style.display = "block";

            hasError = true;
        }


       
        if (!data.project.trim()) {
            const error = document.getElementById("project-error");

            error.textContent = "This field is required";
            error.style.display = "block";

            hasError = true;
        }


        
        if (hasError) {
            return;
        }


        try {

            const response = await fetch("/api/requestforms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            const emailError = document.getElementById("email-error");


            if (response.status === 400) {
                emailError.textContent = result.message;
                emailError.style.display = "block";
                return;
            }

            if (response.status === 429) {
                formError.textContent = result.message;
                formError.style.display = "block";
                return;
            }

          
            if (response.status === 500) {
                formError.textContent =
                    "There was an error submitting the form. Please try again.";

                formError.style.display = "block";
                return;
            }


            
            if (!response.ok) {
                formError.textContent =
                    "There was an error submitting the form. Please try again.";

                formError.style.display = "block";
                return;
            }


            requestForm.reset();

            formSuccess.textContent = "Form successfully sent!";
            formSuccess.style.display = "block";

        } catch (error) {

            
            formError.textContent =
                "There was an error submitting the form. Please try again.";

            formError.style.display = "block";

            console.error("Request form submission error:", error);
        }
    });
}
const contactForm = document.getElementById("contact-us-form");

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        
        document.querySelectorAll(".field-error").forEach(function(error) {
            error.textContent = "";
            error.style.display = "none";
        });

        const formError = document.getElementById("form-error");
        const formSuccess = document.getElementById("form-success");

    
        formError.textContent = "";
        formError.style.display = "none";

        formSuccess.textContent = "";
        formSuccess.style.display = "none";

        let hasError = false;


   
        if (!data.fname.trim()) {
            const error = document.getElementById("fname-error");

            error.textContent = "This field is required";
            error.style.display = "block";

            hasError = true;
        }


      
        if (!data.lname.trim()) {
            const error = document.getElementById("lname-error");

            error.textContent = "This field is required";
            error.style.display = "block";

            hasError = true;
        }


    
        if (!data.email.trim()) {
            const error = document.getElementById("email-error");

            error.textContent = "This field is required";
            error.style.display = "block";

            hasError = true;
        }


        if (!data.zipcode.trim()) {
            const error = document.getElementById("zipcode-error");

            error.textContent = "This field is required";
            error.style.display = "block";

            hasError = true;
        }


     
        if (!data.message.trim()) {
            const error = document.getElementById("message-error");

            error.textContent = "This field is required";
            error.style.display = "block";

            hasError = true;
        }


      
        if (hasError) {
            return;
        }


        try {

            const response = await fetch("/api/contactform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            const emailError = document.getElementById("email-error");


          
            if (response.status === 400) {
                emailError.textContent = result.message;
                emailError.style.display = "block";
                return;
            }
            
            if (response.status === 429) {
                formError.textContent = result.message;
                formError.style.display = "block";
                return;
            }

            if (response.status === 500) {
                formError.textContent =
                    "There was an error submitting the form. Please try again.";

                formError.style.display = "block";
                return;
            }


            if (!response.ok) {
                formError.textContent =
                    "There was an error submitting the form. Please try again.";

                formError.style.display = "block";
                return;
            }


            contactForm.reset();

            formSuccess.textContent = "Form successfully sent!";
            formSuccess.style.display = "block";

        } catch (error) {

            formError.textContent =
                "There was an error submitting the form. Please try again.";

            formError.style.display = "block";

            console.error("Contact form submission error:", error);
        }
    });
}