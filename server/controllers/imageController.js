import userModel from "../models/userModel.js";
import FormData from "form-data";
import axios from "axios";

// image generate api
export const generateImage = async (req, res) => {
  try {
    const { userId, promt } = req.body;

    const user = await userModel.findById(userId);

    if (!user || !promt) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    if (user.creditBalance === 0 || userModel.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    // creating formdata
    const formData = new FormData();
    formData.append("prompt", prompt);

    //api req to clipdrop and got res as arraybuffer

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    // converting arraybuffer to base64 to image url
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    //deduct credit

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
