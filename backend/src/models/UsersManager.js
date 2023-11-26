const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} (email, password, firstname, lastname) values (?,?,?,?)`,
      [users.email, users.password, users.firstname, users.lastname]
    );
  }

  findByMail(email) {
    return this.database.query(`select * from ${this.table} where email=?`, [
      email,
    ]);
  }
}

module.exports = UsersManager;
