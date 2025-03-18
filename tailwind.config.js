/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'devros-primary-blue': '#33ACFD',
                'devros-white': '#fff',
                'devros-gray': '#A2AFB7',
                'devros-secondary-blue': '#002338',
                'devros-orange': '#FE9130'
            }
        },
    },
    plugins: [],
};
