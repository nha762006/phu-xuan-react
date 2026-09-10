function Footer() {
  const namHienTai = new Date().getFullYear()

  return (
    <footer>
      <p>
        © {namHienTai} phu-xuan-react &nbsp;·&nbsp;
        Trường Đại học Phú Xuân &nbsp;·&nbsp; INT.7.18
      </p>
    </footer>
  )
}

export default Footer