// Function for the Explore Button on Landing Page
document.getElementById('exploreBtn').addEventListener('click', () => {
    window.location.href = 'menu.html'; // Redirect to the menu page
});
// Menu data for menu.html (could be loaded dynamically or from an API)
const menuItems = [
    { name: "Margherita Pizza", description: "Classic cheese and tomato pizza.", price: 12.99 },
    { name: "Pepperoni Pizza", description: "Topped with pepperoni and mozzarella.", price: 14.99 },
    { name: "Spaghetti Carbonara", description: "Pasta with creamy sauce, bacon, and cheese.", price: 16.50 },
    { name: "Caesar Salad", description: "Crisp romaine lettuce with Caesar dressing.", price: 8.99 },
    { name: "Grilled Chicken", description: "Marinated grilled chicken served with veggies.", price: 18.00 },
    { name: "Chocolate Cake", description: "Rich and moist chocolate cake with icing.", price: 5.99 },
    { name: "Lasagna", description: "Layers of pasta with meat, cheese, and sauce.", price: 15.99 },
    { name: "Vegetable Stir Fry", description: "Mixed veggies in a savory sauce.", price: 13.50 },
    { name: "Fish Tacos", description: "Crispy fish fillets with fresh toppings.", price: 14.00 },
    { name: "BBQ Ribs", description: "Tender ribs with a smoky barbecue sauce.", price: 20.00 },
    { name: "Pasta Primavera", description: "Pasta with fresh vegetables and sauce.", price: 16.00 },
    { name: "Cheeseburger", description: "Juicy burger with cheese and toppings.", price: 12.00 },
    { name: "Chicken Wings", description: "Spicy, crispy wings with dipping sauce.", price: 10.99 },
    { name: "Steak and Potatoes", description: "Grilled steak served with mashed potatoes.", price: 22.00 },
    { name: "Apple Pie", description: "Fresh baked apple pie with cinnamon.", price: 6.00 }
];

let currentPage = 0;

// Function to display menu items with pagination
function displayMenuItems(page = 0) {
    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = ''; // Clear current items

    const itemsPerPage = 10;
    const startIndex = page * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, menuItems.length);
    const itemsToDisplay = menuItems.slice(startIndex, endIndex);

    itemsToDisplay.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>$${item.price.toFixed(2)}</strong></p>
        `;
        menuContainer.appendChild(menuItemDiv);
    });

    // Hide or show navigation buttons
    document.getElementById('prevPage').style.display = page > 0 ? 'inline-block' : 'none';
    document.getElementById('nextPage').style.display = endIndex < menuItems.length ? 'inline-block' : 'none';
}

// Function to go to next page
document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    displayMenuItems(currentPage);
});

// Function to go to previous page
document.getElementById('prevPage').addEventListener('click', () => {
    currentPage--;
    displayMenuItems(currentPage);
});

// Function for the Explore Button on Landing Page
document.getElementById('exploreBtn').addEventListener('click', () => {
    window.location.href = 'menu.html'; // Redirect to the menu page
});

// Display the menu items on the menu page when it loads
if (window.location.pathname.includes('menu.html')) {
    displayMenuItems(currentPage);
}
