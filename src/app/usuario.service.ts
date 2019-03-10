import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public  getUsuario (): Usuario {
    let usuario = new Usuario();
    usuario.nome = "Maurilio";
    usuario.email = "maurilio@mgial.com";

    return usuario;
  }

  public listaUsuario(): Usuario[] {
    return [
      {
        nome: "joao",
        email: "joao@gmail.com"        
      },
      {
        nome: "maria",
        email: "maria@gmail.com"
      },
      {
        nome: "cesar",
        email: "cesar@gmail.com"
      },
      {
        nome: "tais",
        email: "tais@gmail.com"
      },
    ];
  }
}
