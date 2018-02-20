'use strict'

module.exports = {
    plugins: [
        require('postcss-mixins'),
        require('postcss-nested'),
        require('postcss-functions'),
        require('postcss-calc'),
        require('autoprefixer')({
            // @see {@link https://confluence.tomtomgroup.com/display/TTB/Atlantis%3A+Catalog+of+Specifications#Atlantis:CatalogofSpecifications-BrowserandDevices}
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


