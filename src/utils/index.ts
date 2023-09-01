import Qs from 'qs';

export default {
  stringify(params: object): string {
    return Qs.stringify(params, { arrayFormat: 'repeat', allowDots: true });
  },
  // 深克隆
  deepCopy(obj: object): object {
    let newObj = null;
    if (typeof obj === 'object' && obj !== null) {
      newObj = obj instanceof Array ? [] : {};
      for (const i in obj) {
        newObj[i] = typeof obj[i] === 'object' ? this.deepCopy(obj[i]) : obj[i];
      }
    } else {
      newObj = obj;
    }
    return newObj;
  },
  // 清空对象属性
  clearValue(obj: object): object {
    let newObj = {};
    if (typeof obj === 'object' && obj !== null) {
      for (const i in obj) {
        newObj[i] =
          obj[i] instanceof Array
            ? []
            : typeof obj[i] === 'object'
            ? this.clearValue(obj[i])
            : null;
      }
    } else {
      newObj = null;
    }
    return newObj;
  },
  // 对象数组去重
  unique(arr: { object }[], code: string): object[] {
    const codeKey = code || 'value';
    const obj = {};
    return arr.reduce((cur, next) => {
      if (!obj[next[codeKey]]) {
        obj[next[codeKey]] = true;
        cur.push(next);
      }
      return cur;
    }, []);
  }
};
