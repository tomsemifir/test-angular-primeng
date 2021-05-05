import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  userProfile : FormGroup;

  constructor(public fb : FormBuilder) { 
    this.userProfile = this.fb.group({
      nom : [''],
      prenom : [''],
      chats : this.fb.array([
        this.fb.control('')
      ])
    })
  }

  ngOnInit(): void {
  }

  get chats() : FormArray {
    return this.userProfile.get("chats") as FormArray;
  }

  ajouterChat = () => {
    this.chats.push(this.fb.control(''));
  }

  inscription = () => {

    //Récupérer tous les chats dans un tableau 
    console.log(this.userProfile.value.chats);
    console.log(this.userProfile.get("chats").value);

    //Récupérer un chat en particulier
    console.log(this.userProfile.value.chats[0]);
    console.log(this.userProfile.get("chats").value[0]);
  }

}
