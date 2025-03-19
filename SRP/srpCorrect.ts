// Apply correctly Single Responsibility Principle
class UserSRP {
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

// Mi funcionalidad de usuario solo se ve representada por la clase UserSRP
// Ahora, si quiero guardar un usuario en la base de datos, creo una clase UserService
// Si quiero enviar un correo, creo una clase EmailService
// De esta manera, cada clase tiene una sola responsabilidad

class UserService {
  public saveToDb(user: UserSRP) {
    // save to db
  }
}

class EmailService {
  public sendEmail(self: EmailService, email: string, message: string) {
    // send email
  }
}