function Mapa() {
    return (
      <div className="flex flex-col items-center p-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-white text-center mb-6">Encontranos aquí</h2>
          <hr className="bg-rojo h-[3px] w-[30vw] mb-6" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690.3919929717708!2d-58.393266878701034!3d-34.60223256162469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac04233244f%3A0x5709f491eef0c353!2sAv.%20Callao%20600%2C%20C1025%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1726612723767!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96 rounded-lg shadow-md"
        ></iframe>
      </div>
    );
  }
  
  export default Mapa;
  