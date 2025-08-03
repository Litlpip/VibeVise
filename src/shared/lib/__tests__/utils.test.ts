describe('Utils', () => {
  test('basic math operations', () => {
    expect(2 + 2).toBe(4)
    expect(3 * 3).toBe(9)
  })

  test('string operations', () => {
    expect('hello'.toUpperCase()).toBe('HELLO')
    expect('test'.length).toBe(4)
  })
})