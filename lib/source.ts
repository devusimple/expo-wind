import { docs } from 'collections/index';
import { loader } from 'fumadocs-core/source';

const sourceInput = docs.toFumadocsSource();

export const source = loader({
  baseUrl: '/docs',
  source: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    files: (sourceInput.files as any)() as any,
  },
});
