describe('user can see content of About Me', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="about-tab"]').click()
  })
  it('displays basic information', () => {
    cy.get('[data-cy="about-basic"]').within(() => {
      cy.get('.image').should('exist')
      cy.get('p').should('contain', 'I enjoy learning new things')
    })
  })

  it('displays background information', () => {
    cy.get('[data-cy="about-back"]').within(() => {
      cy.get('p').should('contain', 'I was born and raised in South Korea.')
    })
  })

  it('displays skills', () => {
    cy.get('[data-cy="about-skills"]').within(() => {
      cy.contains('Development').should('exist')
      cy.contains('Testing').should('exist')
      cy.contains('Tools').should('exist')
    })
  })

  it('displays hobby', () => {
    cy.get('[data-cy="about-hobby"]').within(() => {
      cy.contains('Yoga').should('exist')
      cy.contains('Interior Design Magazines').should('exist')
      cy.contains('Friends').should('exist')
    })
  })
})
