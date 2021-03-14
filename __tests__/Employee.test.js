//imports our test function
const Employee = require("../lib/Employee");

// test + what the function is doing
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  // expect function instead of (if,else)
  expect(typeof(e)).toBe("object");
});

  // POSITIVE TEST
test("Can set name via constructor arguments", () => {

  //1/ ARRANGE/ sets up the values that will be passed in and returned 
  const name = "Alice";

  //2/ ACT/ call the function that we're testing
  const e = new Employee(name);

  //3/ ASSERT/ check to make sure that the function acted as we expected
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
