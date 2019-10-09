import { ConsServiceService } from './../../../services/cons-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(
    public consService: ConsServiceService
  ) { }

  ngOnInit() {
  }

}
