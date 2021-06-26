const types = {
  atom: { name: 'atoms', path: 'components/atoms/'},
  pattern: { name: 'patterns', path: 'components/patterns/'},
  screen: { name: 'screens', path: 'screens/'},
}
module.exports = {
  helpers: {
    getTypePath: (type = 'atom') => {
      return types[type].path;
    },
    getType: (type = 'atom') => {
      return types[type].name;
    }
  }
}