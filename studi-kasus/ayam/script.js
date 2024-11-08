function nav(params) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah navigasi default

      // Hilangkan kelas aktif dari semua section
      document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("active");
      });

      // Ambil ID target dari href
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Tambahkan kelas aktif ke section target
      targetSection.classList.add("active");

      // Scroll ke section target
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Humberger
  document.querySelector('.container .menu-toggle ').addEventListener('click',()=> {
    document.querySelector('.container .nav-menu .nav-menu-ul').classList.toggle('slide')
  })
}

nav();

function about() {
  const btnAbout = document.querySelectorAll(".btn");
  const btnAboutArray = Array.from(btnAbout);
  const contentAbout = document.querySelectorAll(".drop-content");
  const ontentAboutArray = Array.from(contentAbout);

  btnAboutArray[0].addEventListener("blur", () => {
    contentAbout[0].style.display = "none";
    contentAbout[0].classList.remove("show");
  });
  btnAboutArray[0].addEventListener("focus", () => {
    contentAbout[0].style.display = "block";
    contentAbout[0].classList.add("show");
  });

  btnAboutArray[1].addEventListener("blur", () => {
    contentAbout[1].style.display = "none";
    contentAbout[1].classList.remove("show");
  });
  btnAboutArray[1].addEventListener("focus", () => {
    contentAbout[1].style.display = "block";
    contentAbout[1].classList.add("show");
  });
  btnAboutArray[2].addEventListener("blur", () => {
    contentAbout[2].style.display = "none";
    contentAbout[2].classList.remove("show");
  });
  btnAboutArray[2].addEventListener("focus", () => {
    contentAbout[2].style.display = "block";
    contentAbout[2].classList.add("show");
  });
  btnAboutArray[3].addEventListener("blur", () => {
    contentAbout[3].style.display = "none";
    contentAbout[3].classList.remove("show");
  });
  btnAboutArray[3].addEventListener("focus", () => {
    contentAbout[3].style.display = "block";
    contentAbout[3].classList.add("show");
  });
}

about();
