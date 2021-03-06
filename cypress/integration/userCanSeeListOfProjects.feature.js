describe('User can see list of projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      cy.get('[data-cy="projects-tab"]').click()
  })

  it('displays the first project', () => {
    cy.get('#project-1').within(() => {
      cy.get('.header').should('contain', 'TuneShare')
    })
  })

  it('displays the second project', () => {
    cy.get('#project-2').within(() => {
      cy.get('.header').should('contain', 'Kitty News')
    })
  })

  it('displays the last project', () => {
    cy.get('#project-6').within(() => {
      cy.get('.header').should('contain', 'Cooper Test')
    })
  })
})
