import React, { useState } from 'react';

function App() {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [result, setResult] = useState('');

  const areAnagrams = (word1, word2) => {
    const removeSpacesAndToLower = (str) => {
      let result = '';
      for (const element of str) {
        if (element !== ' ') {
          result += element.toLowerCase();
        }
      }
      return result;
    };

    const sortString = (str) => {
      return removeSpacesAndToLower(str).split('').sort().join('');
    };

    return sortString(word1) === sortString(word2);
  };

  const handleAnagramCheck = () => {
    const resultText = areAnagrams(word1, word2) ? 'Son anagramas' : 'No son anagramas';
    setResult(resultText);
  };

  const handleSearchAnagrams = () => {
    
    const foundAnagrams = ['anagram1', 'anagram2'];
    setResult(`Anagramas encontrados: ${foundAnagrams.join(', ')}`);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Palabra 1"
          value={word1}
          onChange={(e) => setWord1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Palabra 2"
          value={word2}
          onChange={(e) => setWord2(e.target.value)}
        />
        <button onClick={handleAnagramCheck}>Comprobar Anagramas</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Buscar anagramas con:"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button onClick={handleSearchAnagrams}>Buscar Anagramas</button>
      </div>

      <div>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
