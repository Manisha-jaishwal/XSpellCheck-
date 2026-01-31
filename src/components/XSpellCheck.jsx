import { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function XSpellCheck() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (!value.trim()) {
      setSuggestion("");
      return;
    }

    const words = value.split(/\s+/);

    for (let word of words) {
      const cleanedWord = word.toLowerCase();

      if (customDictionary[cleanedWord]) {
        setSuggestion(customDictionary[cleanedWord]);
        return;
      }
    }

    setSuggestion("");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>

      <textarea
        placeholder="Enter text..."
        value={text}
        onChange={handleChange}
        rows={4}
        cols={50}
      />

      {suggestion && (
        <p>
          Did you mean: <strong>{suggestion}</strong>?
        </p>
      )}
    </div>
  );
}

export default XSpellCheck;
