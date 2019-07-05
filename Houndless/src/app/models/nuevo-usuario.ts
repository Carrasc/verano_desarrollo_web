export class NuevoUsuario {

    constructor(
      public nombre?: string,
      public correo?: string,
      public contrasenia?:string,
      public cel?: string,
      public apellido_p?: string,
      public apellido_m?: string,
      public token?:string
    ) {  }
  
  }