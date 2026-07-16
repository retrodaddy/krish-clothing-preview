/** Formats an E.164-ish phone string for human-readable display. */
export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/[^\d]/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    const country = digits.slice(0, 2);
    const part1 = digits.slice(2, 7);
    const part2 = digits.slice(7);
    return `+${country} ${part1} ${part2}`;
  }
  return phone;
}
