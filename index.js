// โค้ด JavaScript ที่ให้มา
const cart = {};

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const price = parseFloat(button.getAttribute('data-price'));
        if (!cart[productId]) {
            cart[productId] = { quantity: 1, price: price };
        } else {
            cart[productId].quantity++;
        }
        updateCartDisplay();
    });
});

function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    let totalPrice = 0;
    for (const productId in cart) {
        const item = cart[productId];
        const itemTotalPrice = item.quantity * item.price;
        totalPrice += itemTotalPrice;
        const productElement = document.createElement('p');
        productElement.textContent = `Product ${productId}: ${item.quantity} x $${item.price} = $${itemTotalPrice}`;
        cartElement.appendChild(productElement);
    }

    if (Object.keys(cart).length === 0) {
        cartElement.innerHTML = '<p>No items in cart.</p>';
    } else {
        const totalPriceElement = document.createElement('p');
        totalPriceElement.textContent = `Total Price: $${totalPrice}`;
        cartElement.appendChild(totalPriceElement);
    }
}

// โค้ด JavaScript อื่น ๆ ที่ให้มา
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");

menu.onclick = () =>{
    console.log("clicked");
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Show search form
let search = document.querySelector("#search-icon");
search.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle('active')
}
// Hide search form
let close_icon = document.querySelector("#close");
close_icon.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle('active')
}






// เพิ่มปุ่ม "Print Receipt" เมื่อมีสินค้าในตะกร้า
if (Object.keys(cart).length > 0) {
    const printButton = document.createElement("button");
    printButton.textContent = "Print Receipt";
    printButton.addEventListener("click", () => {
        printReceipt();
    });
    cartElement.appendChild(printButton);
}

// ฟังก์ชันสำหรับพิมพ์ใบเสร็จ
function printReceipt() {
    // สร้างฟอร์มรับข้อมูลชื่อและเบอร์โทร
    const name = prompt("Please enter your name:");
    const phoneNumber = prompt("Please enter your phone number:");

    const printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>Receipt</title></head><body>");

    // เพิ่มข้อมูลชื่อและเบอร์โทรลงในใบเสร็จ
    printWindow.document.write(`<h1>Receipt for ${name}</h1>`);
    printWindow.document.write(`<p>Phone Number: ${phoneNumber}</p>`);

    let receiptContent = "<h2>Items</h2>";
    receiptContent += "<ul>";
    let totalPrice = 0;
    for (const productId in cart) {
        const item = cart[productId];
        receiptContent += `<li>${item.name}: ${item.quantity} x $${item.price} = $${
            item.price * item.quantity
            }</li>`;
        totalPrice += item.price * item.quantity; // รวมราคาสินค้าทั้งหมด
    }
    receiptContent += "</ul>";

    receiptContent += `<p>Total Price: $${totalPrice}</p>`; // เพิ่มราคารวมลงในใบเสร็จ
    printWindow.document.write(receiptContent);

    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
}

// เพิ่มปุ่ม "Print Receipt" เมื่อมีสินค้าในตะกร้า
        if (Object.keys(cart).length > 0) {
            const printButton = document.createElement("button");
            printButton.textContent = "Print Receipt";
            printButton.addEventListener("click", () => {
                printReceipt();
            });
            document.getElementById("cart").appendChild(printButton);
        }

        // ฟังก์ชันสำหรับพิมพ์ใบเสร็จ
        function printReceipt() {
            // โค้ดฟังก์ชัน printReceipt() ที่คุณเขียน
        }


// ฟังก์ชันสำหรับพิมพ์ใบเสร็จ
function printReceipt() {
    // สร้างฟอร์มรับข้อมูลชื่อและเบอร์โทร
    const name = prompt("Please enter your name:");
    const phoneNumber = prompt("Please enter your phone number:");

    const printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>Receipt</title></head><body>");

    // เพิ่มข้อมูลชื่อและเบอร์โทรลงในใบเสร็จ
    printWindow.document.write(`<h1>Receipt for ${name}</h1>`);
    printWindow.document.write(`<p>Phone Number: ${phoneNumber}</p>`);

    let receiptContent = "<h2>Items</h2>";
    receiptContent += "<ul>";
    let totalPrice = 0;
    for (const productId in cart) {
        const item = cart[productId];
        // ดึงข้อมูลสินค้าจากฐานข้อมูลของสินค้า (อาจต้องปรับปรุงตามโครงสร้างของฐานข้อมูลของคุณ)
        const productName = getProductById(productId).name;
        const productPrice = getProductById(productId).price;
        receiptContent += `<li>${productName}: ${item.quantity} x $${productPrice} = $${
            productPrice * item.quantity
        }</li>`;
        totalPrice += productPrice * item.quantity; // รวมราคาสินค้าทั้งหมด
    }
    receiptContent += "</ul>";

    receiptContent += `<p>Total Price: $${totalPrice}</p>`; // เพิ่มราคารวมลงในใบเสร็จ
    printWindow.document.write(receiptContent);

    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
}

// ฟังก์ชันสำหรับให้ข้อมูลของสินค้าจาก ID (อาจต้องปรับปรุงตามโครงสร้างของฐานข้อมูลของคุณ)
function getProductById(productId) {
    // นี่คือตัวอย่างของฟังก์ชัน getProductById ที่ใช้ในการดึงข้อมูลสินค้าจากฐานข้อมูล
    // ในที่นี้เราใช้ตัวอย่างเพื่อแสดงการทำงานของฟังก์ชัน
    // คุณต้องแทนที่ด้วยการดึงข้อมูลจริงจากฐานข้อมูลของคุณ
    const products = {
        "1": { name: "ขนมปังนึ่ง", price: 40 },
        "2": { name: "ปลาท่องโก๋", price: 3 },
        "3": { name: "ซาลาเปาใส่ไส้", price: 9 },
        "4": { name: "เกียวเกียว", price: 8 },
        "5": { name: "น้ำเต้าหู้ทรงเครื่อง", price: 15 },
        "6": { name: "เต้าฮวยนมสดร้อนทรงเครื่อง", price: 25 }
    };

    return products[productId];
}

// เพิ่มปุ่ม "Print Receipt" เมื่อมีสินค้าในตะกร้า
if (Object.keys(cart).length > 0) {
    const printButton = document.createElement("button");
    printButton.textContent = "Print Receipt";
    printButton.addEventListener("click", () => {
        printReceipt();
    });
    cartElement.appendChild(printButton);
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    let totalPrice = 0;
    for (const productId in cart) {
        const item = cart[productId];
        const product = getProductById(productId);
        const itemTotalPrice = item.quantity * product.price;
        totalPrice += itemTotalPrice;
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <p>${product.name}: ${item.quantity} x $${product.price} = $${itemTotalPrice}</p>
            <button class="remove-from-cart" data-product-id="${productId}">Remove</button>
        `;
        cartElement.appendChild(productElement);
    }

    if (Object.keys(cart).length === 0) {
        cartElement.innerHTML = '<p>No items in cart.</p>';
    } else {
        const totalPriceElement = document.createElement('p');
        totalPriceElement.textContent = `Total Price: $${totalPrice}`;
        cartElement.appendChild(totalPriceElement);
    }

    // เพิ่ม event listener สำหรับปุ่ม "ลบสินค้า" ในรายการสินค้า
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            removeItemFromCart(productId);
            updateCartDisplay(); // อัพเดทการแสดงผลหลังจากลบสินค้า
        });
    });
}

// ฟังก์ชันสำหรับลบสินค้าจากตะกร้า
function removeItemFromCart(productId) {
    if (cart[productId]) {
        delete cart[productId];
    }
}
