import * as fs from 'fs';
import * as path from 'path';
import { allTranslation } from '../src/locales/translation/_all';
import { filetype, langs } from './locale-config.json';

import removeLocale from './locale-remove';

const writeFile = () => {
  for (const lang of langs) {
    const localePath = path.resolve(
      __dirname,
      `../src/locales/${lang}.${filetype}`,
    );
    if (fs.existsSync(localePath)) {
      console.warn(`Warning: ${localePath} already exist, skipping.`);
      continue;
    }
    const content =
      filetype === 'json'
        ? JSON.stringify(allTranslation(lang), null, 2)
        : `export default allTranslation('${lang}')`;
    try {
      fs.writeFileSync(localePath, content);
    } catch (error) {
      console.error(`Error when creating ${localePath}`, error);
    }
  }
};

removeLocale(true).then(() => {
  writeFile();
});
