import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plannings } from 'src/app/models/plannings/plannings.model';
import { PlanningsService } from 'src/app/services/plannings/plannings.service';

@Component({
  selector: 'app-plannings',
  templateUrl: './plannings.component.html',
  styleUrls: ['./plannings.component.css']
})
export class PlanningsComponent implements OnInit {

  planificaciones: Plannings[] | undefined;

  constructor(private router: Router, private planningService:PlanningsService) { }

  ngOnInit(): void {
    let id = localStorage.getItem("ExamenID");
    if (id !=null)
       this.planningService.getPlanningsByExamId(+id)
          .subscribe(data => {
            this.planificaciones = data;
            console.log(data);
            
          });
    }

}
