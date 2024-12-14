import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ToastService {


  public toastSucess() {
    return Swal.fire({
      timer: 1500,
      toast: true,
      icon: 'success',
      title: 'Success!',
      position: 'top-end',
      showConfirmButton: false,
      timerProgressBar: true
    });
  }

  public toastError() {
    return Swal.fire({
      timer: 1500,
      toast: true,
      icon: 'error',
      title: 'Error!',
      position: 'top-end',
      showConfirmButton: false,
      timerProgressBar: true
    });
  }

}
