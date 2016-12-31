import { Pipe, PipeTransform } from '@angular/core';

const mdBoldRegex = /\*\*(.*?)\*\*/igm;

@Pipe({
  name: 'markdownBold'
})
export class MarkdownBoldPipe implements PipeTransform {

  transform(str: any): any {
    if (!str) {
      return '';
    } else {
      let formatted = str.replace(mdBoldRegex, ' <strong>$1</strong>');
      return formatted;
    }
  }

}
