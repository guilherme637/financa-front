import {CategoriaClient} from "../../../Infrastructure/Client/Categoria/CategoriaClient";
import {Injectable} from "@angular/core";
import {Categoria} from "./Categoria";

@Injectable({providedIn: 'root'})
export class CategoriaService {
  private _clientCategoria: CategoriaClient;

  constructor(http: CategoriaClient) {
    this._clientCategoria = http
  }

  public getAllCategorias() {
    let categoria: Array<Categoria> = [];

    this._clientCategoria
      .getCategorias()
      .subscribe(
        data => {
          categoria = data
        }
      )

    return categoria;
  }
}
