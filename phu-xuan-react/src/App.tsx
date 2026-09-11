import DiaDiem1 from "./components/DiaDiem1";
import DiaDiem2 from "./components/DiaDiem2";
import DiaDiem3 from "./components/DiaDiem3";
import { NhanTrangThai, demTongSoDiaDiem } from "./components/TienIch";

function App() {
  const danhSachTen = ["Đại Nội Huế", "Chợ Đông Ba", "Cầu Tràng Tiền"];
  const gioHienTaiLa8Gio = true; // Đổi thành false để kiểm tra trạng thái đóng cửa

  return (
    <div className="trang-chu" style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Danh sách địa điểm — phu-xuan-react</h1>
      <p>
        Tổng số địa điểm: {demTongSoDiaDiem(danhSachTen)}{" "}
        — <NhanTrangThai dangMoCua={gioHienTaiLa8Gio} />
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <DiaDiem1 />
        <DiaDiem2 />
        <DiaDiem3 />
      </div>
    </div>
  );
}

export default App;