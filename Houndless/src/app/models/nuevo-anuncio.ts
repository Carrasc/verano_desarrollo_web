export class NuevoAnuncio {

    constructor(
      public titulo?: string,
      public descripcion?: string,
      public raza?:string,
      public municipio?: string,
      public estado?: string,
      public tags?: string
    ) {  }
  
  }