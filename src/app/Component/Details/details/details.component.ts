import { Student } from '../../../../Models/Students';
import { SericesService } from './../../../Servises/serices.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  students:Student[]=[];

  constructor(private ser:SericesService) {}

  ngOnInit(): void {
this.GetallStudentList();

      }


      GetallStudentList(){
        debugger;
        this.ser.GetAllEmployee().subscribe((Response:Student[])=>{
          this.students=Response;

          console.log(this.students);
        })

      }


} 
