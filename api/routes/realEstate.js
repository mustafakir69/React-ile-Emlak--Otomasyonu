const router = require('express').Router();
const RealEstate = require('../models/RealEstate');

// Tüm emlak listelerini getir ve filtrele
router.get('/', async (req, res) => {
  const { minFiyat, maxFiyat, il, odaSayisi, ozellikler, olmamaliOzellikler } = req.query;

  let filter = {};

  if (minFiyat) filter.fiyat = { ...filter.fiyat, $gte: parseInt(minFiyat) };
  if (maxFiyat) filter.fiyat = { ...filter.fiyat, $lte: parseInt(maxFiyat) };
  if (il) filter.il = il;
  if (odaSayisi) {
    if (odaSayisi === 'dahaFazla') {
      filter.odaSayısı = { $regex: /^[6-9]+\+1$/ };
    } else {
      filter.odaSayısı = odaSayisi;
    }
  }
  if (ozellikler) filter.özellikler = { $all: ozellikler.split(',') };
  if (olmamaliOzellikler) filter.özellikler = { $nin: olmamaliOzellikler.split(',') };

  try {
    const listings = await RealEstate.find(filter);
    res.json(listings);
  } catch (error) {
    res.status(400).json('Hata: ' + error.message);
  }
});

// Yeni bir emlak listesi ekle
router.post('/add', async (req, res) => {
  const { başlık, açıklama, il, fiyat, odaSayısı, resimUrl, özellikler } = req.body;

  try {
    const newRealEstate = new RealEstate({
      başlık,
      açıklama,
      il,
      fiyat: Number(fiyat),
      odaSayısı,
      resimUrl,
      özellikler: özellikler || []
    });

    await newRealEstate.save();
    res.json('Emlak eklendi!');
  } catch (error) {
    res.status(400).json('Hata: ' + error.message);
  }
});

// Bir emlak listesini güncelle
router.post('/update/:id', async (req, res) => {
  const { başlık, açıklama, il, fiyat, odaSayısı, resimUrl, özellikler } = req.body;

  try {
    const updatedRealEstate = await RealEstate.findById(req.params.id);

    if (!updatedRealEstate) {
      return res.status(404).json('Emlak bulunamadı');
    }

    updatedRealEstate.başlık = başlık;
    updatedRealEstate.açıklama = açıklama;
    updatedRealEstate.il = il;
    updatedRealEstate.fiyat = Number(fiyat);
    updatedRealEstate.odaSayısı = odaSayısı;
    updatedRealEstate.resimUrl = resimUrl;
    updatedRealEstate.özellikler = özellikler || [];

    await updatedRealEstate.save();
    res.json('Emlak güncellendi!');
  } catch (error) {
    res.status(400).json('Hata: ' + error.message);
  }
});

// Bir emlak listesini sil
router.delete('/:id', async (req, res) => {
  try {
    await RealEstate.findByIdAndDelete(req.params.id);
    res.json('Emlak silindi.');
  } catch (error) {
    res.status(400).json('Hata: ' + error.message);
  }
});

module.exports = router;
