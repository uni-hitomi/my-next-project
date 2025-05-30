/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router 用
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router に備えて
    "./components/**/*.{js,ts,jsx,tsx}", // 共通コンポーネント用
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
