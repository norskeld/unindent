import { describe, it, expect } from 'vitest'

import un from './index'

function concat(...segments: Array<string>): string {
  return segments.join('\n') + '\n'
}

describe('un (tagged)', () => {
  it('should unindent if given a multiline string', () => {
    const actual = un`
        begin
          - indented line
          - indented line
        end
    `

    // prettier-ignore
    const expected = concat(
      'begin',
      '  - indented line',
      '  - indented line',
      'end'
    )

    expect(actual).toBe(expected)
  })

  it('should unindent if given a multiline string that starts right after quote/backtick', () => {
    const actual = un`begin
                        - indented line
                        - indented line
                      end
    `

    // prettier-ignore
    const expected = concat(
      'begin',
      '  - indented line',
      '  - indented line',
      'end'
    )

    expect(actual).toBe(expected)
  })

  it('should return as-is if given a single-line string', () => {
    const actual = un`first`
    const expected = `first`

    expect(actual).toBe(expected)
  })

  it('should throw if provided with not a string or template strings array', () => {
    // Creating bare object that doesn't have any means in the prototype chain to let it be
    // converted into string (toString/toPrimitive).
    const bare = Object.create(null)

    expect(() => un`${bare as unknown as string}`).toThrow()
  })
})

describe('un (untagged)', () => {
  it('should unindent given multiline string', () => {
    const actual = un(`
        begin
          - indented line
          - indented line
        end
    `)

    // prettier-ignore
    const expected = concat(
      'begin',
      '  - indented line',
      '  - indented line',
      'end'
    )

    expect(actual).toBe(expected)
  })

  it('should unindent if given a multiline string that starts right after quote/backtick', () => {
    const actual = un(`begin
                        - indented line
                        - indented line
                      end
    `)

    // prettier-ignore
    const expected = concat(
      'begin',
      '  - indented line',
      '  - indented line',
      'end'
    )

    expect(actual).toBe(expected)
  })

  it('should return as-is if given a single-line string', () => {
    const actual = un('first')
    const expected = 'first'

    expect(actual).toBe(expected)
  })

  it('should throw if provided with not a string or template strings array', () => {
    expect(() => un({} as unknown as string)).toThrow()
  })
})
