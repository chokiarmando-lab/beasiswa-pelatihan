const API_URL = 'http://localhost:3000';

export type Scholarship = {
  id: number;
  code: string;
  name: string;
  description?: string;
  registration_start: string;
  registration_end: string;
  is_active: boolean;
  is_published: boolean;
};

export async function getScholarships(): Promise<Scholarship[]> {
  const response = await fetch(
    `${API_URL}/api/master/scholarships`,
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Gagal mengambil data program');
  }

  return data;
}