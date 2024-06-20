document.getElementById("year").innerHTML = new Date().getFullYear();


let slideIndex= [1];
let slideId= ["mySlides1"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
  }
  
  function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
  }







  // document.getElementById("year").innerHTML = new Date().getFullYear();
  // jquery for the navbar 
  $(document).ready(function(){
    $(window).scroll(function(){
      let scroll = $(window).scrollTop();
      if(scroll > 300){
        $(".navbar").css("background", "blue");
      }
      else
      {
        $(".navbar").css("background", "red");
      }

    })
  })