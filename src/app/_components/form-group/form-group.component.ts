import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MonoTypeOperatorFunction } from 'rxjs';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  userProfile : FormGroup;

  constructor(public fb : FormBuilder) {
    this.userProfile = this.fb.group({
      nom : ['Vossough'], // new FormControl() ----- "nom"
      prenom : ['Adrien'],
      age : [0],
      adresse : this.fb.group({
        numero : [0],
        rue : [''],
        ville : ['']
      })
    });
   }

  ngOnInit(): void {
  }

  inscription = () => {

    //this.userService.save(this.userProfile.value);

    console.log(this.userProfile.get("nom").value);

    console.log(this.userProfile.get("adresse.rue").value);
  }

}