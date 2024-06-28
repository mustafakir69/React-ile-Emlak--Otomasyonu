const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const realEstateSchema = new Schema({
  başlık: { type: String, required: true },
  açıklama: { type: String, required: true },
  il: { type: String, required: true },
  fiyat: { type: Number, required: true },
  odaSayısı: { type: String, required: true },
  resimUrl: { type: String, required: true },
  özellikler: { type: [String], default: [] }
  
});

const RealEstate = mongoose.model('RealEstate', realEstateSchema);

module.exports = RealEstate;
