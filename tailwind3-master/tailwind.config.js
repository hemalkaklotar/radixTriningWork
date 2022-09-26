module.exports = {
  content: ["./src/**/*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
    container: {
      center: true,
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
