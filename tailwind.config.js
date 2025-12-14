/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./index.html"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#020617',     // Matches --nis-bg
                    charcoal: '#0f172a', // Slightly lighter dark for cards
                    red: '#c8102e',      // Matches --nis-accent
                    redLight: '#e61e3d',
                    accent: '#FFC107',
                }
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'aurora': 'aurora 10s ease infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
                    '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
                },
                pulseSlow: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
                    '50%': { transform: 'scale(1.05)', opacity: '0.8' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                aurora: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                }
            }
        },
    },
    plugins: [],
}
