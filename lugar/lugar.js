const axios = require("axios");

const getLugarLatLng = async (lugar) => {
  const encodeUrl = encodeURI(lugar);

  const resp = await axios.get(
    `https://geocode.xyz/Hauptstr.,+57632+"${encodeUrl}"?json=1`
  );

  if (resp.data.matches === null) {
    throw new Error(`No hay resultados para ${lugar}`);
  }

  const direccion = `${resp.data.standard.city}, ${resp.data.standard.countryname}`;
  const lat = resp.data.latt;
  const lng = resp.data.longt;

  return {
    direccion,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLng,
};
