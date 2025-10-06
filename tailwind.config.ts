import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      height: {
        'adapt-screen': 'calc(100vh - 64px)',
      },
      minHeight: {
        'adapt-screen': 'calc(100vh - 64px)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        lrmove: {
          '0%': { left: '50%' },
          '25%': { left: '75%' },
          '75%': { left: '25%' },
          '100%': { left: '50%' },
        },
        wmove: {
          '0%': { width: '50%' },
          '25%': { width: '75%' },
          '75%': { width: '25%' },
          '100%': { width: '50%' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        streamer: {
          '100%': {
            backgroundPosition: '-400%',
          },
        },
        wlshineleft: {
          '0%': { opacity: '0' },
          '25%': { opacity: '1' },
          '50%': { opacity: '0' },
          '75%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        wlshineright: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '60%': { opacity: '0.9' },
          '75%': { opacity: '1' },
          '90%': { opacity: '0.9' },
          '100%': { opacity: '0' },
        },
        ylshinemask: {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
          '20%': { opacity: '0' },
          '30%': { opacity: '1' },
          '40%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        ylshinenaked: {
          '0%': { opacity: '0' },
          '40%': { opacity: '0' },
          '70%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        lrmove: '2s lrmove 4s linear infinite',
        wmove: '2s wmove 4s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        streamer: 'streamer 5s infinite linear',
        wlshinel: 'wlshineleft 2s infinite ease',
        wlshiner: 'wlshineright 4s infinite ease',
        ylshinem: 'ylshinemask 7s infinite ease',
        ylshinen: 'ylshinenaked 7s infinite ease',
      },
      backgroundImage: {
        'streamer-color': 'linear-gradient(90deg, #03a9f4, #f441a5, #03a9f4)',
      },
      listStyleImage: {
        mark: 'url("/app/styles/svg/success.svg")',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        fantasy: {
          extend: 'light',
          colors: {
            background: '#fff',
            foreground: '#000',
            primary: {
              50: '#ffe2ff',
              100: '#FBC9EA',
              200: '#F894DE',
              300: '#EA5DD1',
              400: '#D535C7',
              500: '#BA00BA',
              600: '#92009F',
              700: '#6E0085',
              800: '#4F006B',
              900: '#3A0059',
              DEFAULT: '#BA00BA',
              foreground: '#ffffff',
            },
          },
        },
        blue: {
          extend: 'light',
          colors: {
            background: '#666',
            foreground: '#ccc',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff',
            },
            focus: '#F182F6',
          },
        },
      },
    }),
    require('tailwindcss-animate'),
  ],
};
export default config;
