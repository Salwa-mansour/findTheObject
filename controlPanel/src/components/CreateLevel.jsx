import { useState } from 'react';
import axios from 'axios';
import { uploadImageToCloudinary } from '../utils/uploadImage'; 

function CreateLevel() {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [file, setFile] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(''); // For instant local preview

  // Triggered immediately when a file is chosen
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Create a temporary local URL to preview the image right away
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please choose an image file first!');
      return;
    }

    try {
      setLoading(true);

      // 1. Upload file to Cloudinary and get the secure URL back
      const imageUrl = await uploadImageToCloudinary(file);

      // 2. Save level metadata to your backend database
      await axios.post(`${import.meta.env.VITE_API_URL}/levelcontroll/levels`, {
        name,
        difficulty,
        imageUrl,
      });

      alert('Level created successfully!');
    } catch (error) {
      console.error('Error creating level:', error);
      alert('Failed to create level. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-level-page" style={{ padding: '2rem' }}>
      <h2>Create a New Level</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Level Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="e.g., Beach Party"
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Difficulty:</label>
          <select 
            value={difficulty} 
            onChange={(e) => setDifficulty(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Main Image:</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            required 
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{ padding: '0.75rem', background: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          {loading ? 'Uploading to Cloudinary...' : 'Save & Upload Level'}
        </button>
      </form>

      {/* Shows the image preview instantly when selected */}
      {imagePreview && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Image Preview:</h3>
          <img 
            src={imagePreview} 
            alt="Selected Level Preview" 
            style={{ maxWidth: '100%', width: '400px', height: 'auto', borderRadius: '8px', border: '1px solid #ccc' }} 
          />
        </div>
      )}
    </div>
  );
}

export default CreateLevel;