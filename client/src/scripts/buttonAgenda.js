const $btnCopenhagen = document.querySelector(".button__copenhagen--agenda");
const $btnOslo = document.querySelector(".button__oslo--agenda");
const $listOslo = document.querySelector(
  ".agenda-speakers__section--oslo"
);
const $listCopenhagen = document.querySelector(
  ".agenda-speakers__section--copenhagen"
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
