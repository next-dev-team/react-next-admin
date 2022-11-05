const Generator = require('yeoman-generator')
const camelCase = require('camelcase')
const decamelize = require('decamelize')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'page name(foo or fooBar):',
        validate: (str) => {
          if (str.trim().length > 0) {
            return true
          }
          return 'Please add a name for your new page'
        },
      },
    ]).then(({ name }) => {
      this.answers = {
        name,
      }
    })
  }

  writing() {
    const { name } = this.answers

    const pageName = decamelize(name, '-')
    const componentName = camelCase(name, { pascalCase: true })

    // copy page into the pages folder
    this.fs.copyTpl(
      this.templatePath('_page.tsx'),
      this.destinationPath(`pages/${pageName}.tsx`),
      {
        componentName,
      },
    )
  }
}
