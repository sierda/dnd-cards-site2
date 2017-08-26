import { Component, OnInit, Input } from '@angular/core';
import { SpellsService } from '../spells.service';
import { Spell } from '../spell';
import { fadeInAnimation } from '../animations/animation';
@Component({
  selector: 'spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class SpellComponent implements OnInit {

  @Input() spellId: number;
  private spell: Spell;

  state: string = 'active';
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
