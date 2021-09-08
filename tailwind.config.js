module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "my-photo": "url('/images/1623630178478.jpg')",
      },
      spacing: {
        "15": "3.75rem",
        "18": "4.5rem",
        "21": "5.25rem",
        "27": "6.75rem",
        "30": "7.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
