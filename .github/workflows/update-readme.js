const fs = require('fs');
const stats = require('github-readme-stats');

(async () => {
  const markdown = await stats({ username: 'roroloveorea' });
  fs.writeFileSync('README.md', `<!--START_SECTION:repos-->\n${markdown}\n<!--END_SECTION:repos-->`);
})();
