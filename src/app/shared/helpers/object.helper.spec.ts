import { isNullOrUndef, parseToJson } from './object.helper';

describe('object.helper', () => {
  describe('#isNullOrUndef', () => {
    it('引数にnullを渡した場合、trueを返すこと', () => {
      const result = isNullOrUndef(null);
      expect(result).toBe(true);
    });

    it('引数にundefinedを渡した場合、trueを返すこと', () => {
      const result = isNullOrUndef(undefined);
      expect(result).toBe(true);
    });

    it('引数に空文字を渡した場合、falseを返すこと', () => {
      const result = isNullOrUndef('');
      expect(result).toBe(false);
    });

    it('引数に空の配列を渡した場合、falseを返すこと', () => {
      const result = isNullOrUndef([]);
      expect(result).toBe(false);
    });

    it('引数に0を渡した場合、falseを返すこと', () => {
      const result = isNullOrUndef(0);
      expect(result).toBe(false);
    });

    it('引数にfalseを渡した場合、falseを返すこと', () => {
      const result = isNullOrUndef(false);
      expect(result).toBe(false);
    });
  });

  describe('#parseToJson', () => {
    it('引数にobjectのstring型を渡した場合、object型を返すこと', () => {
      const result = parseToJson('{"aaa": 1,"bbb": "1"}');
      const expectObj = { aaa: 1, bbb: '1' };
      expect(result).toEqual(expectObj);
    });

    it('引数にobjectでないstring型を渡した場合、nullを返すこと', () => {
      const result = parseToJson('{"aaa": 1,"bbb": "1"');
      expect(result).toBeNull();
    });
  });
});
