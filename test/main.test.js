import path from 'path';
import mdError from '../src/main';

test('md错误图片处理', () => {
  const value = `# lib-typescript-template

![mlt](/1.png)`;

  expect(mdError.call({ resource: path.join(process.cwd(), 'README.md') }, value)).toMatch(
    /xxx.png/
  );
  expect(mdError.call({ resource: path.join(process.cwd(), 'README.md') }, value)).not.toMatch(
    '1.png'
  );
});
