// Named export #1: Component hiển thị nhãn trạng thái
export function NhanTrangThai({ dangMoCua }: { dangMoCua: boolean }) {
  return (
    <span style={{ color: dangMoCua ? "green" : "crimson", fontWeight: "bold" }}>
      {dangMoCua ? "● Đang mở cửa" : "● Đã đóng cửa"}
    </span>
  );
}

// Named export #2: Hàm JavaScript thuần đếm tổng số địa điểm
export function demTongSoDiaDiem(danhSach: string[]): number {
  return danhSach.length;
}