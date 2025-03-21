/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'devros-primary-blue': '#33ACFD',
                'devros-white': '#fff',
                'devros-gray': '#A2AFB7',
                'devros-gray-100': '#D1D8DC',
                'devros-gray-200': '#BCC7CD',
                'devros-gray-500': '#8D98A3',
                'devros-gray-600': '#7C8894',
                'devros-gray-700': '#5E6B77',
                'devros-secondary-blue': '#002338',
                'devros-secondary-blue-lighter': '#1A3B4D',
                'devros-orange': '#FE9130',
                'devros-orange-100': '#FFB44D'
            },
            fontFamily: {
                gotham: ['Gotham Black', 'sans-serif'],
                raleway: ['Raleway', 'sans-serif']
            },
        },
    },
    plugins: [],
};
