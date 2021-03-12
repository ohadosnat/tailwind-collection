module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      fontFamily: {
        'roboto': ['Roboto, sans-serif']
      },
      gridTemplateColumns: {
        // Main Grid config - min-content
        'main': "min-content 1fr min-content",
      },
      gridTemplateRows: {
        // Main Grid config - min-content
        'main': "min-content auto min-content",
      },
      backgroundImage: theme => ({
        'awaken-mob': "url('../img/img_awaken-my-love-mob.jpg')",
      }),
      colors: {
        form: {
          bg: "#FFF75E",
          btn: "#41E9EA",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
