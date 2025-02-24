
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

    function loginSeller() {
        let password = prompt("Enter Seller Password:");
        if (password === "chiva1234") { 
            localStorage.setItem("sellerLogin", "true");
            document.getElementById("cartSection").style.display = "block"; 
        } else {
            alert("Incorrect Password!");
        }
    }

    function logoutSeller() {
        localStorage.removeItem("sellerLogin");
        document.getElementById("cartSection").style.display = "none"; 
    }

    function checkSellerLogin() {
        if (localStorage.getItem("sellerLogin") === "true") {
            document.getElementById("cartSection").style.display = "block";
        } else {
            document.getElementById("cartSection").style.display = "none";
        }
    }

window.onload = function() {
    checkSellerLogin(); 
};


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
            // Get the quantity entered by the user
            let quantity = document.getElementById(quantityId).value;
        
            // Validate quantity
            if (quantity < 1) {
                Swal.fire({
                    title: '❌ Invalid Quantity',
                    text: 'Please choose a quantity greater\n than or equal to 1.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return;
            }
        
            // Calculate total amount
            let total = price * quantity;
        
            // Get cart from localStorage (or initialize an empty cart if not found)
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
            // Check if the product already exists in the cart
            let existingProduct = cart.find(item => item.name === name);
        
            if (existingProduct) {
                // If the product exists, update its quantity and total price
                existingProduct.quantity += parseInt(quantity);
                existingProduct.total = existingProduct.quantity * price;
            } else {
                // If the product does not exist, add it to the cart
                cart.push({ name: name, price: price, quantity: parseInt(quantity), total: total, imageUrl: imageUrl });
            }
        
            // Save the updated cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
        
            // Add the item to the table
            updateCartTable(cart);
        
            // Show the order confirmation with QR code
            Swal.fire({
                title: '🛒 ការកុម្ម៉ង់របស់អ្នកបានបញ្ជាក់!',
                html: `
                    សូមបង់លុយតាម QR Code ខាងក្រោម : <br>
                    <img src="/img/qr.jpg" width="200" height="200" alt="QR Code"><br>
                    <b>Name Product : ${name}</b><br>
                    <b>ចំនួន    : ${quantity}</b><br>
                    <b>តម្លៃសរុប : $${total}<br><br>
                    សូមកន្លែងរង់ចាំ.....!!</b><br>
                `,
                confirmButtonText: 'OK'
            });
        }
        
        // Function to update the cart table after an order
function updateCartTable(cart) {
    let tableBody = document.getElementById("cartTable").getElementsByTagName('tbody')[0];

    // Clear the table before adding updated data
    tableBody.innerHTML = '';

    // Loop through the cart and create a new row for each product
    cart.forEach(item => {
        let newRow = tableBody.insertRow(tableBody.rows.length);

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);

        cell1.innerText = item.name;
        cell2.innerText = item.quantity;
        cell3.innerText = '$' + item.price;
        cell4.innerText = '$' + item.total;

        // Create a container div for both buttons (Edit and Remove)
        let buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex"; // Align buttons horizontally

        // Add Remove button
        let removeButton = document.createElement("button");
        removeButton.innerText = "លុប";
        
        removeButton.onclick = function() {
            
            Swal.fire({
                title: '❌ Remove Item',
                text: `Are you sure you want to remove ${item.name}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, remove',
                cancelButtonText: 'No, cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    removeItemFromCart(item.name);
                    Swal.fire('Removed!', `${item.name} has been removed from your cart.`, 'success');
                }
            });
        };
        removeButton.style.marginRight = "10px"; 

        
        let editButton = document.createElement("button");
        editButton.innerText = "កែប្រែ";
        editButton.onclick = function() {
            
            Swal.fire({
                title: '✏️ Edit Quantity',
                text: `Do you want to edit the quantity for ${item.name}?`,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Yes, edit',
                cancelButtonText: 'No, cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    editItemInCart(item.name);
                }
            });
        };

        
        buttonContainer.appendChild(removeButton);
        buttonContainer.appendChild(editButton);

        // Append the button container to the cell
        cell5.appendChild(buttonContainer);
    });
}

// Function to remove an item from the cart
function removeItemFromCart(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    
    cart = cart.filter(item => item.name !== name);

    
    localStorage.setItem("cart", JSON.stringify(cart));


    updateCartTable(cart);
}


function editItemInCart(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    
    let itemToEdit = cart.find(item => item.name === name);
    if (itemToEdit) {
        
        let newQuantity = prompt(`សូមបញ្ចូលបរិមាណថ្មីសម្រាប់ ${name}`, itemToEdit.quantity);
        newQuantity = parseInt(newQuantity);

        if (newQuantity && newQuantity > 0) {
            
            itemToEdit.quantity = newQuantity;
            itemToEdit.total = itemToEdit.price * newQuantity;

            
            localStorage.setItem("cart", JSON.stringify(cart));


            updateCartTable(cart);
        } else {
            alert("Invalid quantity!");
        }
    }
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
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let invoiceContent = `<h1>Invoice</h1><table border="1"><thead><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr></thead><tbody>`;
    
        cart.forEach(item => {
            invoiceContent += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price}</td>
                    <td>$${item.total}</td>
                </tr>
            `;
        });
    
        invoiceContent += `</tbody></table>`;
    
        // Open a new window and print the invoice
        let printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write(invoiceContent);
        printWindow.document.close();
        printWindow.print();
    }
    displayCart();