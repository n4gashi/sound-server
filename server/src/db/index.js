import { Pool } from 'pg'

export default {
  query: (text, params) => pool.query(text, params)
};
