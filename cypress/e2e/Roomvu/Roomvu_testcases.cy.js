/// <reference types="cypress" />

context('Roomvu QA test', () => {
  beforeEach(() => {
  })

  it('Testcase #1 Finding h1 tag contains Kitchen Sink', () => {
    cy.visit('https://example.cypress.io/')
    //  Find all h1 tag that contains Kitchen sink clause
    cy.get('h1').contains('Kitchen Sink');
  })


  it('Testcase #2 Click on the ‘type’ word in this page and check whether the new URL\n' +
    'contains ‘/commands/action', () => {
    // At first step the type link must be found and then click after that the current url must be checked
      cy.contains('type').click()
      cy.url().should('include', '/commands/action')
    })

  it('Testcase #3  Fill input that has the ‘action-email’ CSS class and type your email\n' +
    'address and check whether this input has this value or not', () => {

    //In this command, . (dot) is used as a prefix to class inside cy.get()
    cy
      .get('.action-email')
      .type('vh.mriacle2200@gamil.com')
      .should('have.value', 'vh.mriacle2200@gamil.com')
      })


  it('Testcase #4 Send a ‘GET’ request to the ‘https://jsonplaceholder.typicode.com/\n' +
    'todos\' URL and check whether the response body contains these keys in\n' +
    'the first object or not:\n' +
    '- userId\n' +
    '- id\n' +
    '- title\n' +
    '- completed', () => {
    cy.request('https://jsonplaceholder.typicode.com/todos').then((response) => {

     // Parse JSON the body.
    const new_response = JSON.stringify(response.body)
    console.log(JSON.parse(new_response));
    let body = JSON.parse(new_response)
    cy.log(body)

    // Create a variable as a flag for finding frist element
    let loop_index = 0

    body.forEach(function (item) {
        cy.then(() => {

          // Check the index of loop and check if the index is 1 we can exit from loop
          if (loop_index == 1)
            return false

          // Ensure certain keys are present in the first element
          expect(item).to.have.all.keys('userId', 'id', 'title', 'completed');
          loop_index++
        }
    )});

  })
  })

  it('Testcase #5 Send a ‘POST’ request to ‘https://jsonplaceholder.typicode.com/todos\'\n' +
    'and check whether the response HTTP status code is 201 or not. Request\n' +
    'body:\n' +
    '- title: ‘foo’\n' +
    '- body: ‘bar’\n' +
    '- userId: 1', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/todos', { title: 'foo', body: 'bar' ,userId: '1' }).then(
    (response) => {
      expect(response.status).to.eq(201)
    }
    )
  })

})
