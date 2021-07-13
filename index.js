require('egg').startCluster({
  baseDir: __dirname,
  workers: 2,
  port: 8000,
});
