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
import { DirectoryComponent } from './directory/directory.component';
import { AddressCardComponent } from './addresscard/addresscard.component';
import { TrainingCComponent } from './trainingc/trainingc.component';
import { MandatoryComponent } from './mandatory/mandatory.component';
import { StatusComponent } from './status/status.component';
import { CardComponent } from './card/card.component';
import { PermitsComponent } from './permits/permits.component';
import { HierComponent } from './hier/hier.component';
import { Globals } from './globals';
import { Stubs } from './stubs';
import { PapaParseModule } from 'ngx-papaparse';  
import {RoleHeaderComponent } from './roleheader/roleheader.component';
import {MandatoryHeaderComponent } from './mandatoryheader/mandatoryheader.component';
 

@NgModule({
  imports:         [ BrowserModule, FormsModule, OnsenModule, HttpClientModule,PapaParseModule   ],
  declarations:    [ AppComponent, MenuComponent, RoleSelectComponent, AddressCardComponent, LogonPageComponent, DirectoryComponent, TrainingCComponent, MandatoryComponent, CardComponent,PermitsComponent,HierComponent,RoleHeaderComponent,MandatoryHeaderComponent, StatusComponent ],
  entryComponents: [ MenuComponent, RoleSelectComponent, LogonPageComponent, StatusComponent, TrainingCComponent, DirectoryComponent, MandatoryComponent, CardComponent,PermitsComponent,HierComponent, AddressCardComponent ],
  schemas:         [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:       [ AppComponent ],
   providers: [ Globals, Stubs ]
})
export class AppModule {
  
 }
