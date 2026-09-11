import DiaDiem1 from "./components/DiaDiem1";
import DiaDiem2 from "./components/DiaDiem2";
import DiaDiem3 from "./components/DiaDiem3";

function App() {
  const soLuongDiaDiem = 3;
  const trangThaiMoCua = true;

  return (
    <div className="trang-chu" style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Danh sách địa điểm — phu-xuan-react</h1>
      <p>Tổng số địa điểm: {soLuongDiaDiem}</p>
      <p>
        Trạng thái: {trangThaiMoCua ? "Đang mở cửa" : "Đã đóng cửa"}
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