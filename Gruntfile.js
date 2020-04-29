module.exports = function(grunt) {

    grunt.initConfig({
      watch: {
        less: {
          files: ['assets/css/jQueryPractice.less'],
          tasks: ['less'],
        },
      },
      less: {
        default: {
          files: [
            {
              expand: true,
              src: 'assets/css/jQueryPractice.less',
              ext: '.css'
            }
          ] 
        }
      },
      browserSync: {
        dev: {
          bsFiles: {
              src: [
                'assets/css/*.less',
                'app/*.html'
              ]
          },
          options: {
              watchTask : true,
              server: {
                  baseDir: 'app',
                  directory: true
                  }
              }
          }
    }
    });
    
    // Plugins
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browser-sync');
  
    grunt.registerTask('default', ['browserSync', 'watch']);
  };