const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // ถ้ามี src
  ],
  theme: {
    extend: {
      colors: {
        darkSpace: '#0b0c1a', // โทนสีดำลึก
        cosmicBlue: '#1a2b44', // สีน้ำเงินเข้มลึกลับ
        starlight: '#c4c5d9', // สีขาวอมเทา
        galaxyBlue: '#0e1730', // โทนสีน้ำเงินดำ
        moonGray: '#10121a', // โทนเทาเข้ม
        footerBackground: '#0d1018', // สีสำหรับ Footer
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        space: ['"Press Start 2P"', ...fontFamily.sans], // ฟอนต์ธีมอวกาศ
      },
      backgroundImage: {
        'space-pattern': "url('/assets/space-bg.jpg')", // รูปพื้นหลังธีมอวกาศ
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};
