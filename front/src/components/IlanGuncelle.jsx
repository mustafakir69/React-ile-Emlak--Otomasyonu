// IlanGuncelle.js
import React, { useEffect } from 'react';
import { Form } from 'antd';
import axios from 'axios';
import IlanForm from './IlanForm'; 

export const handleUpdate = async (values, selectedIlan, ilanListesi, setIlanListesi, setShowUpdateModal, setSelectedIlan, message) => {
  if (!values) {
    setShowUpdateModal(false);
    return;
  }

  try {
    await axios.post(`http://localhost:5005/api/realEstate/update/${selectedIlan._id}`, values);
    const updatedIlanListesi = ilanListesi.map((ilan) =>
      ilan._id === selectedIlan._id ? { ...ilan, ...values } : ilan
    );
    setIlanListesi(updatedIlanListesi);
    message.success('İlan başarıyla güncellendi!');
    setShowUpdateModal(false);
    setSelectedIlan(null);
  } catch (error) {
    console.error('Error updating listing: ', error);
    message.error('İlan güncellenirken bir hata oluştu!');
  }
};

const IlanGuncelle = ({ visible, onCancel, onFinish, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  return (
    <IlanForm
      form={form}
      title="İlan Güncelle"
      visible={visible}
      onCancel={onCancel}
      onFinish={onFinish}
      initialValues={initialValues}
      submitText="Güncelle"
    />
  );
};

export default IlanGuncelle;
