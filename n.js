

var img_slider_containor = document.querySelector(".img-slider-containor");
var btn = document.querySelectorAll(".middle-img-slider-containor button")



for (var i = 1; i <= 10; i++) {

    var divtag = document.createElement("div")
    divtag.classList.add("item")
    img_slider_containor.appendChild(divtag)
    var imgtag = document.createElement("img")
    imgtag.classList.add("Slideimg")
    divtag.appendChild(imgtag)
    imgtag.src = `images/${i}.webp`

}

var item = document.querySelectorAll(".item")



btn[0].disabled = true;
var poe = 0;
btn[1].addEventListener(

    "click",
    function (e) {

        if (item.length - 2 > poe) {
            poe++
            for (img of item) {
                img.style.transform = `translateX(-${poe * 100}%)`
            }
        }
        btn[0].disabled = false; // Enable prev button
        if (poe === item.length - 1) {
            btn[1].disabled = true; // Disable next button at the end
        }


    }
)


btn[0].addEventListener("click", function (e) {
    if (poe > 0) {
        poe--;
        for (var img of item) {
            img.style.transform = `translateX(-${poe * 100}%)`;
        }
        btn[1].disabled = false; // Enable next button
        if (poe === 0) {
            btn[0].disabled = true; // Disable prev button at the start
        }
    }
});




var show = document.querySelectorAll(".show")
var content = document.querySelectorAll(".content")
var button = document.querySelectorAll(".click-heading")
var plus = document.querySelectorAll(".fa-plus")
var cross = document.querySelectorAll(".fa-xmark")






button.forEach(

    function (btn, index) {

        btn.addEventListener(

            "click",
            function () {

                button.forEach(

                    function (value, i) {

                        if (index == i) {

                            content[i].classList.toggle("show")
                            plus[i].classList.toggle("plusshow")
                            cross[i].classList.toggle("crossshow")

                        } else {

                            content[i].classList.remove("show")
                            plus[i].classList.remove("plusshow")
                            cross[i].classList.remove("crossshow")

                        }


                    }

                )


            }

        )

    }

)
