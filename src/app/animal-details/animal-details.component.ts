import { Component, OnInit, Input } from '@angular/core';

import { Animal } from '../animal';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  @Input () animal?: Animal;

  constructor() { }

  ngOnInit(): void {
  }

}
