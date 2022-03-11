import React from 'react'
import { mount } from '@cypress/react'
import App from './App'

it('renders learn react link', () => {
  mount(<App />)
  cy.get('img').should('include', /logo/i)
})