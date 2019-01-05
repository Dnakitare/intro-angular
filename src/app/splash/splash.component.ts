import {Component, OnInit} from "@angular/core";
import {User} from "../shared/interfaces/user";
import {UserService} from "../shared/services/user.service";

@Component({
	template: require("./splash.component.html")
})
// no selector because it will be its own page
export class SplashComponent implements OnInit{
	users: User[] = [];

	constructor(protected userService: UserService) {}


	ngOnInit():void {
		this.userService.getAllUsers()
			// if you don't subscribe it didn't happen
			.subscribe(users => this.users = users);
	}

}