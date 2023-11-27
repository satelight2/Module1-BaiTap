function imgGallery() {
  const mainImg = document.querySelector(".details__img");
  const smallImg = document.querySelectorAll(".details__small-img");
  smallImg.forEach((img) => {
    img.addEventListener("click", () => {
      //   console.log("clicked,this", this);
      mainImg.src = img.src;
    });
  });
}
imgGallery();

$(document).ready(function () {
  $(".add-cart").on("click", function (e) {
    console.log("clicked");
    e.preventDefault(); //stop the browser from following the link
    var cart = $(".shoppingCart");
    var imgtodrag = $(this)
      .parent(".details__actions")
      .parent(".details__group")
      .parent(".details__container")
      .find("img")
      .eq(0);
    // console.log(
    //   $(this)
    //     .parent(".details__actions")
    //     .parent(".details__group")
    //     .parent(".details__container")
    //     .find("img")
    //     .eq(0)

    if (imgtodrag) {
      var imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left,
        })
        .css({
          opacity: "0.8",
          position: "absolute",
          height: "150px",
          width: "150px",
          "z-index": 99,
        })
        .appendTo($("body"))
        .animate(
          {
            top: cart.offset().top + 10,
            left: cart.offset().left + 15,
            width: 90,
            height: 90,
          },
          1000,
          "easeInOutExpo"
        );

      setTimeout(function () {
        cart.effect(
          "shake",
          {
            times: 2,
          },
          300
        );
      }, 1500);

      imgclone.animate(
        {
          width: 0,
          height: 0,
        },
        function () {
          $(this).detach();
        }
      );
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".detail__tab");
  const tabContents = document.querySelectorAll(".details__tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const targetId = tab.dataset.target;
      const target = document.querySelector(targetId);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active-tab");
      });

      tabs.forEach((tab) => {
        tab.classList.remove("active-tab");
      });

      target.classList.add("active-tab");
      tab.classList.add("active-tab");
    });
  });
});
