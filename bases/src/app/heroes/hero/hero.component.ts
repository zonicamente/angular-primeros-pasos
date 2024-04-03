import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName ():string{
    return this.name.toUpperCase();
  }

  getheroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name='Green Lanter';
  }

  changeAge(): void{
    this.age= 36;
  }

  resetFrom(): void{
    this.name = 'ironman';
    this.age = 45;
  }

}
