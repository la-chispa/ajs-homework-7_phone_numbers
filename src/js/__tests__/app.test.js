import Validator from '../app';

test('#0', () => {
  const phoneNumber = new Validator('8 (927) 000-00-00');
  const result = phoneNumber.validateFormatPhone();

  expect(result).toBe('+79270000000');
});

test('#1', () => {
  const phoneNumber = new Validator('+7 960 000 00 00');
  const result = phoneNumber.validateFormatPhone();

  expect(result).toBe('+79600000000');
});

test('#2', () => {
  const phoneNumber = new Validator('+86 000 000 0000');
  const result = phoneNumber.validateFormatPhone();

  expect(result).toBe('+860000000000');
});

test('#3', () => {
  const phoneNumber = new Validator('+7-777-1-000-261');
  const result = phoneNumber.validateFormatPhone();

  expect(result).toBe('+77771000261');
});

test('#4', () => {
  const phoneNumber = new Validator('+90 536 611 33 87');
  const result = phoneNumber.validateFormatPhone();

  expect(result).toBe('+905366113387');
});
