import axios from 'axios';

export async function uploadImageToCloudinary(imageFile) {
  if (!imageFile) {
    throw new Error("No image file provided for upload.");
  }

  try {
    // 1. Get signature and credentials from your backend
    const sigResponse = await axios.get(`${import.meta.env.VITE_API_URL}/levelcontroll/generate-upload-signature`);
    const { signature, timestamp, apiKey, cloudName } = sigResponse.data;
    
    // 2. Package the file and cryptographic credentials into FormData
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('api_key', apiKey);
    formData.append('timestamp', timestamp);
    formData.append('signature', signature);
    formData.append('folder', 'findTheObject');
// TELL CLOUDINARY TO KEEP THE ORIGINAL FILENAME:
    formData.append('use_filename', 'true');
    formData.append('unique_filename', 'false');
    
    // 3. Send file directly to Cloudinary
    const cloudResponse = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );

    // 4. Return only the public_id (e.g., "findTheObject/xyz123") instead of the secure_url
    return cloudResponse.data.public_id; 
  } catch (error) {
    console.error("Cloudinary upload failed:", error.response?.data || error.message);
    throw error;
  }
}