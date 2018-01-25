import { helper } from '@ember/component/helper';

export function randomChoice([list]/*, hash*/) {
  return list[Math.floor(Math.random() * list.length)];
}

export default helper(randomChoice);
