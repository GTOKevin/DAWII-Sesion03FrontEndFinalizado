import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento.model';
import { MedicamentoService } from 'src/app/services/medicamento.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor(private medicamentoService: MedicamentoService) { }

  medicamento:Medicamento={
    idMedicamento:0,
    nombre:'',
    precio:0.00,
    stock:0,
    laboratorio:''
  };
  
  ngOnInit(): void {
  }

  saveMedicamento() : void{
    console.log(">>>Save Inicio");
    console.log(this.medicamento);
    console.log(">>>Salida de datos");

      this.medicamentoService.create(this.medicamento).subscribe(
          response=>{
              console.log(response.mensaje);
              alert(response.mensaje);
          },
          error=>{
            console.log(error);
          }
       )
  }

}
