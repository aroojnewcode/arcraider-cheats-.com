/**
 * @deprecated Use scripts/make-favicon.mjs (npm run brand:icons)
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const script = path.join(process.cwd(), 'scripts/make-favicon.mjs');
const result = spawnSync(process.execPath, [script], { stdio: 'inherit' });
process.exit(result.status ?? 1);
