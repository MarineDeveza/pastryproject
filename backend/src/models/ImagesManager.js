const AbstractManager = require("./AbstractManager");

class ImagesManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  findAllImages() {
    return this.database.query(`select * from  ${this.table}`);
  }
}

module.exports = ImagesManager;
