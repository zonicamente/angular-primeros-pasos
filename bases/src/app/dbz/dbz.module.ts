import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPaigeComponet } from './pages/main-paige.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPaigeComponet,
    ListComponent,
    AddCharacterComponent,
  ],
  exports:[
    MainPaigeComponet,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
