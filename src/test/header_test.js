var Header = require('../js/components/Header.js')
const test = require('tape')
var ReactTestUtils = require('react-addons-test-utils')
import React from 'react'

test('Header component', (t) => {
  const header = <Header test='testing' />
  ReactTestUtils.renderIntoDocument(header)
  t.equal(header.props.test, 'testing', 'Test prop exists')
  t.end()
})
