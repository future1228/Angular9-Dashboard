import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#myToast").toast({ delay: 300000 });
    $("#myToast").toast('show');

    $('#warning').toast({ delay: 300000});
    $("#warning").toast('show');
  }

  close() {
    $("#myToast").toast('hide');
  }
}
