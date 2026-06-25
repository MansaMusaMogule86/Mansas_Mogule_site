module.exports = {
  apps: [
    {
      name: 'mansas-moguls',
      script: 'dist/index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOST: '0.0.0.0'
      },
      watch: false,
      instances: 1,
      exec_mode: 'cluster',
      merge_logs: true
    }
  ]
}
