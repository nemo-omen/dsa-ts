import { beforeEach, describe, expect, test } from 'bun:test';
import { List } from './List';
import { Node } from './Node';

describe('List', () => {
  const emptyList = new List<number>();
  test('constructor', () => {
    expect(emptyList.length).toBe(0);
  });
});