export async function POST(req) {
  try {
    const { otp } = await req.json();

    if (otp == 1234) {
      return Response.json({
        success: true,
        message: "ورود شما با موفقیت انجام شد.",
        token: "11baas",
      });
    } else {
      return Response.json({
        success: false,
        message: "کد وارد شده صحیح نیست.لطفا مجددا اقدام کنید.",
      });
    }
  } catch (err) {
    return Response.json({ error: "failed to load data" });
  }
  // return Response.json(data);
}
