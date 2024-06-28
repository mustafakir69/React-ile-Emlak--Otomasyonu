import React from 'react';
import { Modal, Card } from 'antd';
import '../css/IlanDetay.css'

const formatCurrency = (value) => {
  return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) + ' TL';
};

const IlanDetay = ({ selectedIlan, visible, onClose }) => {
  if (!selectedIlan) {
    return null;
  }

  return (
    <Modal visible={visible} onCancel={onClose} footer={null}>
      <Card className='string-size' title={selectedIlan.başlık}>
        <img className='max-h-[300px] w-max' src={selectedIlan.resimUrl} alt={selectedIlan.başlık} />
        <p><strong >Açıklama: </strong>{selectedIlan.açıklama}</p>
        <p><strong>Fiyat:</strong> {formatCurrency(selectedIlan.fiyat)}</p>
        <p><strong >İl:</strong> {selectedIlan.il}</p>
        <p><strong>Oda Sayısı:</strong> {selectedIlan.odaSayısı}</p>
        <p><strong>Özellikler:</strong> {selectedIlan.özellikler ? selectedIlan.özellikler.join(', ') : 'N/A'}</p>
      </Card>
    </Modal>
  );
};

export default IlanDetay;
