📚 Book Library – React Web Application

A modern, responsive book library application that allows users to explore books, view detailed information, and manage a personalized reading list using client-side storage.

This project focuses on clean UI design, state management, and efficient data handling in a single-page application.

🚀 Live Demo
👉 


🧠 Problem Statement

Managing personal reading lists digitally often lacks simplicity and performance in lightweight applications.

This project solves that by:

Providing a fast, client-side solution

Avoiding unnecessary backend complexity

Delivering a clean and intuitive user experience



✨ Key Features

📖 Book browsing with structured UI

🔍 Detailed book view with full metadata

✅ Persistent Read List using localStorage

📊 Dynamic sorting:

Rating (high → low)

Pages (high → low)

🎯 Active navigation highlighting (UX enhancement)

⚡ Fully responsive dark-themed UI

🚧 Wishlist module (planned for future extension)




🛠️ Tech Stack

Frontend: React.js

Routing: React Router

Styling: Tailwind CSS

State Management: React Hooks (useState, useEffect)

Storage: LocalStorage



⚙️ Technical Highlights

Efficient filtering using:

data.filter(book => storedIds.includes(book.bookId))

Dynamic UI rendering using .map()

Controlled sorting without mutating original data

Clean component-based architecture

Route-based rendering with error handling (404 page)



📂 Project Structure
src/
├── Components/
├── Pages/
├── Utility/
└── Routes/



🚧 Future Improvements

Wishlist system with persistent storage

Advanced filtering (category, tags)

Backend integration (Node.js / Firebase)

Authentication system