import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import { ModalComponent } from '../../components/modal/modal.component';
import { ConfigService } from '../../config/config.service';

interface Items {
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
  
  constructor(public dialog: MatDialog, private request: ConfigService) {}

  openDialog(id: string): void {
    this.dialog.open(ModalComponent, {
      width: '450px',
      data: {id}
    });
  }
  
  menuItems: Items[] = [] as Items[]
  
  dataSource = new MatTableDataSource<Items>(this.menuItems);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  
  displayedColumns: string[] = ['id', 'name', 'price'];
  
  
  ngOnInit(): void {
    this.request.showAllMenuItems()
    .subscribe((response: Items[]) => {
      this.menuItems = response;
      this.dataSource = new MatTableDataSource<Items>(this.menuItems);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });


  }

}
