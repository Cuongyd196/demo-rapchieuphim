// Lấy đối tượng table từ HTML
const table = document.getElementById('tablePhim');
const tbody = table.querySelector('tbody');

// Hàm để hiển thị dữ liệu danh sách phim trong bảng
function hienThiDanhSachPhim() {
  tbody.innerHTML = '';

// Danh sách phim từ ./dataPhim.js

  danhSachPhim.forEach((phim) => {
    const row = document.createElement('tr');

    // Tạo các ô dữ liệu trong hàng
    const idCell = document.createElement('td');
    idCell.textContent = phim.id;
    row.appendChild(idCell);

    const tenPhimCell = document.createElement('td');
    tenPhimCell.textContent = phim.tenPhim;
    row.appendChild(tenPhimCell);

    const rapChieuCell = document.createElement('td');
    rapChieuCell.textContent = phim.rapChieu;
    row.appendChild(rapChieuCell);

    const ngayChieuCell = document.createElement('td');
    ngayChieuCell.textContent = phim.ngayChieu;
    row.appendChild(ngayChieuCell);

    const soLuongVeCell = document.createElement('td');
    soLuongVeCell.textContent = phim.soLuongVe;
    row.appendChild(soLuongVeCell);

    const hinhAnhCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = phim.hinhAnh;
    img.width = 100;
    img.height = 100;
    hinhAnhCell.appendChild(img);
    row.appendChild(hinhAnhCell);

    const suaButtonCell = document.createElement('td');
    suaButtonCell.classList.add('text-center');
    const suaButton = document.createElement('button');
    suaButton.textContent = 'Sửa';
    suaButton.classList.add('btn', 'btn-primary');
    suaButton.addEventListener('click', () => {
      suaPhimForm(phim);
    });
    suaButtonCell.appendChild(suaButton);
    row.appendChild(suaButtonCell);
    const xoaButtonCell = document.createElement('td');
    xoaButtonCell.classList.add('text-center');
    const xoaButton = document.createElement('button');
    xoaButton.textContent = 'Xoá';
    xoaButton.classList.add('btn', 'btn-danger');
    xoaButton.addEventListener('click', () => {
      xoaPhim(phim.id);
    });
    xoaButtonCell.appendChild(xoaButton);
    row.appendChild(xoaButtonCell);

    tbody.appendChild(row);
  });
}

// Hàm để thêm phim vào danh sách
function themPhim(phim) {
  danhSachPhim.push(phim);
  hienThiDanhSachPhim();
}

// Hàm để sửa thông tin phim
function suaPhim(id, phimSua) {
  const phim = danhSachPhim.find((p) => p.id === id);
  if (phim) {
    Object.assign(phim, phimSua);
    hienThiDanhSachPhim();
  }
}
// Hàm để xoá phim khỏi danh sách
function xoaPhim(id) {
  const index = danhSachPhim.findIndex((p) => p.id === id);
  if (index !== -1) {
    danhSachPhim.splice(index, 1);
    hienThiDanhSachPhim();
  }
}
let phimDangSua = null;
//Hàm để hiển thị form sửa phim
function suaPhimForm(phim) {
  phimDangSua = phim;
  const tenPhimInput = document.getElementById('tenPhim');
  const rapChieuInput = document.getElementById('rapChieu');
  const ngayChieuInput = document.getElementById('ngayChieu');
  const soLuongVeInput = document.getElementById('soLuongVe');
  const hinhAnhInput = document.getElementById('hinhAnh');
  // Đặt giá trị từ phim vào các trường nhập
  tenPhimInput.value = phim.tenPhim;
  rapChieuInput.value = phim.rapChieu;
  ngayChieuInput.value = phim.ngayChieu;
  soLuongVeInput.value = phim.soLuongVe;
  hinhAnhInput.value = phim.hinhAnh;

  suaPhim(phim.id, { tenPhim: tenPhimMoi });

}

// Gắn sự kiện submit cho form
const formPhim = document.getElementById('formPhim');
formPhim.addEventListener('submit', function (e) {
  e.preventDefault(); // Ngăn chặn hành vi submit mặc định

  // Lấy giá trị từ các trường nhập
  const tenPhimInput = document.getElementById('tenPhim');
  const soLuongVeInput = document.getElementById('soLuongVe');
  const ngayChieuInput = document.getElementById('ngayChieu');
  const hinhAnhInput = document.getElementById('hinhAnh');
  const rapChieuInput = document.getElementById('rapChieu');


  // Kiểm tra và tạo đối tượng phim mới
  const tenPhim = tenPhimInput.value.trim();
  const soLuongVe = parseInt(soLuongVeInput.value);
  const ngayChieu = ngayChieuInput.value;
  const hinhAnh = hinhAnhInput.value.trim();
  const rapChieu = rapChieuInput.value.trim();

  if (tenPhim === '' || rapChieu === '' || isNaN(soLuongVe) || hinhAnh === '') {
    alert('Vui lòng nhập đầy đủ thông tin phim!');
    return;
  }
  if (phimDangSua) {
    // Nếu đang sửa phim, cập nhật thông tin phim
    suaPhim(phimDangSua.id, {
      tenPhim: tenPhim,
      rapChieu: rapChieu,
      ngayChieu: ngayChieu,
      soLuongVe: soLuongVe,
      hinhAnh: hinhAnh
    });

    phimDangSua = null; // Đặt lại phim đang sửa thành null
    formPhim.reset(); // Reset form
    alert('Sửa dữ liệu phim thành công!');
  } else {
    const phimMoi = {
      id: danhSachPhim.length + 1, // ID tăng dần, có thể tạo theo logic khác
      tenPhim: tenPhim,
      rapChieu: rapChieu,
      ngayChieu: ngayChieu,
      soLuongVe: soLuongVe,
      hinhAnh: hinhAnh
    };

    themPhim(phimMoi);
    alert('Thêm phim mới thành công!');
    // Reset các trường nhập
    formPhim.reset();
  }
});

hienThiDanhSachPhim();

// Hàm để hiển thị dữ liệu danh sách phim
