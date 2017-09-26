import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';
@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  constructor(private spellService: SpellsService) { }

  spells = [];

  ngOnInit() {
  }

  searchSpell(event: any) {
    console.log(event.target.value);

    this.spellService.getSpellsByName(event.target.value).subscribe(
      data => {
        this.spells = <any>data;
      }
    )
  }

}
