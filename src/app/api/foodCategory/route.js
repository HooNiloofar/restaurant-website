const { readFileSync } = require("fs");

export async function GET(request) {
  const data = readFileSync("./data/db.json");

  var list = JSON.parse(data);
  list = list?.foodCategories;

  await sleep(1000);
  return Response.json({ list });
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
