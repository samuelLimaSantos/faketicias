import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import { ModalComponent } from '../../components/modal/modal.component';

interface Data {
  id: string;
  name: string;
  price: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(id: string): void {
    this.dialog.open(ModalComponent, {
      width: '450px',
      height: '220px',
      data: {id}
    });
  }


  datas: Data[] = [
    {
      id: '01',
      name: 'Hamburguer',
      price: 'R$15,00'
    },
    {
      id: '02',
      name: 'Batata Frita',
      price: 'R$12,00'
    },
    {
      id: '03',
      name: 'Nuggets',
      price: 'R$9,99'
    },{
      id: '03',
      name: 'Nuggets',
      price: 'R$9,99'
    },{
      id: '03',
      name: 'Nuggets',
      price: 'R$9,99'
    },{
      id: '03',
      name: 'Nuggets',
      price: 'R$9,99'
    },{
      id: '03',
      name: 'Nuggets',
      price: 'R$9,99'
    },{
      id: '03',
      name: 'Nuggets',
      price: 'R$9,99'
    },
  ];

  dataSource = new MatTableDataSource<Data>(this.datas);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['id', 'name', 'price'];

  ngOnInit(): void {
  }

}
