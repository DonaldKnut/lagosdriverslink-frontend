// lib/validators.ts

/**
 * Validates an email address
 * @param email The email to validate
 * @returns boolean indicating if email is valid
 */
export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Validates a phone number (basic international format)
 * @param phone The phone number to validate
 * @returns boolean indicating if phone is valid
 */
export const validatePhone = (phone: string): boolean => {
  // Basic international phone number validation
  return /^\+?[\d\s-]{10,}$/.test(phone);
};
