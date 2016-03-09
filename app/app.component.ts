import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DashboardComponent } from './dashboard.component'

@Component({
	selector: 'body',
	templateUrl: "app/app.component.html",
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	}
])
export class AppComponent {
	title: string;

	constructor() {
		this.title = 'APP Title';
	}
}