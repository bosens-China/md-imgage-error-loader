import path from 'path';
import fs from 'fs';

export function isUrl(par: string) {
  return !!/(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(par);
}

// 返回一个绝对路径的文件，这里因为传递进来的root是一个包含文件的路径，所以要去掉后面文件部分
export function getFilePath(fileName: string, root?: string) {
  if (path.isAbsolute(fileName)) {
    return fileName;
  }
  const dir = path.dirname(root!);
  return path.join(dir, fileName);
}

// 文件或者文件夹是否存在
export function isExists(file: string) {
  return fs.existsSync(file);
}
