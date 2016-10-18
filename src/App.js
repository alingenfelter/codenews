const h = require('react-hyperscript')
const React = require('react')

var items = [{ id: 1,
    title: 'JavaScript Fatigue',
    link: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.qtciu77bd',
    score: 0
}, { id: 2,
    title: 'Ninjas are Awesome',
    link: 'http://www.realultimatepower.net/index4.htm',
    score: 0
}]

const Header = require('./components/Header.js')
const List = require('./components/List.js')
const Form = require('./components/Form.js')

module.exports = React.createClass({
  getInitialState: _ => ({items}),
  scoreChanged: function (item) {
    this.setState({items})
  },
  render() {
    return h('div.pa4.bg-blue.vh-100', [
     h(Header, { title: "Code News!"}),
     h('main', [
       h(List, { items:this.state.items,
         onScoreChange: this.scoreChanged
       }),
       h(Form)
     ])
    ])
  }
})
