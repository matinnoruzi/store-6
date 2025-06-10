/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens : {
      "mobile-smini" :{ min : "100px" , max : "381px" },
      "mobile-mini" :{ min : "381px" , max : "470px" },
      "mobile-big" :{ min : "471px" , max : "600px" },
      "tablet" : { min : "601px" , max : "799px" } ,
      "kollan" : "200px" ,
      "kollan-2" : { min : "100px" , max : "1100px" } ,
      "kollan3" : "818px" ,
    },
  },
  plugins: [],
}

