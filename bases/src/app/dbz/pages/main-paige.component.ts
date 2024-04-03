import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-mail-paige',
  templateUrl: './main-paige.component.html'
})

export class MainPaigeComponet {
  constructor(private dbzService: DbzService){}
    get characters():Character[]{
      return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string): void{
    this.dbzService.deleteCharacterById ( id );
  }

  onNewCharacter( character: Character ): void{
    this.dbzService.addCaharacter ( character );
  }
}
