import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges{


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']) {
      this.title = changes['title'].currentValue;
    }
  }

  @Input() rooms: RoomList[] = [];
  @Input() title: String = '';
  @Output() selected = new EventEmitter<RoomList>();

  ngOnInit(): void {
  }

  selectedRoom(room: RoomList) {
    this.selected.emit(room);
  }

}
