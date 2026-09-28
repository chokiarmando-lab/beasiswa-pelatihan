const API_URL = 'http://localhost:3000/api/selection';

export async function getVerifications() {
  const response = await fetch(`${API_URL}/verifications`);

  const text = await response.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(
      text || 'Gagal mengambil data verifikasi',
    );
  }

  if (!response.ok) {
    throw new Error(
      data?.message || 'Gagal mengambil data verifikasi',
    );
  }

  return data?.data ?? data;
}

export async function getVerificationById(
  id: number,
) {
  const response = await fetch(
    `${API_URL}/verifications/${id}`,
  );

  const text = await response.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(
      text || 'Gagal mengambil detail verifikasi',
    );
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
        'Gagal mengambil detail verifikasi',
    );
  }

  return data?.data ?? data;
}

export async function updateVerificationStatus(
  id: number,
  status: string,
  notes: string,
  verifiedBy: number,
) {
  const response = await fetch(
    `${API_URL}/verifications/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status,
        notes,
        verifiedBy,
      }),
    },
  );

  const text = await response.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(
      text || 'Gagal mengubah status verifikasi',
    );
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
        'Gagal mengubah status verifikasi',
    );
  }

  return data?.data ?? data;
}

