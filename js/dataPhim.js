
// Khai báo 1 mảng danh sách phim 
// Cần khai báo 20 bản ghi
const danhSachPhim = [
  {
    id: 1,
    tenPhim: 'Phim 1',
    rapChieu: 'Rạp 1',
    ngayChieu: '2023-07-01',
    soLuongVe: 100,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 2,
    tenPhim: 'Phim 2',
    rapChieu: 'Rạp 2',
    ngayChieu: '2023-07-02',
    soLuongVe: 150,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 3,
    tenPhim: 'Phim 3',
    rapChieu: 'Rạp 1',
    ngayChieu: '2023-07-03',
    soLuongVe: 120,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 4,
    tenPhim: 'Phim 4',
    rapChieu: 'Rạp 2',
    ngayChieu: '2023-07-02',
    soLuongVe: 150,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 5,
    tenPhim: 'Phim 5',
    rapChieu: 'Rạp 1',
    ngayChieu: '2023-07-03',
    soLuongVe: 120,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 6,
    tenPhim: 'Phim 6',
    rapChieu: 'Rạp 3',
    ngayChieu: '2023-07-18',
    soLuongVe: 80,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 7,
    tenPhim: 'Phim 7',
    rapChieu: 'Rạp 2',
    ngayChieu: '2023-07-19',
    soLuongVe: 90,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 8,
    tenPhim: 'Phim 8',
    rapChieu: 'Rạp 1',
    ngayChieu: '2023-07-20',
    soLuongVe: 110,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 9,
    tenPhim: 'Phim 9',
    rapChieu: 'Rạp 1',
    ngayChieu: '2023-07-01',
    soLuongVe: 100,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 10,
    tenPhim: 'Phim 10',
    rapChieu: 'Rạp 2',
    ngayChieu: '2023-07-02',
    soLuongVe: 150,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 11,
    tenPhim: 'Phim 11',
    rapChieu: 'Rạp 1',
    ngayChieu: '2023-07-03',
    soLuongVe: 120,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 12,
    tenPhim: 'Phim 12',
    rapChieu: 'Rạp 2',
    ngayChieu: '2023-07-02',
    soLuongVe: 150,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 13,
    tenPhim: 'Phim 13',
    rapChieu: 'Rạp 1',
    ngayChieu: '2023-07-03',
    soLuongVe: 120,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  // Thêm các bản ghi phim khác tương tự ở đây
  {
    id: 14,
    tenPhim: 'Phim 14',
    rapChieu: 'Rạp 3',
    ngayChieu: '2023-07-18',
    soLuongVe: 80,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 15,
    tenPhim: 'Phim 15',
    rapChieu: 'Rạp 2',
    ngayChieu: '2023-07-19',
    soLuongVe: 90,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 16,
    tenPhim: 'Phim 16',
    rapChieu: 'Rạp 1',
    ngayChieu: '2023-07-20',
    soLuongVe: 110,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 17,
    tenPhim: 'Phim 17',
    rapChieu: 'Rạp 3',
    ngayChieu: '2023-07-18',
    soLuongVe: 80,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 18,
    tenPhim: 'Phim 18',
    rapChieu: 'Rạp 2',
    ngayChieu: '2023-07-19',
    soLuongVe: 90,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 19,
    tenPhim: 'Phim 19',
    rapChieu: 'Rạp 1',
    ngayChieu: '2023-07-20',
    soLuongVe: 110,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  },
  {
    id: 20,
    tenPhim: 'Phim 20',
    rapChieu: 'Rạp 1',
    ngayChieu: '2023-07-20',
    soLuongVe: 110,
    hinhAnh: 'https://phimmoiyyy.net/wp-content/uploads/2023/06/The-Flash-vietsub.jpg'
  }
];

  // Sử dụng dữ liệu danh sách phim
  danhSachPhim.forEach((phim) => {
    console.log('ID:', phim.id);
    console.log('Tên Phim:', phim.tenPhim);
    console.log('Rạp Chiếu:', phim.rapChieu);
    console.log('Ngày chiếu:', phim.ngayChieu);
    console.log('Số lượng vé:', phim.soLuongVe);
    console.log('Hình ảnh phim:', phim.hinhAnh);
    console.log('--------------------------------');
  });