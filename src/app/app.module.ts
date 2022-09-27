import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BackupComponent } from './backup/backup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatSelectModule } from '@angular/material/select';
import { ApiserviceService } from './apiservice.service';
import { ConfigmenuComponent } from './configmenu/configmenu.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DownloadComponent } from './backup/download/download.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,

    MainpageComponent,
    BackupComponent,
    ConfigmenuComponent,
    InventoryComponent,
    DownloadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatStepperModule,
    MatRadioModule,
    MatTabsModule,
    



  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
