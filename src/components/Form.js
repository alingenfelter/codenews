const h = require('react-hyperscript')
const React = require('react')

module.exports = React.createClass({
  getInitialState: _ => ({
    title: '',
    link: '',
    score: 1 }),
  setTitle: function (e) {
    this.setState({
      title: e.target.value,
      link: this.state.link,
      score: this.state.score
    })
  },
  setLink: function (e) {
    this.setState({
      title: this.state.title,
      link: e.target.value,
      score: this.state.score
    })
  },
  submit: function (e) {
    e.preventDefault()
    this.props.addNewsItem(this.state)
    this.setState({
      score: 1,
      title: '',
      link: '' })
  },

  render: function () {
    return (
      h('section.form', [
        h('h2.f4.white', 'Add News'),
        h('form', {onSubmit: this.submit}, [
          h('div.pb2', [
            h('label.mr1', 'Title'),
            h('input', {
              onChange: this.setTitle,
              value: this.state.title})
          ]),
          h('div.pb2', [
            h('label.mr1', 'Link'),
            h('input', {
              onChange: this.setLink,
              value: this.state.link})
          ]),
          h('div.tr', [
            h('button', 'Add News')
          ])
        ])
      ])
    )
  }
})
