import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AddpartidaService } from '../../services/addpartida.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-createpartido',
  templateUrl: './createpartido.component.html',
  styleUrls: ['./createpartido.component.css']
})
export class CreatepartidoComponent implements OnInit {
  partido = {
    dia: "",
    mes: "",
    ano: "",
    hora: "",
    lugar: "",
    dificultad: ""
  }
  constructor(
    private router: Router, 
    private authService: AuthService
    ) { }

  ngOnInit(): void { 
    console.log("Página cargada");
  }
  add() {
    this.authService.addPartido(this.partido).subscribe(
      res => {
        alert("Partida Creada");
        console.log(res)
        this.router.navigate(['/createPartido']);
      },
      err => console.log("error")
      
      )
  }

}
