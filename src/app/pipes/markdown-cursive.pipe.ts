import { Pipe, PipeTransform } from '@angular/core';

const mdCursiveRegex = /\*(.*?)\*/igm;
@Pipe({
  name: 'markdownCursive'
})
export class MarkdownCursivePipe implements PipeTransform {

  transform(str: any): any {
    if (!str) {
      return '';
    } else {
      let formatted = str.replace(mdCursiveRegex, ' <em>$1</em>');
      return formatted;
    }
  }

}
