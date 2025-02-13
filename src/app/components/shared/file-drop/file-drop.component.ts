import * as _ from 'lodash';
import Swal from 'sweetalert2';
import { Component, EventEmitter, Output, Input } from '@angular/core';

interface Base64 {
  name: string
  type: string
  size: number
  base64: string
}

@Component({
  selector: 'app-shared-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.sass']
})
export class FileDropComponent {

  isSaved: boolean = false

  @Input() value: Base64[] = []

  @Output() valueChange: EventEmitter<Base64[]> = new EventEmitter<Base64[]>()

  collection: Base64[] = []

  onFileChange(event: any) {
    this.isSaved = false
    _.each(event.files, (file: any) => {
      this.fileChange(file)
    })
  }

  removeFile(index: any) {
    if (this.collection.length === 1) {
      this.isSaved = true
      this.clearFiles()
    } else {
      this.isSaved = false
      _.pullAt(this.collection, [index])
    }
  }

  clearFiles() {
    this.isSaved = true
    this.collection = []
    this.save()
  }

  save() {
    this.isSaved = true
    Swal.fire({
      icon: 'success',
      title: 'Saved',
      showConfirmButton: false,
      timer: 1500,
      position: 'bottom-end',
      toast: true
    }).then(() => this.valueChange.emit(this.collection))
  }

  protected fileChange(item: any) {

    let newFile = { name: '', type: '', size: 0, base64: '' };

    newFile.name = item.name;

    if (item) {
      const reader = new FileReader();

      reader.readAsDataURL(item); // Read the file as a data URL

      reader.onload = () => {
        newFile.base64 = reader.result as string
        console.info('File read:', new Blob([newFile.base64]).size)
      };

      reader.onerror = (error) => { console.error('Error reading file:', error) };

      this.collection.push(newFile);

    }
  }

}
