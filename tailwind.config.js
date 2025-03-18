/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-blue': '#33ACFD',
                'primary-white': '#0000',
                'secondary-gray': '#A2AFB7',
                'secondary-blue': '#002338',
                'secondary-orange': '#FE9130'
            }
        },
    },
    plugins: [],
};
