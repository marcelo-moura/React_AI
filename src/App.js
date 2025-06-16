import { useState } from 'react';

import './App.css';

function App() {

  const [activeTab, setActiveTab] = useState('ask-ai')

  const handleTabChange = (tab) => {
    //alert(tab);
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <button
        className={activeTab === 'ask-ai' ? 'active' : ''}
        onClick={() => handleTabChange('ask-ai')}>
        Talk with AI
      </button>
      <button
        className={activeTab === 'recipe-generator' ? 'active' : ''}
        onClick={() => handleTabChange('recipe-generator')}>
        Generate Recipes
      </button>
      <button
        className={activeTab === 'image-generator' ? 'active' : ''}
        onClick={() => handleTabChange('image-generator')}>
        Generate Images
      </button>
      <div>
        {activeTab === 'ask-ai' && <h2>Talk with AI</h2>}
        {activeTab === 'recipe-generator' && <h2>Generate Recipes</h2>}
        {activeTab === 'image-generator' && <h2>Generate Images</h2>}
      </div>
    </div>
  );
}

export default App;
