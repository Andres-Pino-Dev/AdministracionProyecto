import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/bases/user';
import { UserService } from 'src/app/services/user.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/bases/departamento';
import { Cargo } from 'src/app/bases/cargo';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {

  frm_user!: FormGroup;
  fb = inject(FormBuilder);

  usuario: User = new User();
  departamentos:Departamento[]=[];
  cargos:Cargo[]=[];
  constructor(private service: UserService,public dialogo: MatDialogRef<NewUserComponent>,private snackBar: MatSnackBar,private servideDepartament:DepartamentoService) {}

  ngOnInit() {
    this.getdepartamentos();
    this.getCargos();
    this.frm_user = this.fb.group({
      // id: ['',Validators.required],
      usuario: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      idDepartamento: ['', Validators.required],
      idCargo: ['', Validators.required],
    });
  }

  add() {
    this.usuario = this.frm_user.value;
    this.service.add(this.usuario).subscribe((data) => {

      this.snackBar.open('Usaurio agregado', 'X', {
        duration: 3000, // Duración en milisegundos
      });
    });
    this.dialogo.close(true);
  }

  getdepartamentos() {
    this.servideDepartament.getDepartamento().subscribe((data) => {
      this.departamentos = data;

      console.log(this.departamentos)

    });
  }

  getCargos() {
    this.servideDepartament.getDCargo().subscribe((data) => {
      this.cargos = data;
      console.log(this.cargos)
    });
  }

}
