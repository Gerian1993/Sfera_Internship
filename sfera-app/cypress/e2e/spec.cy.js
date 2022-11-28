describe('Login Test', () => {
  it('Vse Ok', () => {
    cy.visit("/")
    cy.get('img[class="subMenuImg"').click()
    // cy.get('li[class="Special_menu_liqt3h5"').click()
    cy.get('input[id="email"]').type('kritskii.ilia@gmail.com')
    cy.get('input[id="password"]').type('dfsgkjsdgh')
    cy.get('button[type="submit"]').click()
    cy.get('h1').contains('Hello')
  })
})

describe('Google Test', () => {
  it('Vse Ok', () => {
    cy.visit("/")
    cy.get('div[role="button"]').click()
  })
})