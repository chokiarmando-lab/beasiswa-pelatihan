import {
  getAllSelections,
  getSelectionById,
  getVerificationByApplicationId,
  createSelection,
  updateSelection,
  getSelectionRanking,
} from '../services/selection.service.js';

export const getSelections = async (req, res) => {
  try {
    const data = await getAllSelections();

    res.status(200).json({
      message: 'Berhasil mengambil data seleksi',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mengambil data seleksi',
      error: error.message,
    });
  }
};

export const getSelection = async (req, res) => {
  try {
    const data = await getSelectionById(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: 'Data seleksi tidak ditemukan',
      });
    }

    res.status(200).json({
      message: 'Berhasil mengambil data seleksi',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mengambil detail seleksi',
      error: error.message,
    });
  }
};

export const getVerification = async (req, res) => {
  try {
    const data = await getVerificationByApplicationId(
      req.params.applicationId,
    );

    if (!data) {
      return res.status(404).json({
        message: 'Data verifikasi tidak ditemukan',
      });
    }

    res.status(200).json({
      message: 'Berhasil mengambil detail verifikasi',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mengambil detail verifikasi',
      error: error.message,
    });
  }
};

export const createSelectionData = async (req, res) => {
  try {
    const data = await createSelection(req.body);

    res.status(201).json({
      message: 'Data seleksi berhasil dibuat',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal membuat data seleksi',
      error: error.message,
    });
  }
};

export const updateSelectionData = async (req, res) => {
  try {
    const data = await updateSelection(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      message: 'Data seleksi berhasil diperbarui',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal memperbarui data seleksi',
      error: error.message,
    });
  }
};

export const getRanking = async (req, res) => {
  try {
    const data = await getSelectionRanking();

    res.status(200).json({
      message: 'Berhasil mengambil ranking seleksi',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mengambil ranking seleksi',
      error: error.message,
    });
  }
};

