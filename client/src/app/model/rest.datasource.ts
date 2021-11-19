import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from './pet.model';
const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;constructor(private http: HttpClient)
     {this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;}
     getProducts(): Observable<Pet[]> {return this.http.get<Pet[]>(this.baseUrl + 'adopt');}}