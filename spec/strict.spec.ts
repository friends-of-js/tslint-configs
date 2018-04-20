import { expect } from 'chai'
import { Linter } from './Linter'

describe('strict config', () => {
  let linter: Linter
  before(() => {
    linter = new Linter('strict')
  })
  describe('member-access', () => {
    it('should emit error', () => {
      const {
        errorCount,
        failures: [firstError, secondError, thirdError, fourthError, fifthError]
      } = linter.lint('member-access')

      expect(errorCount).to.be.equal(5)

      expect(firstError.getRuleName()).to.be.equal('member-access')
      expect(firstError.getFailure()).to.be.equal("The class property 'another' must be marked either 'private', 'public', or 'protected'")

      expect(secondError.getRuleName()).to.be.equal('member-access')
      expect(secondError.getFailure()).to.be.equal("The class constructor must be marked either 'private', 'public', or 'protected'")

      expect(thirdError.getRuleName()).to.be.equal('member-access')
      expect(thirdError.getFailure()).to.be.equal("The get property accessor 'testProperty' must be marked either 'private', 'public', or 'protected'")

      expect(fourthError.getRuleName()).to.be.equal('member-access')
      expect(fourthError.getFailure()).to.be.equal("The set property accessor 'testProperty' must be marked either 'private', 'public', or 'protected'")

      expect(fifthError.getRuleName()).to.be.equal('member-access')
      expect(fifthError.getFailure()).to.be.equal("The class method 'anotherMethod' must be marked either 'private', 'public', or 'protected'")
    })
  })

  describe('no-any', () => {
    it('should emit error', () => {
      const { errorCount } = linter.lint('no-any')

      expect(errorCount).to.be.equal(0)
    })
  })

  describe('no-empty-interface', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-empty-interface')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-empty-interface')
      expect(firstError.getFailure()).to.be.equal('An empty interface is equivalent to `{}`.')
    })
  })

  describe('no-import-side-effect', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-import-side-effect')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-import-side-effect')
      expect(firstError.getFailure()).to.be.equal('import with explicit side-effect')
    })
  })

  describe('no-magic-numbers', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-magic-numbers')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-magic-numbers')
      expect(firstError.getFailure()).to.be.equal("'magic numbers' are not allowed")
    })
  })

  describe('promise-function-async', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('promise-function-async')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('promise-function-async')
      expect(firstError.getFailure()).to.be.equal('functions that return promises must be async')
    })
  })

  describe('no-dynamic-delete', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-dynamic-delete')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-dynamic-delete')
      expect(firstError.getFailure()).to.be.equal('Do not delete dynamically computed property keys.')
    })
  })

  describe('no-floating-promises', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-floating-promises')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-floating-promises')
      expect(firstError.getFailure()).to.be.equal('Promises must be handled appropriately')
    })
  })

  describe('no-object-literal-type-assertion', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-object-literal-type-assertion')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-object-literal-type-assertion')
      expect(firstError.getFailure()).to.be.equal('Type assertion on object literals is forbidden, use a type annotation instead.')
    })
  })

  describe('no-shadowed-variable', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-shadowed-variable')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-shadowed-variable')
      expect(firstError.getFailure()).to.be.equal("Shadowed name: 'variable'")
    })
  })

  describe('no-switch-case-fall-through', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-switch-case-fall-through')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-switch-case-fall-through')
      expect(firstError.getFailure()).to.be.equal("expected a 'break' before 'case'")
    })
  })

  describe('no-unsafe-any', () => {
    it('should emit error', () => {
      const { errorCount } = linter.lint('no-unsafe-any')

      expect(errorCount).to.be.equal(0)
    })
  })

  describe('no-unused-expression', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unused-expression')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unused-expression')
      expect(firstError.getFailure()).to.be.equal('unused expression, expected an assignment or function call')
    })
  })

  describe('prefer-conditional-expression', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('prefer-conditional-expression')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('prefer-conditional-expression')
      expect(firstError.getFailure()).to.be.equal("Use a conditional expression instead of assigning to 'this.test' in multiple places.")
    })
  })

  describe('switch-default', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('switch-default')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('switch-default')
      expect(firstError.getFailure()).to.be.equal("Switch statement should include a 'default' case")
    })
  })

  describe('triple-equals', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('triple-equals')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('triple-equals')
      expect(firstError.getFailure()).to.be.equal('== should be ===')
    })
  })

  describe('cyclomatic-complexity', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('cyclomatic-complexity')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('cyclomatic-complexity')
      expect(firstError.getFailure()).to.be.equal('The function test has a cyclomatic complexity of 11 which is higher than the threshold of 10')
    })
  })

  describe('max-classes-per-file', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('max-classes-per-file')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('max-classes-per-file')
      expect(firstError.getFailure()).to.be.equal('A maximum of 1 class per file is allowed.')
    })
  })

  describe('object-literal-sort-keys', () => {
    it('should not emit error', () => {
      const { errorCount } = linter.lint('object-literal-sort-keys')

      expect(errorCount).to.be.equal(0)
    })
  })

  describe('prefer-const', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError, secondError] } = linter.lint('prefer-const')

      expect(errorCount).to.be.equal(2)

      expect(firstError.getRuleName()).to.be.equal('prefer-const')
      expect(firstError.getFailure()).to.be.equal("Identifier 'c' is never reassigned; use 'const' instead of 'let'.")

      expect(secondError.getRuleName()).to.be.equal('prefer-const')
      expect(secondError.getFailure()).to.be.equal("Identifier 'b' is never reassigned; use 'const' instead of 'let'.")
    })
  })

  describe('prefer-readonly', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('prefer-readonly')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('prefer-readonly')
      expect(firstError.getFailure()).to.be.equal("Private member variable 'prop' is never reassigned; mark it as 'readonly'.")
    })
  })

  describe('newline-before-return', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('newline-before-return')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('newline-before-return')
      expect(firstError.getFailure()).to.be.equal('Missing blank line before return')
    })
  })

  describe('one-variable-per-declaration', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('one-variable-per-declaration')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('one-variable-per-declaration')
      expect(firstError.getFailure()).to.be.equal('Multiple variable declarations in the same statement are forbidden')
    })
  })

  describe('return-undefined', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError, secondError] } = linter.lint('return-undefined')

      expect(errorCount).to.be.equal(2)

      expect(firstError.getRuleName()).to.be.equal('return-undefined')
      expect(firstError.getFailure()).to.be.equal('`void` function should use `return;`, not `return undefined;`.')

      expect(secondError.getRuleName()).to.be.equal('return-undefined')
      expect(secondError.getFailure()).to.be.equal('Value-returning function should use `return undefined;`, not just `return;`.')
    })
  })

  describe('export-name', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('ExportName')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('export-name')
      expect(firstError.getFailure()).to.match(/The exported module or identifier name must match the file name\./)
    })
  })

  describe('chai-vague-errors', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('chai-vague-errors')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('chai-vague-errors')
      expect(firstError.getFailure()).to.be.equal('Found chai call with vague failure message. Please add an explicit failure message')
    })
  })

  describe('import-name', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('import-name')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('import-name')
      expect(firstError.getFailure()).to.be.equal("Misnamed import. Import should be named 'Test' but found 'Test1'")
    })
  })

  describe('insecure-random', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError, secondError] } = linter.lint('insecure-random')

      expect(errorCount).to.be.equal(2)

      expect(firstError.getRuleName()).to.be.equal('insecure-random')
      expect(firstError.getFailure()).to.be.equal('Math.random produces insecure random numbers. Use crypto.randomBytes() or window.crypto.getRandomValues() instead')

      expect(secondError.getRuleName()).to.be.equal('insecure-random')
      expect(secondError.getFailure()).to.be.equal('crypto.pseudoRandomBytes produces insecure random numbers. Use crypto.randomBytes() instead')
    })
  })

  describe('mocha-avoid-only', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('mocha-avoid-only')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('mocha-avoid-only')
      expect(firstError.getFailure()).to.be.equal('Do not commit Mocha it.only function call')
    })
  })

  describe('mocha-no-side-effect-code', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('mocha-no-side-effect-code')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('mocha-no-side-effect-code')
      expect(firstError.getFailure()).to.match(/Mocha test contains dangerous variable initialization. Move to before\(\)\/beforeEach\(\)/)
    })
  })

  describe('no-banned-terms', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError, secondError] } = linter.lint('no-banned-terms')

      expect(errorCount).to.be.equal(2)

      expect(firstError.getRuleName()).to.be.equal('no-banned-terms')
      expect(firstError.getFailure()).to.be.equal('Forbidden reference to banned term: caller')

      expect(secondError.getRuleName()).to.be.equal('no-banned-terms')
      expect(secondError.getFailure()).to.be.equal('Forbidden reference to banned term: callee')
    })
  })

  describe('no-constant-condition', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-constant-condition')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-constant-condition')
      expect(firstError.getFailure()).to.be.equal('unexpected constant condition')
    })
  })

  describe('no-control-regex', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-control-regex')

      expect(errorCount).to.be.equal(1)

      expect(firstError.getRuleName()).to.be.equal('no-control-regex')
      expect(firstError.getFailure()).to.be.equal('unexpected control character in regular expression')
    })
  })

  describe('no-empty-line-after-opening-brace', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-empty-line-after-opening-brace')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-empty-line-after-opening-brace')
      expect(firstError.getFailure()).to.be.equal('Opening brace cannot be followed by empty line')
    })
  })

  describe('no-increment-decrement', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-increment-decrement')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-increment-decrement')
      expect(firstError.getFailure()).to.be.equal('Forbidden ++ operator')
    })
  })

  describe('no-multiline-string', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-multiline-string')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-multiline-string')
      expect(firstError.getFailure()).to.match(/Forbidden Multiline string:/)
    })
  })

  describe('no-octal-literal', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-octal-literal')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-octal-literal')
      // tslint:disable-next-line
      expect(firstError.getFailure()).to.be.equal('Octal literals should not be used: \\251')
    })
  })

  describe('no-regex-spaces', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-regex-spaces')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-regex-spaces')
      expect(firstError.getFailure()).to.be.equal('spaces are hard to count - use {3}')
    })
  })

  describe('no-with-statement', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-with-statement')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-with-statement')
      expect(firstError.getFailure()).to.be.equal('Forbidden with statement')
    })
  })

  describe('no-empty-character-class', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-empty-character-class')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-empty-character-class')
      expect(firstError.getFailure()).to.be.equal("don't use empty classes in regular expressions")
    })
  })

  describe('no-extra-boolean-cast', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-extra-boolean-cast')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-extra-boolean-cast')
      expect(firstError.getFailure()).to.be.equal('redundant multiple negation')
    })
  })

  describe('early-exit', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('early-exit')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('early-exit')
      expect(firstError.getFailure()).to.be.equal("Remainder of block is inside 'if' statement. Prefer to invert the condition and 'return' early.")
    })
  })

  describe('no-accessor-recursion', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-accessor-recursion')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-accessor-recursion')
      expect(firstError.getFailure()).to.be.equal('accessor recursion is not allowed')
    })
  })

  describe('no-collapsible-if', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-collapsible-if')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-collapsible-if')
      expect(firstError.getFailure()).to.be.equal('if statements can be merged')
    })
  })

  describe('no-unnecessary-else', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unnecessary-else')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unnecessary-else')
      expect(firstError.getFailure()).to.be.equal('unnecessary else')
    })
  })

  describe('max-func-args', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('max-func-args')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('max-func-args')
      expect(firstError.getFailure()).to.match(/Exceeds maximum function argument list length of 4/)
    })
  })

  describe('no-flag-args', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-flag-args')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-flag-args')
      expect(firstError.getFailure()).to.be.equal('Flag (boolean) arguments are not allowed: rule\nSplit the function into two, such as testWhenRule and testWhenNotRule.')
    })
  })

  describe('newspaper-order', () => {
    it('should not emit error', () => {
      const { errorCount } = linter.lint('newspaper-order')

      expect(errorCount).to.be.equal(0)
    })
  })

  describe('min-class-cohesion', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('min-class-cohesion')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('min-class-cohesion')
      expect(firstError.getFailure()).to.be.equal('The cohesion of this class is too low. Consider splitting this class into multiple cohesive classes: Test')
    })
  })

  describe('no-for-each-push', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-for-each-push')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-for-each-push')
      expect(firstError.getFailure()).to.be.equal('Do not use Array.prototype.push inside of Array.prototype.forEach. Use Array.prototype.map instead to replace both.')
    })
  })

  describe('no-feature-envy', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-feature-envy')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-feature-envy')
      expect(firstError.getFailure()).to.be.equal('Method "salePrice" uses "item" more than its own class "Test". Extract or Move Method from "salePrice" into "item".')
    })
  })

  describe('no-map-without-usage', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-map-without-usage')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-map-without-usage')
      expect(firstError.getFailure()).to.be.equal('Return value from Array.prototype.map should be assigned to a variable. Consider using Array.prototype.forEach instead.')
    })
  })

  describe('no-complex-conditionals', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-complex-conditionals')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-complex-conditionals')
      expect(firstError.getFailure()).to.be.equal('Conditional expression is too complex. Consider moving expression to a variable or function with a meaningful name.')
    })
  })

  describe('prefer-dry-conditionals', () => {
    it('should not emit error', () => {
      const { errorCount } = linter.lint('prefer-dry-conditionals')

      expect(errorCount).to.be.equal(0)
    })
  })

  describe('no-commented-out-code', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-commented-out-code')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-commented-out-code')
      expect(firstError.getFailure()).to.be.equal('No commented out code.')
    })
  })

  describe('no-all-duplicated-branches', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-all-duplicated-branches')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-all-duplicated-branches')
      expect(firstError.getFailure()).to.be.equal("Remove this conditional structure or edit its code blocks so that they're not all the same.")
    })
  })

  describe('no-element-overwrite', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-element-overwrite')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-element-overwrite')
      expect(firstError.getFailure()).to.be.equal('Verify this is the index that was intended; "1" was already set on line 5.')
    })
  })

  describe('no-ignored-initial-value', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-ignored-initial-value')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-ignored-initial-value')
      expect(firstError.getFailure()).to.be.equal('Introduce a new variable or use its initial value before reassigning "str".')
    })
  })

  describe('no-ignored-return', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-ignored-return')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-ignored-return')
      expect(firstError.getFailure()).to.be.equal('The return value of "lastIndexOf" must be used.')
    })
  })

  describe('no-misleading-array-reverse', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-misleading-array-reverse')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-misleading-array-reverse')
      expect(firstError.getFailure()).to.be.equal('Move this array "reverse" operation to a separate statement.')
    })
  })

  describe('no-unthrown-error', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unthrown-error')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unthrown-error')
      expect(firstError.getFailure()).to.be.equal('Throw this error or remove this useless statement')
    })
  })

  describe('no-use-of-empty-return-value', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-use-of-empty-return-value')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-use-of-empty-return-value')
      expect(firstError.getFailure()).to.be.equal('Remove this use of the output from "foo"; "foo" doesn\'t return anything.')
    })
  })

  describe('no-useless-increment', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-useless-increment')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-useless-increment')
      expect(firstError.getFailure()).to.be.equal('Remove this increment or correct the code not to waste it.')
    })
  })

  describe('no-useless-intersection', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-useless-intersection')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-useless-intersection')
      expect(firstError.getFailure()).to.be.equal('Remove this type without members or change this type intersection.')
    })
  })

  describe('cognitive-complexity', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('cognitive-complexity')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('cognitive-complexity')
      expect(firstError.getFailure()).to.be.equal('Refactor this function to reduce its Cognitive Complexity from 8 to the 7 allowed.')
    })
  })

  describe('no-accessor-field-mismatch', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-accessor-field-mismatch')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-accessor-field-mismatch')
      expect(firstError.getFailure()).to.be.equal("Refactor this getter so that it actually refers to the property 'y'")
    })
  })

  describe('no-array-delete', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-array-delete')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-array-delete')
      expect(firstError.getFailure()).to.be.equal('Remove this use of "delete".')
    })
  })

  describe('no-duplicate-string', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-duplicate-string')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-duplicate-string')
      expect(firstError.getFailure()).to.be.equal('Define a constant instead of duplicating this literal 2 times.')
    })
  })

  describe('no-duplicated-branches', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-duplicated-branches')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-duplicated-branches')
      expect(firstError.getFailure()).to.be.equal("This branch's code block is the same as the block for the branch on line 4.")
    })
  })

  describe('no-gratuitous-expressions', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-gratuitous-expressions')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-gratuitous-expressions')
      expect(firstError.getFailure()).to.be.equal('This condition always evaluates to "true".')
    })
  })

  describe('no-hardcoded-credentials', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-hardcoded-credentials')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-hardcoded-credentials')
      expect(firstError.getFailure()).to.be.equal('Review this potentially hardcoded credential.')
    })
  })

  describe('no-identical-functions', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-identical-functions')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-identical-functions')
      expect(firstError.getFailure()).to.be.equal('Update this function so that its implementation is not identical to the one on line 7.')
    })
  })

  describe('no-redundant-parentheses', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-redundant-parentheses')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-redundant-parentheses')
      expect(firstError.getFailure()).to.be.equal('Remove these useless parentheses.')
    })
  })

  describe('no-small-switch', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-small-switch')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-small-switch')
      expect(firstError.getFailure()).to.be.equal('Replace this "switch" statement with "if" statements to increase readability.')
    })
  })

  describe('no-statements-same-line', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-statements-same-line')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-statements-same-line')
      expect(firstError.getFailure()).to.be.equal('Reformat the code to have only one statement per line.')
    })
  })

  describe('no-unconditional-jump', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unconditional-jump')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unconditional-jump')
      expect(firstError.getFailure()).to.be.equal("Refactor this loop; it's executed only once")
    })
  })

  describe('no-unused-array', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unused-array')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unused-array')
      expect(firstError.getFailure()).to.be.equal("Either use this collection's contents or remove the collection.")
    })
  })
})
