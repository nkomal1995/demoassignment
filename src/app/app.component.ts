import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proAssig';


  productForm: FormGroup;  

  constructor(private fb:FormBuilder) {  
     
    this.productForm = this.fb.group({  
      name: '',  
      // name: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],


      quantities: this.fb.array([]) ,  
    });  



  }  


  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
    
    })  
  }  
  addnumber() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
  onSubmit() {  
    console.log(this.productForm.value);  
  }  


}
