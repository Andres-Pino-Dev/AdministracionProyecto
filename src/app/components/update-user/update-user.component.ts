import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/bases/user';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/bases/departamento';
import { Cargo } from 'src/app/bases/cargo';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{
  frm_user!: FormGroup;
  fb = inject(FormBuilder);

  usuario: User = new User();
  users: User[] = [];
  departamentos:Departamento[]=[];
  cargos:Cargo[]=[];

pipeDate=inject(DatePipe);


formatar(fecha: Date){
  return this.pipeDate.transform(fecha, 'yyyy-MM-dd');

}

  constructor(private service: UserService,@Inject(MAT_DIALOG_DATA) public data: any,private fb_data: FormBuilder,public dialogo: MatDialogRef<UpdateUserComponent>,private snackBar: MatSnackBar,private servideDepartament:DepartamentoService) {
  console.log('data', data)
  this.frm_user = this.fb.group({
    id: [data],
    usuario: ['', Validators.required],
    primerNombre: ['', Validators.required],
    segundoNombre: ['', Validators.required],
    segundoApellido: ['', Validators.required],
    idDepartamento: ['', Validators.required],
    idCargo: ['', Validators.required],
  });
  }
  ngOnInit(): void {
    this.frm_user.patchValue(this.data);

    this.getdepartamentos();
    this.getCargos();

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

  update() {
    this.usuario = this.frm_user.value;
    this.service.update(this.usuario).subscribe((data) => {

      this.snackBar.open('Actualizado', 'X', {
        duration: 3000, // Duración en milisegundos
      });
    });
    this.dialogo.close(true);
  }

}
