(function () {
  var buttons = document.querySelectorAll("[data-copy]");
  var status = document.querySelector("[data-copy-status]");

  function showStatus(text) {
    if (!status) return;
    status.textContent = text;
    window.setTimeout(function () {
      status.textContent = "";
    }, 2500);
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = button.getAttribute("data-copy") || "";
      if (!value) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () {
          showStatus("Адрес скопирован.");
        }).catch(function () {
          showStatus("Не удалось скопировать. Выделите адрес вручную.");
        });
      } else {
        showStatus("Выделите адрес и скопируйте вручную.");
      }
    });
  });
})();
