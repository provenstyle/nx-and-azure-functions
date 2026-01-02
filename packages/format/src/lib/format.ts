import { reduce } from 'lodash';

export function format(name?: string): string {
  const greetings = ['Hello', 'Hi', 'Howdy'];
  return reduce(greetings, (accumulator, greeting) => {
    return accumulator + `${greeting}, ${name ?? 'world'}!\r\n`;
  }, '');
}
