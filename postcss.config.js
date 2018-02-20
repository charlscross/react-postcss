module.exports = {
    plugins: [
        require('postcss-mixins'),
        require('postcss-nested'),
        require('postcss-functions'),
        require('postcss-modules-values'),
        require('postcss-calc'),
        require('autoprefixer')({
            browsers: [
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'last 2 Safari versions',
                'Explorer >= 10',
                'iOS >= 9',
                'Android >= 6',
                'last 3 versions',
                '> 1%'
            ]
        })
    ]
}


