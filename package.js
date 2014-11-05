Package.describe({
  name: 'robertlowe:meteor-phaser',
  summary: 'Phaser.io packaged for meteor',
  version: '1.0.0',
  git: 'https://github.com/robertlowe/meteor-phaser.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('phaser/build/phaser.js', 'client');
  api.export(['Pixi', 'Phaser'], 'client');
});

