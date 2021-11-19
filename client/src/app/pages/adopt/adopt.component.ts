import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/model/pet.model';
import { PetRepository } from 'src/app/model/pet.repository';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {
  title!: string;
  constructor(private route: ActivatedRoute, private repository: PetRepository ) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
    //console.log(this.repository.getPets());
  }
/*
  get pets() : Pet[] {
    console.log(this.repository.getPets());
    return this.repository.getPets();
  }*/

  get test() : String {
    return "sas";
  }
}
