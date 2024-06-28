import React from 'react';
import axios from 'axios';
import { Form } from 'antd';
import IlanForm from './IlanForm';

export const handleAddIlan = async (values, ilanListesi, setIlanListesi, setShowAddModal, message, form) => {
  if (!values) {
    setShowAddModal(false);
    return;
  }

  try {
    const response = await axios.post('http://localhost:5005/api/realEstate/add', values);
    setIlanListesi([...ilanListesi, response.data]);
    message.success('Ev ilanı başarıyla eklendi!');
    setShowAddModal(false);
    form.resetFields();
  } catch (error) {
    console.error('Error adding new listing: ', error);
    message.error('İlan eklenirken bir hata oluştu!');
  }
};

const IlanEkle = ({ visible, onCancel, onFinish }) => {
  const [form] = Form.useForm();

  return (
    <IlanForm
      form={form}
      title="İlan Ekle"
      visible={visible}
      onCancel={onCancel}
      onFinish={(values) => onFinish(values, form)}
      submitText="Ekle"
    />
  );
};

export default IlanEkle;
