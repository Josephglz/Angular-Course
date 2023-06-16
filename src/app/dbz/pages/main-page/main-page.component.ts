import { Component } from '@angular/core';
import { DragonBallZService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor (
    private _dbzService: DragonBallZService
  ) {}

  get characters(): Character[] {
    return this._dbzService.characters;
  }

  onDeleteCharacter( id: string ): void {
    this._dbzService.deleteCharacterById( id );
  }

  onNewCharacter(character: Character) {
    this._dbzService.onNewCharacter(character);
  }
}
