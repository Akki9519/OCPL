import React from 'react';
import addToHomescreen from 'add-to-homescreen';

function AddToHome() {
  function handleAddToHomeScreen() {
    addToHomescreen({
      customPrompt: {
        title: 'Install MyApp?',
        src: '/path/to/custom-prompt.html',
        cancelMsg: 'No, thanks',
        installMsg: 'Yes, install'
      }
    });
  }

  return (
    <button onClick={handleAddToHomeScreen}>Add to Home Screen</button>
  );
}

export default AddToHome
