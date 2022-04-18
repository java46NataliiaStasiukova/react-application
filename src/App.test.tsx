import React from 'react';
import LifeMatrix from './service/LifeMatrix';

const ar = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
];
const lifeM = new LifeMatrix(ar);
test('life game nextStep 1', () => {
//TODO: first test
const expected = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
]
expect(lifeM.nextStep()).toEqual(expected);
});
test('life game nextStep 2', () => {
//TODO: second test
const expected = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
expect(lifeM.nextStep()).toEqual(expected);
});
test('life game nextStep 3', () => {
const expected = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
  ]
  expect(lifeM.nextStep()).toEqual(expected);
  });



/**
 * const operations = new Operations
 * 
 * test('convert test', () => {
    const ar = [1, 2];
    const expected = [2, 4];
    expect(operations.convert(ar, (n: number) => n * 2)).toEqual(expected)

     convert(ar: number[], convertor: (n: number) => number): number[]{
        return ar.map(convertor);
    }
})
 */

/**
 * const ar = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
const lifeM = new LifeMatrix(ar);


test('life game nextStep 1', () => {
//TODO: first test
const expected = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0]
]
expect(lifeM.nextStep()).toEqual(expected); //.toStrictEqual(expected)
const expected1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]
expect(lifeM.nextStep()).toEqual(expected1);
});
test('life game nextStep 2', () => {
//TODO: second test
const expected1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]
expect(lifeM.nextStep()).toEqual(expected1);
});
test('life game nextStep 3', () => {
  //TODO: 3d test
  const expected1 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
  expect(lifeM.nextStep()).toEqual(expected1);
  });
 */