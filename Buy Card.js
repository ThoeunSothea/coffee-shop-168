
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); 
    }

    function prevSlide() {
        let slides = document.getElementsByClassName("slide");
        slideIndex--;
        if (slideIndex < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    function nextSlide() {
        let slides = document.getElementsByClassName("slide");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
    showSlides();

//     function placeOrder(coffeeName, price, quantityId) {
//         const quantity = document.getElementById(quantityId).value;
//         const totalAmount = price * quantity;
        
        
//         alert(`Order Success!!!! 
//             You have ordered ${quantity} ${coffeeName}(s) 
//             Total = $${totalAmount}
//             Please wait for processing.`);
//     }
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

// function loginSeller() {
//     let password = prompt("Enter Seller Password:");
//     if (password === "chiva1234") { 
//         localStorage.setItem("sellerLogin", "true");
//         document.getElementById("cartSection").style.display = "block"; 
//     } else {
//         alert("Incorrect Password!");
//     }
// }

// function logoutSeller() {
//     localStorage.removeItem("sellerLogin");
//     document.getElementById("cartSection").style.display = "none"; 
// }

// function checkSellerLogin() {
//     if (localStorage.getItem("sellerLogin") === "true") {
//         document.getElementById("cartSection").style.display = "block";
//     } else {
//         document.getElementById("cartSection").style.display = "none";
//     }
// }

// window.onload = function() {
//     checkSellerLogin(); 
// };


    
//     function placeOrder(coffeeName, price, quantityId) {
        
//         let quantity = parseInt(document.getElementById(quantityId).value);
    
        
//         if (isNaN(quantity) || quantity < 1) {
//             alert("សូមបញ្ចូលចំនួនត្រឹមត្រូវ។");
//             return; 
//         }
        
//         let totalAmount = price * quantity;
        
//         let existingProduct = cart.find(item => item.name === coffeeName);
//         if (existingProduct) {
            
//             existingProduct.quantity += quantity;
//             existingProduct.total = existingProduct.quantity * price;
//         } else {
            
//             cart.push({ name: coffeeName, quantity: quantity, price: price, total: totalAmount });
//         }
    
        
//         localStorage.setItem("cart", JSON.stringify(cart));
        
//         Swal.fire({
//             title: 'Order Placed!',
//             text: `${name} x ${quantity} = $${total}`,
//             imageUrl: '/img/Amazon 12.png', 
//             imageWidth: 150,
//             imageHeight: 150,
//             imageAlt: 'Product Image'
//         })
//     //     alert(`កម្មង់ជោគជ័យ! 🎉
//     // អ្នកបានកម្មង់ ${quantity} ${coffeeName}(s)
//     // សរុបថ្លៃ: $${totalAmount}
//     // សូមរង់ចាំដំណើរការ។`);
    
        
//         displayCart();
//     }

        // function placeOrder(coffeeName, price, quantityId) {
        //     let quantityInput = document.getElementById(quantityId);
        //     let quantity = parseInt(quantityInput.value);

        //     if (isNaN(quantity) || quantity < 1) {
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'កំហុស!',
        //             text: 'សូមបញ្ចូលចំនួនត្រឹមត្រូវ។',
        //         });
        //         return;
        //     }

        //     let totalAmount = price * quantity;

            
        //     let existingProduct = cart.find(item => item.name === coffeeName);
        //     if (existingProduct) {
        //         existingProduct.quantity += quantity;
        //         existingProduct.total = existingProduct.quantity * price;
        //     } else {
        //         cart.push({ name: coffeeName, quantity: quantity, price: price, total: totalAmount });
        //     }

            
        //     localStorage.setItem("cart", JSON.stringify(cart));

            
        //     Swal.fire({
        //         title: 'កម្មង់ជោគជ័យ! 🎉',
        //         text:` អ្នកបានកម្មង់ ${quantity} ${coffeeName}(s)\nសរុបថ្លៃ: $${totalAmount}\nសូមរង់ចាំដំណើរការ។`,
        //         imageUrl: 'https://via.placeholder.com/150', 
        //         imageWidth: 150,
        //         imageHeight: 150,
        //         imageAlt: 'Coffee Image',
        //         confirmButtonText: 'OK'
        //     });

        //     displayCart();
        // }
        function placeOrder(name, price, quantityId, imageUrl) {
            let quantity = document.getElementById(quantityId).value;
            
            let total = price * quantity;
        
            Swal.fire({
                title: '🛒 Order Confirmed!',
                text: `${name} x ${quantity} = $${total}`,
                imageUrl: '/img/qr.jpg',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Product Image',
                confirmButtonText: 'OK'
            });
        }

        function displayCart() {
            console.log(cart); 
        }
    function displayCart() {
        let cartTable = document.querySelector("#cartTable tbody");
        cartTable.innerHTML = "";

        cart.forEach((item, index) => {
            let row = `<tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price}</td>
                <td>$${item.total}</td>
                <td><button onclick="removeItem(${index})">Remove</button></td>
            </tr>`;
            cartTable.innerHTML += row;
        });
    }

    function removeItem(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
    function displayCart() {
        let cartTable = document.querySelector("#cartTable tbody");
        cartTable.innerHTML = "";
    
        cart.forEach((item, index) => {
            let row = `<tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price}</td>
                <td>$${item.total}</td>
                <td>
                    <button onclick="editItem(${index})">កែប្រែ</button>
                    <button onclick="removeItem(${index})">លុប</button>
                </td>
            </tr>`;
            cartTable.innerHTML += row;
        });
    }
    
    function editItem(index) {
        let newQuantity = prompt("សូមបញ្ចូលបរិមាណថ្មីសម្រាប់ " + cart[index].name, cart[index].quantity);
        if (newQuantity && !isNaN(newQuantity) && newQuantity > 0) {
            cart[index].quantity = parseInt(newQuantity);
            cart[index].total = cart[index].quantity * cart[index].price;
            localStorage.setItem("cart", JSON.stringify(cart)); 
            displayCart(); 
            alert("បានកែប្រែបរិមាណដោយជោគជ័យ!");
        } else {
            alert("បរិមាណមិនត្រឹមត្រូវ សូមព្យាយាមម្តងទៀត។");
        }
    }
    function printInvoice() {
        let invoiceWindow = window.open("", "", "width=600,height=600");
        let invoiceHTML = `<h2>Invoice</h2>
        <table border="1" style="width:100%; border-collapse: collapse;">
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>`;

        cart.forEach(item => {
            invoiceHTML += `<tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${item.price}</td>
                <td>$${item.total}</td>
            </tr>`;
        });

        let totalAmount = cart.reduce((sum, item) => sum + item.total, 0);
        invoiceHTML += `<tr>
                <td colspan="3"><strong>Total</strong></td>
                <td><strong>$${totalAmount}</strong></td>
            </tr>
        </table>`;

        invoiceWindow.document.write(invoiceHTML);
        invoiceWindow.document.close();
        invoiceWindow.print();
    }

    displayCart();