import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { notes } from 'src/app/modules/notes.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  isButtonAdd:boolean = false;
  isButtonSua:boolean = false;
  listGhiChu:notes[] = [];
  positionNotes:number = 0;
  constructor() {
  }

  ngOnInit(): void {
    this.listGhiChu.push(
      new notes('Thứ 2','Nộp bài kiểm tra giữa kỳ môn Agular'),
      new notes('Ngày 17','Hoàn thành Dealine môn Web Lavarel')
    );
  }

  AddNew(a:notes) {
    this.listGhiChu.push(a);
    this.isButtonAdd = !this.isButtonAdd;
  }

  Xoa(m:any) {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa',
      text: "Nếu Bạn Xóa Bạn Sẽ Không Thể Khôi Phục Dữ Liệu!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Xóa !',
          'Tệp của bạn đã bị xóa',
          'success'
        );
        this.listGhiChu.splice(m,1);
      }
    });
  }

  btnsua(a:any) {
    this.isButtonSua = a;
  }

  Sua(a:any = null) {
    this.isButtonSua = !this.isButtonSua;
    this.positionNotes = a;
  }

  SuaNotes(a:any) {
    this.listGhiChu[this.positionNotes].title = a.title;
    this.listGhiChu[this.positionNotes].Date = a.Date;
    this.listGhiChu[this.positionNotes].NoiDung = a.NoiDung;
  }
}
