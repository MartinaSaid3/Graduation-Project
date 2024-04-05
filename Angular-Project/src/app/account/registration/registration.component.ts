// import { User } from './../../_modules/user';
// import { CdkStepper } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  //flag
  isLoading:boolean=false;

  //forms
  // RoleForm!: FormGroup;
  // PersonalDataForm!: FormGroup;
  // ConfirmMailForm!: FormGroup;

  RegisterForm!:FormGroup;
  step: number = 0;
  // user?:User;
  // form!:FormGroup;

  constructor(private _Router:Router, private _formBuilder: FormBuilder,private _authService:AuthService) { }

    ngOnInit() {
      // this.RoleForm = <FormGroup>this.controlContainer.control;

      // this.RoleForm = this._formBuilder.group({
      //   FullName: ["",Validators.compose([Validators.required,Validators.minLength(5)])],
      //   Role: ["", Validators.required]
      // });

      // this.PersonalDataForm = this._formBuilder.group({
      //     SSN: ["", Validators.compose([Validators.required,Validators.pattern(/[0-9]{14}/)])],
      //     Gender: ["", Validators.required],
      //     Phone: ["", Validators.compose([Validators.required,Validators.pattern(/^((\\+20-?)|0)?[0-9]{10}$/)])],
      //     Address: ["", Validators.compose([Validators.required,Validators.pattern(/^[0-9A-Za-z\s,.'-]{3,}$/)])]
      // });

      // this.ConfirmMailForm = this._formBuilder.group({
      //   Email: ["",  Validators.compose([Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
      //   UserName: ["", Validators.compose([Validators.required,Validators.pattern(/^[A-z0-9_-]{8,15}$/)])],
      //   Password: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])],
      //   ConfirmPassword: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])]
      // });

      this.RegisterForm = this._formBuilder.group({
        FullName: ["",Validators.compose([Validators.required,Validators.minLength(5)])],
        Role: ["", Validators.required],

        SSN: ["", Validators.compose([Validators.required,Validators.pattern(/[0-9]{14}/)])],
        Gender: ["", Validators.required],
        Phone: ["", Validators.compose([Validators.required,Validators.pattern(/^((\\+20-?)|0)?[0-9]{10}$/)])],
        Address: ["", Validators.compose([Validators.required,Validators.pattern(/^[0-9A-Za-z\s,.'-]{3,}$/)])],

        Email: ["",  Validators.compose([Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
        UserName: ["", Validators.compose([Validators.required,Validators.pattern(/^[A-z0-9_-]{8,15}$/)])],
        Password: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])],
        ConfirmPassword: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])]

      });
    }

    get form() { return this.RegisterForm.controls; }

    nextStep(): void {
      this.step++;
    }

    previousStep(): void {
      this.step--;
    }

    error ='';
    Submit(): void {
      if (this.RegisterForm.invalid) {
        return;
      }

      this.isLoading = true;
      console.log(this.RegisterForm.value);
      this._authService.signup(this.RegisterForm.value).subscribe({
        next: (response) => {
          console.log(response)
          this.isLoading = false;
          if (response.message == 'success') {
            this._Router.navigate(['/account/login']);
          } else {
            this.error = 'This UserName Exist';
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error during signup:', error);
          this.error = 'An error occurred during signup.';
        }
      });
    // form1(){
    //   console.log(this.RoleForm.value);
    // }

    // form2(){
    //   console.log(this.PersonalDataForm.value);
    // }


// error:string ='';

//   Submit(){
//     console.log(this.AllDataForm.value);
//     this.isLoading=true;
//     // console.log(this.user);
//     this._authService.signup(this.AllDataForm.value).subscribe({
//       next: (response) => {
//         this.isLoading=false;
//         console.log(response);
//         if(response.status == 200){
//           this._Router.navigate(['/account/login']);
//           //this._Router.navigate(['/https://mail.google.com/mail/u/0/']);

//         }else{
//           this.error = 'This UserName Exist';
//         }
//       },
//       error: (error) => {
//         this.isLoading=false;
//         console.error('Error during signup:', error);
//         this.error = 'An error occurred during signup.';
//       }
//     });
  }
}
