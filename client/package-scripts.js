module.exports = {
  scripts: {
    default: 'nps start.local',
    start: {
      local: {
        script: 'TZ=Asia/Seoul NODE_ENV=local API_URL=http://localhost:9090 node webpackServer.js',
        // script: 'TZ=Asia/Seoul NODE_ENV=local ts-node index.local.ts',
      },
    },
    build: {
      local: 'TZ=Asia/Seoul NODE_ENV=local API_URL=http://http://localhost:9090 webpack',
      dev: 'TZ=Asia/Seoul NODE_ENV=dev webpack',
      prod: 'TZ=Asia/Seoul NODE_ENV=local webpack',
    }
  }
}