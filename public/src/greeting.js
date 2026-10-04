export function getGreeting(name) {
  const trimmed = typeof name === 'string' ? name.trim() : '';
  const safeName = trimmed || 'будущий программист';

  return `Привет, ${safeName}!`;
}
