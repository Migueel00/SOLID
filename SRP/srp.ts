// Apply incorrectly Single Responsibility Principle
class User {
  private name: string;
  private email: string;

  constructor(name : string, email : string) {
    this.name = name;
    this.email = email;
  }

  public saveToDb(self: User){
    // save to db
  }

  public sendEmail(self: User){
    // send email
  }
}


// user tiene dos responsabilidades: guardar en la base de datos y enviar un correo
// Si quiero cambiar la forma en que se envía un correo, debo modificar la clase User
// Si quiero cambiar la forma en que se guarda en la base de datos, debo modificar la clase User
// Debería haber una clase UserService y una clase EmailService
// Cada clase debería tener una sola responsabilidad
// De esta manera, si quiero cambiar la forma en que se envía un correo, solo debo modificar la clase EmailService
// Si quiero cambiar la forma en que se guarda en la base de datos, solo debo modificar la clase UserService
// user debería tener una sola responsabilidad
// user debería ser una clase que represente un usuario