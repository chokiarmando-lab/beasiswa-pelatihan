import {
  getAllVerifications,
  getVerificationById,
  getVerificationByApplicationId,
  updateVerificationStatus,
} from '../services/verification.service.js';

export const getVerifications = async (req, res) => {
  try {
    const data = await getAllVerifications();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mengambil data verifikasi',
      error: error.message,
    });
  }
};

export const getVerification = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await getVerificationByApplicationId(id);

    if (!data) {
      return res.status(404).json({
        message: 'Data verifikasi tidak ditemukan',
      });
    }

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Gagal mengambil data verifikasi',
    });
  }
};

export const updateVerification = async (req, res) => {
  try {
    const data = await updateVerificationStatus(
      req.params.id,
      req.body,
    );

    res.json({
      message: 'Status verifikasi berhasil diperbarui',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal memperbarui status verifikasi',
      error: error.message,
    });
  }
};

