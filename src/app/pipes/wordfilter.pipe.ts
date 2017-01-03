import { Pipe, PipeTransform } from '@angular/core';
const BAD_WORDS = [
  'fuck',
  'angular2',
  'shit'
];
@Pipe({
  name: 'wordfilter'
})
export class WordfilterPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return '';
    }
    let filtered = value;
    for (let word of BAD_WORDS){
      let regex = new RegExp(word, 'gim');
      filtered = filtered.replace(regex, '*'.repeat(word.length));
    }
    return filtered;
  }

}
