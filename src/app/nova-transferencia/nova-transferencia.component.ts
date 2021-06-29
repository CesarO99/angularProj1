import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.model';
import { AlertService } from './../services/alert.service';



@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private alertService: AlertService){}

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir : Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
    error =>{
      this.alertService.errorAlert(error.message);
      console.error(error);
    },
  );
    this.alertService.sucessAlert('Transferencia enviada com sucesso');
    this.limparCampos();
    
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}