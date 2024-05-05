// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// // isPhoneNumber Tests - True
// test('phone number is (555) 555-5555', () => {
//   expect(isPhoneNumber('(555) 555-5555')).toBe(true);
// });

// // isPhoneNumber Tests - True
// test('phone number is (111)111-1111', () => {
//   expect(isPhoneNumber('(111)111-1111')).toBe(true);
// });


// // isPhoneNumber Tests - false
// test('phone number is (55) 5555555', () => {
//   expect(isPhoneNumber('(55) 5555555')).toBe(false);
// });

// // isPhoneNumber Tests - false
// test('phone number is 143455555905', () => {
//   expect(isPhoneNumber('143455555905')).toBe(false);
// });

//--------------------------------------------------------------------------------

//isEmail Tests - true
test('email is ay@rocket.com', () => {
  expect(isEmail('ay@rocket.com')).toBe(true);
});

//isEmail Tests - true
test('email is rawr@rawr.com', () => {
  expect(isEmail('rawr@rawr.com')).toBe(true);
});

//isEmail Tests - false
test('email is ay at rocket dot com', () => {
  expect(isEmail('ayrocketcom')).toBe(false);
});

//isEmail Tests - false
test('email is wow@', () => {
  expect(isEmail('wow@')).toBe(false);
});

// --------------------------------------------------------------------------------
//isStrongPassword Tests - true
test('password is abcd', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});

//isStrongPassword Tests - true
test('password is a12_BcDe3', () => {
  expect(isStrongPassword('a12_BcDe3')).toBe(true);
});

//isStrongPassword Tests - false
test('password is 1ad', () => {
  expect(isStrongPassword('1ad')).toBe(false);
});

//isStrongPassword Tests - false
test('password is aaaaaaaa@aaaaaaa', () => {
  expect(isStrongPassword('aaaaaaaa@aaaaaaa')).toBe(false);
});
// --------------------------------------------------------------------------------

//isDate Tests - true
test('Date is 1/2/3456', () => {
  expect(isDate('1/2/3456')).toBe(true);
});

//isDate Tests - true
test('Date is 01/02/0304', () => {
  expect(isDate('01/02/0304')).toBe(true);
});

//isDate Tests - false
test('Date is 111/1/1111', () => {
  expect(isDate('111/1/1111')).toBe(false);
});

//isDate Tests - false
test('Date is ///', () => {
  expect(isDate('///')).toBe(false);
});


