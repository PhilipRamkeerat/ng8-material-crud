import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddUserComponent } from '../components/modal-add-user/modal-add-user.component';
import { ModalUpdateUserComponent } from '../components/modal-update-user/modal-update-user.component';

export interface DialogData {
  animal: string;
  name: string;
  telefone: string;
  description: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  name: string;
  animal: string;
  telefone: string;
  description: string;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  editObjectExample = {
    name: 'Philip',
    animal: 'Cachorro',
    telefone: '994390864',
    description: 'Description Phil'
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalAddUserComponent, {
      width: '600px',
      data: { name: '', animal: '', telefone: '', description: '' }
    });

    dialogRef.afterClosed().subscribe(
      data => {
        if (!data || data == undefined || (data.name == '' && data.animal == '' && data.telefone == '' && data.description == '')) {
          console.log('Invalid Datas', data);
          return;
        } else {
          this.name = data.name;
          this.animal = data.animal;
          this.telefone = data.telefone;
          this.description = data.description;
          console.log("Valid Log", data);
        }
      }
    );
  }

  editDialog() {
    console.log('edit called success')
    const dialogRef = this.dialog.open(ModalUpdateUserComponent, {
      width: '600px',
      data: {
        name: this.editObjectExample.name,
        animal: this.editObjectExample.animal,
        telefone: this.editObjectExample.telefone,
        description: this.editObjectExample.description
      }
    });

    dialogRef.afterClosed().subscribe(
      data => {
        if (!data || data == undefined || (data.name == '' && data.animal == '' && data.telefone == '' && data.description == '')) {
          console.log('Invalid Datas', data);
          return;
        } else {
          this.name = data.name;
          this.animal = data.animal;
          this.telefone = data.telefone;
          this.description = data.description;
          console.log("Valid Log", data);
        }
      }
    );
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen Dos Santos Rodrigues Ramkeerat', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium  Dos Santos Rodrigues', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium  Dos Santos Rodrigues', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium  Dos Santos Rodrigues', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron  Dos Santos Rodrigues', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon  Dos Santos Rodrigues', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen  Dos Santos Rodrigues', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen  Dos Santos Rodrigues', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine  Dos Santos Rodrigues', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon  Dos Santos Rodrigues', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium  Dos Santos Rodrigues', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium  Dos Santos Rodrigues', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum  Dos Santos Rodrigues', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon  Dos Santos Rodrigues', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

