// Массив корзины
let cart = [];

// Обработчик кнопки "В корзину"
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const productName = product.querySelector('h3').textContent;
        const price = product.querySelector('p').textContent;

        cart.push({ name: productName, price: price });
        alert(`Товар "${productName}" добавлен в корзину!`);
    });
});