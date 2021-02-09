import { isUrl, getFilePath } from '../src/utils';

test('isurl', () => {
  expect(isUrl('https://github.com/bosens-China?tab=repositories')).toBeTruthy();
  expect(isUrl('E:\\blog')).toBeFalsy();
});

test('获取绝对文件路径', () => {
  expect(getFilePath('1.txt', 'e:\\test')).toBe('e:\\1.txt');
});
