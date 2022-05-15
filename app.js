let rating = document.querySelector(".rating");
let thankYouState = document.querySelector(".thank-you-state");
let rate = document.querySelectorAll(".point-number");
let yourRate = document.querySelector(".your-rate");
let submitButton = document.querySelector(".submit");

rate.forEach((item) => {
  item.addEventListener("click", () => {
    if (document.querySelectorAll(".selected").length) {
      document.querySelector(".selected").classList.remove("selected");
    }
    item.classList.add("selected");
  });
});
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let select = document.querySelectorAll(".selected");
  if (select.length > 0) {
    yourRate.innerHTML = select[0].innerHTML;
    rating.style.display = "none";
    thankYouState.style.display = "flex";
  } else {
    Swal.fire("Please Select a Rating! ");
  }
});
