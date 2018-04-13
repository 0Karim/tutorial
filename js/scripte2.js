var slideIndex2 = 0;
Automatic();


function Automatic(){
	var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1} 
    slides[slideIndex2-1].style.display = "block"; 
    setTimeout(Automatic, 2000); // Change image every 2 seconds

}
