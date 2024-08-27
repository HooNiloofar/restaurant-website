// const { readFileSync } = require("fs");

// export async function GET(request) {
//   const data = readFileSync("./data/db.json");

//   var list = JSON.parse(data);

//   list = list.foods;

//   await sleep(1000);
//   return Response.json({ list });
// }

// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

const { readFileSync } = require("fs");

export async function GET(request) {
  const data = readFileSync("./data/db.json");
  let list = JSON.parse(data).foods;

  const url = new URL(request.url);
  const discount = url.searchParams.get("discount");
  console.log("discountttttttttttttttt", discount);
  if (discount != null) {
    console.log("listtttttttttttttttt22222222222", list);
    list = list.filter((item) => item.discount > 0);
  } else {
    console.log("listtttttttttttttttt", list);
    list = list;
  }
  await sleep(1000);
  return Response.json({ list });
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
