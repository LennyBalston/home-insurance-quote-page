import React from 'react'
import { mount } from '@cypress/react'
import App from './App'

import data from './db.json';

const quote = data.quote[0];
const addons = data.addons;

describe('App tests', () => {
  beforeEach(() => {
    mount(<App />)
    console.log(data);
  })


  describe('test the header', () => {
    it('renders the logo', () => {
      cy.get('img').should('include', /logo/i)
    })
  })


  describe('test quote component', () => {

    it('renders the quote reference', () => {
      cy.get('[data-test="quote-ref"]')
        .should('contain', process.env.REACT_APP_QUOTE_REF_LABEL)
        .and('contain', quote.quoteRef)
    })

    it('renders the monthly price', () => {
      cy.get('[data-test="quote-price"]')
        .should('contain', quote.monthlyPrice)
    })

    it('switches to yearly price', () => {
      cy.get('[data-test="switch-payment-terms"]').should('contain.text', process.env.REACT_APP_QUOTE_PRICE_SWITCH_YEAR)
        .click()
        .should('contain.text', process.env.REACT_APP_QUOTE_PRICE_SWITCH_MONTH)
    })

    it('renders the yearly price', () => {
      cy.get('[data-test="quote-price"]')
        .should('contain', quote.annualPrice)
    })
  })


  describe('test add-ons component', () => {


    it('displays yearly add-on prices', () => {
      cy.get('[data-test="addon-price"]').first()
        .should('contain', process.env.REACT_APP_ANNUAL_PRICE_SUFFIX)
        .and('contain', addons[0].annualPrice)
    })

    it('renders button to switch to monthly', () => {
      cy.get('[data-test="switch-payment-terms"]').should('contain.text', process.env.REACT_APP_QUOTE_PRICE_SWITCH_MONTH)
    })

    it('clicking the button should toggle to the monthly add-on price', () => {
      cy.get('[data-test="switch-payment-terms"]').should('contain.text', process.env.REACT_APP_QUOTE_PRICE_SWITCH_MONTH)
        .click().then(() => {

          cy.get('[data-test="addon-price"]').first()
            .should('contain', process.env.REACT_APP_MONTHLY_PRICE_SUFFIX)
            .and('contain', addons[0].monthlyPrice)
        })
    })

    it('selecting a addon should increase the quote price', () => {
      cy.get('[data-test="addon-toggle"]').first()
        .should('contain', process.env.REACT_APP_ADDONS_SELECT)
        .click()
        .then(() => {
          cy.get('[data-test="quote-price"]')
            .should('contain',
              (quote.monthlyPrice + addons[0].monthlyPrice).toFixed(2))
        })
    })

    it('removing a addon should decrease the quote price', () => {
      cy.get('[data-test="addon-toggle"]').first()
        .should('contain', process.env.REACT_APP_ADDONS_REMOVE)
        .click()
        .then(() => {
          cy.get('[data-test="quote-price"]')
            .should('contain',
              (quote.monthlyPrice).toFixed(2))
        })
    })

  })




})

