require("dotenv").config();
const fetch = require("node-fetch");

// Create Redis client
const redisClient = require("../config/redis");

class Auth {
  async sendSMS(phoneNumber) {
    const verificationCode = Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * 9) + 1
    ).join("");

    try {
      const response = await fetch("https://api.otpiq.com/api/sms", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SMS_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: "964" + phoneNumber,
          smsType: "verification",
          provider: "auto",
          verificationCode: verificationCode,
        }),
      });

      if (!response.ok) {
        console.log(response.status);

        throw new Error("ناردنی کۆدی دڵنیایی سەرکەوتوو نەبوو");
      }

      const data = await response.json();
      console.log("SMS sent:", data);

      await redisClient.setEx(
        `otp:${phoneNumber}`,
        process.env.OPT_CODE_EXPIRE_TIME,
        verificationCode
      );
      console.log(`OTP saved in Redis for ${phoneNumber}: ${verificationCode}`);

      return { success: true, message: "کۆدی دڵنیایی نێردرا" };
    } catch (error) {
      console.error("Error sending SMS:", error.message);
      return { success: false, message: "ناردنی کۆدی دڵنیایی سەرکەوتوو نەبوو" };
    }
  }

  async verifyOTP(phoneNumber, userOTP) {
    try {
      const storedOTP = await redisClient.get(`otp:${phoneNumber}`);

      if (!storedOTP) {
        return {
          success: false,
          message:
            "کۆدی دڵنیایی کاتەکەی تەواو بووە یاخود نەدۆزرایەوە تکاتە دووبارە بینێرەوە",
        };
      }

      if (storedOTP !== userOTP) {
        return { success: false, message: "کۆدی دڵنیایی هەڵەیە" };
      }

      await redisClient.del(`otp:${phoneNumber}`);
      return { success: true, message: "کۆدی دڵنیایی بەسەرکەوتوی ئەنجامدرا" };
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
      return { success: false, message: "کێشەیەک هەیە" };
    }
  }
}

module.exports = new Auth();
