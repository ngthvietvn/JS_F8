// 2-8 Khai báo biến và cách sử dụng

var fullName = "Nguyen Thanh Viet";
var age = 26;
// alert(fullName); Bật thông báo in ra biến fullName
// alert(age); Bật thông báo in ra biến age
// Thông báo sẽ được hiển thị lần lượt biến fullName rồi đến age

// **************************** //

// 2-10 Cú pháp comments là gì?

/**
 * Comments trong JS
 *
 * 1. Mục đích sử dụng
 * - Ghi chú
 * - Vô hiệu hoá mã
 * 2. Loại comments
 * - Comment 1 dòng
 * - Comment nhiều dòng
 * 3. Sử dụng phím tắt
 * - Windows: Ctrl + /
 * - MacOS: Command + /
 */

// **************************** //

// 2-12 Giới thiệu một số hàm built-in

/*
Giới thiếu một số hàm built-in
1.Alert - Thông báo
2.Console - 
3.Confirm - sử dụng hộp thoại confirm
4.Promt - sử dụng hộp thoại promt
5.Set timeout - cho một đoạn code được chạy sau 1 khoảng thời gian
6.Set interval - cho một đoạn code thực thi liên tục sau 1 khoảng thời gian
*/

// confirm("Xác nhận bạn đủ tuổi");
// prompt("Xác nhận bạn đủ tuổi");
setTimeout(function () {
  alert("Thông báo");
}, 1000);
setInterval(function () {
  alert("Thông báo");
}, 1000);
