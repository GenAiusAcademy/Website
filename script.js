document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});


try {
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic'
    });
  }
} catch (e) {
  console.warn('AOS init error', e);
}
