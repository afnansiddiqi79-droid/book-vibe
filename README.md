# 📚 Book Vibe

**Book Vibe** is a modern book discovery and reading-list web application built with Next.js, TypeScript, Tailwind CSS, DaisyUI, Context API, and Recharts.

Users can explore books, view detailed information, add books to their reading list or wishlist, and visualize their reading list through a chart.

## 🔗 Links

* **Live Website:** https://book-vibe-4i2p-alpha.vercel.app/
* **GitHub Repository:** https://github.com/afnansiddiqi79-droid/book-vibe

## ✨ Features

* 📚 Browse and explore books
* 🔎 View detailed information about each book
* 📖 Add books to the Read List
* ❤️ Add books to the Wishlist
* 🚫 Prevent duplicate books from being added
* 📊 Visualize reading-list data with a bar chart
* 🔔 Toast notifications for user actions
* 📱 Responsive design for different screen sizes
* ⚡ Built with Next.js App Router
* 🎨 Styled with Tailwind CSS and DaisyUI

## 🛠️ Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* DaisyUI
* Context API
* Recharts
* React Toastify
* JSON Data
* Vercel

## 📂 Main Pages

* `/home` — Home page
* `/listbook` — Explore all books
* `/listbook/[id]` — Book details page
* `/readlistbook` — Read books list
* `/pageread` — Reading progress visualization

## 🧠 What I Learned

While building this project, I practiced:

* Next.js App Router
* Dynamic Routes
* Server Components
* Client Components
* TypeScript types and interfaces
* Context API
* State management with `useState`
* `useContext`
* Data fetching with `fetch`
* Environment variables
* Duplicate prevention with `some()`
* Recharts data visualization
* Toast notifications
* Git and GitHub
* Vercel deployment

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/afnansiddiqi79-droid/book-vibe.git
```

Go to the project directory:

```bash
cd book-vibe
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:3000
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📌 Project Structure

```text
src/
├── app/
│   ├── home/
│   ├── listbook/
│   │   └── [id]/
│   ├── pageread/
│   └── readlistbook/
├── components/
├── context/
└── ...

public/
└── booksData.json
```

## 👨‍💻 Author

**Afnan Siddiqi**

GitHub: https://github.com/afnansiddiqi79-droid
