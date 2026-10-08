import axios from 'axios';

export async function uploadImageToCloudinary(imageFile) {
  if (!imageFile) {
    throw new Error("No image file provided for upload.");
  }

  try {
    // STEP 1: Request upload credentials and signature from your backend
    const sigResponse = await axios.get(`${import.meta.env.VITE_API_URL}/levelcontroll/generate-upload-signatu`);
    const { signature, timestamp, apiKey, cloudName } = sigResponse.data;
    
    // STEP 2: Package the file and cryptographic credentials into FormData
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('api_key', apiKey);
    formData.append('timestamp', timestamp);
    formData.append('signature', signature);
    formData.append('folder', 'findTheObject'); 

    // STEP 3: Send file directly to Cloudinary
    const cloudResponse = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );

    return cloudResponse.data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error.response?.data || error.message);
    throw error;
  }
}