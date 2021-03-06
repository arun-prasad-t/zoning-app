import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentDetailsComponent,
    PersonalDetailsComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
