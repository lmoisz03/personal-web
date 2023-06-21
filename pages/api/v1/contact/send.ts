import { supabase } from "@/src/lib/supabase/client";
import { NextApiRequest, NextApiResponse } from "next";

// Define the rate limit configuration
const RATE_LIMIT = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 5, // Maximum number of requests allowed within the windowMs
};

// Create a cache to store request data
const requestCache = new Map();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // Check if the user has exceeded the rate limit
    const ip = req.socket.remoteAddress; // Get the user's IP address
    const currentTime = Date.now();
    const userRequests = requestCache.get(ip) || [];
    const requestsInWindow = userRequests.filter(
      (requestTime: any) => currentTime - requestTime < RATE_LIMIT.windowMs
    );

    if (requestsInWindow.length >= RATE_LIMIT.maxRequests) {
      return res.status(429).json({
        error: "Too Many Requests",
        message:
          "You have exceeded the maximum number of requests. Please try again later.",
      });
    }

    // Get the body
    const { first_name, last_name, email, phone, message } = req.body;

    // Validate the fields
    if (!first_name || !last_name || !email || !phone || !message) {
      return res
        .status(400)
        .json({ error: "Bad Request", message: "All fields are required." });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ error: "Bad Request", message: "Invalid email address." });
    }

    // Validate phone number format
    const phoneRegex = /^\+\d{1,3}-\d{1,14}$/;
    if (!phoneRegex.test(phone)) {
      return res
        .status(400)
        .json({ error: "Bad Request", message: "Invalid phone number." });
    }

    // Store the request time in the cache
    userRequests.push(currentTime);
    requestCache.set(ip, userRequests);

    const { error } = await supabase.from("contact_form_entries").insert({
      first_name,
      last_name,
      email,
      phone,
      message,
    });
    if (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({
          error: "Internal Server Error",
          message: "Something went wrong, please try again later.",
        });
    }
    return res
      .status(200)
      .json({ success: true, message: "Contact form submitted successfully." });
  }

  return res.status(405).json({
    error: "Method Not Allowed",
    message: "Only POST method is allowed.",
  });
};

export default handler;
