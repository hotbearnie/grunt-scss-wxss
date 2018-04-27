/**
 * 路径可根据自己需求修改，
 * 这是一个超级简单的配置，但运用到项目开发中能够大大地提高效率
 * */
module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'pages/',
                    src: ['**/*.scss'],
                    dest: 'pages/',
                    ext: '.css'
                }],

            },
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: [
                            "> 1%",
                            "last 2 versions",
                            "not ie <= 8"
                        ]})
                ]
            },
            dist: {
                src: ['pages/**/*.css','pages/**/*.wxss']
            }
        },
        watch: {
            files: ['Gruntfile.js','pages/**/*.scss'],
            tasks: ['sass','postcss'],
        },
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','postcss','watch']);
};

