import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checklist-detailed-view',
  templateUrl: './checklist-detailed-view.component.html',
  styleUrls: ['./checklist-detailed-view.component.scss']
})
export class ChecklistDetailedViewComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
