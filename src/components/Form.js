const h = require('react-hyperscript')

module.exports = _ => h('section.form', [
  h('h2.f4.white', 'Add News'),
  h('form', [
    h('div.pb2', [
      h('label.mr1', 'Title'),
      h('input')
    ]),
    h('div.pb2', [
      h('label.mr1', 'Link'),
      h('input')
    ]),
    h('div.tr', [
      h('button', 'Add News')
    ])
  ])
])
