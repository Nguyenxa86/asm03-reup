"use strict";

// TIÊU CHÍ 9 - ẩn thông tin cá nhân
// Tạo 3 div có width bằng nhau: left, right1 và right2
// Chỉ show right1 (với id="thongtin") khi nhập thông tin đúng vào nút btn

const divThongTin = document.getElementById("thongtin");
const divNhap = document.getElementById("nhap");

const inputNhap = document.getElementById("input-nhap");
const buttonKiemTra = document.getElementById("btn-kiemtra");
const submitForm = document.getElementById("submitForm");

buttonKiemTra.addEventListener("click", function () {
  const text = inputNhap.value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (text.match(mailformat)) {
    console.log("Email hợp lệ");
    divThongTin.style.display = "block";
    divNhap.style.display = "none";
  } else {
    console.log("Email KHÔNG hợp lệ!");
  }
});
submitForm.addEventListener("click", function (event) {
  event.preventDefault();
});

// TIÊU CHÍ 10 - ẩn thông tin nghề nghiệp

const tieuDe = document.querySelectorAll(".experience-1");
const thongTin = document.querySelectorAll(".experience-2");
const btnView = document.querySelectorAll(".btn-1");
const btnHide = document.querySelectorAll(".btn-2");
console.log(tieuDe, thongTin, btnView, btnHide);

// Thêm sự kiện MOUSEOVER/MOUSEOUT vào TIÊU ĐỀ
// Logic:
// a. Rê chuột vào TIÊU ĐỀ, nút Xem Thêm hiện ra - remove 'hidden'
// b. Khi thả chuột nơi khác, nút Xem Thêm biến mất. - add 'hidden'
// c. Không thể kết hợp class css và class Bootstrap trên cùng phần tử!
// d. Sử dụng vòng lặp LOOP vì đang thao tác trên các mảng Nodelist

for (let i = 0; i < tieuDe.length; i++) {
  // Rê chuột/Thả chuột trên Tiêu đề:
  //Rê chuột: a. nút Xem Thêm show,
  tieuDe[i].addEventListener("mouseover", function () {
    btnView[i].classList.remove("hidden");
  });
  //Thả chuột: b. nút Xem Thêm hide
  tieuDe[i].addEventListener("mouseout", function () {
    btnView[i].classList.toggle("hidden");
  });
  // bấm vào nút Xem thêm: a. Show phần Thông tin, b. Show nút Ẩn đi, c. Hide nút Xem thêm,
  btnView[i].addEventListener("click", function () {
    thongTin[i].classList.remove("d-none");
    btnView[i].classList.add("hidden");
    btnHide[i].classList.remove("hidden");
  });
  // Bấm vào nút Ẩn đi: Đảo ngược các thao tác ở trên.
  btnHide[i].addEventListener("click", function () {
    thongTin[i].classList.add("d-none");
    btnView[i].classList.remove("hidden");
    btnHide[i].classList.add("hidden");
  });
}
