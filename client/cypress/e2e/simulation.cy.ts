describe('Simulação de Economia de Energia', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });   

  it('Deve exibir o título corretamente', () => {
    cy.contains('Clarke Energia').should('be.visible');
  });

  it('Deve simular uma economia para cliente de SP com consumo de 3000kWh', () => {
    cy.get('input[type="number"]').type('3000');

    cy.get('select').select('SP');

    cy.get('button[type="submit"]').click();

    cy.contains('Resultados').should('be.visible');

    cy.contains('EcoPower Energia').should('be.visible');

    cy.contains('Economia mensal').should('be.visible');
  });

  it('Deve mostrar mensagem de erro ou vazio para consumo muito baixo', () => {
    cy.get('input[type="number"]').type('100');
    cy.get('button[type="submit"]').click();

    cy.contains('Nenhum fornecedor encontrado').should('be.visible');
  });
});