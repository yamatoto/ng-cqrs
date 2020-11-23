export function isNullOrUndef(obj): boolean {
  return obj === null || obj === undefined;
}

export function parseToJson(value: string) {
  try {
    return JSON.parse(value);
  } catch (e) {
    console.error(`${value} is not JSON.`);
    return null;
  }
}
