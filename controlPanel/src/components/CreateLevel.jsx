import { useState } from 'react';
import axios from 'axios';
import { uploadImageToCloudinary } from '../utils/uploadImage'; 

function CreateLevel() {
  // Level fields
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  // Track which target object index is currently selected to receive coordinates from clicks
  const [activeTargetIndex, setActiveTargetIndex] = useState(0);

  // Array of search objects/targets with file & preview fields
  const [targets, setTargets] = useState([
    { name: '', iconFile: null, iconPreview: '', targetX: '', targetY: '', radius: '3.0' }
  ]);
  
  const [loading, setLoading] = useState(false);

  // Instant local preview for main level image
  const handleMainFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  // Add a new empty target row and automatically select it for coordinate clicking
  const handleAddObjectField = () => {
    setTargets(prev => {
      const updated = [
        ...prev, 
        { name: '', iconFile: null, iconPreview: '', targetX: '', targetY: '', radius: '3.0' }
      ];
      setActiveTargetIndex(updated.length - 1); // Switch active focus to the new item
      return updated;
    });
  };

  // Remove a target row and safely adjust active index
  const handleRemoveObjectField = (index) => {
    setTargets(prev => {
      const updated = prev.filter((_, i) => i !== index);
      return updated;
    });
    if (activeTargetIndex >= index && activeTargetIndex > 0) {
      setActiveTargetIndex(prev => prev - 1);
    }
  };

  // Handle standard text fields for targets
  const handleTargetChange = (index, field, value) => {
    setTargets(prev => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  // Handle instant file preview for target icons
  const handleTargetFileChange = (index, e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setTargets(prev => {
        const updated = [...prev];
        updated[index].iconFile = selectedFile;
        updated[index].iconPreview = URL.createObjectURL(selectedFile);
        return updated;
      });
    }
  };

  // Click handler on the main preview image to assign coordinates to the active target
  const handleImageClick = (e) => {
    if (!imagePreview) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
   
    const xPercent = ((mouseX / rect.width) * 100).toFixed(2);
    const yPercent = ((mouseY / rect.height) * 100).toFixed(2);

    // Update the active target's coordinates automatically
    setTargets(prev => {
      const updated = [...prev];
      if (updated[activeTargetIndex]) {
        updated[activeTargetIndex].targetX = xPercent;
        updated[activeTargetIndex].targetY = yPercent;
      }
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please choose a main level image file first!');
      return;
    }

    try {
      setLoading(true);

      // 1. Upload main level image to Cloudinary
      const imageFileName = await uploadImageToCloudinary(file);

      // 2. Upload all target icon files concurrently using Promise.all
      const formattedTargets = await Promise.all(
        targets.map(async (t) => {
          let iconFileName = '';
          if (t.iconFile) {
            iconFileName = await uploadImageToCloudinary(t.iconFile);
          }

          return {
            name: t.name,
            iconFileName: iconFileName,
            targetX: parseFloat(t.targetX) || 0,
            targetY: parseFloat(t.targetY) || 0,
            radius: parseFloat(t.radius) || 3.0
          };
        })
      );

      // 3. Send complete level structure to your backend database
      await axios.post(`${import.meta.env.VITE_API_URL}/levelcontroll/create`, {
        title,
        difficulty,
        imageFileName,
        targets: formattedTargets
      });

      alert('Level and targets created successfully!');
    } catch (error) {
      console.error('Error creating level:', error);
      alert('Failed to create level. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-level-page" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Create a New Level</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* LEVEL INFO SECTION */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', background: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
          <h3>1. Level Details</h3>
          <div>
            <label style={{ display: 'block', marginBottom: '0.3rem' }}>Level Title:</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="e.g., Beach Party"
              required 
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.3rem' }}>Difficulty:</label>
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
            <label style={{ display: 'block', marginBottom: '0.3rem' }}>Main Level Image:</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleMainFileChange} 
              required 
            />
          </div>

          {imagePreview && (
            <div>
              <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.2rem 0' }}>
                💡 Click on the image below to set coordinates for: <strong>{targets[activeTargetIndex]?.name || `Object #${activeTargetIndex + 1}`}</strong>
              </p>
              <section 
                className="img-container"
                onClick={handleImageClick}
                style={{ cursor: 'crosshair', position: 'relative', display: 'inline-block', width: '100%' }}
              >
                <img 
                  src={imagePreview} 
                  alt="Main Preview" 
                  style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '4px', background: '#000' }} 
                />
                
                {/* Optional: Render visual markers on the image for all mapped targets */}
       {/* Visual markers and radius circles for all mapped targets */}
{targets.map((t, i) => {
  if (!t.targetX || !t.targetY) return null;
  
  const isActive = i === activeTargetIndex;
  // Use the radius field value, default to 3% if empty or invalid
  const radiusVal = parseFloat(t.radius) || 3.0; 

  return (
    <div key={i} style={{ pointerEvents: 'none' }}>
      {/* Outer Radius Circle */}
      <div 
        style={{
          position: 'absolute',
          left: `${t.targetX}%`,
          top: `${t.targetY}%`,
          // We multiply the radius value to scale nicely on the preview
          width: `${radiusVal * 6}%`, 
          height: `${radiusVal * 6}%`,
          backgroundColor: isActive ? 'rgba(255, 0, 85, 0.2)' : 'rgba(0, 255, 204, 0.2)',
          border: `2px dashed ${isActive ? '#ff0055' : '#00ffcc'}`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Center Pin Dot */}
      <div 
        style={{
          position: 'absolute',
          left: `${t.targetX}%`,
          top: `${t.targetY}%`,
          width: '10px',
          height: '10px',
          backgroundColor: isActive ? '#ff0055' : '#00ffcc',
          border: '2px solid white',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        title={t.name}
      />
    </div>
  );
})}
              </section>
            </div>
          )}
        </div>

        {/* SEARCH OBJECTS / TARGETS SECTION */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>2. Hidden Search Objects</h3>
            <button 
              type="button" 
              onClick={handleAddObjectField}
              style={{ padding: '0.4rem 0.8rem', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              + Add Object
            </button>
          </div>

          {targets.map((target, index) => {
            const isActive = index === activeTargetIndex;
            return (
              <div 
                key={index} 
                onClick={() => setActiveTargetIndex(index)}
                style={{ 
                  border: isActive ? '2px solid #0070f3' : '1px solid #ddd', 
                  padding: '1rem', 
                  borderRadius: '6px', 
                  background: isActive ? '#f0f7ff' : '#fff', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>
                    Object #{index + 1} {isActive && <span style={{ color: '#0070f3', fontSize: '0.8rem' }}>(Currently Active for Clicking)</span>}
                  </strong>
                  {targets.length > 1 && (
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveObjectField(index);
                      }}
                      style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div onClick={(e) => e.stopPropagation()}>
                  <label style={{ fontSize: '0.9rem' }}>Object Name:</label>
                  <input 
                    type="text" 
                    value={target.name} 
                    onChange={(e) => handleTargetChange(index, 'name', e.target.value)} 
                    placeholder="e.g., Waldo" 
                    required 
                    style={{ width: '100%', padding: '0.4rem' }}
                  />
                </div>

                {/* Target Icon File Input */}
                <div onClick={(e) => e.stopPropagation()}>
                  <label style={{ fontSize: '0.9rem' }}>Object Icon File:</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => handleTargetFileChange(index, e)} 
                    required 
                  />
                  {target.iconPreview && (
                    <div style={{ marginTop: '0.4rem' }}>
                      <img 
                        src={target.iconPreview} 
                        alt="Icon Preview" 
                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #ccc' }} 
                      />
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }} onClick={(e) => e.stopPropagation()}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '0.9rem' }}>Target X (%):</label>
                    <input 
                      type="number" 
                      step="any" 
                      value={target.targetX} 
                      onChange={(e) => handleTargetChange(index, 'targetX', e.target.value)} 
                      placeholder="45.5" 
                      required 
                      style={{ width: '100%', padding: '0.4rem' }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '0.9rem' }}>Target Y (%):</label>
                    <input 
                      type="number" 
                      step="any" 
                      value={target.targetY} 
                      onChange={(e) => handleTargetChange(index, 'targetY', e.target.value)} 
                      placeholder="78.2" 
                      required 
                      style={{ width: '100%', padding: '0.4rem' }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '0.9rem' }}>Radius:</label>
                    <input 
                      type="number" 
                      step="any" 
                      value={target.radius} 
                      onChange={(e) => handleTargetChange(index, 'radius', e.target.value)} 
                      style={{ width: '100%', padding: '0.4rem' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{ padding: '0.75rem', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer' }}
        >
          {loading ? 'Uploading Images & Saving Level...' : 'Publish Level'}
        </button>
      </form>
    </div>
  );
}

export default CreateLevel;