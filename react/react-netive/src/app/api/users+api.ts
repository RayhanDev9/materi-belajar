// Ini adalah API Route (Server Backend) di Expo Router.
// File ini berjalan di SERVER, bukan di HP/Browser!

// Data dummy (pura-puranya dari database)
const users = [
  { id: 1, name: "Rayhan", role: "Mobile Developer" },
  { id: 2, name: "Budi Santoso", role: "UI/UX Designer" },
  { id: 3, name: "Siti Rahma", role: "Product Manager" },
];

// 1. Handler untuk HTTP GET (mengambil data)
// Dipanggil saat frontend mengakses: fetch('/api/users')
export async function GET(request: Request) {
  // Response.json() adalah fungsi standar untuk mengirim data JSON kembali ke frontend
  return Response.json({
    success: true,
    message: "Data user berhasil diambil dari server!",
    total: users.length,
    data: users,
  });
}

// 2. Handler untuk HTTP POST (menambah data baru)
// Dipanggil saat frontend mengirim data: fetch('/api/users', { method: 'POST', body: ... })
export async function POST(request: Request) {
  try {
    // Membaca data JSON yang dikirim oleh frontend
    const body = await request.json();

    // Validasi sederhana: pastikan field 'name' dikirim
    if (!body.name) {
      return Response.json(
        { success: false, message: "Field 'name' wajib diisi!" },
        { status: 400 } // Status HTTP 400 = Bad Request
      );
    }

    // Buat objek user baru
    const newUser = {
      id: users.length + 1,
      name: body.name,
      role: body.role || "User",
    };

    // Simpan ke array (database sementara)
    users.push(newUser);

    // Kirim respons balik bahwa data sukses disimpan
    return Response.json(
      {
        success: true,
        message: "User baru berhasil ditambahkan!",
        data: newUser,
      },
      { status: 201 } // Status HTTP 201 = Created
    );
  } catch (error) {
    return Response.json(
      { success: false, message: "Format JSON tidak valid!" },
      { status: 500 }
    );
  }
}
