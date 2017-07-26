import { Component } from '@angular/core';
import { ClassPipe } from './class.pipe';
import { ClassService } from './class.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app works!';
  classes: any = [];
  constructor(private classService: ClassService) {}

  ngOnInit() {
    this.classService.getAllClasses().subscribe(classes => {
      this.classes = classes;
    })
  }
}
