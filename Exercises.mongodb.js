use("test-db");

// db.linkedon.find({ salary: { $gt: 25000 } }).count();

// db.linkedon
//   .find({}, { firstName: 1, salary: 1, _id: 0 })
//   .sort({ salary: -1 })
//   .limit(3);

// db.linkedon
//   .find({
//     $and: [{ "currentCompany.name": "Walmart" }, { salary: { $gte: 7000 } }],
//   })
//   .count();

// db.linkedon
//   .find(
//     {
//       "currentCompany.industry": { $in: ["Sales", "Retail"] },
//     },
//     {
//       "currentCompany.name": 1,
//       firstName: 1,
//       lastName: 1,
//       salary: 1,
//       _id: 0,
//     }
//   )
//   .sort({ salary: -1 })
//   .limit(1);

// db.linkedon
//   .find({
//     $or: [
//       { "currentCompany.name": "Apple" },
//       { "previousCompanies.name": "Apple" },
//     ],
//   })
//   .count();
