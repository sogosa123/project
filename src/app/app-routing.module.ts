import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackupComponent } from './backup/backup.component';
import { ConfigmenuComponent } from './configmenu/configmenu.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DownloadComponent } from './backup/download/download.component';


const routes: Routes = [
  {path: 'inventory' , component: InventoryComponent},
  {path: 'mainpage' , component: MainpageComponent},
  {path: 'backup', component: BackupComponent},
  {path: 'configmenu', component: ConfigmenuComponent},
  {path: 'download', component: DownloadComponent},
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
