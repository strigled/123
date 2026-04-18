document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  if (!this.checkValidity()) {
    this.classList.add("was-validated");
    document.getElementById("formMessage").innerHTML = '<div class="text-danger">Пожалуйста, заполните форму корректно.</div>';
    return;
  }
  
  document.getElementById("formMessage").innerHTML = '<div class="text-success">Спасибо! Ваша запись успешно отправлена.</div>';
  this.reset();
  this.classList.remove("was-validated");
});