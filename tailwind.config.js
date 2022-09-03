module.exports = {
  // variants: {
  //     borderWidth: ["responsive", "last", "hover", "focus", "group-hover"],
  // },
  purge: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
  variants: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
      borderWidth: ["responsive", "last", "hover", "focus"],
      backgroundColor: ["responsive", "odd", "even", "hover", "focus"],
      backgroundOpacity: ["responsive", "odd", "even", "hover", "focus"],
      padding: ["responsive"],
      textAlign: ["responsive", "first", "last"],
      divideColor: ["responsive", "hover", "focus"],
  },
  theme: {
      screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
         'sx': {'max': '767px'},
         'mx': {'max': '868px'},
         'lx': {'max': '1023px'},
         'gx': {'max': '1535px'},
         '2xl':{'max': '1535px'}
      },
      fontFamily: {
          display: ["Gilroy", "sans-serif"],
          body: ["Graphik", "sans-serif"],
      },
     
      extend: {
          boxShadow: {
              nav:"4px 0 10px -3px #010101"
          },
          colors: {
            navbg:"#2a2e35",
            border:"#b2becd",
            header:"#45b0ff",
            work:"#394c98",
            bg:"#12181b"
          },
          spacing: {
              "7": "1.6rem",
              "13": "3.5rem",
              "18": "4.2rem",
              "90": "20rem",
              "96": "24rem",
              "98": "28rem",
              "100": "30rem",
              "128": "32rem",
          },
      },
  },
};