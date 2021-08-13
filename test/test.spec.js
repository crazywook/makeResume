const { expect } = require('chai')

describe('test.spec', () => {
  it('Given secrete variable, then receive NODE_ENV and NODE_DEP', async () => {
    const env = process.env.NODE_ENV
    const test1 = process.env.TEST1
    console.log('env', env)
    console.log('test1', test1)
    expect(env).to.be.equal('secret-sample1')
    expect(dep).to.be.equal('secret-sample1')
  }, 600000)
})
