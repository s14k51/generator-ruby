// Write your tests here

const projectSource = require('../src');

describe('<%= projectName %>', () => {
  it('index', () => {
    expect(projectSource).toStrictEqual('code');
  });
});
