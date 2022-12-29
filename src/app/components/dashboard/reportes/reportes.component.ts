import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router:Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  ingresar(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    if(email == 'Miguel' && password == '12345'){
      this.fakeLoading();
    } else {
      this.error();
      this.form.reset();
    }
  }
  error(){
    this._snackBar.open("Usuario o contraseña invalidos.", "Cerrar",{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }
  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
