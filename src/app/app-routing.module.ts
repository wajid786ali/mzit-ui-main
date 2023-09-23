import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Internal component
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { FeedbackDisplayComponent } from './feedback-display/feedback-display.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { NewWorksheetComponent } from './new-worksheet/new-worksheet.component';
import { WorksheetListComponent } from './worksheet-list/worksheet-list.component';
import { WorksheetViewComponent } from './worksheet-view/worksheet-view.component';
import { CreateWorksheetsComponent } from './create-worksheets/create-worksheets.component';
import { WeeklyWorksheetsComponent } from './weekly-worksheets/weekly-worksheets.component';
import { StudentReminderNotesComponent } from './student-reminder-notes/student-reminder-notes.component';
import { RemindersComponent } from './reminders/reminders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmailSendComponent } from './email-send/email-send.component';
import { RoleGuard } from './guard/role.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'update/:studentId', component: UpdateComponent, canActivate: [AuthGuard] },
  { path: 'view', component: ReadComponent, canActivate: [AuthGuard] },
  { path: 'studentFeedback', component: StudentFeedbackComponent, canActivate: [AuthGuard] },
  { path: 'feedbackDisplay', component: FeedbackDisplayComponent, canActivate: [AuthGuard] },
  { path: 'add-teacher', component: TeacherRegisterComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: 'list-teacher', component: TeacherListComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: 'edit-teacher/:email', component: EditTeacherComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: 'newWorksheet', component: NewWorksheetComponent, canActivate: [AuthGuard] },
  { path: 'worksheetList', component: WorksheetListComponent, canActivate: [AuthGuard] },
  { path: 'worksheetView', component: WorksheetViewComponent, canActivate: [AuthGuard] },
  { path: 'studentNotes', component: StudentReminderNotesComponent, canActivate: [AuthGuard] },
  { path: 'weeklyWorksheet', component: WeeklyWorksheetsComponent, canActivate: [AuthGuard] },
  { path: 'createWeeklyWorksheets', component: CreateWorksheetsComponent, canActivate: [AuthGuard] },
  { path: 'reminders', component: RemindersComponent, canActivate: [AuthGuard] },
  { path: 'email', component: EmailSendComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
