module.exports = {
  scripts: {
    default: 'nps start.local',
    start: {
      local: 'TZ=Asia/Seoul NODE_ENV=local ts-node index.local.ts',
    }
  }
}