const { readFileSync } = require("fs");

export async function GET(request, { params }) {
  var foodMenuID = params?.foodMenuID;

  const data = readFileSync("./data/db.json");

  var list = JSON.parse(data);

  list = list.foods;
  console.log(`the list is ${list}`);

  var foodMenu = list.filter((e) => e.id == foodMenuID);
  console.log("foodMenu", foodMenu);

  await sleep(1000);
  return Response.json({ list: foodMenu });
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
