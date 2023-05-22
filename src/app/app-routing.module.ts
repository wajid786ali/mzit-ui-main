import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
//Internal component
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { FeedbackDisplayComponent } from './feedback-display/feedback-display.component';
import {NewWorksheetComponent}  from './new-worksheet/new-worksheet.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'update/:studentId',component:UpdateComponent},
  {path:'view', component:ReadComponent},
  {path:'delete/:studentId', component:DeleteComponent},
  {path:'studentFeedback',component:StudentFeedbackComponent},
  {path:'feedbackDisplay',component:FeedbackDisplayComponent},
  {path:'newWorksheet',component:NewWorksheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
