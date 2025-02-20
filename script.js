
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); 
    }

    function prevSlide() {
        let slides = document.getElementsByClassName("slide");
        slideIndex--;
        if (slideIndex < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    function nextSlide() {
        let slides = document.getElementsByClassName("slide");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
    showSlides();

    function placeOrder(coffeeName, price, quantityId) {
        const quantity = document.getElementById(quantityId).value;
        const totalAmount = price * quantity;
        
        
        alert(`Order Success!!!! 
            You have ordered ${quantity} ${coffeeName}(s) 
            Total = $${totalAmount}
            Please wait for processing.`);
    }

