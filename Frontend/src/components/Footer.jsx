const Footer = () => {
  return (
    <div className="h-fit flex bg-black justify-between px-4 py-6 text-white">
      <div className="flex flex-col w-1/3 gap-1 h-full text-xs">
        <img src="/imgs/logo.png" alt="logo" width={90} />
        <p>
          At PostIT, we understand that your parcels carry more than just items
          - They carry your love, your plans, your trust and much more.
        </p>
        <p>📱 +15148141782</p>
        <p>📧 info@posit.com</p>
      </div>
      <div className="h-full flex flex-col justify-center text-xs">
        <p>Developed By Ecclesia Ops</p>
        <p>© 2024</p>
      </div>
    </div>
  );
};

export default Footer;
