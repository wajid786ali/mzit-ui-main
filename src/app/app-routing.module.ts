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
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'update/:studentId',component:UpdateComponent},
  {path:'view', component:ReadComponent},
  {path:'delete/:studentId', component:DeleteComponent},
  {path:'studentFeedback',component:StudentFeedbackComponent},
  {path:'feedbackDisplay',component:FeedbackDisplayComponent},
  {path:'list-teacher',component:TeacherListComponent},
  {path:'add-teacher',component:TeacherRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
