import { Component } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  cardList = [
    { title: 'Coding', imageUrl: 'assets/image/code.jfif' },
    { title: 'Marketing', imageUrl: 'assets/image/mark.jfif' },
    // { title: 'Finance', imageUrl: 'path/to/image3.jpg',},
    { title: 'AI', imageUrl: 'assets/image/ai.jfif'},
    // Add more cards as needed
  ];
}
