import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-checklist-left-list',
  templateUrl: './checklist-left-list.component.html',
  styleUrls: ['./checklist-left-list.component.scss']
})
export class ChecklistLeftListComponent implements OnInit {
  @Input() list = [];
  constructor() { }

  ngOnInit(): void {
  }

}
