export function sanitizePhoneNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) {
    return `234${digits.slice(1)}`;
  }
  if (digits.startsWith("234")) {
    return digits;
  }
  return digits;
}
