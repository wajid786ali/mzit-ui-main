import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgConfirmModule } from 'ng-confirm-box'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


//Internal Component
import { ApiClientService } from './service/api-client.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { FeedbackDisplayComponent } from './feedback-display/feedback-display.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { NewWorksheetComponent } from './new-worksheet/new-worksheet.component';
import { WorksheetListComponent } from './worksheet-list/worksheet-list.component';
import { WorksheetViewComponent } from './worksheet-view/worksheet-view.component';
import { StudentReminderNotesComponent } from './student-reminder-notes/student-reminder-notes.component';
import { RemindersComponent } from './reminders/reminders.component';
import { WorksheetUpdateComponent } from './worksheet-update/worksheet-update.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { WeeklyWorksheetsComponent } from './weekly-worksheets/weekly-worksheets.component';
import { CreateWorksheetsComponent } from './create-worksheets/create-worksheets.component';
import { EmailSendComponent } from './email-send/email-send.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UpdateComponent,
    ReadComponent,
    HeaderComponent,
    FooterComponent,
    StudentFeedbackComponent,
    FeedbackDisplayComponent,
    TeacherListComponent,
    TeacherRegisterComponent,
    NewWorksheetComponent,
    WorksheetListComponent,
    WorksheetViewComponent,
    StudentReminderNotesComponent,
    RemindersComponent,
    WorksheetUpdateComponent,
    LoginComponent,
    NotFoundComponent,
    WeeklyWorksheetsComponent,
    CreateWorksheetsComponent,
    EmailSendComponent,
    EditTeacherComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    NgConfirmModule, 
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxDocViewerModule
  ],
  providers: [ApiClientService, DatePipe, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
