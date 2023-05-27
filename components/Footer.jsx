const Footer = () => {
  return (
    <footer className="sticky top-[100vh] border-t-4 border-dashed border-[#2C1E95] bg-[#384e96] text-center">
      <div className="flex justify-around p-4 text-sm text-black sm:uppercase lg:text-base">
        <div className="border-r-2 border-solid border-black px-2 md:border-none">
          Abhinay Sharma
        </div>
        <div className="border-r-2 border-solid border-black px-2 md:border-none">
          Avneesh Srivastava
        </div>
        <div className="border-r-2 border-solid border-black px-2 md:border-none">
          Ayush Chaturvedi
        </div>
        <div className="border-r-2 border-solid border-black px-2 md:border-none">
          Bhuiyash Kumar
        </div>
        <div className="px-2">Faiz Alam</div>
      </div>
    </footer>
  );
};

export default Footer;
