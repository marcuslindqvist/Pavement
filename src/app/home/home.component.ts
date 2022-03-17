import { Component, OnInit } from '@angular/core';
import checklist_json from '../../assets/checklist.json'
@Component({
  selector: 'pav-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  checklist: Array<wcag_rule> = []

  constructor() {
  }

  ngOnInit(): void {
    checklist_json.forEach(element => {
      this.checklist.push(element)
    });
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
