import {CategoriaClient} from "../../../Infrastructure/Categoria/CategoriaClient";
import {Injectable} from "@angular/core";
import {AllCategorias} from "./AllCategorias";
import {Categoria} from "./Categoria";

@Injectable({providedIn: 'root'})
export class CategoriaService {
  private _clientCategoria: CategoriaClient;

  constructor(http: CategoriaClient) {
    this._clientCategoria = http
  }

  public getAllCategorias() {
    const categoria: Categoria[] = [];

    this._clientCategoria
      .getCategorias()
      .subscribe(
        data => {
          Object.entries(data).map(
            ([key, value]) => categoria.push(value)
          )
        }
      )

    return categoria;
  }
}
