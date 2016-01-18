module.exports = function( grunt ) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.initConfig( {
        handlebars: {
            node: {
                options: {
                    commonjs: true,
                    processContent: function(content, filepath) {
                        return content.replace(/[\r\n]/g, '')
                                      .replace(/\n/g, '')
                                      .replace(/>\s*</g, '><');
                    },
                    processName: function( filepath ) {
                        return filepath.replace(/^.*[\\\/]/, '').split(".")[0];
                    },
                    namespace: false,
                },
                files: [
                    {
                      expand: true,
                      cwd: "./",
                      src: ['hbs/**/*.hbs'],
                      rename: function( dest, src ) {
                          if( ! /hbs\/server\//.test( src ) ) {
                              return "client/js/templates/" + src.replace(/^hbs[\/]/, '');
                          } else {
                              return "templates/" + src.replace(/^.*[\\\/]/, '').split(".")[0] + ".js" 
                          }
                      },
                      ext: '.js'
                    }
                ]
            }
        },
        watch: {
            handlebars: {
                files: [ 'hbs/**/*.hbs' ],
                tasks: [ 'handlebars:node' ],
                options: {
                  nospawn: true
                },
            }
        }
    } );
}
