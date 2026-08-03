module.exports = {
  apps: [
    {
      name: "vexa-website",
      cwd: "/var/www/vexa/website",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: 2,
      exec_mode: "cluster",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      error_file: "/var/log/pm2/vexa-website-error.log",
      out_file: "/var/log/pm2/vexa-website-out.log",
      time: true,
    },
  ],
};
