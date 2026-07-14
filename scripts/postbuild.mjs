/**
 * Post-build housekeeping for static hosting:
 *  - expose the prerendered /404/ page as 404.html (GitHub Pages convention)
 *  - sanity-check that .nojekyll made it into the output
 */
import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const build = fileURLToPath(new URL('../build', import.meta.url));

const notFound = join(build, '404', 'index.html');
if (existsSync(notFound)) {
	copyFileSync(notFound, join(build, '404.html'));
	console.log('postbuild: wrote 404.html');
}

const nojekyll = join(build, '.nojekyll');
if (!existsSync(nojekyll)) {
	writeFileSync(nojekyll, '');
	console.log('postbuild: wrote .nojekyll');
}
