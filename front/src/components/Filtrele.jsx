import React, { useState } from 'react';
import EvFiltreFormu from './EvFiltreFormu';
import axios from 'axios';

const Filtrele = ({ setIlanListesi }) => {
  const [filtre, setFiltre] = useState({
    minFiyat: null,
    maxFiyat: null,
    il: null,
    odaSayisi: null,
    ozellikler: [],
    olmamaliOzellikler: []
  });

  const handleFilterChange = (field, value) => {
    setFiltre(prevFiltre => ({
      ...prevFiltre,
      [field]: value
    }));
  };

  const applyFilters = () => {
    const params = {
      minFiyat: filtre.minFiyat,
      maxFiyat: filtre.maxFiyat,
      il: filtre.il,
      odaSayisi: filtre.odaSayisi,
      ozellikler: filtre.ozellikler.join(','),
      olmamaliOzellikler: filtre.olmamaliOzellikler.join(',')
    };

    axios.get('http://localhost:5005/api/realEstate', { params })
      .then(response => {
        setIlanListesi(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  const clearFilters = () => {
    setFiltre({
      minFiyat: null,
      maxFiyat: null,
      il: null,
      odaSayisi: null,
      ozellikler: [],
      olmamaliOzellikler: []
    });

    axios.get('http://localhost:5005/api/realEstate')
      .then(response => {
        setIlanListesi(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  return (
    <EvFiltreFormu
      filtre={filtre}
      handleFilterChange={handleFilterChange}
      applyFilters={applyFilters}
      clearFilters={clearFilters}
    />
  );
};

export default Filtrele;
