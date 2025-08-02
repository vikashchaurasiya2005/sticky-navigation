const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(btn => {
  if (!btn.disabled) {
    btn.addEventListener('click', () => {
      const product = btn.parentElement.querySelector('h2').innerText;
      alert(`Added "${product}" to cart!`);
    });
  }
});
