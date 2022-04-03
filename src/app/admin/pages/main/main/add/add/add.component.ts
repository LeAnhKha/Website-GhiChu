import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { notes } from '../../../../../../modules/notes.module';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  AddNote:string = 'Thêm Ghi Chú';
  listNoteNew:notes = new notes();

  @Output('add') newAdd:EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  Add() {
    let tmp = Object.assign({}, this.listNoteNew);
    this.newAdd.emit(tmp);
  }
}
