import { Component } from '@angular/core';
import { StudentFeedBack } from '../entity/studentFeedBack';
import { ApiClientService } from '../service/api-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-display',
  templateUrl: './feedback-display.component.html',
  styleUrls: ['./feedback-display.component.css']
})
export class FeedbackDisplayComponent {

  p: number = 1;
  studentFeedBack: StudentFeedBack = new StudentFeedBack();

  studentFeedBacks: any;

  constructor(private apiService: ApiClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.readAll();
  }

  readAll() {
    let response1 = this.apiService.getListFeedBack();
    response1.subscribe((data1) => {
      this.studentFeedBacks = data1;
      console.log(data1)
    });
  }

}
