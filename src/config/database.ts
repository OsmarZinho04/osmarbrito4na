import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://osmar4na_user:ApsZPmkAzMhqHP1WxWs8l4KOCcHAjdLL@dpg-cr7qs20gph6c73en7afg-a.oregon-postgres.render.com/osmar4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;