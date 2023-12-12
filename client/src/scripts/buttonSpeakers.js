const $btnCopenhagen = document.querySelector(".button__copenhagen");
const $btnOslo = document.querySelector(".button__oslo");
const $listOslo = document.querySelector(".speakers__cards-list--oslo");
const $listCopenhagen = document.querySelector(
  ".speakers__cards-list--copenhagen"
);

const toggleSpeakers = (e) => {
  const isCopenhagen = e.target === $btnCopenhagen;
  
  $listOslo.classList.toggle("hidden-element", isCopenhagen);
  $listCopenhagen.classList.toggle("hidden-element", !isCopenhagen);
  $btnOslo.classList.toggle("button__active", !isCopenhagen);
  $btnCopenhagen.classList.toggle("button__active", isCopenhagen);
};

$btnCopenhagen?.addEventListener("click", toggleSpeakers);
$btnOslo?.addEventListener("click", toggleSpeakers);
