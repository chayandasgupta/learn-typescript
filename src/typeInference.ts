const user = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  age: 25,
  score: 90,
};

/**
 * Logs the details of a user object to the console.
 *
 * @param inputUser - An object representing a user, containing fields such as id, firstName, lastName, age, and score.
 */

function printUser(inputUser: typeof user) {
  console.log("user", inputUser);
}

// Example without type inference
function validateForm(formData: {
  email: string;
  age: number;
  isAdmin: boolean;
}) {
  const email: string = formData.email;
  const age: number = formData.age;
  const isAdmin: boolean = formData.isAdmin;

  if (email.includes("@") && age >= 18) {
    return true;
  }

  return false;
}

// Example with type inference
function validateForm2(formData: {
  email: string;
  age: number;
  isAdmin: boolean;
}) {
  const { email, age, isAdmin } = formData;
  return email.includes("@") && age >= 18;
}
