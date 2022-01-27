module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'nunito-sans' :['Nunito' ,'sans'],
      'nunito-serif' :['Nunito' ,'serif'],
      'hina-sans' :['Hina Mincho','sans'],
      'hina-serif' :['Hina Mincho','serif'],
      'lora-sans':['Lora','sans'],
      'lora-serif':['Lora','serif'],
    }
  },
  plugins: [],
}