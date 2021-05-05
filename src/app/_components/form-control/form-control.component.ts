import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  userProfile : FormGroup;
  newUserProfile : FormGroup;

  constructor() { 
    this.userProfile = new FormGroup({
      nom : new FormControl(),
      prenom : new FormControl(),
      age : new FormControl(0)
    });

    this.newUserProfile = new FormGroup({
      nom : new FormControl(),
      prenom : new FormControl(),
      age : new FormControl(0)
    });
  }

  ngOnInit(): void {
  }

  
  envoyerAuSecond = () => {
    this.newUserProfile.patchValue({
      nom : this.userProfile.get("nom").value,
      prenom : this.userProfile.get("prenom").value,
      age : this.userProfile.get("age").value
    })

    //Méthode magique à ne pas utiliser
    //this.newUserProfile.setValue(this.userProfile.value)
  }

  inscription = () => {
    console.log(this.newUserProfile.value);
  }

}
