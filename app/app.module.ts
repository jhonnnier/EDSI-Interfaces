import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { EstudiantesComponent }  from './estudiantes.component';
import { MateriasComponent }  from './materias.component';
import { TemperaturaComponent }  from './temperatura.component';
import { PaisesComponent }  from './paises.component';
import { PipesComponent }  from './pipes.component';
import { HtmlComponent }  from './html.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EstudiantesComponent, MateriasComponent, TemperaturaComponent, PaisesComponent, PipesComponent, HtmlComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
