let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('تمت إضافة ' + name + ' للسلة!');
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// تحديث العداد عند فتح الصفحة
updateCartCount();