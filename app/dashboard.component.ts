import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
	selector: 'dashboard',
	templateUrl: 'app/dashboard.component.html'
})
 export class DashboardComponent implements OnInit { 
	constructor(private _router: Router) { }
	ngOnInit() { }
 }