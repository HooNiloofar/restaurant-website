const { readFileSync } = require("fs");

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  console.log("searchParams==>", searchParams);

  const query = searchParams.get("query");
  console.log("query==========>", query);
  const data = readFileSync("./data/db.json");
  let list = JSON.parse(data).foods;

  const results = list.filter((item) => item?.name?.includes(query));
  console.log("results=======>", results);

  // const url = new URL(request.url);
  // console.log("url==>", url);

  // const query = searchParams.get("query");
  // console.log("query====>", query);

  await sleep(1000);
  return Response.json({ list: results });
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
