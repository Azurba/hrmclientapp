import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { RecruitingRoutingModule } from './recruiting-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCandidateComponent
  ],
  imports: [
    CommonModule,
    RecruitingRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecruitingModule { }
