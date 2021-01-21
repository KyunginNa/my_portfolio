describe('User can see list of projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#projects-tab').click()
  })

  it('displays the first project', () => {
    cy.get('#project-1').within(() => {
      cy.get('.image').should('exist')
      cy.get('.header').should('contain', 'My First Website')
      cy.get('.meta').should('contain', 'HTML|CSS|JavaScript')
      cy.get('.description').should(
        'contain',
        'The first website I built with HTML,CSS and JS. It is my personal website to introduce myself.'
      )
      cy.get('#urlIcon-1').should('exist')
      cy.get('#gitIcon-1').should('exist')
    })
  })

  it('displays the second project', () => {
    cy.get('#project-2').within(() => {
      cy.get('.image').should('exist')
      cy.get('.header').should('contain', 'Address Book')
      cy.get('.description').should(
        'contain',
        "A single page web application for saving and viewing contacts. Contacts are saved in the user's local storage. Practiced TDD using Cypress."
      )
      cy.get('.meta').should('contain', 'HTML|CSS|JavaScript|Cypress')
      cy.get('#urlIcon-2').should('exist')
      cy.get('#gitIcon-2').should('exist')
    })
  })

  it('displays the third project', () => {
    cy.get('#project-3').within(() => {
      cy.get('.image').should('exist')
      cy.get('.header').should('contain', 'Library')
      cy.get('.description').should(
        'contain',
        'A backend program built with Ruby. It allows users to borrow and return books from a virtual library. The data of books a library has is stored in a YAML file. Practiced TDD using RSpec.'
      )
      cy.get('.meta').should('contain', 'Ruby|RSpec|YAML')
      cy.get('#urlIcon-3').should('not.be.visible')
      cy.get('#gitIcon-3').should('exist')
    })
  })
})
