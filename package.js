Package.describe({
  name: 'oaalto:meteor-phaser',
  summary: 'Phaser.io packaged for meteor, forked from https://atmospherejs.com/robertlowe/meteor-phaser',
  version: '2.4.4',
  git: 'https://github.com/OdeFu/meteor-phaser.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('phaser/build/phaser.js', 'client', { bare: true });
});

