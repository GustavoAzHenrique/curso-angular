import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: "Fiora", type: "Cachorro", age: 3 },
    { name: "Tom", type: "Gato", age: 10 },
    { name: "Tuca", type: "Cachorro", age: 5 },
    { name: "Bob", type: "Cavalo", age: 7 },
  ];

  animalDetails = '';


  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

}
