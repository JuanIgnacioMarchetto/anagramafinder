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
    const resultText = areAnagrams(word1, word2) ? 'They are anagrams' :'They are not anagrams';
    setResult(resultText);
  };

  const handleSearchAnagrams = () => {
    const wordsList = ['listen', 'silent', 'enlist', 'night', 'thing', 'hello', 'olelh'];

    const foundAnagrams = wordsList.filter((word) => areAnagrams(searchWord, word));

    setResult(`Founded Anagrams : ${foundAnagrams.join(', ')}`);
  };

  return (
    <div>
      <h1>Are they anagrams?</h1>
      <div>
        <input
          type="text"
          placeholder="word 1"
          value={word1}
          onChange={(e) => setWord1(e.target.value)}
        />
        <input
          type="text"
          placeholder="word 2"
          value={word2}
          onChange={(e) => setWord2(e.target.value)}
        />
        <button onClick={handleAnagramCheck}>Comprore</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search Anagram:"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button onClick={handleSearchAnagrams}>Seach for anagrams</button>
      </div>

      <div>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
