import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
  standalone: false
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy{
  ngOnDestroy(): void {
    console.log("On destroy is called");
  }


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
