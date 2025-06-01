import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: false,
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './features/**/*.{js,ts,jsx,tsx,mdx}',
        './shared/**/*.{js,ts,jsx,tsx,mdx}',
        '*.{js,ts,jsx,tsx,mdx}',
    ],

    plugins: [require('tailwindcss-animate')],
};
export default config;
