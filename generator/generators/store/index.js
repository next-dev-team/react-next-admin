const Generator = require('yeoman-generator');
const camelCase = require('camelcase');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'store name(foo or fooBar):',
        validate: str => {
          if (str.trim().length > 0) {
            if (str.includes('use')) {
              return 'store name not include use';
            }
            return true;
          }

          return 'Please add a name for your new store';
        },
      },
    ]).then(({ name }) => {
      this.answers = {
        name: camelCase(name, {
          pascalCase: true,
        }),
      };
    });
  }

  writing() {
    const { name } = this.answers;

    const storeFolder = camelCase(name);
    const storeName = `use${camelCase(name, { pascalCase: true })}`;

    // copy page into the pages folder
    this.fs.copyTpl(
      this.templatePath('_store.tsx'),
      this.destinationPath(`stores/${storeFolder}/${storeName}.tsx`),
      {
        storeName,
      },
    );

    const hocsPath = './stores/index.ts';

    // update hocs/index.d.ts to add the new namespace to the list
    this.fs.copy(hocsPath, hocsPath, {
      process(content) {
        const regEx = new RegExp(/\/\* new-store-import-goes-here \*\//, 'g');
        const newContent = content
          .toString()
          .replace(
            regEx,
            `export { default as ${storeName} } from './${storeFolder}/${storeName}';\n/* new-store-import-goes-here */`,
          );
        return newContent;
      },
    });
  }
};
