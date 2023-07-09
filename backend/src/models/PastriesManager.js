const AbstractManager = require("./AbstractManager");

class PastriesManager extends AbstractManager {
  constructor() {
    super({ table: "pastries" });
  }

  insert(pastries) {
    return this.database.query(
      `insert into ${this.table} (category_id, image_id, reference, title, sizes, story) values (?, ?, ?, ?, ?, ?)`,
      [
        pastries.category_id,
        pastries.image_id,
        pastries.reference,
        pastries.title,
        pastries.sizes,
        pastries.story,
      ]
    );
  }

  update(pastries) {
    return this.database.query(
      `update ${this.table} set category_id = ?, image_id, reference = ?, title = ?, sizes = ?, story = ? where id = ?`,
      [
        pastries.category_id,
        pastries.image_id,
        pastries.reference,
        pastries.title,
        pastries.sizes,
        pastries.story,
      ]
    );
  }
}

module.exports = PastriesManager;
