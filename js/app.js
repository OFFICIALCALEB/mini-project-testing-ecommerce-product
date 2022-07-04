$(window).on("load", function () {
    $(".loader-container").fadeOut(500, function () {
        $(this).remove();
    });
});
function changeMode() {
    document.body.classList.toggle('night-mode');
    document.getElementById("modeIcon").classList.toggle("fa-sun");
    $("#dark_mode_text").toggleClass("text-white-50").toggleClass("text-black-50");
    $("#dark_mode_title").toggleClass("text-light").toggleClass("text-black");
    $("#dark_mode_price").toggleClass("text-light");
    $("#dark_mode_price_cheap").toggleClass("text-white").toggleClass("text-black-50");
    $("#nav_dark_mode").toggleClass("bg-black").toggleClass("bg-light");
    $(".nav-link").toggleClass("text-light");
    $("#offcanvasBottom").toggleClass("bg-black").toggleClass("bg-primary");
    $("#offcanvasBottomAbout").toggleClass("bg-black").toggleClass("bg-primary");
};
new VenoBox({
    selector: '.venobox'
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 4,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
});
$(".nav_img").hover(function () {
    $(this).toggleClass("nav_img_hover");
});
$(".nav_img").click(function () {
    $(".nav_img_click").removeClass("nav_img_click");
    $(this).toggleClass("nav_img_click");
});

$('.input-counter').each(function () {
    var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
    btnUp.on('click', function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });
    btnDown.on('click', function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });
});
$(".profile_img").click(function () {
    $(this).toggleClass("nav_img_hover");
});
$(".pop_confirm").click(function () {
    $(".screen_body").append(`
    <div id="pop_card" class="card show_pop_confirm animate__animated animate__slideInRight">
        <div class="d-flex justify-content-between align-items-md-center">
          <h5 class="card-header text-black fw-bolder">Cart</h5>
          <i class=" pop_confirm_false_icon fas fa-xmark fw-bolder fs-4 text-primary"></i>
        </div>
     
        <div class="card-body  d-flex justify-content-between align-items-center">
          <img src="./images/image-product-1-thumbnail.jpg" alt="" class="w-25 rounded">
          <p class="card-text   mb-0 ms-3 ">Fall Limited Edition Sneakers $125.00 x 3 <b class="text-black">$375.00</b></p>
          <i class="fa-solid fa-trash-can text-black-50 ms-2"></i>
     
        </div>
        <a href="#" class="btn btn-primary fw-bolder mb-4 p-3 text-light">CheckOut</a>
      </div>
    </div>
  </div>
 `);
    $(".pop_confirm_false_icon").click(function () {
        $("#pop_card").remove();
    });
});
