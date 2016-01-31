module.exports = function (grunt) {
  grunt.registerTask('syncAssets', [
    'jst:dev',
    'less:dev',
    'exec:tsc',
    'sync:dev',
    'coffee:dev'
  ]);
};
