function checkScreenSize() {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-icon");
  const navContainer = document.querySelector(".nav-container");

  // หากขนาดหน้าจอกว้างกว่า 1300px, ลบ class 'active' จาก .nav-links
  if (window.innerWidth > 820) {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("active");
    navContainer.classList.remove("active");
    console.log("Hello - Removed 'active' class");
  }
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-icon");
  const navContainer = document.querySelector(".nav-container");

  // Toggle active class to show/hide the menu
  navLinks.classList.toggle("active");

  // Toggle visibility of hamburger and close icons
  menuIcon.classList.toggle("active");
  navContainer.classList.toggle("active");

  console.log("Toggled 'active' class");
}

// เรียกใช้ checkScreenSize เมื่อโหลดหน้าเว็บ
window.addEventListener("load", function () {
  checkScreenSize();
});

// เรียกใช้ checkScreenSize เมื่อเปลี่ยนขนาดหน้าจอ
window.addEventListener("resize", function () {
  checkScreenSize();
});
