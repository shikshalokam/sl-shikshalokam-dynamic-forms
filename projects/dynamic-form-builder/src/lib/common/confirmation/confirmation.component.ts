// import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// @Component({
//   selector: 'app-confirmation',
//   templateUrl: './confirmation.component.html',
//   styleUrls: ['./confirmation.component.css']
// })
// export class ConfirmationComponent implements OnInit {

//   title: string;
//   message: string;

//   constructor(private dialogRef: MatDialogRef<ConfirmationComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
//     if (data && data.title) {
//       this.title = data.title;
//     }

//     console.log("incoming data", data);
//     if (data && data.message) {
//       this.message = data.message;
//     } else {
//       this.message = "Do you want to delete ?";
//     }
//   }

//   ngOnInit() {
//     console.log(this.data);
//   }

// }

// export class ConfirmDialogModel {

//   constructor(public title: string, public message: string) {
//   }
// }
