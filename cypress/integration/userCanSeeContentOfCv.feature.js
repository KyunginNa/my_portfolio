describe("user can see content of CV", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.get("#cv-tab").click()
    })

    it(("displays the header"), () => {
        cy.get("#cv-header").should("contain", "Kyungin Na")
            .and("contain", "Craft Academy Student")
            .and("contain", "Consultant")
    })

    it(("displays the summary"), () => {
        cy.get("#cv-summary").should("contain", "A former IT consultant with 2+ years experience in a global IT consulting company.")
    })
        
    it("displays the experience", () => {
        cy.get("#experience-1").should("contain", "Business Analyst")
            .and("contain", "Accenture")
        cy.get("#cv-exp-responsibility-list").should("contain", "Analyzed business process.")
            .and("contain", "Defined business requirements and designed applications.")
            .and("contain", "Supported user acceptance tests.")
            .and("contain", "Managed release of applications.")
        cy.get("#cv-exp-achievement-list").should("contain", "Assisted IT manager in planning product releases")
        .and("contain","Automated analysis and report of daily work progress by building Tableau dashboards")
    })

    it(("displays the education"), () => {
        cy.get("#education-1").should("contain", "Kyoto University")
            .and("contain", "Bachelor of Science in Business and Economics")
        cy.get("#education-2").should("contain", "Nanyang")
            .and("contain", "Exchange student")
    })

    it(("displays the skills"), () => {
        cy.get("#cv-skills-header").should("contain", "Skills")
        cy.get("#cv-skills-list").should("contain", "Business Requirements Analysis")
            .and("contain", "Application Architectures")
            .and("contain", "Release Management")
            .and("contain", "Business Process Improvement")
            .and("contain", "Data Visualization Tool")
            .and("contain", "Programming languages")
            .and("contain", "Testing Frameworks")
    })
    it(("displays the languages"),() => {
        cy.get("#cv-languages-header").should("contain", "Languages")
        cy.get("#cv-languages-list").should("contain", "Korean")
            .and("contain", "Japanese")
            .and("contain", "English")
    })
   
    it(("displays contact"), () => {
        cy.get("#cv-contact-header").should("contain", "Contact")
        cy.get("#cv-contact-list").should("contain", "nakyungin93@gmail.com")
        .and("contain", "https://kyungin-portfolio.netlify.app")
        .and("contain", "Erik Dahlbergsgatan 39")
    })
})