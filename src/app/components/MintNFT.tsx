'use client';

import React, { useState, useContext } from 'react';
import { toast } from 'sonner';
import { LanguageContext } from './LanguageContext';
import { Slider } from "@/components/ui/slider";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  confirmText: string;
  cancelText: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, message, confirmText, cancelText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#2A2D3A] rounded-lg p-6 max-w-sm w-full mx-4 border border-[#00BFFF]">
        <p className="text-white text-center mb-6">{message}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-blue-500 transition-colors"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

const MintNFT: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { language } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const pricePerNFT = 0.001; // ETH
  const maxQuantity = 10;

  const handleMint = () => {
    setIsModalOpen(true);
  };

  const confirmMint = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      toast.success(
        language === 'en'
          ? `Minted ${quantity} Bull NFT${quantity > 1 ? 's' : ''}!`
          : `สร้าง ${quantity} Bull NFT${quantity > 1 ? 's' : ''} สำเร็จ!`
      );
    }, 2000);
  };

  const cancelMint = () => {
    setIsModalOpen(false);
    toast.info(language === 'en' ? 'Minting cancelled' : 'ยกเลิกการสร้าง NFT');
  };

  const confirmMessage =
    language === 'en'
      ? `Are you sure you want to mint ${quantity} Bull NFT${quantity > 1 ? 's' : ''}? Total cost: ${(quantity * pricePerNFT).toFixed(3)} ETH`
      : `คุณแน่ใจหรือไม่ที่จะสร้าง ${quantity} Bull NFT${quantity > 1 ? 's' : ''}? ราคารวม: ${(quantity * pricePerNFT).toFixed(3)} ETH`;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/img/image3.webp')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>

      <div className="xl:max-w-[1280px] w-full z-10">
        <section id="mint" className="flex flex-col md:flex-row sm:py-16 py-6">
          <div className="flex flex-1 flex-col items-center justify-between px-6 sm:px-16 xl:px-0">
            <div className="relative mt-10 h-full w-[90%] flex-1 rounded-3xl border-4 border-white bg-white bg-opacity-10 shadow-xl backdrop-blur-md lg:w-[80%] p-6">
              <h1 className="font-poppins font-semibold text-4xl text-white text-center mb-4">
                {language === 'en' ? 'Bullmoon Junior' : 'Bullmoon จูเนียร์'}
              </h1>
              <p className="text-center font-['Fredoka'] text-lg font-medium leading-9 text-white lg:text-2xl mb-6">
                {pricePerNFT} ETH {language === 'en' ? 'For each Bull + gas fee' : 'ต่อ Bull + ค่าธรรมเนียม Gas'}<br />
                ({language === 'en' ? 'Maximum' : 'สูงสุด'} {maxQuantity}{' '}
                {language === 'en' ? 'per transaction' : 'ต่อการทำธุรกรรม'})
              </p>
              <div className="flex flex-col items-center justify-center lg:flex-row mb-6">
                <span className="mr-2 text-center font-['Fredoka'] text-lg font-medium leading-9 text-white lg:mr-10 lg:text-2xl">
                  {language === 'en' ? 'Quantity' : 'จำนวน'}
                </span>
                <div className="w-[60%] lg:w-[40%]">
                  <Slider
                    defaultValue={[1]}
                    max={maxQuantity}
                    step={1}
                    onValueChange={(value) => setQuantity(value[0])}
                  />
                </div>
                <span className="ml-2 text-center font-['Fredoka'] text-lg font-medium leading-9 text-white lg:ml-10 lg:text-2xl">
                  {quantity}/{maxQuantity}
                </span>
              </div>
              <div className="text-center font-['Fredoka'] text-lg font-medium leading-9 text-white lg:text-2xl mb-6">
                {language === 'en' ? 'Total' : 'รวม'} {(quantity * pricePerNFT).toFixed(3)} ETH
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={handleMint}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-2xl transition-transform duration-300 transform hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:from-purple-600 hover:to-blue-500"
                >
                  {language === 'en' ? 'Get Bull' : 'รับ Bull'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={cancelMint}
        onConfirm={confirmMint}
        message={confirmMessage}
        confirmText={language === 'en' ? 'OK' : 'ตกลง'}
        cancelText={language === 'en' ? 'Cancel' : 'ยกเลิก'}
      />
    </div>
  );
};

export default MintNFT;
