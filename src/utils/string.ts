// import { formatIncompletePhoneNumber } from "@/lib/libphonenumber";

// export function decodeEmail(email: string) {
//   return atob(email);
// }

// export function decodePhoneNumber(phone: string) {
//   return atob(phone);
// }

// export function formatPhoneNumber(phone: string) {
//   return formatIncompletePhoneNumber(phone);
// }

import { parsePhoneNumberFromString } from "libphonenumber-js";

/**
 * Decode Base64 string (email or phone).
 */
export function decodeEmail(email: string): string {
  return atob(email);
}

export function decodePhoneNumber(phone: string): string {
  return atob(phone);
}

/**
 * Format phone number to international readable format, e.g., +62 813 3781 7245
 */
export function formatPhoneNumber(phone: string): string {
  const parsed = parsePhoneNumberFromString(phone, "ID"); // default to Indonesia
  if (!parsed) return phone;
  return parsed.formatInternational().replace(/-/g, " "); // ganti dash ke spasi
}
