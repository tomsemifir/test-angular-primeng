import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    {nom : "Vossough", prenom : "Adrien", age : 12},
    {nom : "Raoux", prenom : "Killian", age : 12},
    {nom : "Desaegher", prenom : "Thomas", age : 12},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
