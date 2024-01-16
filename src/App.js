import React, { useState, useEffect } from 'react';
import Modal from './components/Model'; // Import your Modal component
import jsonData from './output.json';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (jsonData) {
      setCategories(Object.keys(jsonData));
    }
  }, [jsonData]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedSuggestion('');
    setSelectedPrompt('');
  };

  const handleSuggestionClick = (index) => {
    const suggestion = jsonData[selectedCategory][index];
    setSelectedSuggestion(suggestion);
    setIsModalOpen(true);
    console.log(isModalOpen)
  };

  useEffect(() => {
    if (selectedCategory && jsonData[selectedCategory]) {
      const prompts = jsonData[selectedCategory];
      setSelectedPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
    }
  }, [selectedCategory]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCopySuggestion = () => {
    navigator.clipboard.writeText(selectedSuggestion);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-dark text-light w-100" style={{ height: "100%" }}>
      <h3 className='text-center pt-2'>GPT-PROMPTS</h3>
      <div className="d-flex align-items-center flex-column">
        <div className="mb-3 w-50 d-flex align-items-center flex-column">
          <label htmlFor="categorySelect" className="form-label">
            Select Category:
          </label>
          <select
            id="categorySelect"
            className="form-select h-25"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select...</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {selectedCategory && (
          <>
            <div className="mb-3 w-50">
              <p>Random Prompt: {selectedPrompt}</p>
            </div>
            <div className="w-100 container">
              <h5 className="mb-3">Suggestions:</h5>
              <div className="d-flex flex-wrap">
                {jsonData[selectedCategory].map((suggestion, index) => (
                  <div
                    key={index}
                    className="card text-dark bg-light mb-3 mx-2"
                    style={{ width: '100%', height: 'auto', cursor: 'pointer', overflow: 'hidden', transition: 'height 0.3s' }}
                    onClick={() => handleSuggestionClick(index)}
                  >
                    <div className="card-body">
                      <p className="card-text" style={{ whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {suggestion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {selectedSuggestion && (
        <Modal
          isOpen={isModalOpen}
          suggestion={selectedSuggestion}
          onClose={handleModalClose}
          onCopy={handleCopySuggestion}
        />
      )}
    </div>
  );
}

export default App;
