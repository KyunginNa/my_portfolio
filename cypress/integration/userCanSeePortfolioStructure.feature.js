describe('Portfolio interface', () => {
  it('successfully renders', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="home"]').should('contain', 'Home')
    cy.get('[data-cy="home-container"]').should('contain', 'Hej')
  })
})
