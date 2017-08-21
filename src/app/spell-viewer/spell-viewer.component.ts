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
  private upToChecked = false;

  levels: any = [];
  constructor(private classService: ClassService,
    private spellService: SpellsService
  ) { }

  changeClass() {
    this.classService.getLevelByClassId(this.selectedClass.id).subscribe(
      levels => {
        this.levels = levels;
      }
    );
  }

  changeLevel() {
    if (this.upToChecked) {
      this.spellService.getSpellIdsUpToByClassAndLevel(this.selectedClass.id, this.selectedLevel).subscribe(
        spells => {
          this.spellIds = spells;
        }
      );
    } else {
      this.spellService.getSpellIdsByClassAndLevel(this.selectedClass.id, this.selectedLevel).subscribe(
        spells => {
          this.spellIds = spells;
        }
      );
    }
  }

  upTo() {
    if (this.upToChecked && this.canSearch()) {
      console.log("Up to");
      this.spellService.getSpellIdsUpToByClassAndLevel(this.selectedClass.id, this.selectedLevel).subscribe(
        spells => {
          this.spellIds = spells;
        }
      );
    } else if (!this.upToChecked && this.canSearch()) {
      console.log("not up to");
      this.spellService.getSpellIdsByClassAndLevel(this.selectedClass.id, this.selectedLevel).subscribe(
        spells => {
          this.spellIds = spells;
        }
      );
    }
  }

  canSearch() {
    return (this.selectedClass && this.selectedLevel);
  }


  ngOnInit() {
    this.classService.getAllClasses().subscribe(classes => {
      this.classes = classes;
    });
  }

}
