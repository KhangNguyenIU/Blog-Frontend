module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'nunito-sans' :['Nunito' ,'sans'],
      'nunito-serif' :['Nunito' ,'sans-serif'],
      'hina-sans' :['Hina Mincho','sans'],
      'hina-serif' :['Hina Mincho','sans-serif'],
      'lora-sans':['Lora','sans'],
      'lora-serif':['Lora','sns-serif'],
    }
  },
  plugins: [],
}