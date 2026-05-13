// Local dev: "" (will fallback to current window origin)
// Production: "https://res.cloudinary.com/your-id/image/upload"
const BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || "";

export const getImagePath = (fileName) => {
  if (!fileName) return "";

  // 1. Determine the host (e.g., http://localhost:5173)
  const host = window.location.origin;
// console.log(host, BASE_URL, fileName);
  // 2. Determine the folder path
  // If BASE_URL is empty, we use the local /images folder
  if (BASE_URL === "") {
   
    return `${host}/images/${fileName}`;
  }

  // 3. If BASE_URL is set (Cloudinary), we use that directly
  return `${BASE_URL}/${fileName}`;
};