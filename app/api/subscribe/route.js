import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import client from "@mailchimp/mailchimp_marketing";

client.setConfig({
  apiKey: "7945fa00815cf9d1985cd8d714986d9f-us14",
  server: "us14",
});

export async function POST(req) {
  if (req.method === "POST") {
    const _body = await req.json();
    const { email } = _body;
    if (!email || typeof email !== "string") {
      return NextResponse.json({
        status: "error",
        message: "Email is required and must be a string.",
      });
    }

    try {
      const response = await client.lists.addListMember("98af9e4021", {
        email_address: email,
        status: "subscribed", 
      });
      return NextResponse.json({ status: "success", data: response });
    } catch (error) {
      return NextResponse.json({
        status: "error",
        message: "Failed to subscribe email." + _body,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return NextResponse.end(`Method ${req.method} Not Allowed`);
  }
}
