// transactions/queries.js

const insertReserveBook = `
  INSERT INTO "ReserveBook" (CustomerID, ReserveDate)
  VALUES ($1, $2)
  RETURNING ReserveID;
`;

const insertReserveDetail = `
  INSERT INTO ReserveDetail (reserveid, BookID, Quantity, Price)
  VALUES ($1, $2, $3, $4);
`;

module.exports = {
  insertReserveBook,
  insertReserveDetail,
};
