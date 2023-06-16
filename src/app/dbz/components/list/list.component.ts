import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index?:string): void {
    if(!index) { return }
    this.onDelete.emit(index);
  }
}
