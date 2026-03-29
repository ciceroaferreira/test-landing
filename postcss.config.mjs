/** @type {import('postcss-load-config').Config} */
// Tailwind CSS v4 uses its own PostCSS plugin — autoprefixer is built in.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
