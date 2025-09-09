use("test-db");

// db.linkedon.aggregate([
//   { $match: { "currentCompany.name": "Apple" } },
//   {
//     $group: {
//       _id: "$currentCompany.industry",
//       count: { $sum: 1 },
//     },
//   },
// ]);

// db.linkedon.aggregate([
//   { $match: { currentPosition: "Analyst" } },
//   {
//     $group: {
//       _id: "$currentCompany.name",
//       averageSalary: { $avg: "$salary" },
//     },
//   },
// ]);

db.linkedon.aggregate([
  {
    $match: {
      "currentCompany.name": { $in: ["Google", "Apple"] },
      "currentCompany.industry": "Tech",
    },
  },
  {
    $group: {
      _id: "$lastName",
      average: { $avg: "$salary" },
    },
  },
  { $sort: { average: -1 } },
]);
