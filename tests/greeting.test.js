import test from 'node:test';
import assert from 'node:assert/strict';

import { getGreeting } from '../public/src/greeting.js';

test('приветствует с именем', () => {
  assert.equal(getGreeting('Алиса'), 'Привет, Алиса!');
});

test('убирает лишние пробелы', () => {
  assert.equal(getGreeting('  Алиса  '), 'Привет, Алиса!');
});

test('если имя пустое, использует дефолт', () => {
  assert.equal(getGreeting(''), 'Привет, будущий программист!');
  assert.equal(getGreeting(null), 'Привет, будущий программист!');
  assert.equal(getGreeting(undefined), 'Привет, будущий программист!');
});
