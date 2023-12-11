import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ApiClientService } from '../service/api-client.service'; 

@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css']
})
export class EmailSendComponent {

  teachers: any[] = [];
  students: any[] = [];
  selectAllTeachers: boolean = false;
  selectAllStudents: boolean = false;
  showForm: boolean = true;
  showThanksMessage: boolean = false;

  form: FormGroup = this.fb.group({
    form_email: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder, private apiService: ApiClientService) { }


  async send() {
    emailjs.init('AKDZUlOn2Rk9akg3E');
    let response = await emailjs.send("service_4qzg2i3", "template_brvqgnt", {
      from_name: this.form.value.form_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.form_email,
      from_subject: this.form.value.subject,
      message: this.form.value.message,
    });

    this.showForm = false;
    this.showThanksMessage = true;
  }

  toggleSelectAllTeachers() {
    this.teachers.forEach(teacher => teacher.isSelected = this.selectAllTeachers);
  }

  toggleSelectAllStudents() {
    this.students.forEach(student => student.isSelected = this.selectAllStudents);
  }
  getEmails(): string {
    const selectedTeachers = this.teachers.filter(teacher => teacher.isSelected).map(teacher => teacher.email);
    const selectedStudents = this.students.filter(student => student.isSelected).map(student => student.email);
    const allSelectedEmails = [...selectedTeachers, ...selectedStudents].join(', ');
    return allSelectedEmails;
  }

  ngOnInit() {
    this.loadTeachers();
    this.loadStudents();
  }

  loadTeachers() {
    this.apiService.getListTeachers().subscribe(
      (data) => {
        this.teachers = data.map((teacher: any) => ({ ...teacher, isSelected: false }));
      },
      (error) => {
        console.error('Error loading teachers:', error);
      }
    );
  }

  loadStudents() {
    this.apiService.getAll().subscribe(
      (data) => {
        this.students = data.map((student: any) => ({ ...student, isSelected: false }));
      },
      (error) => {
        console.error('Error loading students:', error);
      }
    );
  }
}