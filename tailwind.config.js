import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Asegúrate de incluir el path de Flowbite React
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./src/assets/baner-home.jpg')", // Ensure the path matches your file location
      },
      colors: {
        bordo:"#751D3A",
        rojo:"#A1182F",
        rosa:"#F2DADA",
        celeste:"#23869E",
        azul:"#085879"
      },
      fontFamily: {
            nexa: ['Nexa', 'sans-serif'],
            hat: ['Red Hat Display', 'sans-serif'],
          },
  },
  plugins: [
    flowbite, // Usamos el plugin Flowbite aquí
  ],
}
}
