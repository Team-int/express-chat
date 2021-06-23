module.exports = async (client) => {
  client.on('ready', async () => {
    console.log(client.color('cyan', '[Bot]'), `Logged on ${client.user.username}`)
    setInterval(() => {
      switch (Math.floor(Math.random() * 4)) {
      case 0:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: `https://chat.teamint.xyz`,
            type: 'PLAYING',
          },
        })
        break
      case 1:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: '만약을 대비하여 채팅 서비스 만들었음.',
            type: 'PLAYING',
          },
        })
        break
      case 2:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: 'Team Int 서브 프로젝트 mcint!',
            type: 'PLAYING',
          },
        })
        break
      case 3:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: '',
            type: 'PLAYING',
          },
        })
        break
      case 4:
        client.user.setPresence({
          status: 'online',
          activity: {
            name: '',
            type: 'PLAYING',
          },
        })
        break
      }
    }, 10000)
  })
    setTimeout(async () => {
      client.status = '정상 운영중...'
    }, 1000)
}