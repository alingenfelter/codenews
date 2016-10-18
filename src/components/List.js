const h = require('react-hyperscript')

const ListItem = require('./ListItem')

const List = props => h('section.list', [
  h('ul', props.items.map(item =>
    h(ListItem, { item, onScoreChange: props.onScoreChange })
  ))
])
module.exports = List
