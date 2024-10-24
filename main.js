(function () {
  const form = document.querySelector("form");
  const select = document.querySelector("select");

  form.addEventListener("change", (e) => {
    if (e.target.tagName !== "SELECT") return;

    if (e.target.value === "") {
      e.target.classList.add("empty");

      return;
    }

    e.target.classList.remove("empty");
  });
})();
