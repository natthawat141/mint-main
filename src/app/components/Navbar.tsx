import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';

export const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTogglePopup = () => setShowPopup(!showPopup);
  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected account:', accounts[0]);
        setShowPopup(false);
      } catch (error) {
        console.error('MetaMask connection error:', error);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full transition-all duration-300 backdrop-blur-md bg-darkblue/80 shadow-lg z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* โลโก้และชื่อ */}
        <div className="flex items-center">
          <img src="/img/logow.png" alt="Bullmoon Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <h1 className="text-starlight font-bold ml-2 text-lg md:text-2xl md:ml-4">Bullmoon</h1>
        </div>

        {/* ตัวเลือกภาษาและปุ่ม Connect Wallet สำหรับหน้าจอใหญ่ */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {/* ตัวเลือกภาษา */}
          <div className="relative">
            <select
              value={language}
              onChange={(e) => toggleLanguage(e.target.value)}
              className="bg-transparent border border-starlight text-starlight p-2 pr-5 rounded-md cursor-pointer hover: hover:text-white transition-colors duration-300 "
            >
              <option value="en">English</option>
              <option value="th">ภาษาไทย</option>
            </select>
          </div>

          {/* ปุ่ม Connect Wallet */}
          <div className="relative">
  <button
    onClick={handleTogglePopup}
    className="bg-white text-darkblue font-bold py-2 px-4 rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition-all whitespace-nowrap"
  >
    {language === 'en' ? 'Connect Wallet' : 'เชื่อมต่อกระเป๋าเงิน'}
  </button>

  {/* Popup Alert */}
  {showPopup && (
    <div className="absolute right-0 mt-2 w-64 bg-darkblue/90 backdrop-blur-lg text-starlight p-4 rounded-lg shadow-lg z-50">
      <h2 className="text-lg font-bold mb-4">
        {language === 'en' ? 'Select Wallet' : 'เลือกกระเป๋าเงิน'}
      </h2>
      <div className="space-y-2">
        <div
          className="flex items-center space-x-2 cursor-pointer p-2 bg-cosmicBlue/20 rounded-md hover:bg-cosmicBlue/40 transition-colors duration-300"
          onClick={connectMetaMask}
        >
          <img src="/img/metamask.png" alt="MetaMask" className="w-6 h-6" />
          <span>MetaMask</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer p-2 bg-cosmicBlue/20 rounded-md hover:bg-cosmicBlue/40 transition-colors duration-300">
          <img src="/img/coinbase.png" alt="Coinbase" className="w-6 h-6" />
          <span>Coinbase Wallet</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer p-2 bg-cosmicBlue/20 rounded-md hover:bg-cosmicBlue/40 transition-colors duration-300">
          <img src="/img/wallet.png" alt="Other Wallets" className="w-6 h-6" />
          <span>{language === 'en' ? 'Other Wallets' : 'กระเป๋าเงินอื่นๆ'}</span>
        </div>
      </div>
    </div>
  )}
</div>


        </div>

        {/* ปุ่มเมนูสำหรับมือถือ */}
        <button
          className="block md:hidden text-starlight focus:outline-none"
          onClick={handleToggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* เมนูสำหรับมือถือ */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <select
            value={language}
            onChange={(e) => toggleLanguage(e.target.value)}
            className="w-full bg-transparent border border-starlight text-starlight p-2 rounded-md cursor-pointer"
          >
            <option value="en">English</option>
            <option value="th">ภาษาไทย</option>
          </select>
          <button
            onClick={handleTogglePopup}
            className="w-full bg-gradient-to-r from-cosmicBlue to-galaxyTeal text-starlight font-bold py-2 px-4 rounded-md hover:opacity-80 transition-all"
          >
            {language === 'en' ? 'Connect Wallet' : 'เชื่อมต่อกระเป๋าเงิน'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
