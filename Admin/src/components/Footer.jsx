
const Footer = ({ img }) => {
  return (
    <div className="bg-black h-fit flex justify-between items-center text-white p-5 text-xs">
      <img src={`/imgs/${img}`} alt="brand" width={120} />
      <p>Admin PostIT©2024</p>
    </div>
  )
}

export default Footer;