// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  icon: 'src/assets/favicon.png',
  plugins: [
    {
      use: 'gridsome-plugin-typescript',
    },
    // Change below
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://rickandmortyapi.com/graphql',
        fieldName: 'rickandmorty',
        typeName: 'RickAndMorty',
      },
    },
  ],
};
