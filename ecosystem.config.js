module.exports = {
  apps: [
    {
      name: 'my-nest-app',
      script: 'dist/main.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
