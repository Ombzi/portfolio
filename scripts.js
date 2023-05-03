 //Login
 $(document).ready(function () {
    $("#tglbtn").click(function () {
        $(".contact").toggle();
    });
});

// Hover function
$(document).ready(function () {
    $(".corp, .resp, .care, .sit").hover(function () {
        $(this).css("border", "2px solid black");
        $(this).css("background-color", "rgba(0, 0, 0, 0.5)");
    }, function () {
        $(this).css("border", "");
        $(this).css("background-color", "");
    }
    );
});

//hover right footer
$(document).ready(function () {
    $(".footer p, .icons img").hover(function () {
        $(this).css("color", "white");
    },
        function () {
            $(this).css("color", ""); // Restore default color
        }
    );
});


let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  $(slides[slideIndex - 1]).animate({opacity: 1}, 1000);
}

function startInterval() {
  showSlides(1);
  setInterval(function() { plusSlides(1); }, 6000);
}


//popup
$(document).ready(function() {
  $('#log').click(function() {
    // Show the popup block
    $('#popup .content').toggle();
  });
});

$(document).ready(function() {
  $('#sub').click(function() {
    // Show the popup block
    $('#popup .content').hide();
  });
});


function toggleMode() {
  const body = document.querySelector('body');
  if (body.classList.contains('theme1')) {
    body.classList.remove('theme1');
    body.classList.add('theme2');
  } else if (body.classList.contains('theme2')) {
    body.classList.remove('theme2');
    body.classList.add('theme3');
  } else {
    body.classList.remove('theme3');
    body.classList.add('theme1');
  }
}