import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PdfViewerModalComponent } from '../pdf-viewer-modal/pdf-viewer-modal.component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  
    constructor(private dialog: MatDialog) {}
  
    openPdfModal() {
      const pdfUrl = 'assets/sample.pdf'; // Cambia esta ruta al archivo PDF que quieras abrir
  
      this.dialog.open(PdfViewerModalComponent, {
        width: '80%',
        data: { pdfUrl }
      });
    }
  }
