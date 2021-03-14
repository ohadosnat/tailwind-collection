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
        'bladerunner': "url('../img/img_blade-runner.jpg')",
        'bladerunner-mob': "url('../img/img_blade-runner-mob.jpg')",
        'ladyonfire': "url('../img/img_PortraitofaLAdyonFire.jpg')",
        'soundofmetal': "url('../img/img_sound-of-metal.jpg')",
        'minari': "url('../img/img_minari.jpg')",
        'burning': "url('../img/img_burning.jpg')",
        'uncutgems': "url('../img/img_uncut-gems.jpg')",
        '1917': "url('../img/img_1917.jpg')",
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
