export function generateUser() {
  const ts = Date.now();
  return {
    name:      `Teste Auto ${ts}`,
    email:     `teste.auto.${ts}@testmail.com`,
    password:  'Test@12345',
    firstName: 'Teste',
    lastName:  'Auto',
    company:   'QA Corp',
    address:   'Rua dos Testes, 123',
    country:   'India',
    state:     'Maharashtra',
    city:      'Mumbai',
    zipcode:   '400001',
    mobile:    '11999999999',
    day:       '10',
    month:     '6',
    year:      '1990',
  };
}

export const paymentData = {
  nameOnCard:  'Teste Auto',
  cardNumber:  '4111111111111111',
  cvc:         '123',
  expiryMonth: '12',
  expiryYear:  '2027',
};
