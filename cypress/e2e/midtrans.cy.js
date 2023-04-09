describe('Demo Midtrans', () => {
    before('Login', () => {
        cy.visit('https://demo.midtrans.com/')
      });
    it('Memastikan Halaman Utama', () => {
        cy.title().should('eq', 'Sample Store')
        cy.get(".buy").click();
    });

    it('Pembayaran', function() {
        cy.get('.cart-checkout').click();
    });
})