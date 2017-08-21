import { Component, OnInit } from '@angular/core';
import { ClassPipe } from '../class.pipe';
import { ClassService } from '../class.service';
import { SpellsService } from '../spells.service';
import { Class } from '../class';
import { Spell } from '../spell';
import { MdSelectModule } from '@angular/material';
import { SpellComponent } from '../spell/spell.component';


@Component({
  selector: 'app-spell-viewer',
  templateUrl: './spell-viewer.component.html',
  styleUrls: ['./spell-viewer.component.css']
})
export class SpellViewerComponent implements OnInit {

  classes: any = [];//Class
  spellIds: any = [];//integers
  private spell = new Spell();
  private selectedClass: any;
  private selectedLevel: any;
  private spells: Spell[];

  levels: any = [];
  constructor(private classService: ClassService,
              private spellService: SpellsService
  ) {}

  changeClass() {
    console.log(this.selectedClass);
    this.classService.getLevelByClassId(this.selectedClass.id).subscribe(levels =>
      {
        this.levels = levels;
      }
    );
  }

  changeLevel() {
    console.log(this.selectedLevel);
    console.log(this.selectedClass.id);
    this.spellService.getSpellIdsByClassAndLevel(this.selectedClass.id, this.selectedLevel).subscribe(
      spells => {
        this.spellIds = spells;
      } 
    );    
  }

  ngOnInit() {
    this.classService.getAllClasses().subscribe(classes => {
      this.classes = classes;
    });

    // this.spellService.getSpellById(2);
    this.spellService.getSpellById(2).subscribe (
      data => {
        this.spell = data;
      }
    );
  }

}
