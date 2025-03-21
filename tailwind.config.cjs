/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "page": "#61449A",
                "page-secondary": "#A68BE3",
                "page-tertiary": "#3A1C71",
                "primary-text": "#EAE2FC",
                "secondary-text": "#C7B8F3",
                "tertiary-text": "#B5A8E6",
                "button-text": "#D1B3FF",
                "button": "#C7B8F3",
                "button-hover": "#C39DFF",
                "card": "#E1CEFF",
                "form": "#C7B8F3",
            }
        },
    },
    plugins: [],
}

