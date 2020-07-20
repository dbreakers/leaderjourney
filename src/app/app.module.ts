import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnsenModule } from 'ngx-onsenui';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RoleSelectComponent } from './roleselect/roleselect.component';
import { LogonPageComponent } from './logonpage/logonpage.component';
import { TrainingComponent } from './training/training.component';
import { MandatoryComponent } from './mandatory/mandatory.component';
import { Globals } from './globals';

@NgModule({
  imports:         [ BrowserModule, FormsModule, OnsenModule, HttpClientModule ],
  declarations:    [ AppComponent, MenuComponent, RoleSelectComponent, LogonPageComponent, TrainingComponent, MandatoryComponent ],
  entryComponents: [ MenuComponent, RoleSelectComponent, LogonPageComponent, TrainingComponent, MandatoryComponent ],
  schemas:         [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:       [ AppComponent ],
   providers: [ Globals ]
})
export class AppModule { }
