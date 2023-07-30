export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "This field shouldn't empty",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "Number is out of limit",
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: "Incorrect email",
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
  message: "Password shoud contain one number and one character",
});