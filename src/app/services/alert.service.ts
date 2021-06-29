import { Injectable } from '@angular/core';
import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  public sucessAlert(message: string, title?: string): void{
    this.showAlert('Bytebank', message, 'success');
  }

  public errorAlert(message: string, title?: string): void{
    this.showAlert('Bytebank', 'Dados inválidos na transferência, somente números serão aceitos', 'error');
  }

  private showAlert(
    title: string,
    message: string,
    icon: SweetAlertIcon
  ): void {
    Swal.fire(title, message, icon);
  }
}
