import { NgModule } from '@angular/core';
import { PetRepository } from './pet.repository';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';import { HttpClientModule } from '@angular/common/http';


@NgModule({
    
    imports: [HttpClientModule],
    providers: [PetRepository, StaticDataSource, {provide: StaticDataSource, useClass: RestDataSource}]})
export class ModelModule { }