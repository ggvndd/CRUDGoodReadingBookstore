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

const getTransactionsz = 'SELECT r.ReserveID, r.CustomerID, r.ReserveDate, rd.BookID, rd.Quantity,  rd.Price FROM "ReserveBook" r JOIN ReserveDetail rd ON r.ReserveID = rd.ReserveID '
module.exports = {
  insertReserveBook,
  insertReserveDetail,
  getTransactionsz
};
