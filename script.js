
document.addEventListener("DOMContentLoaded", function () {
  // Hiển thị năm hiện tại ở footer
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Kiểm tra biểu mẫu phía trình duyệt
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      message.textContent = "Vui lòng kiểm tra lại thông tin.";
      message.style.color = "#b42318";
      return;
    }

    const name = document.getElementById("name").value.trim();

    message.textContent =
      "Cảm ơn " + name +
      "! Biểu mẫu demo đã hợp lệ. Dữ liệu chưa được gửi tới máy chủ.";

    message.style.color = "#16805d";
    form.reset();
  });

  // Đóng menu sau khi bấm liên kết trên điện thoại
  document.querySelectorAll("#menu .nav-link, #menu .btn").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && window.jQuery) {
        window.jQuery("#menu").collapse("hide");
      }
    });
  });
});
