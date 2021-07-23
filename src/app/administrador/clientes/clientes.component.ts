import { Component, OnInit } from '@angular/core';
import { Cliente } from '../core/modelo/client';
import { ClienteService } from '../core/services/ClienteService';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public listClientes: Cliente[]
  public client = new Cliente
  constructor(private  service:ClienteService) { }

  ngOnInit() {
    this.getAllClientes();
  }

  crear_cliente(txt_shared: String, txt_bussinessId: String, txt_email: String, txt_phone: String, txt_date: Date){
    this.client.sharedkey = txt_shared
    this.client.businessID = txt_bussinessId 
    this.client.email = txt_email 
    this.client.phone = txt_phone 
    this.client.dataAdd = txt_date 
    this.service.save(this.client).subscribe(save => {      
      this.getAllClientes()
    })
  }

  actulizar_cliente(txt_bussinessId: String, txt_email: String, txt_phone: String, txt_date: Date){
    this.client.businessID = txt_bussinessId 
    this.client.email = txt_email 
    this.client.phone = txt_phone 
    this.client.dataAdd = txt_date 
    this.service.update(this.client).subscribe(update => {      
      this.getAllClientes()
    })
  }

  delete_cliente(txt_shared: String){ 
    this.service.clienteDelete(txt_shared).subscribe(del => {      
      this.getAllClientes()
    })
  }
  findById(txt_shared: String){
    this.service.findById(txt_shared).subscribe(
      client => {
        this.listClientes = client.response
      }, error => {

      }
      
    );
  }
  getAllClientes(){
    this.service.getCliente().subscribe(
      client => {
        this.listClientes = client.response
      }, error => {

      }
      
    );
  }
}
