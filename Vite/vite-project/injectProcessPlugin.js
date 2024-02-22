// injectProcessPlugin.js
import { Plugin } from 'vite';

export function injectProcess() {
  return {
    name: 'inject-process',
    transform(code, id) {
      if (id.endsWith('.js')) {
        // Inject `process` at the beginning of each JavaScript file
        return `const process = { env: {} }; ${code}`;
      }
    },
  } as Plugin;
}
