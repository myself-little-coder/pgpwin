import { prisma } from "@/app/lib/prisma";
import { comparePasswords, generateToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  try {
    const { username, phone_number, password } = await request.json();

    // Validate input
    if (!password) {
      return NextResponse.json(
        { message: "Phone number and password are required" },
        { status: 400 }
      );
    }

    if (!username && !phone_number) {
      return NextResponse.json(
        { message: "Phone number and password are required" },
        { status: 400 }
      );
    }

    // Count form submissions today
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const todaysCount = await prisma.formSubmissionRecord.count({
      where: {
        fp_id: fp_id,
        ip: ip,
        createdAt: { gte: startOfDay },
      },
    });

    if (todaysCount > 10) {
      return NextResponse.json({
        success: false,
        message:
          "Your form submission limit reached! Please try again tomorrow.",
      });
    }

    await prisma.formSubmissionRecord.create({
      data: {
        req_route: "/api/2fa/verify",
        fp_id: fp_id,
        ip: ip,
      },
    });

    // /////////////

    let user;

    // Find user by phone number
    phone_number
      ? (user = await prisma.user.findFirst({
          where: { phone_number: phone_number },
        }))
      : (user = await prisma.user.findFirst({
          where: { user_code: username },
        }));

    if (!user) {
      return NextResponse.json(
        { message: "Invalid phone number or password" },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await comparePasswords(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid phone number or password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken(user.id, user.phone_number);

    // Return success response
    const response = NextResponse.json({
      success: true,
      message: "Sign in successful",
      token,
      user: {
        id: user.id,
        phone_number: user.phone_number,
      },
    });

    // Set the token in cookies
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.ENVIRONMENT === "prod" ? true : false,
      sameSite: process.env.ENVIRONMENT === "prod" ? "none" : "strict",
      domain: process.env.ENVIRONMENT === "prod" ? "pgpwin.site" : "localhost",
      path: "/",
      maxAge: 5 * 365 * 24 * 60 * 60, // 5 years
    });

    return response;
  } catch (error) {
    console.error("Sign in error:", error);
    return NextResponse.json(
      { message: "An error occurred during sign in" },
      { status: 500 }
    );
  }
}
