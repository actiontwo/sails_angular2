module.exports = function (grunt) {
  grunt.config.set('jade', {
    templates: {
      options: {
        pretty: true
      },
      files: [
        {
          expand: true,
          cwd: 'assets',
          src: ['**/*.jade'],
          dest: '.tmp/public/',
          ext: '.html'
        }
      ]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jade');
};
