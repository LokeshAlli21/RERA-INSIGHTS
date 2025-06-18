# 🏧 RERA INSIGHTS

**Live Site:** [https://premium-host.xyz/RERA-INSIGHTS/](https://premium-host.xyz/RERA-INSIGHTS/)

RERA INSIGHTS is a modern web application designed to provide transparent and accessible insights into real estate project progress, RERA compliance, and updates. It aims to empower users with project transparency and regulatory updates through a clean and responsive interface.

---

## 🚀 Features

* 📊 **Quarterly Progress Reports (QPRs)**
* 📚 **Latest Insights and Blogs**
* ⚡ **Fast and optimized React frontend**
* 🌐 **Deployed via cPanel using static **\`\`** files**
* 🎨 **Tailwind CSS for styling**

---

## 📁 Project Structure

```bash
RERA-INSIGHTS/
├── frontend/           # Vite + React project
│   ├── public/         # Static assets
│   ├── src/            # Source code
│   ├── dist/           # Production build output (after `npm run build`)
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
```

---

## ⚙️ Tech Stack

* **Frontend:** React, Vite
* **Styling:** Tailwind CSS
* **Deployment:** Static hosting via cPanel
* **Routing:** React Router DOM

---

## 🧪 Setup & Run Locally

```bash
git clone https://github.com/LokeshAlli21/RERA-INSIGHTS
cd RERA-INSIGHTS/frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deployment Instructions (for cPanel)

1. Run `npm run build` to generate the `dist/` folder.
2. Upload the `dist/` folder to your domain’s subdirectory on cPanel (e.g., `public_html/RERA-INSIGHTS/`).
3. Make sure your app is accessible via:
   👉 [https://premium-host.xyz/RERA-INSIGHTS/](https://premium-host.xyz/RERA-INSIGHTS/)

---

## 📌 Notes

* All routes are managed using React Router.
* For proper routing, ensure the app is served from `/RERA-INSIGHTS/` and `base` is correctly set if needed.
* Avoid using `npm run dev` in production (causes memory issues on shared hosting).

---

## 📞 Contact

Developed by [Lokesh Alli](https://github.com/LokeshAlli21)
📧 [lokeshalli1807@gmail.com](mailto:lokeshalli1807@gmail.com)
