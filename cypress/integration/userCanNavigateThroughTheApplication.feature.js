describe('user can navigate the app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('to About me tab and it', () => {
    beforeEach(() => {
      cy.get('[data-cy="about-tab"]').click()
    })

    it('displays About Me header', () => {
      cy.get('[data-cy="about-header"]').should('contain', 'Kyungin Na')
    })

    it('displays component name in url', () => {
      cy.url().should('contain', 'about')
    })

    it('does not display My Projects header', () => {
      cy.get('[data-cy="projects-header"]').should('not.exist')
    })

    it('does not display Home header', () => {
      cy.get('[data-cy="home-container"]').should('not.exist')
    })
  })

  describe('to My Projects tab and it', () => {
    beforeEach(() => {
      cy.get('[data-cy="projects-tab"]').click()
    })

    it('displays My Projects header', () => {
      cy.get('[data-cy="projects-header"]').should('contain', 'Featured Projects')
    })

    it('displays component name in url', () => {
      cy.url().should('contain', 'projects')
    })

    it('does not display About Me header', () => {
      cy.get('[data-cy="about-header"]').should('not.exist')
    })

    it('does not display Home header', () => {
      cy.get('[data-cy="home-container"]').should('not.exist')
    })
  })

  describe('back to Home tab and it', () => {
    beforeEach(() => {
      cy.get('[data-cy="about-tab"]').click()
      cy.get('[data-cy="home"]').click()
    })

    it('displays welcome', () => {
      cy.get('[data-cy="home-container"]').should('contain', 'Hej!')
    })

    it('displays correct url', () => {
      cy.url().should('not.contain', 'projects').and('not.contain', 'about')
    })

    it('does not display About Me header', () => {
      cy.get('[data-cy="about-header"]').should('not.exist')
    })

    it('does not display My Projects header', () => {
      cy.get('[data-cy="projects-header"]').should('not.exist')
    })
  })
})
