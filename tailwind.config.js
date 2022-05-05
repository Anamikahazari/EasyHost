module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'acme':['Acme', 'sans-serif'],
      'bals': ['Balsamiq Sans', 'cursive'],
      'dancing': ['Dancing Script', 'cursive'],
      'satisfy': ['Satisfy', 'cursive'],
    },
    // colors:{              if using it then tailwind default color classes are not working?
    //   'bluev': '#CCFFE5'
    // },
    extend: {
      // backgroundColor: {
			//  'black':'#333',
			// },
    },
  },
  plugins: [],
}
