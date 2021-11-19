import { Injectable } from '@angular/core';
import { Pet } from './pet.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class PetRepository {
    private pets: Pet[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getPets().subscribe(data => {
            this.pets = data;
            this.categories = data.map(p => p.category!).filter((c, index, array) => array.indexOf(c) === index).sort();
        });
    }


    getPets(category: string = null!): Pet[] {
        return this.pets.filter(p => category == null || category === p.category);
    }


    getPet(id: number): Pet {
        return this.pets.find(p => p.id === id) as Pet ;
    }
    getCategories(): string[] { return this.categories; }
}