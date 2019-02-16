import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  public openPDF:boolean = false;
  public pdfSrc:any;

  constructor() { }

  ngOnInit() {
  }

  getFile(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.srcElement.files[0]);
    const me = this;
    reader.onload = function () {
      const fileContent = reader.result;
      me.openPDF = true;
      me.pdfSrc = fileContent;
    };
  }
}
