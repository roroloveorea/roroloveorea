// update-readme.js
const fs = require('fs');
const axios = require('axios');

async function updateReadme() {
  // Fetch repositories data
  const repos = await axios.get('https://api.github.com/user/repos', {
    headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
  });

  // Fetch GitHub stats
  const stats = await axios.get('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
  });

  // Update README.md content with repos and stats

  // Write the updated content back to README.md
  fs.writeFileSync('README.md', updatedContent);
}

updateReadme();
