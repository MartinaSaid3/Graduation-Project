import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent {
  errMsg: string = '';
  isloading: boolean = false;

    hallform: FormGroup = new FormGroup({
    Name: new FormControl(''),
    Location: new FormControl(''),
    MaxCapacity: new FormControl(''),
    MinCapacity:new FormControl(''),
    PersonalPrice: new FormControl(''),
    Type: new FormControl(''),
    Description: new FormControl(''),
    Images: new FormControl('') // This will hold the selected image file
  });

  constructor(private _provider: ProviderService) {}

  handleform(): void {
    this.isloading = true;
    if (this.hallform.valid) {
        const formData = new FormData();
        Object.entries(this.hallform.value).forEach(([key, value]) => {
            // If the key is 'Images', append each image file separately
            if (key === 'Images') {
                const images = value as File[];
                images.forEach((image, index) => {
                    formData.append(`Images[${index}]`, image);
                });
            } else {
                formData.append(key, value as any);
            }
        });

        this._provider.hall(this.hallform.value).subscribe({
            next: (Response) => {
                this.isloading = false;
                console.log(Response);
            },
            error: (err) => {
                this.errMsg = err.error.message;
                this.isloading = false;
            }
        });
    }
}

// onFileSelected(event: any): void {
//   const files = event.target.files;
//   if (files) {
//       // Create a new FormData object
//       const formData = new FormData();
      
//       // Append each file to the FormData object
//       for (let i = 0; i < files.length; i++) {
//           formData.append(`Images[${i}]`, files[i]);
//       }
      
//       // Update the 'Images' form control with the FormData object
//       this.hallform.get('Images')?.setValue(files);
//   }
// }}
// onFileSelected(event: any): void {
//   const files = event.target.files;
//   if (files) {
//     // Update the 'Images' form control with the selected files
//     this.hallform.get('Images')?.setValue(files);
//   }
// }}
onFileSelected(event: any): void {
  const files: FileList = event.target.files;
  if (files && files.length > 0) {
    // Initialize an array to hold the selected files
    const images: File[] = [];

    // Push each file from the FileList to the images array
    for (let i = 0; i < files.length; i++) {
      images.push(files[i]);
    }

    // Update the 'Images' form control with the selected files array
    this.hallform.get('Images')?.setValue(images);
  }
}}
