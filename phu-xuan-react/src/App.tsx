function App() {
  // 1. Khai báo dữ liệu sinh viên
  const hoTen = "Lê Thị Hồng";
  const maSinhVien = "22CNTT045";
  const diemChuyenCan = 9;
  const diemBaiTap = 8;
  const diemKiemTra = 7.5;
  const daNopBaiTapVeNha = false; // Thử đổi thành true để kiểm tra thay đổi

  return (
    <div className="student-card" style={{ padding: "1.5rem", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>{hoTen}</h2>
      <p>Mã số sinh viên: {maSinhVien}</p>
      
      {/* 2. Nhúng phép toán tính điểm quá trình */}
      <p>
        Điểm quá trình:{" "}
        {diemChuyenCan * 0.2 + diemBaiTap * 0.4 + diemKiemTra * 0.4}
      </p>

      {/* 3. Nhúng điều kiện kiểm tra nộp bài bằng toán tử 3 ngôi */}
      <p style={{ color: daNopBaiTapVeNha ? "green" : "crimson", fontWeight: "bold" }}>
        {daNopBaiTapVeNha
          ? "Đã nộp bài tập về nhà Buổi 3."
          : "Chưa nộp bài tập về nhà Buổi 3 — cần nộp trước Buổi 4!"}
      </p>
    </div>
  );
}

export default App;