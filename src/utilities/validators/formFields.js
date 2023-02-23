export function required(value) {
  return value ? undefined : "Field is required";
}

export const shouldError = (values) => {
  console.log("formValues", values);
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Please enter a first name";
  }

  if (!values.lastName) {
    errors.lastName = "Please enter a last name";
  }

  if (!values.email) {
    errors.email = "Please enter email";
  }

  if (!values.password) {
    errors.password = "please enter password";
  }

  return errors;
};
