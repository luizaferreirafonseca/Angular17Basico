import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../Models/Aluno';
import { AveragePipe } from '../pipe/average.pipe';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-students-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AveragePipe, HeaderComponent],
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.css'
})
export class StudentsPageComponent {

  getStudents: boolean = false; 
  updateButton: boolean = false; 
  removeButton: boolean = false;
  selectButton: boolean = true; 

  form = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ú ]+$'), Validators.maxLength(100), Validators.minLength(3)]),
    gradeOne: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    gradeTwo: new FormControl(0 , [Validators.required, Validators.min(0), Validators.max(10)])
  })


  cards:any = [ 'Gerenciar Estudante','Gerenciar Professor', 'Lançamento de Notas','Rotina Classe', 'Biblioteca',  'Quadro de Avisos','Controle Financeiro']
   





  list:Student[] = [{
    name: 'Luiza',
    gradeOne: 10,
    gradeTwo: 10,
  },
  {
    name: 'Leonardo',
    gradeOne: 8,
    gradeTwo: 8
  },
  {
    name: 'Sofia',
    gradeOne: 10,
    gradeTwo: 10
  },
  {
    name: 'Marcus',
    gradeOne: 8,
    gradeTwo: 8
  }

];

  indice: number = -1; 

  
  registerStudent():void{
    
    this.updateButton = false;
    this.removeButton = false;
    this.selectButton = true;
    this.list.push(this.form.value as Student)
    this.form.reset();
  }


  backToRegister():void{
    this.form.reset();

    this.registerStudent();
  }


   getStudent(indice:number){
     this.indice = indice;
     this.form.setValue({
      name: this.list[indice].name,
      gradeOne: this.list[indice].gradeOne,
       gradeTwo: this.list[indice].gradeTwo
     });

     this.updateButton = true; 
     this.removeButton = true;
     this.selectButton = false;
    
    }
  
 updateStudent(){

this.list[this.indice] = this.form.value as Student;


this.form.reset();


 }

 removeStudent(){
  this.list.splice(this.indice,1);
this.form.reset();
this.updateButton = false; 
     this.removeButton = false;
     this.selectButton = true;

 }


 

 getAllStudents(){
  this.getStudents = true; 
 }


}
