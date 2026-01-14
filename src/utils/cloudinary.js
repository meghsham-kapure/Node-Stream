import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // node file system

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudnary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("Local File Path can't be NULL !");

            return null; // Through a custom error here
        } else {
            const uploadResponse = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto",
            });
            console.log(`File has been uploaded successfully on cloudinary with url : 
                ${uploadResponse.url}`);
            return uploadResponse;
        }
    } catch (e) {
        fs.unlinkSync(localFilePath);
        // when upload is failed, also removes the locally stored on backend server
        return null;
    }
};

// Upload an image
// const uploadResult =
//     .catch((error) => {
//         console.log(error);
//     });

// console.log(uploadResult);
