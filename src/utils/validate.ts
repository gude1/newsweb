export function validateEmail(value: string) {
  if (validateFilled(value)) {
    return validateFilled(value);
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return "Enter a valid email address!";
  } else return null;
}

export function validateName(value: string) {
  if (validateFilled(value)) {
    return validateFilled(value);
  }
  if (!/^[a-zA-Z-' ]{3,20}$/i.test(value)) {
    return "Full Name must be between 3-20 characters long";
  } else return null;
}

export function validatePhoneNumber(value: string) {
  if (validateFilled(value)) {
    return validateFilled(value);
  }
  if (!/^[0][7-9][0-1][0-9]{8}$/i.test(value)) {
    return "Enter phone number in this format: 08012345678";
  } else return null;
}

export function validateFilled(value: string, length?: number) {
  if (!value) {
    return "Input is required";
  }
  if (length && value.length < length) {
    return `Input is required and must be atleast ${length} characters long`;
  }
  return null;
}
