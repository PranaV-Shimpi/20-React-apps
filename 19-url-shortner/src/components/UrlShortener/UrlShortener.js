// UrlShortener.js

import React, { useState } from "react";
import { shortenUrl } from "../../utils/bitlyService";
import "./UrlShortener.css";

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const shortUrl = await shortenUrl(longUrl);
      setShortUrl(shortUrl);
    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">URL Shortener</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
          required
        />
        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? <div className="loader"></div> : "Shorten"}
        </button>
      </form>
      <div className="result-container">
        {shortUrl ? (
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="url-box"
          >
            {shortUrl}
          </a>
        ) : (
          <p></p>
        )}

        <button className="copy-btn" onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
      </div>
      {shortUrl ? (
        <a href="/" className="new-link-btn">
          click here to generate new URL Shortener
        </a>
      ) : (
        ""
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UrlShortener;
