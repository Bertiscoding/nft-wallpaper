import { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      midnight: '#0C0A1D',
      steel: '#1F1D2F',
      clay: '#36344B',
      lavender: '#8682B1',
      smokey: '#6F6D8A',
      // royal: '#6F4CFF 0%, #432E99 100%',
      // funky: '#FF00A8 0%, #00E0FF 100%',
      },
      fontSize: {
        'display-lg': ['64px', {
          lineHeight: '72px',
          fontWeight: '700', 
        }],
        'display-md': ['48px', {
          lineHeight: '64px',
          fontWeight: '700', 
        }],
        'display-sm': ['40px', {
          lineHeight: '48px',
          fontWeight: '700', 
        }],
        'title-lg': ['32px', {
          lineHeight: '40px',
          fontWeight: '700', 
        }],
        'title-md': ['28px', {
          lineHeight: '36px',
          fontWeight: '700', 
        }],
        'title-sm': ['24px', {
          lineHeight: '32px',
          fontWeight: '700', 
        }],
        'body-lg': ['24px', {
          lineHeight: '32px',
          fontWeight: '300', 
        }],
        'body-md': ['20px', {
          lineHeight: '28px',
          fontWeight: '300', 
        }],
        'body-sm': ['16px', {
          lineHeight: '24px',
          fontWeight: '300', 
        }],
        'caption-lg': ['14px', {
          lineHeight: '20px',
          fontWeight: '300', 
        }],
        'caption-md': ['12px', {
          lineHeight: '16px',
          fontWeight: '300', 
        }],
        'caption-sm': ['10px', {
          lineHeight: '12px',
          fontWeight: '300', 
        }],
      }
    }
  }
}
export default config
