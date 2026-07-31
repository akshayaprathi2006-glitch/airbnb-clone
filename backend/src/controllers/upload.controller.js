const uploadToCloudinary = require("../utils/cloudinaryUpload");

const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded",
            });
        }

        const result = await uploadToCloudinary(req.file.buffer);

        return res.status(200).json({
            message: "Image uploaded successfully",
            imageUrl: result.secure_url,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    uploadImage,
};