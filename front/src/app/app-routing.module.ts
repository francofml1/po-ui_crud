import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsEditComponent } from "./assets-edit/assets-edit.component";
import { AssetsTableComponent } from "./assets-table/assets-table.component";

const routes: Routes = [
  {path: 'new', component: AssetsEditComponent},
  {path: 'edit/:id', component: AssetsEditComponent},
  {path: 'table', component: AssetsTableComponent},
  {path: '', pathMatch: 'full', redirectTo: '/table'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
