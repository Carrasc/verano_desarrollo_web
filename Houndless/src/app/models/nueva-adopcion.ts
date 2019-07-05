export class NuevaAdopcion {

    constructor(
      public img_path?: string,
      public titulo?: string,
      public descripcion?: string,
      public raza?:string,
      public edad_perro?:number,
      public municipio?: string,
      public estado?: string,
      public colonia?: string,
      public tags?: string[],
      public perfilId?:string,

    ) {  }
  
  }