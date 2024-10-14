import React from 'react';

function UsefulLinks() {
  const links = [
    { name: 'Meta AI', url: 'https://www.meta.ai/' },
    { name: 'Ideogram', url: 'https://ideogram.ai/' },
    { name: 'ChatGPT', url: 'https://chatgpt.com/' },
    { name: 'Google Gemini', url: 'https://gemini.google.com/' },
    { name: 'Claude AI', url: 'https://claude.ai/' },
    { name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com/' },
    { name: 'Google NotebookLM', url: 'https://notebooklm.google/' },
  ];

  return (
    <section className="useful-links">
      <h2>Useful Links</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="note">
        Some of these require you to create a free account before you can use some functionality.
        You can use your Google account for most of them, except Meta which uses your Meta account.
        Gemini requires a Google account but it won't work with your Rhino account just yet.
      </p>
    </section>
  );
}

export default UsefulLinks;