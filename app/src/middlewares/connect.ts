import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/config/db.config";

export default async function mongooseMiddleware(
  req: NextRequest,
  res: NextResponse,
  next: () => void
) {
  try {
    // Connect to MongoDB if not already connected
    await connectDB();

    // Pass control to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error in mongoose middleware:", error);
    NextResponse.json({
      success: false,
      error: "Internal Server Error",
      status: 500,
    });
  }
}
