module.exports = {
    parser: 'postcss-scss',
    plugins: [
        require('autoprefixer')({
            cascade: false
        })
    ]
};
