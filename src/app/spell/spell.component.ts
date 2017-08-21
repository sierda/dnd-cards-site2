import { Component, OnInit, Input } from '@angular/core';
import { SpellsService } from '../spells.service';
import { Spell } from '../spell';

@Component({
  selector: 'spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {

  @Input() spellId: number;
  private spell: Spell;

  constructor(private spellService: SpellsService) { 


  }

  ngOnInit() {
     this.spellService.getSpellById(this.spellId).subscribe (
      data => {
        this.spell = data;
      }
    );
  }

}
