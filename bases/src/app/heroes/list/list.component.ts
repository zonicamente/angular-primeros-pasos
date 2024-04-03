import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[]=['SpiderMan','IronMan','Hulk','She Hulk','Thor'];
  public deleteHero?: string = '';

  removelasthero():void{
     this.deleteHero = this.heroNames.pop();

  }

}
