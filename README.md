#Shopping Cart React Application
This is a simple and responsive shopping cart application built with React. It allows users to browse products, add them to the shopping cart, view product details, and manage their cart by increasing/decreasing quantities or removing items.

#Features
 - Product List: Display a list of products fetched from an API.
 - Product Details Page: Users can view more detailed information about a product when clicked.
 - Add to Cart: Users can add products to the shopping cart.
 - Shopping Cart Management: Users can view their shopping cart, remove items, and update item quantities.
 - Total Calculation: The cart shows the total number of items and the total price dynamically.
 - Notifications: A notification appears when an item is added to the cart.
 - Responsive Design: The app is fully responsive and works on both desktop and mobile devices.

#Tech Stack
 - Frontend: React.js, Tailwind CSS
 - State Management: Context API & useReducer Hook
 - API: Fake Store API for fetching products


#Project Structure
The project is organized as follows:
/public
  /index.html           # The main HTML file
/src
  /components           # Reusable components (Header, ProductList, etc.)
  /context              # Cart context and reducer logic
  /pages                # Page components (Home, ProductDetails, ShoppingCart)
  /styles               # Global styles using Tailwind CSS
  /types                # TypeScript types for the project
  /App.tsx              # Main component that houses routing
  /index.tsx            # Entry point for React
/package.json           # Project metadata and dependencies
/README.md              # Project description and instructions



