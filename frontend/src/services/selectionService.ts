const API_URL = 'http://localhost:3000/api/selections';

export async function getSelections() {
  const response = await fetch(`${API_URL}`);

  const text = await response.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(text || 'Gagal mengambil data selection');
  }

  if (!response.ok) {
    throw new Error(
      data?.message || 'Gagal mengambil data selection',
    );
  }

  // Pastikan yang dikembalikan ke frontend adalah array
  if (Array.isArray(data)) {
    return data;
  }

  // Kalau backend membungkus array dalam property data
  if (Array.isArray(data?.data)) {
    return data.data;
  }

  return [];
}

export async function createSelection(data: {
  applicationId: number;
  institutionId?: number;
  score?: number;
  notes?: string;
  status?: string;
}) {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const text = await response.text();

  let result;

  try {
    result = JSON.parse(text);
  } catch {
    throw new Error(text || 'Gagal membuat selection');
  }

  if (!response.ok) {
    throw new Error(
      result?.message || 'Gagal membuat selection',
    );
  }

  return result;
}

export async function updateSelection(
  id: number,
  data: {
    institutionId?: number;
    score?: number;
    notes?: string;
    status?: string;
  },
) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const text = await response.text();

  let result;

  try {
    result = JSON.parse(text);
  } catch {
    throw new Error(text || 'Gagal mengubah selection');
  }

  if (!response.ok) {
    throw new Error(
      result?.message || 'Gagal mengubah selection',
    );
  }

  return result;
}

export async function getRanking() {
  const response = await fetch(`${API_URL}/ranking`);

  const text = await response.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(text || 'Gagal mengambil ranking');
  }

  if (!response.ok) {
    throw new Error(
      data?.message || 'Gagal mengambil ranking',
    );
  }

  return Array.isArray(data) ? data : data?.data || [];
}

