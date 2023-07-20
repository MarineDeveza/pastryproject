const AbstractManager = require("./AbstractManager");

class PastriesManager extends AbstractManager {
  constructor() {
    super({ table: "pastries" });
  }

  findAllPastries() {
    return this.database.query(
      `SELECT p.id, p.category_id, p.image_id, p.reference, p.title, p.sizes, p.story, c.category, i.src, i.description FROM ${this.table} AS p
      JOIN categories AS c ON p.category_id=c.id
      JOIN images AS i ON p.image_id=i.id
      ORDER BY p.id
      `
    );
  }

  find(id) {
    return this.database.query(
      `SELECT p.id AS id, category_id, image_id, reference, title, sizes, story, src, description
      FROM ${this.table} p
      JOIN images ON images.id = image_id
      WHERE p.id = ?`,
      [id]
    );
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
      `update ${this.table} set category_id = ?, image_id = ?, reference = ?, title = ?, sizes = ?, story = ? where id = ?`,
      [
        pastries.category_id,
        pastries.image_id,
        pastries.reference,
        pastries.title,
        pastries.sizes,
        pastries.story,
        pastries.id,
      ]
    );
  }
}

module.exports = PastriesManager;
