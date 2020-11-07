describe("user can see content of About Me", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.get("#about-tab").click()
    })
    it("displays basic information", () => {
        cy.get("#about-basic").within(() => {
            cy.get(".image").should("exist")
            cy.get(".list").should("contain", "Craft Academy").and("contain", "Stockholm").and("contain", "nakyungin93@gmail.com")
            cy.get("#about-basic-passion").should(
                "contain",
                "I have a passion in creating things and solving problems in logical ways, which explains why I fell in love with programming. I aim to be a programmer who makes applications in user-friendly ways."
            )
        })
    })

    it("displays background information", () => {
        cy.get("#about-back").within(() => {
            cy.get(".header").should("contain", "Background")
            cy.get(".icon").should("exist")
            cy.get("#about-back-summary").should(
                "contain",
                "I was born and raised in South Korea."
            )
        })
    })

    it("displays skills", () => {
        cy.get("#about-skills").within(() => {
            cy.get(".header").should("contain", "Skills")
            cy.get(".icon").should("exist")
            cy.get(".grid").should("contain", "Development")
                .and("contain", "Testing Framework")
                .and("contain", "Tools")
            cy.get("#about-skills-dev").should("contain", "HTML5")
                .and("contain", "CSS3")
                .and("contain", "JavaScript")
                .and("contain", "React")
                .and("contain", "Ruby")
            cy.get("#about-skills-test").should("contain", "Cypress")
                .and("contain", "RSpec")
             cy.get("#about-skills-tools").should("contain", "Git")
        })
    })

    it("displays hobby", () => {
        cy.get("#about-hobby").within(() => {
            cy.get(".header").should("contain", "Hobby")
            cy.get(".icon").should("exist")
            cy.get("#about-hobby-yoga").should("contain", "Yoga")
            cy.get("#about-hobby-magazine").should("contain", "Interior Design Magazines")
            cy.get("#about-hobby-friends").should("contain", "Watch Friends")
        })
    })
})
