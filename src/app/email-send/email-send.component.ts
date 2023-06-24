import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css']
})
export class EmailSendComponent {

  form: FormGroup = this.fb.group({
    form_name:'',
    to_name:'Admin',
    form_email:'',
    subject:'',
    message:'',
  })
  constructor(private fb:FormBuilder){ }
 
  async send(){
    emailjs.init('AKDZUlOn2Rk9akg3E')
   let response = await emailjs.send("service_4qzg2i3","template_brvqgnt",{
    from_name: this.form.value.form_name,
    to_name: this.form.value.to_name,
    from_email: this.form.value.form_email,
    from_subject: this.form.value.subject,
    message: this.form.value.message, 
    });
     alert('Message send');
     this.form.reset();
  }
   
}


  