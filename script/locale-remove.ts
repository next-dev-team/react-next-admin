import * as fs from 'fs';
import * as path from 'path';
import { filetype, langs, removeLangs } from './locale-config.json';

const localeDir = path.resolve(__dirname, '../src/locales');
const localeRemove = filetype === 'json' ? 'ts' : 'json';

const removeLocales = async (removeAll = false) => {
  const removeLang = removeAll ? langs : removeLangs;
  for (const lang of removeLang) {
    const localePath = path.join(localeDir, `${lang}.${localeRemove}`);
    try {
      if (
        await fs.promises
          .stat(localePath)
          .then(() => true)
          .catch(() => false)
      ) {
        await fs.promises.unlink(localePath);
      } else {
        console.log(`${localePath} does not exist, skipping.`);
      }
    } catch (error) {
      console.error(`Error when removing ${localePath}`, error);
    }
  }
};
// auto start
removeLocales()
  .then(() => {
    console.log('done');
  })
  .catch((error) => {
    console.error(error);
  });

export default removeLocales;
