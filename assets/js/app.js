// Show Sidebar

const burger = document.getElementById("sidebarToggle");
const body = document.getElementById("body");

burger.addEventListener("click", (event) => {
  if (body.classList.contains("show-sidebar")) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

// Making Mask

function showSidebar() {
  let mask = document.createElement("div");
  mask.classList.add("page__mask");
  mask.addEventListener("click", closeSidebar);
  body.appendChild(mask);

  body.classList.add("show-sidebar");
  body.classList.add("no-scroll");
}

function closeSidebar() {
  body.classList.remove("show-sidebar");
  body.classList.remove("no-scroll");
  document.querySelector(".page__mask").remove();
}

// Show Submenu

const submenuOpener = document.getElementById("submenuOpener");
const navBar = document.getElementById("navBar");

submenuOpener.addEventListener("click", (event) => {
  if (navBar.classList.contains("show-submenu")) {
    closeSubmenu();
  } else {
    showSubmenu();
  }
});

// Opening submenu

function showSubmenu() {
  navBar.classList.add("show-submenu");
}

function closeSubmenu() {
  navBar.classList.remove("show-submenu");
}

// Smooth Scroll

document.querySelectorAll('a[href*="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset - 50;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
    closeSidebar();
  });
});

// flatpickr
config = {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
};

flatpickr("input[type=datetime-local]", config);

// Swiper Slider

new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    ckickable: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 900,
});
