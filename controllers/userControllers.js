const db = require('../db/connection');

// Insert User
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error('Insert Error:', err);
      return res.status(500).send('Error inserting user');
    }
    console.log(' User inserted:', result);
    res.status(201).send('User added successfully');
  });
};

// Update User
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  db.query(sql, [name, email, id], (err, result) => {
    if (err) {
      console.error('Update Error:', err);
      return res.status(500).send('Error updating user');
    }
    if (result.affectedRows === 0) return res.status(404).send('User not found');
    console.log(' User updated:', result);
    res.send('User updated successfully');
  });
};

// Delete User
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Delete Error:', err);
      return res.status(500).send('Error deleting user');
    }
    if (result.affectedRows === 0) return res.status(404).send('User not found');
    console.log(' User deleted:', result);
    res.send('User deleted successfully');
  });
};
