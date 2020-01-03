'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Bienvenido al generador de ' + chalk.red('generator-mxyo') + ' para Santander!'
    ));

    const prompts = [{
      type    : 'input',
      name    : 'nameProject',
      message : '¿Cúal es el nombre de tu proyecto?',
      default : this.appname // Default to current folder name
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props);
      this.props = props;
    });
  }

  writing() {
    if(this.props.nameProject){
      this.fs.copy(
        this.templatePath('fonts'),
        this.destinationPath('dev/fonts')
      );
      mkdirp.sync('dev/scss');
      mkdirp.sync('dev/pug');
      mkdirp.sync('dev/img');
      mkdirp.sync('dev/js');

    }
  }

  install() {
    this.log('dependencies');
    // this.installDependencies();
  }
};
