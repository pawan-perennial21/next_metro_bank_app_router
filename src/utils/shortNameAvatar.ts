export function getInitials(fullName: string) {
  const words = fullName.split(' ');

  const initials = words.map((word) => word.charAt(0).toUpperCase());

  return initials.join('');
}
