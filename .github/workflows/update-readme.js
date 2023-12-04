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

  // Generate dynamic content for repositories
  const reposList = repos.data.map(repo => `- [${repo.name}](${repo.html_url})`);

  // Generate dynamic content for GitHub stats
  const githubStats = `
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=roroloveorea&show_icons=true&hide=contribs&theme=radical)
`;

  // Read the existing README.md content
  const existingReadme = fs.readFileSync('README.md', 'utf-8');

  // Replace the placeholders with the dynamic content
  const updatedContent = existingReadme
    .replace('<!-- Repositories will be dynamically inserted here -->', reposList.join('\n'))
    .replace('<!-- GitHub stats will be dynamically inserted here -->', githubStats);

  // Write the updated content back to README.md
  fs.writeFileSync('README.md', updatedContent);
}

updateReadme();
