import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent {
  addCandidateFormGroup:FormGroup = this.fb.group(
    {
      'firstName': new FormControl("Smith"),
      'lastName': new FormControl("Zhao")
    }
  );
  
  constructor(private fb:FormBuilder){

  }
  candidate={
    firstName: "Willian",
    lastName: "Chang"
  }

  addCandidate():void{
    console.log(this.addCandidateFormGroup.value);
  }

  loadData(){
    this.addCandidateFormGroup.patchValue(this.addCandidate)
  }

  ngOnInit(): void {
    
  }
}
