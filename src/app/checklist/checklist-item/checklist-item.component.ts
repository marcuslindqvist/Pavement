import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pav-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss']
})
export class ChecklistItemComponent implements OnInit {
  @Input() item: wcag_rule;

  tagsList = [];
  constructor() { }

  ngOnInit(): void {
    this.createTagArray()
  }
  createTagArray() {
    this.tagsList = this.item.Taggar.split(',');
  }

}
interface wcag_rule {
  Riktlinje_nr: number;
  URL: string;
  Namn: string;
  Beskrivning: string;
  Prio: string;
  Principer: string;
  Taggar: string;
  Senast_uppdaterad: string;
  Status: string;
}
