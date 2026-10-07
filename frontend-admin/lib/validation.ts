export const validateField = (
  field: string,
  value: string,
  password?: string,
): string => {
  switch (field) {
    case "name":
      if (!value.trim()) {
        return "Name is required";
      }

      if (value.trim().length < 3) {
        return "Name must be at least 3 characters";
      }

      return "";

    case "phone":
      if (!value.trim()) {
        return "Phone number is required";
      }

      if (!/^[2-9]\d{9}$/.test(value)) {
        return "Enter a valid 10-digit phone number";
      }

      return "";

    case "username":
      if (!value.trim()) {
        return "Username is required";
      }

      if (!/^[a-zA-Z0-9_]{3,20}$/.test(value)) {
        return "Username must be 3-20 characters and contain only letters, numbers, or _";
      }

      return "";

    case "dob":
      if (!value) {
        return "Date of birth is required";
      }

      return "";

    case "gender":
      if (!value) {
        return "Please select your gender";
      }

      return "";

    case "address":
      if (!value.trim()) {
        return "Address is required";
      }

      if (value.trim().length < 10) {
        return "Address must be at least 10 characters";
      }

      return "";

    case "email":
      if (!value.trim()) {
        return "Email is required";
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        return "Enter a valid email address";
      }

      return "";

    case "password":
      if (!value) {
        return "Password is required";
      }

      if (value.length < 8) {
        return "Password must be at least 8 characters";
      }

      if (!/[A-Z]/.test(value)) {
        return "Password must contain at least one uppercase letter";
      }

      if (!/[a-z]/.test(value)) {
        return "Password must contain at least one lowercase letter";
      }

      if (!/[0-9]/.test(value)) {
        return "Password must contain at least one number";
      }

      return "";
    case "confirmPassword":
      if (!value) {
        return "Confirm password is required";
      }

      if (value !== password) {
        return "Passwords do not match";
      }

      return "";

    default:
      return "";
  }
};
