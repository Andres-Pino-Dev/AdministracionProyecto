import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from './bases/user';
import { UserService } from './services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Departamento } from './bases/departamento';
import { Cargo } from './bases/cargo';
import { DepartamentoService } from './services/departamento.service';
import { DeleteComponent } from './components/delete/delete.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FrontAdministracion';
  displayedColumns: string[] = [
    'id',
    'usuario',
    'primerNombre',
    'segundoNombre',
    'segundoApellido',
    'idDepartamento',
    'idCargo',
    'acciones'
  ];

  dataSource = new MatTableDataSource<User>();
  user: User = new User();


  frm_deps!: FormGroup;
  fb = inject(FormBuilder);




  // users: User[] = [{id:1,usuario:'were', primerNombre:'dddd',segundoNombre:'ersr',segundoApellido:'sdsd',idDepartamento:1,idCargo:1}];
  users: User[] = [];
  departamentos:Departamento[]=[];
  cargos:Cargo[]=[];

  constructor(private service: UserService,private servideDepartament:DepartamentoService, private dialogo: MatDialog,private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.get();
    this.getdepartamentos();
    this.getCargos();
    this.frm_deps = this.fb.group({
      // id: ['',Validators.required],
      idDepartamento: ['', ],
      idCargo: [''],

    });
  }

  get() {
    this.service.getUsers().subscribe((data) => {
      this.users = data;
      this.dataSource = new MatTableDataSource<User>(this.users);
    });
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

  openAdd() {
    // this.dialogo.open(NewUserComponent);
    const dialogReferencia = this.dialogo.open(NewUserComponent,{width: '25%', height:'60%'});
    dialogReferencia.afterClosed().subscribe({
      next: (data) => {
        if (data) {
          this.get();
        }
      },
    });

  }

  openUpdate(data:any) {
    const dialogReferencia = this.dialogo.open(UpdateUserComponent, {
      data: data,
    });

    dialogReferencia.afterClosed().subscribe({
      next: (data) => {
        if (data) {
          this.get();
        }
      },
    });
  }


  openDelete(data:any) {
    const dialogReferencia = this.dialogo.open(DeleteComponent, {
      data: data, width: '300px', // Ancho del diálogo
      height: '200px', // Alto del diálogo
    }







    );

    dialogReferencia.afterClosed().subscribe({
      next: (data) => {
        if (data) {
          this.get();
        }
      },
    });

  }


}
