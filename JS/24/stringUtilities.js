export function toUpperCase(string) {
  let result = string.toUpperCase();
  console.log(`${string} convertewd to ${result}`);
}

export function toReverse(string) {
  let result = string.split('').reverse().join('');
  console.log(`${string} converted to ${result}`);
}
