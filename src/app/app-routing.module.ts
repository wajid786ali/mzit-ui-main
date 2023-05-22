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
<<<<<<< HEAD
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
=======
import {NewWorksheetComponent}  from './new-worksheet/new-worksheet.component';
>>>>>>> abb947a988cf55c9c97c63f510f71e24eb35ba95

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'update/:studentId',component:UpdateComponent},
  {path:'view', component:ReadComponent},
  {path:'delete/:studentId', component:DeleteComponent},
  {path:'studentFeedback',component:StudentFeedbackComponent},
  {path:'feedbackDisplay',component:FeedbackDisplayComponent},
<<<<<<< HEAD
  {path:'list-teacher',component:TeacherListComponent},
  {path:'add-teacher',component:TeacherRegisterComponent}
=======
  {path:'newWorksheet',component:NewWorksheetComponent}
>>>>>>> abb947a988cf55c9c97c63f510f71e24eb35ba95
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
