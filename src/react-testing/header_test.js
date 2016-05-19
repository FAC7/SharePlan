const React = require('react/addons')
require('react-test-utils')

const test = require('tape')
const ReactTestUtils = React.addons.ReactTestUtils
const Header = require('../js/components/Header.js')

test('Header component', (t) => {
  const header = <Header test='testing' />
  ReactTestUtils.renderIntoDocument(header)
  t.equal(header.props.test, 'testing', 'Test prop exists')
  t.end()
})
