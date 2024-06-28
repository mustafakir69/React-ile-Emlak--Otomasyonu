import React from 'react';
import { Button, message } from 'antd';
import axios from 'axios';
import { DeleteOutlined } from '@ant-design/icons';

const IlanSil = ({ selectedIlan, ilanListesi, setIlanListesi }) => {
  const handleDelete = async () => {
    if (selectedIlan) {
      try {
        await axios.delete(`http://localhost:5005/api/realEstate/${selectedIlan._id}`);
        const updatedIlanListesi = ilanListesi.filter(ilan => ilan._id !== selectedIlan._id);
        setIlanListesi(updatedIlanListesi);
        message.success('İlan başarıyla silindi!');
      } catch (error) {
        console.error('Error deleting listing: ', error);
        message.error('İlan silinirken bir hata oluştu!');
      }
    } else {
      message.warning('Lütfen bir ilan seçin!');
    }
  };

  return (
    <Button type="primary" danger icon={<DeleteOutlined />} style={{ marginLeft: 10 }} onClick={handleDelete}>
      İlan Sil
    </Button>
  );
};

export default IlanSil;
