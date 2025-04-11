/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
           
        },
        
        screens : {
            mobile :  '480px'  , 
            tablet :  '768px' , 
            laptop :  '1024px',
        },
        
       
    },
    
    plugins: [],
    darkMode : 'class'

}