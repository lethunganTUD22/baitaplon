function validateAndSend() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Kiểm tra dữ liệu
  if (name === "" || email === "" || message === "") {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
  }

  if (!isValidEmail(email)) {
      alert("Vui lòng nhập địa chỉ email hợp lệ.");
      return;
  }

  // Tạo nội dung email
  var subject = "Tin nhắn từ trang liên hệ";
  var body = "Họ và tên: " + name + "\nEmail: " + email + "\n\n" + message;

  // Tạo link mailto
  var mailtoLink = "mailto:thungan0438@gmail.com" +
                   "?subject=" + encodeURIComponent(subject) +
                   "&body=" + encodeURIComponent(body);

  // Mở mail client
  window.location.href = mailtoLink;
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

