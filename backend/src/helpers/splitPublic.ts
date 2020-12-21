export function splitPublic(file: any): string {
  return file.path.toString().split('public').join('');
}