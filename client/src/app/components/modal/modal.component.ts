import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfigService } from '../../config/config.service';

interface ResponseDTO {
  id: number
}

interface ItemsDetails {
  name: string;
  description: string;
  menu: {
    name: string;
    quantity: number;
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResponseDTO, private request: ConfigService) { }


  detailsItem: ItemsDetails = {} as ItemsDetails;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.request.showOnlyOneItem(this.data.id)
      .subscribe((response: ItemsDetails) => {this.detailsItem = response});
  }

}
