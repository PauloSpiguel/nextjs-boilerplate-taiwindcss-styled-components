module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        lmd: '992px',
        'm-sm': { max: '639px' },
        'm-md': { max: '767px' },
        'm-lmd': { max: '991px' },
        'm-lg': { max: '1023px' },
        'm-xl': { max: '1279px' },
      },
      fontFamily: {
        sans: ['Lato', 'Roboto', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
