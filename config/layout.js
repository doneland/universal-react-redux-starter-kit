// Default Helmet props
export default Object.freeze({
  htmlAttributes: {lang: 'en'},
  title: 'Title',
  defaultTitle: 'Default Title',
  titleTemplate: '%s - React Redux Starter Kit',
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'}
  ],
  link: [
    {rel: 'shortcut icon', href: '/favicon.ico'},
    {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'}
  ],
  script: [],
  style: []
})
