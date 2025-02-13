const words = [
  "Web Developer",
  "Control systems and Instrument Engineer",
  "Software Engineer",
]; // คำที่ต้องการวนซ้ำ
let wordIndex = 0; // เก็บ index ของคำที่กำลังพิมพ์
let charIndex = 0; // เก็บ index ของตัวอักษรที่กำลังพิมพ์
let direction = 1; // 1 = forward (พิมพ์), -1 = backward (ลบ)
const textElement = document.getElementById("text");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (direction === 1) {
    if (charIndex < currentWord.length) {
      textElement.innerText = currentWord.substring(0, charIndex + 1);
      charIndex++;
    } else {
      direction = -1; // เปลี่ยนเป็นลบข้อความ
      setTimeout(typeEffect, 2000); // หยุด 2 วินาทีก่อนเริ่มลบ
      return;
    }
  } else {
    if (charIndex > 0) {
      textElement.innerText = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      direction = 1; // เปลี่ยนเป็นพิมพ์คำใหม่
      wordIndex = (wordIndex + 1) % words.length; // วนไปคำถัดไป
    }
  }
  setTimeout(typeEffect, 150); // ความเร็วในการพิมพ์/ลบ
}

typeEffect(); // เริ่มพิมพ์

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links"); // ค้นหาเมนู
  const menuIcon = document.querySelector(".menu-icon"); // ค้นหาปุ่ม hamburger
  const navContainer = document.querySelector(".nav-container"); // ค้นหาปุ่ม hamburger
  // Toggle active class to show/hide the menu
  navLinks.classList.toggle("active"); // เพิ่มหรือลบ class 'active' เพื่อแสดงหรือซ่อนเมนู

  // Toggle visibility of hamburger and close icons
  menuIcon.classList.toggle("active"); // เพิ่มหรือลบ class 'active' ให้กับไอคอน hamburger
  navContainer.classList.toggle("active");
}
