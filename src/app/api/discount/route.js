// const { readFileSync } = require("fs");

// export async function GET(request) {
//   const data = readFileSync("./data/db.json");

//   var list = JSON.parse(data);
//   list = list?.foods;
//   //   var discountList = list?.filter((x) => {
//   //     return x?.discount === true;
//   //   });
//   const discountList = list?.filter((x) => x?.discount != 0);
//   console.log(discountList);

//   await sleep(1000);
//   return Response.json({ list: discountList });
// }

// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

import { readFileSync } from "fs";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const data = readFileSync("./data/db.json", "utf8");
    let list = JSON.parse(data)?.foods;
    // console.log("listt--------", list);
    const discountList = list?.filter((item) => item?.discount > 0);

    // console.log("dis--------", discountList);

    await sleep(1000);
    return NextResponse.json({ list: discountList });
  } catch (error) {
    console.error("Error reading the file or parsing JSON:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
