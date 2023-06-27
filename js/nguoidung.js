function hienThiDanhSachPhimWeb() {
  const danhSachPhimDiv = document.getElementById('danhSachPhim');
  danhSachPhimDiv.innerHTML = '';

  danhSachPhim.forEach((phim) => {
    const phimCard = document.createElement('div');
    phimCard.classList.add('phim-card');
    const hinhAnh = document.createElement('img');
    hinhAnh.src = phim.hinhAnh;
    hinhAnh.style.width = '100%';
    phimCard.appendChild(hinhAnh);

    const tenPhim = document.createElement('h3');
    tenPhim.textContent = phim.tenPhim;
    phimCard.appendChild(tenPhim);

    const rapChieu = document.createElement('p');
    rapChieu.textContent = 'Rạp chiếu: ' + phim.rapChieu;
    phimCard.appendChild(rapChieu);

    const ngayChieu = document.createElement('p');
    ngayChieu.textContent = 'Ngày chiếu: ' + phim.ngayChieu;
    phimCard.appendChild(ngayChieu);

    const soLuongVe = document.createElement('p');
    soLuongVe.textContent = 'Số lượng vé: ' + phim.soLuongVe;
    phimCard.appendChild(soLuongVe);

    const xemButton = document.createElement('button');
    xemButton.textContent = 'Xem chi tiết';
    xemButton.classList.add('btn', 'btn-primary');
    xemButton.addEventListener('click', () => {
      hienThiPhimLenForm(phim);
    });
    phimCard.appendChild(xemButton);
    danhSachPhimDiv.appendChild(phimCard);
  });
}
hienThiDanhSachPhimWeb()