import loaderUtils from 'loader-utils';
import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';
import { isExists, isUrl, getFilePath } from './utils';

interface Ioptions {
  src: string | ((file: string, currentPath: string) => string);
}

function mdImgage(this: any, source: string) {
  const options = (loaderUtils.getOptions(this) as unknown) as Ioptions;
  const { src = 'http://xxx.png' } = options || {};
  const removeArr: Array<string> = [];
  const md = new MarkdownIt();
  const env = {};
  // 当前资源路径
  const dirpath: string = this.resource;
  const ast = md.parse(source, env);

  // 解析
  function next(astmd: Array<Token>) {
    if (!Array.isArray(astmd)) {
      return;
    }
    for (const child of astmd) {
      // 在末尾插入
      if (child.tag === 'img') {
        // 判断一下图片在不在集合中，如果在就不修改，否则改变
        for (const item of child.attrs || []) {
          if (item.includes('src')) {
            const [, url] = item;
            if (!isUrl(url)) {
              const base = getFilePath(url, dirpath);
              // 如果文件不存在
              if (!isExists(base)) {
                removeArr.push(url);
              }
            }
          }
        }
      }

      if (Array.isArray(child.children)) {
        next(child.children);
      }
    }
  }
  next(ast);
  // 讲收集起来的错误图片进行统一处理，src可能为函数
  const text = removeArr.reduce((x, y) => {
    if (typeof src === 'string') {
      return x.replace(y, src);
    }
    if (typeof src === 'function') {
      return x.replace(y, src(y, dirpath));
    }
    return x;
  }, source);
  return text;
}

export default mdImgage;
