module.exports = function (grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:dev',
    'less:dev',
    'exec:tsc',
    'copy:dev',
    'coffee:dev'
  ]);
};
