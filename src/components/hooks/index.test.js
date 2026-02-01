import * as hooks from './index';

describe('hooks index', () => {
  it('should export useKeyPress', () => {
    expect(hooks.useKeyPress).toBeDefined();
  });

  it('should export useFetch', () => {
    expect(hooks.useFetch).toBeDefined();
  });

  it('should export useModal', () => {
    expect(hooks.useModal).toBeDefined();
  });
});
