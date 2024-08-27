export async function POST(req) {
  try {
    const { phoneNumber } = await req.json();

    if (
      phoneNumber != undefined &&
      phoneNumber?.length == 11 &&
      phoneNumber?.startsWith("09")
    ) {
      return Response.json({ success: true, token: "11ba" });
    } else {
      return Response.json({
        success: false,
        message: "شماره ی وارد شده صحیح نمی باشد !لطفا مجدد اقدام کنید.",
        token: "11bjka"
      });
    }
  } catch (err) {
    return Response.json({ error: "failed to load data" });
  }
  //return Response.json(data);
}
