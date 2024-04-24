import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../Models/Aluno';

@Pipe({
  name: 'average',
  standalone: true
})
export class AveragePipe implements PipeTransform {

  transform(objeto: Student): number {
    return (objeto.gradeOne + objeto.gradeTwo)/2; 
  }

}
