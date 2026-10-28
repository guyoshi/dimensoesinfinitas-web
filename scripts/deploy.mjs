import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const apiKey = process.env.BEEHIIV_API_KEY;
const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
if (!apiKey || !/^pub_[0-9a-fA-F-]+$/.test(publicationId || '')) {
  console.error('Missing beehiiv build secrets or invalid publication ID. Deployment stopped.');
  process.exit(1);
}

const directory = mkdtempSync(join(tmpdir(), 'dimensoesinfinitas-deploy-'));
const secretsFile = join(directory, 'secrets.json');
try {
  writeFileSync(secretsFile, JSON.stringify({
    BEEHIIV_API_KEY: apiKey,
    BEEHIIV_PUBLICATION_ID: publicationId,
  }), { mode: 0o600 });
  const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  const result = spawnSync(command, ['wrangler', 'deploy', '--secrets-file', secretsFile], {
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
} finally {
  rmSync(directory, { recursive: true, force: true });
}
