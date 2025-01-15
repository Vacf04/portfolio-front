//scroll

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    rootMargin: "0px 0px -350px 0px",
  }
);
const hiddenElements = document.querySelectorAll(".show-down");
hiddenElements.forEach((el) => observer.observe(el));

//menu mobile

const menu = document.querySelector("header nav ul");
const menuOption = document.querySelectorAll("header nav ul a");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
  if (
    menu.classList.contains("active") &&
    menuButton.classList.contains("active")
  ) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
  }
});

menuOption.forEach((link) => {
  link.addEventListener("click", () => {
    document.documentElement.style.overflow = "auto";
    menuButton.classList.remove("active");
    menu.classList.remove("active");
  });
});

// swiper projetos

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    850: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

const swiperContainer = document.querySelector(".swiper");

swiperContainer.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});

// contato-form

function contatoForm() {
  emailjs.init("gpqffxFkULbrU9BQI");

  const form = document.querySelector(".contato-form");
  const resultMessage = document.querySelector(".result");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    emailjs
      .send("service_2ec9241", "template_2l1gtsh", {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      })
      .then(
        function (response) {
          resultMessage.innerHTML = `<p class="sucess">Mensagem enviada com sucesso!</p>`;
          form.reset();
        },
        function (error) {
          resultMessage.innerHTML = `<p class="error">Erro ao Enviar a mensagem. Tente Novamente.</p>`;
          console.error("Erro:", error);
        }
      );
  });
}
contatoForm();
