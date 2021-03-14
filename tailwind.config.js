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
        'awaken-mob': "url('../img/music/img_awaken-my-love-mob.jpg')",
        'bladerunner': "url('../img/movie/img_blade-runner.jpg')",
        'bladerunner-mob': "url('../img/movie/img_blade-runner-mob.jpg')",
        'ladyonfire': "url('../img/movie/img_PortraitofaLadyonFire.jpg')",
        'soundofmetal': "url('../img/movie/img_sound-of-metal.jpg')",
        'minari': "url('../img/movie/img_minari.jpg')",
        'burning': "url('../img/movie/img_burning.jpg')",
        'uncutgems': "url('../img/movie/img_uncut-gems.jpg')",
        'prd-circle': "url('../img/product/bg_circle-1.svg')",
        'prd-circle-2': "url('../img/product/bg_circle-2.svg')",
      }),
      colors: {
        form: {
          bg: "#FFF75E",
          btn: "#41E9EA",
        },
        prd: {
          main: "#C975B1",
          dark: "#9E5188",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
