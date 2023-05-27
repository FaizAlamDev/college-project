const Jumbutron = ({ heading, children }) => {
  return (
    <div className="flex items-center bg-gray-800 py-10">
      <div className="mx-auto w-full max-w-md">
        <h1 className="mb-5 text-center text-2xl font-bold text-white">
          Find {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Jumbutron;
