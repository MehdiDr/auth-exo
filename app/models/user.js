const db = require('./db')
const defaultListId = 1;

module.exports = {

  getUsers() {
    return db.query('SELECT * FROM users ORDER BY id')
  },
  createUser({ firstname, lastname }) {
    return db.query(
    `INSERT INTO users(firstname, lastname, email, password, role)
    VALUES (
      '${firstname}', 
      '${lastname}', 
      '${email}', 
      '${password}', 
      '${role}')`
    )
  },
  updateUser({ id, firstname, lastname }) {
    return db.query(`
    UPDATE users 
    SET firstname='${firstname}', lastname='${lastname}'
    WHERE id=${id}`)
  },
  deleteUser(id) {
    return db.query(`DELETE FROM users WHERE id=${id}`)
  },
  addCard({userId, cardId}) {
    return db.query(`
    INSERT INTO users_cards_lists SET 
    user_id=${userId}, 
    card_id=${cardId}, 
    list_id=${defaultListId}`)
  },
  setListCard({ userId, cardId, listId }) {
    return db.query(`
    UPDATE users_cards_lists 
    SET list_id=${listId}
    WHERE user_id=${userId} 
    AND card_id=${cardId}`)
  }

}