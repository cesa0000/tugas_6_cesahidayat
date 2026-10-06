// controller.mjs
import users from './data.mjs';

// Melihat data: ditampilkan menggunakan map()
const index = () => {
  console.log('=== Daftar Users ===');
  const daftar = users.map(
    (u, i) => `${i + 1}. ${u.nama} | ${u.umur} th | ${u.alamat} | ${u.email}`
  );
  console.log(daftar.join('\n'));
  console.log(`Total: ${users.length} data\n`);
};

// Menambah data: memakai push()
const store = (user) => {
  users.push(user);
  console.log(`Data "${user.nama}" berhasil ditambahkan.\n`);
};

// Menghapus data: tanpa argumen menghapus data terakhir,
// atau isi nomor urut (mulai dari 1) untuk menghapus data tertentu
const destroy = (nomor = users.length) => {
  if (nomor < 1 || nomor > users.length) {
    console.log('Nomor data tidak ditemukan.\n');
    return;
  }
  const [dihapus] = users.splice(nomor - 1, 1);
  console.log(`Data "${dihapus.nama}" berhasil dihapus.\n`);
};

export { index, store, destroy };
