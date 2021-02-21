describe('Portfolio interface', () => {
  it('successfully renders', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#header').should('contain', 'Home')
    cy.get('#home').should('contain', 'Welcome!')
  })
})
