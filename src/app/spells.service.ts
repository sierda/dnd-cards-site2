import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Spell, SpellResponse } from './spell';
@Injectable()
export class SpellsService {

  constructor(private http: Http,
              private httpClient: HttpClient
             ) { }

  private api = "http://dnd.dsierra.io/api/";
  private spellapi = this.api + 'spells/';
  private result: Spell;
  getAllSpellIds() {
    return this.http.get(this.spellapi).map(res => res.json());
  }

  getSpellById(id: number) {
    return this.httpClient.get<Spell>(this.spellapi + '' + id);
  }

  getSpellIdsByClassAndLevel(classId: number, level: number) {
    let url = this.api + 'classes/' + classId + '/spells/' + level;
    return this.httpClient.get(url);
  }

  getSpellIdsUpToByClassAndLevel(classId: number, level: number) {
    let url = this.api + 'classes/' + classId + '/spells/' + level + '/upto';
    return this.httpClient.get(url);
  }
}

