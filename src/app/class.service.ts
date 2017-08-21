import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClassService {

  constructor(private http: Http) { }

  private api = "http://dnd.dsierra.io/api/";

  getAllClasses() {
    return this.http.get(this.api + 'classes/all2').map(res => res.json());
  }

  getLevelByClassId(id: number) {
    return this.http.get(this.api + 'classes/' + id + '/spells').map(res => res.json());
  }
}
