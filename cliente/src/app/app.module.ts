import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './component/modal/modal.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModalComponent } from './component/pdf-viewer-modal/pdf-viewer-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafeUrlPipe } from './component/safe-url.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PdfButtonComponent } from './component/pdf-button/pdf-button.component';
import { UsoCuadrosComponent } from './component/uso-cuadros/uso-cuadros.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PdfViewerModalComponent,
    SafeUrlPipe,
    PdfButtonComponent,
    UsoCuadrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
