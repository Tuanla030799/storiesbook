import type { Config } from 'tailwindcss'

const config: Config = {
  prefix: 'tw-',
  important: true,
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: { max: '536px' },
      sm: { max: '640px' },
      md: { max: '768px' },
      lg: { max: '1024px' },
      xl: { max: '1280px' },
      '2xl': { max: '1536px' },
    },
    fontSize: {
      'display-2xl': ['var(--fs-display-2xl)', 'var(--lh-display-2xl)'],
      'display-xl': ['var(--fs-display-xl)', 'var(--lh-display-xl)'],
      'display-lg': ['var(--fs-display-lg)', 'var(--lh-display-lg)'],
      'display-md': ['var(--fs-display-md)', 'var(--lh-display-md)'],
      'display-sm': ['var(--fs-display-sm)', 'var(--lh-display-sm)'],
      'display-xs': ['var(--fs-display-xs)', 'var(--lh-display-xs)'],
      xl: ['var(--fs-text-xl)', 'var(--lh-text-xl)'],
      lg: ['var(--fs-text-lg)', 'var(--lh-text-lg)'],
      md: ['var(--fs-text-md)', 'var(--lh-text-md)'],
      sm: ['var(--fs-text-sm)', 'var(--lh-text-sm)'],
      xs: ['var(--fs-text-xs)', 'var(--lh-text-xs)'],
      '2xs': ['var(--fs-text-2xs)', 'var(--lh-text-2xs)'],
    },
    fontWeight: {
      light: 'var(--fw-light)',
      regular: 'var(--fw-regular)',
      medium: 'var(--fw-medium)',
      semibold: 'var(--fw-semibold)',
      bold: 'var(--fw-bold)',
      extrabold: 'var(--fw-extrabold)',
      black: 'var(--fw-black)',
    },
    extend: {
      backgroundImage: {
        'course-detail': "url('../public/images/course_detail_bg.png')",
        footer: "url('../public/images/footer-bg.png')",
        home: "url('../public/images/home-bg.jpg')",
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        '3xl': 'var(--shadow-3xl)',
      },
      colors: {
        white: 'rgb(var(--white) / <alpha-value>)',
        black: 'rgb(var(--black) / <alpha-value>)',
        base: 'rgb(var(--base) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        primary: {
          25: 'rgb(var(--primary-25) / <alpha-value>)',
          50: 'rgb(var(--primary-50) / <alpha-value>)',
          100: 'rgb(var(--primary-100) / <alpha-value>)',
          200: 'rgb(var(--primary-200) / <alpha-value>)',
          300: 'rgb(var(--primary-300) / <alpha-value>)',
          400: 'rgb(var(--primary-400) / <alpha-value>)',
          500: 'rgb(var(--primary-500) / <alpha-value>)',
          600: 'rgb(var(--primary-600) / <alpha-value>)',
          700: 'rgb(var(--primary-700) / <alpha-value>)',
          800: 'rgb(var(--primary-800) / <alpha-value>)',
          900: 'rgb(var(--primary-900) / <alpha-value>)',
        },
        gray: {
          25: 'rgb(var(--gray-25) / <alpha-value>)',
          50: 'rgb(var(--gray-50) / <alpha-value>)',
          100: 'rgb(var(--gray-100) / <alpha-value>)',
          200: 'rgb(var(--gray-200) / <alpha-value>)',
          300: 'rgb(var(--gray-300) / <alpha-value>)',
          400: 'rgb(var(--gray-400) / <alpha-value>)',
          500: 'rgb(var(--gray-500) / <alpha-value>)',
          600: 'rgb(var(--gray-600) / <alpha-value>)',
          700: 'rgb(var(--gray-700) / <alpha-value>)',
          800: 'rgb(var(--gray-800) / <alpha-value>)',
          900: 'rgb(var(--gray-900) / <alpha-value>)',
        },
        info: {
          25: 'rgb(var(--info-25) / <alpha-value>)',
          50: 'rgb(var(--info-50) / <alpha-value>)',
          100: 'rgb(var(--info-100) / <alpha-value>)',
          200: 'rgb(var(--info-200) / <alpha-value>)',
          300: 'rgb(var(--info-300) / <alpha-value>)',
          400: 'rgb(var(--info-400) / <alpha-value>)',
          500: 'rgb(var(--info-500) / <alpha-value>)',
          600: 'rgb(var(--info-600) / <alpha-value>)',
          700: 'rgb(var(--info-700) / <alpha-value>)',
          800: 'rgb(var(--info-800) / <alpha-value>)',
          900: 'rgb(var(--info-900) / <alpha-value>)',
        },
        error: {
          25: 'rgb(var(--error-25) / <alpha-value>)',
          50: 'rgb(var(--error-50) / <alpha-value>)',
          100: 'rgb(var(--error-100) / <alpha-value>)',
          200: 'rgb(var(--error-200) / <alpha-value>)',
          300: 'rgb(var(--error-300) / <alpha-value>)',
          400: 'rgb(var(--error-400) / <alpha-value>)',
          500: 'rgb(var(--error-500) / <alpha-value>)',
          600: 'rgb(var(--error-600) / <alpha-value>)',
          700: 'rgb(var(--error-700) / <alpha-value>)',
          800: 'rgb(var(--error-800) / <alpha-value>)',
          900: 'rgb(var(--error-900) / <alpha-value>)',
        },
        warning: {
          25: 'rgb(var(--warning-25) / <alpha-value>)',
          50: 'rgb(var(--warning-50) / <alpha-value>)',
          100: 'rgb(var(--warning-100) / <alpha-value>)',
          200: 'rgb(var(--warning-200) / <alpha-value>)',
          300: 'rgb(var(--warning-300) / <alpha-value>)',
          400: 'rgb(var(--warning-400) / <alpha-value>)',
          500: 'rgb(var(--warning-500) / <alpha-value>)',
          600: 'rgb(var(--warning-600) / <alpha-value>)',
          700: 'rgb(var(--warning-700) / <alpha-value>)',
          800: 'rgb(var(--warning-800) / <alpha-value>)',
          900: 'rgb(var(--warning-900) / <alpha-value>)',
        },
        success: {
          25: 'rgb(var(--success-25) / <alpha-value>)',
          50: 'rgb(var(--success-50) / <alpha-value>)',
          100: 'rgb(var(--success-100) / <alpha-value>)',
          200: 'rgb(var(--success-200) / <alpha-value>)',
          300: 'rgb(var(--success-300) / <alpha-value>)',
          400: 'rgb(var(--success-400) / <alpha-value>)',
          500: 'rgb(var(--success-500) / <alpha-value>)',
          600: 'rgb(var(--success-600) / <alpha-value>)',
          700: 'rgb(var(--success-700) / <alpha-value>)',
          800: 'rgb(var(--success-800) / <alpha-value>)',
          900: 'rgb(var(--success-900) / <alpha-value>)',
        },
      },
      width: {
        menu: 'var(--menu-dropdown-width)',
        alert: 'var(--alert-width)',
      },
      height: {
        header: 'var(--header-height)',
      },
      zIndex: {
        negative: 'var(--z-negative)',
        elevate: 'var(--z-elevate)',
        sticky: 'var(--z-sticky)',
        drawer: 'var(--z-drawer)',
        dropdown: 'var(--z-dropdown)',
        modal: 'var(--z-modal)',
        popover: 'var(--z-popover)',
        maximum: 'var(--z-maximum)',
      },
      animation: {
        'dash-loading': 'dash 2s ease-in-out infinite',
        'rotate-loading': 'rotate 2s linear infinite',
        'bell-ring': 'bell 1s infinite ease-in-out',
      },
      keyframes: {
        rotate: {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        dash: {
          '0%': {
            strokeDasharray: '1, var(--dash-array-2)',
            strokeDashoffset: '0',
          },
          '50%': {
            strokeDasharray: 'var(--dash-array-1), var(--dash-array-2)',
            strokeDashoffset: 'var(--dash-offset-1)',
          },
          '100%': {
            strokeDasharray: 'var(--dash-array-1), var(--dash-array-2)',
            strokeDashoffset: 'var(--dash-offset-2)',
          },
        },
        bell: {
          '0%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
          '10%': {
            transform: 'rotate(-25deg) scale(1) skew(1deg)',
          },
          '20%': {
            transform: 'rotate(25deg) scale(1) skew(1deg)',
          },
          '30%': {
            transform: 'rotate(-25deg) scale(1) skew(1deg)',
          },
          '40%': {
            transform: 'rotate(25deg) scale(1) skew(1deg)',
          },
          '50%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
          '100%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
      addVariant('parent-hover', '.parent:hover > &')
      addVariant('child-all', '& *')
    },
  ],
}
export default config
