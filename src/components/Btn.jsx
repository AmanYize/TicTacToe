// Btn.js

const Btn = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full h-[100px] md:h-[120px] lg:h-[150px] flex items-center justify-center text-5xl font-bold text-white bg-gray-800 border-4 border-gray-600 hover:bg-gray-700 disabled:bg-gray-600 transition duration-200"
    >
      {text}
    </button>
  );
};

export default Btn;
