// typing effect start here
const texts = ["Web Designer", "Frontend Web Developer"];

let currentText = [];
let isDeleting = false;
isEnd = false;
let i = 0;
let j = 0;
(function typing() {
    document.querySelector(".typing").innerHTML = currentText.join("");
    isEnd = false;
    if (i < texts.length) {
        if (j == texts[i].length) {
            isEnd = true;
            isDeleting = true;
        }
        if (!isDeleting && j < texts[i].length) {
            currentText.push(texts[i][j]);
            j++;
        }

        if (isDeleting && j <= texts[i].length) {
            currentText.pop(texts[i][j]);
            j--;
            if (isDeleting && j === 0) {
                currentText = [];
                isDeleting = false;
                i++;
                if (i === texts.length) {
                    i = 0;
                }
            }
        }
    }
    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const Timer = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
    setTimeout(typing, Timer);
})();

//   typing effect end here

$(document).ready(function() {
    // smooth scroll when click nav-links
    $(".nav-links li a").click(function(e) {
        e.preventDefault();

        if (this.hash !== "") {
            const hash = this.hash;
            $("html,body").animate({
                    scrollTop: $(hash).offset().top,
                },
                800
            );
        }
    });
//smmoth scroll when click "read more" link
$(".home-container .btn").click(function(e){
    e.preventDefault();
    if(this.hash !==""){
        const hash=this.hash;
        $("html,body").animate({scrollTop:$(hash).offset().top},800);
    }
})
    // clip path when click menu-btn

    $(".menu-btn").click(function(e) {
        e.preventDefault();
        $(".menu").toggleClass("open");
        $(".typing").addClass("Noborder");
        $(".fa-bars").toggleClass("Close");
        $(".menu li a").click(function() {
            $(".menu").removeClass("open");
            $(".fa-bars").removeClass("Close");
            $(".typing").removeClass("Noborder");
            $("body").removeClass("overflowHidden");
        });
    });
});

//show go-to-top button after scrolling 20px from top
window.onscroll = function() {
    scrollFunction();
};
const scrollButton = document.querySelector("#scrollToTop");

function scrollFunction() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ?
        (scrollButton.style.display = "block") :
        (scrollButton.style.display = "none");
}

// when click, go-to-top
function topFunction() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}