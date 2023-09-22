import type { Config } from 'tailwindcss'

const config: Config = {
  prefix: 'tw-',
  important: true,
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fadedText: '#CACACA',
        commonBorder: '#ececec',
        hoverEffect: '#64687A',
        bannerBorder: '#bbd8de',
        colorBackground: '#f2f2f2',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-auth': 'url(https://source.unsplash.com/random)',
      },
      screens: {
        '-xs': { max: '480px' },
        '-sm': { max: '639px' },
        '-md': { max: '767px' },
        '-lg': { max: '1023px' },
        '-xl': { max: '1400px' },
        '-2xl': { max: '1600px' },
      },
      fontSize: {
        price: '1.5rem',
        description: '0.875rem',
      },
    },
  },
  plugins: [],
}
export default config
