
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.initConfig({
    typescript: {
      base: {
        src: ['app.ts'],
        options: {
          module: 'commonjs', //or commonjs 
          target: 'es5', //or es3 
          sourceMap: true,
          declaration: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['*.ts'],
        tasks: ['typescript'],
      },
    }
  });

   grunt.registerTask('default', ['typescript']);
   grunt.registerTask('dev', ['default', 'watch']);


}