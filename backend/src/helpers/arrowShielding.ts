export function arrowShielding(content: string): string {
  const arr = Array.from(content).map((i) => {
    if (i === '<' || i === '>') {
      return `\\${i}`;
    }

    return i;
  });

  const removedAllDeprecSymbl = arr.map((i) => {
    if (i === '\\' || i === '\\\\') {
      return '';
    }

    return i;
  });

  return removedAllDeprecSymbl.reduce((pre, next) => pre + next);
}
