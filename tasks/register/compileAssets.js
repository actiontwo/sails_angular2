module.exports = function (grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:dev',
    'less:dev',
    'jade:templates',
    'exec:tsc',
    'copy:dev',
    'coffee:dev'
  ]);
};
