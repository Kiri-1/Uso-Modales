import { Component } from '@angular/core';
import { PdfViewerModalComponent } from '../pdf-viewer-modal/pdf-viewer-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pdf-button',
  templateUrl: './pdf-button.component.html',
  styleUrls: ['./pdf-button.component.css']
})
export class PdfButtonComponent {
  constructor(private dialog: MatDialog) {} // Aquí se usa el MatDialog

  openPdfModal() {
    const pdfUrl = 'assets/arreglos.pdf'; // Ruta del archivo PDF en la carpeta assets

    this.dialog.open(PdfViewerModalComponent, {
      width: '80%', // Ajusta el ancho del modal
      data: { pdfUrl } // Pasa la URL del PDF como datos al modal
    });
  }
}
