import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {


constructor( private service: UserService,@Inject(MAT_DIALOG_DATA) public data: any,public dialogo: MatDialogRef<DeleteComponent>,private snackBar: MatSnackBar){}





delete(){
  console.log(this.data);


  this.service.delete(this.data).subscribe({
    next: (data) => {
      if (data) {
        this.snackBar.open('Eliminado', 'X', {
          duration: 3000, // Duración en milisegundos
        });



      }
    },
  });

  this.close();
}


close(){
this.dialogo.close(true);

}
}


