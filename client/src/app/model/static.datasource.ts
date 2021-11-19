import { Injectable } from '@angular/core';
import { Pet } from './pet.model';
import { Observable, from, of } from 'rxjs';

@Injectable()
export class StaticDataSource {
    private pets: Pet[] =
        [new Pet(1, 'Pet 1', 'Category 1', 'Pet 1 (Category 1)', 100),
        new Pet(2, 'Pet 2', 'Category 1', 'Pet 2 (Category 1)', 100),
        new Pet(3, 'Pet 3', 'Category 1', 'Pet 3 (Category 1)', 100),
        new Pet(4, 'Pet 4', 'Category 1', 'Pet 4 (Category 1)', 100),
        new Pet(5, 'Pet 5', 'Category 1', 'Pet 5 (Category 1)', 100),
        new Pet(6, 'Pet 6', 'Category 2', 'Pet 6 (Category 2)', 100),
        new Pet(7, 'Pet 7', 'Category 2', 'Pet 7 (Category 2)', 100),
        new Pet(8, 'Pet 8', 'Category 2', 'Pet 8 (Category 2)', 100),
        new Pet(9, 'Pet 9', 'Category 2', 'Pet 9 (Category 2)', 100),
        new Pet(10, 'Pet 10', 'Category 2', 'Pet 10 (Category 2)', 100),
        new Pet(11, 'Pet 11', 'Category 3', 'Pet 11 (Category 3)', 100),
        new Pet(12, 'Pet 12', 'Category 3', 'Pet 12 (Category 3)', 100),
        new Pet(13, 'Pet 13', 'Category 3', 'Pet 13 (Category 3)', 100),
        new Pet(14, 'Pet 14', 'Category 3', 'Pet 14 (Category 3)', 100),
        new Pet(15, 'Pet 15', 'Category 3', 'Pet 15 (Category 3)', 100),
    ];
    
    getPets(): Observable<Pet[]> {
        return from([this.pets]);
    }
}