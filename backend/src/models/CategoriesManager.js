const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "categories" });
  }

  findAllCat() {
    return this.database.query(`select * from ${this.table}`);
  }
}
module.exports = CategoriesManager;
