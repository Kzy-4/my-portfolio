const words = [
  "Web Developer",
  "Control systems and Instrument Engineer",
  "Software Engineer",
]; // คำที่ต้องการวนซ้ำ
let wordIndex = 0; // เก็บ index ของคำที่กำลังพิมพ์
let charIndex = 0; // เก็บ index ของตัวอักษรที่กำลังพิมพ์
let direction = 1; // 1 = forward (พิมพ์), -1 = backward (ลบ)
const textElement = document.getElementById("text"); // รับองค์ประกอบที่มี id="text"

function typeEffect() {
  const currentWord = words[wordIndex]; // เลือกคำที่ต้องการพิมพ์

  if (direction === 1) {
    // ถ้ากำลังพิมพ์
    if (charIndex < currentWord.length) {
      // ถ้ายังไม่ถึงตัวอักษรสุดท้าย
      textElement.innerText = currentWord.substring(0, charIndex + 1); // พิมพ์ตัวอักษรใหม่
      charIndex++; // เพิ่มตัวอักษรที่พิมพ์
    } else {
      direction = -1; // เปลี่ยนทิศทางเป็นลบ
      setTimeout(typeEffect, 2000); // หยุด 2 วินาทีก่อนเริ่มลบ
      return;
    }
  } else {
    // ถ้ากำลังลบ
    if (charIndex > 0) {
      // ถ้าคำยังไม่หมด
      textElement.innerText = currentWord.substring(0, charIndex - 1); // ลบตัวอักษร
      charIndex--; // ลดจำนวนตัวอักษรที่แสดง
    } else {
      direction = 1; // เปลี่ยนทิศทางเป็นพิมพ์คำใหม่
      wordIndex = (wordIndex + 1) % words.length; // วนไปคำถัดไป
    }
  }
  setTimeout(typeEffect, 150); // ความเร็วในการพิมพ์/ลบ
}

typeEffect(); // เริ่มพิมพ์
