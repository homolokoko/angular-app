import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-shared-taken-photo',
  templateUrl: './taken-photo.component.html',
  styleUrls: ['./taken-photo.component.sass']
})
export class TakenPhotoComponent {

  @Output() pictureTaken: EventEmitter<any> = new EventEmitter<WebcamImage>();
  @Input() active: boolean = true
  allowCameraSwitch = true;
  multipleWebcamsAvailable = false;
  deviceId!: string;
  src: string = ""
  videoOptions: MediaTrackConstraints = {
    width: { ideal: 500 },
    height: { ideal: 1024 }
  };
  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();


  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  triggerSnapshot(): void {
    this.active = false
    this.trigger.next();
  }

  toggleWebcam(): void {
    this.active = !this.active;
  }

  handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage): void {
    Swal.fire({
      imageUrl: webcamImage.imageAsDataUrl,
      showConfirmButton: true,
      confirmButtonText: 'Confirm',
      showDenyButton: true,
      denyButtonText: 'Retake',
      showCancelButton: true,
      showCloseButton: true,
    }).then((even) => {
      if (even.isDenied)
        this.active = true
      if (even.isConfirmed)
        this.pictureTaken.emit(webcamImage.imageAsDataUrl);
      this.pictureTaken.emit('')
    })
  }

  cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  closeWebcam() {
    this.active = false
    this.pictureTaken.emit('')
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
}
