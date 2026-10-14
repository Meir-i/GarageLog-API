import { Sequelize } from 'sequelize';

// הגדרת חיבור למסד נתונים מסוג SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './garage_db.sqlite',
  logging: false // שלא יציף את הטרמינל בשאלות.
});

export default sequelize;