import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { notes } from '../../../../../../modules/notes.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  title:string = 'Sửa Ghi Chú';
  listNoteEdit:notes = new notes();
  @Input('ButtonSua') isButtonSua:boolean = true;
  @Input('Pos_notes') Pos_Note:number = 0;
  @Input('listGhiChu') lisNote:notes[] = [];
  @Output('btnsua') newBtnEdit:EventEmitter<any> = new EventEmitter;
  @Output('Note_edited') Note_edited:EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    this.listNoteEdit = this.lisNote[this.Pos_Note];
  }

  Sua() {
    this.newBtnEdit.emit(!this.isButtonSua);
    this.Note_edited.emit(this.listNoteEdit);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Nội dung của ghi chú đã được thay đổi !',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
