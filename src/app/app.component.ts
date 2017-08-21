import { Component } from '@angular/core';
import { ClassPipe } from './class.pipe';
import { ClassService } from './class.service';
import { Class } from './class';
import { MdTabsModule } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app works!';
  classes: any = [];//Class
  constructor(private classService: ClassService) {}

  ngOnInit() {
    this.classService.getAllClasses().subscribe(classes => {
      this.classes = classes;
    })
  }
}
