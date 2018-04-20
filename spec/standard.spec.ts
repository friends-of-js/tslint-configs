import { expect } from 'chai'
import { Linter } from './Linter'

describe('standard config', () => {
  let linter: Linter
  before(() => {
    linter = new Linter('standard')
  })
  describe('member-access', () => {
    it('should not emit error', () => {
      const { errorCount } = linter.lint('member-access')

      expect(errorCount).to.be.equal(0)
    })
  })

  describe('adjacent-overload-signatures', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('adjacent-overload-signatures')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('adjacent-overload-signatures')
      expect(firstError.getFailure()).to.be.equal("All 'test' signatures should be adjacent")
    })
  })

  describe('member-ordering', () => {
    it('should emit error', () => {
      const { errorCount, failures } = linter.lint('member-ordering')

      expect(errorCount).to.be.equal(13)

      expect(failures[0].getRuleName()).to.be.equal('member-ordering')
      expect(failures[0].getFailure()).to.be.equal('Declaration of protected static field not allowed after declaration of private static field. Instead, this should come after public static fields.')

      expect(failures[1].getRuleName()).to.be.equal('member-ordering')
      expect(failures[1].getFailure()).to.be.equal('Declaration of public static field not allowed after declaration of private static field. Instead, this should come at the beginning of the class/interface.')

      expect(failures[2].getRuleName()).to.be.equal('member-ordering')
      expect(failures[2].getFailure()).to.be.equal('Declaration of protected instance field not allowed after declaration of private instance field. Instead, this should come after public instance fields.')

      expect(failures[3].getRuleName()).to.be.equal('member-ordering')
      expect(failures[3].getFailure()).to.be.equal('Declaration of public instance field not allowed after declaration of private instance field. Instead, this should come at the beginning of the class/interface.')

      expect(failures[4].getRuleName()).to.be.equal('member-ordering')
      expect(failures[4].getFailure()).to.be.equal('Declaration of public constructor not allowed after declaration of public instance method. Instead, this should come at the beginning of the class/interface.')

      expect(failures[5].getRuleName()).to.be.equal('member-ordering')
      expect(failures[5].getFailure()).to.be.equal('Declaration of protected static method not allowed after declaration of private static method. Instead, this should come after public static methods.')

      expect(failures[6].getRuleName()).to.be.equal('member-ordering')
      expect(failures[6].getFailure()).to.be.equal('Declaration of public static method not allowed after declaration of private static method. Instead, this should come at the beginning of the class/interface.')

      expect(failures[7].getRuleName()).to.be.equal('member-ordering')
      expect(failures[7].getFailure()).to.be.equal('Declaration of protected instance method not allowed after declaration of private instance method. Instead, this should come after public instance methods.')

      expect(failures[8].getRuleName()).to.be.equal('member-ordering')
      expect(failures[8].getFailure()).to.be.equal('Declaration of public instance method not allowed after declaration of private instance method. Instead, this should come at the beginning of the class/interface.')

      expect(failures[9].getRuleName()).to.be.equal('member-ordering')
      expect(failures[9].getFailure()).to.be.equal('Declaration of public static method not allowed after declaration of public instance method. Instead, this should come after public constructors.')

      expect(failures[10].getRuleName()).to.be.equal('member-ordering')
      expect(failures[10].getFailure()).to.be.equal('Declaration of public instance field not allowed after declaration of public instance method. Instead, this should come after public static fields.')

      expect(failures[11].getRuleName()).to.be.equal('member-ordering')
      expect(failures[11].getFailure()).to.be.equal('Declaration of public static field not allowed after declaration of public instance method. Instead, this should come at the beginning of the class/interface.')

      expect(failures[12].getRuleName()).to.be.equal('member-ordering')
      expect(failures[12].getFailure()).to.be.equal('Declaration of public constructor not allowed after declaration of public instance method. Instead, this should come after public instance fields.')
    })
  })

  describe('no-inferrable-types', () => {
    it('should emit error', () => {
      const {
        errorCount,
        failures: [firstError, secondError, thirdError, fourthError]
      } = linter.lint('no-inferrable-types')

      expect(errorCount).to.be.equal(4)

      expect(firstError.getRuleName()).to.be.equal('no-inferrable-types')
      expect(firstError.getFailure()).to.be.equal('Type number trivially inferred from a number literal, remove type annotation')

      expect(secondError.getRuleName()).to.be.equal('no-inferrable-types')
      expect(secondError.getFailure()).to.be.equal('Type boolean trivially inferred from a boolean literal, remove type annotation')

      expect(thirdError.getRuleName()).to.be.equal('no-inferrable-types')
      expect(thirdError.getFailure()).to.be.equal('Type string trivially inferred from a string literal, remove type annotation')

      expect(fourthError.getRuleName()).to.be.equal('no-inferrable-types')
      expect(fourthError.getFailure()).to.be.equal('Type boolean trivially inferred from a boolean literal, remove type annotation')
    })
  })

  describe('no-internal-module', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-internal-module')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-internal-module')
      expect(firstError.getFailure()).to.be.equal("The internal 'module' syntax is deprecated, use the 'namespace' keyword instead.")
    })
  })

  describe('no-namespace', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-namespace')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-namespace')
      expect(firstError.getFailure()).to.be.equal("'namespace' and 'module' are disallowed")
    })
  })

  describe('no-non-null-assertion', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-non-null-assertion')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-non-null-assertion')
      expect(firstError.getFailure()).to.be.equal('Forbidden non null assertion')
    })
  })

  describe('no-parameter-reassignment', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-parameter-reassignment')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-parameter-reassignment')
      expect(firstError.getFailure()).to.be.equal("Reassigning parameter 'val' is forbidden.")
    })
  })

  describe('no-reference', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-reference')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-reference')
      expect(firstError.getFailure()).to.be.equal('<reference> is not allowed, use imports')
    })
  })

  describe('no-unnecessary-type-assertion', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unnecessary-type-assertion')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unnecessary-type-assertion')
      expect(firstError.getFailure()).to.be.equal('This assertion is unnecessary since it does not change the type of the expression.')
    })
  })

  describe('no-var-requires', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-var-requires')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-var-requires')
      expect(firstError.getFailure()).to.be.equal('require statement not part of an import statement')
    })
  })

  describe('only-arrow-functions', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('only-arrow-functions')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('only-arrow-functions')
      expect(firstError.getFailure()).to.be.equal('non-arrow functions are forbidden')
    })
  })

  describe('prefer-for-of', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('prefer-for-of')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('prefer-for-of')
      expect(firstError.getFailure()).to.be.equal("Expected a 'for-of' loop instead of a 'for' loop with this simple iteration")
    })
  })

  describe('unified-signatures', () => {
    it('should not emit error', () => {
      const { errorCount } = linter.lint('unified-signatures')

      expect(errorCount).to.be.equal(0)
    })
  })

  describe('await-promise', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('await-promise')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('await-promise')
      expect(firstError.getFailure()).to.be.equal("Invalid 'await' of a non-Promise value.")
    })
  })

  describe('ban-comma-operator', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('ban-comma-operator')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('ban-comma-operator')
      expect(firstError.getFailure()).to.be.equal('Do not use comma operator here because it can be easily misunderstood or lead to unintended bugs.')
    })
  })

  describe('curly', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('curly')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('curly')
      expect(firstError.getFailure()).to.be.equal('if statements must be braced')
    })
  })

  describe('forin', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('forin')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('forin')
      expect(firstError.getFailure()).to.be.equal('for (... in ...) statements must be filtered with an if statement')
    })
  })

  describe('label-position', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('label-position')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('label-position')
      expect(firstError.getFailure()).to.be.equal('unexpected label on statement')
    })
  })

  describe('no-arg', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-arg')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-arg')
      expect(firstError.getFailure()).to.be.equal('Access to arguments.callee is forbidden')
    })
  })

  describe('no-bitwise', () => {
    it('should not emit error', () => {
      const { errorCount } = linter.lint('no-bitwise')

      expect(errorCount).to.be.equal(0)
    })
  })

  describe('no-conditional-assignment', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-conditional-assignment')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-conditional-assignment')
      expect(firstError.getFailure()).to.be.equal('Assignments in conditional expressions are forbidden')
    })
  })

  describe('no-console', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-console')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-console')
      expect(firstError.getFailure()).to.be.equal("Calls to 'console.log' are not allowed.")
    })
  })

  describe('no-construct', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-construct')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-construct')
      expect(firstError.getFailure()).to.be.equal('Forbidden constructor, use a literal or simple function call instead')
    })
  })

  describe('no-debugger', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-debugger')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-debugger')
      expect(firstError.getFailure()).to.be.equal('Use of debugger statements is forbidden')
    })
  })

  describe('no-duplicate-super', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-duplicate-super')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-duplicate-super')
      expect(firstError.getFailure()).to.be.equal("Multiple calls to 'super()' found. It must be called only once.")
    })
  })

  describe('no-duplicate-switch-case', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-duplicate-switch-case')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-duplicate-switch-case')
      expect(firstError.getFailure()).to.be.equal("Duplicate switch case: '1'.")
    })
  })

  describe('no-duplicate-variable', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-duplicate-variable')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-duplicate-variable')
      expect(firstError.getFailure()).to.be.equal("Duplicate variable: 'a'")
    })
  })

  describe('no-empty', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-empty')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-empty')
      expect(firstError.getFailure()).to.be.equal('block is empty')
    })
  })

  describe('no-eval', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-eval')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-eval')
      expect(firstError.getFailure()).to.be.equal('forbidden eval')
    })
  })

  describe('no-for-in-array', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-for-in-array')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-for-in-array')
      expect(firstError.getFailure()).to.be.equal('for-in loops over arrays are forbidden. Use for-of or array.forEach instead.')
    })
  })

  describe('no-inferred-empty-object-type', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-inferred-empty-object-type')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-inferred-empty-object-type')
      expect(firstError.getFailure()).to.be.equal('Explicit type parameter needs to be provided to the constructor')
    })
  })

  describe('no-invalid-template-strings', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-invalid-template-strings')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-invalid-template-strings')
      expect(firstError.getFailure()).to.be.equal('Interpolation will only work for template strings.')
    })
  })

  describe('no-invalid-this', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-invalid-this')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-invalid-this')
      expect(firstError.getFailure()).to.be.equal('the "this" keyword is disallowed outside of a class body')
    })
  })

  describe('no-misused-new', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-misused-new')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-misused-new')
      expect(firstError.getFailure()).to.be.equal('Interfaces cannot be constructed, only classes. Did you mean `declare class`?')
    })
  })

  describe('no-null-keyword', () => {
    it('should not emit error', () => {
      const { errorCount } = linter.lint('no-null-keyword')

      expect(errorCount).to.be.equal(0)
    })
  })

  describe('no-return-await', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-return-await')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-return-await')
      expect(firstError.getFailure()).to.be.equal("Unnecessary 'await'.")
    })
  })

  describe('no-sparse-arrays', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-sparse-arrays')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-sparse-arrays')
      expect(firstError.getFailure()).to.be.equal('Array has a missing element.')
    })
  })

  describe('no-string-literal', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-string-literal')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-string-literal')
      expect(firstError.getFailure()).to.be.equal('object access via string literals is disallowed')
    })
  })

  describe('no-string-throw', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-string-throw')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-string-throw')
      expect(firstError.getFailure()).to.be.equal('Throwing plain strings (not instances of Error) gives no stack traces')
    })
  })

  describe('no-this-assignment', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-this-assignment')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-this-assignment')
      expect(firstError.getFailure()).to.be.equal('Assigning `this` reference to local variable not allowed: self.')
    })
  })

  describe('no-unbound-method', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unbound-method')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unbound-method')
      expect(firstError.getFailure()).to.be.equal("Avoid referencing unbound methods which may cause unintentional scoping of 'this'.")
    })
  })

  describe('no-unsafe-finally', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unsafe-finally')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unsafe-finally')
      expect(firstError.getFailure()).to.be.equal("'return' statements in finally blocks are forbidden.")
    })
  })

  describe('no-unused-variable', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError, secondError] } = linter.lint('no-unused-variable')

      expect(errorCount).to.be.equal(2)

      expect(firstError.getRuleName()).to.be.equal('no-unused-variable')
      expect(firstError.getFailure()).to.be.equal("'Test' is declared but its value is never read.")

      expect(secondError.getRuleName()).to.be.equal('no-unused-variable')
      expect(secondError.getFailure()).to.be.equal("'method' is declared but its value is never read.")
    })
  })

  describe('no-use-before-declare', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-use-before-declare')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-use-before-declare')
      expect(firstError.getFailure()).to.be.equal("variable 'first' used before declaration")
    })
  })

  describe('no-var-keyword', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-var-keyword')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-var-keyword')
      expect(firstError.getFailure()).to.be.equal("Forbidden 'var' keyword, use 'let' or 'const' instead")
    })
  })

  describe('prefer-object-spread', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('prefer-object-spread')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('prefer-object-spread')
      expect(firstError.getFailure()).to.be.equal('Use the object spread operator instead.')
    })
  })

  describe('radix', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('radix')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('radix')
      expect(firstError.getFailure()).to.be.equal('Missing radix parameter')
    })
  })

  describe('restrict-plus-operands', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('restrict-plus-operands')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('restrict-plus-operands')
      expect(firstError.getFailure()).to.be.equal("Operands of '+' operation must either be both strings or both numbers, consider using template literals")
    })
  })

  describe('strict-type-predicates', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('strict-type-predicates')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('strict-type-predicates')
      expect(firstError.getFailure()).to.be.equal('Expression is always true.')
    })
  })

  describe('use-default-type-parameter', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('use-default-type-parameter')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('use-default-type-parameter')
      expect(firstError.getFailure()).to.be.equal('This is the default value for this type parameter, so it can be omitted.')
    })
  })

  describe('use-isnan', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('use-isnan')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('use-isnan')
      expect(firstError.getFailure()).to.be.equal('Found an invalid comparison for NaN: val === NaN')
    })
  })

  describe('cyclomatic-complexity', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('cyclomatic-complexity')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('cyclomatic-complexity')
      expect(firstError.getFailure()).to.be.equal('The function test has a cyclomatic complexity of 12 which is higher than the threshold of 10')
    })
  })

  describe('eofline', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('eofline')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('eofline')
      expect(firstError.getFailure()).to.be.equal('file should end with a newline')
    })
  })

  describe('indent', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('indent')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('indent')
      expect(firstError.getFailure()).to.be.equal('2 space indentation expected')
    })
  })

  describe('linebreak-style', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError, secondError] } = linter.lint('linebreak-style')

      expect(errorCount).to.be.equal(2)

      expect(firstError.getRuleName()).to.be.equal('linebreak-style')
      expect(firstError.getFailure()).to.be.equal("Expected linebreak to be 'LF'")

      expect(secondError.getRuleName()).to.be.equal('linebreak-style')
      expect(secondError.getFailure()).to.be.equal("Expected linebreak to be 'LF'")
    })
  })

  describe('max-line-length', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('max-line-length')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('max-line-length')
      expect(firstError.getFailure()).to.be.equal('Exceeds maximum line length of 120')
    })
  })

  describe('no-duplicate-imports', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-duplicate-imports')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-duplicate-imports')
      expect(firstError.getFailure()).to.be.equal("Multiple imports from 'fs' can be combined into one.")
    })
  })

  describe('no-require-imports', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-require-imports')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-require-imports')
      expect(firstError.getFailure()).to.be.equal('require() style import is forbidden')
    })
  })

  describe('prefer-const', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError, secondError, thirdError] } = linter.lint('prefer-const')

      expect(errorCount).to.be.equal(3)

      expect(firstError.getRuleName()).to.be.equal('prefer-const')
      expect(firstError.getFailure()).to.be.equal("Identifier 'c' is never reassigned; use 'const' instead of 'let'.")

      expect(secondError.getRuleName()).to.be.equal('prefer-const')
      expect(secondError.getFailure()).to.be.equal("Identifier 'a' is never reassigned; use 'const' instead of 'let'.")

      expect(thirdError.getRuleName()).to.be.equal('prefer-const')
      expect(thirdError.getFailure()).to.be.equal("Identifier 'b' is never reassigned; use 'const' instead of 'let'.")
    })
  })

  describe('trailing-comma', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('trailing-comma')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('trailing-comma')
      expect(firstError.getFailure()).to.be.equal('Unnecessary trailing comma')
    })
  })

  describe('array-type', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('array-type')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('array-type')
      expect(firstError.getFailure()).to.be.equal("Array type using 'Array<T>' is forbidden. Use 'T[]' instead.")
    })
  })

  describe('arrow-parens', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('arrow-parens')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('arrow-parens')
      expect(firstError.getFailure()).to.be.equal('Parentheses are prohibited around the parameter in this single parameter arrow function')
    })
  })

  describe('arrow-return-shorthand', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('arrow-return-shorthand')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('arrow-return-shorthand')
      expect(firstError.getFailure()).to.be.equal("This arrow function body can be simplified by omitting the curly braces and the keyword 'return'.")
    })
  })

  describe('binary-expression-operand-order', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('binary-expression-operand-order')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('binary-expression-operand-order')
      expect(firstError.getFailure()).to.be.equal('Literal expression should be on the right-hand side of a binary expression.')
    })
  })

  describe('class-name', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('class-name')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('class-name')
      expect(firstError.getFailure()).to.be.equal('Class name must be in pascal case')
    })
  })

  describe('comment-format', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('comment-format')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('comment-format')
      expect(firstError.getFailure()).to.be.equal('comment must start with a space')
    })
  })

  describe('import-spacing', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('import-spacing')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('import-spacing')
      expect(firstError.getFailure()).to.be.equal("Add space after 'import'")
    })
  })

  describe('interface-name', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('interface-name')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('interface-name')
      expect(firstError.getFailure()).to.be.equal('interface name must not have an "I" prefix')
    })
  })

  describe('interface-over-type-literal', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('interface-over-type-literal')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('interface-over-type-literal')
      expect(firstError.getFailure()).to.be.equal('Use an interface instead of a type literal.')
    })
  })

  describe('new-parens', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('new-parens')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('new-parens')
      expect(firstError.getFailure()).to.be.equal('Parentheses are required when invoking a constructor')
    })
  })

  describe('no-angle-bracket-type-assertion', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-angle-bracket-type-assertion')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-angle-bracket-type-assertion')
      expect(firstError.getFailure()).to.be.equal("Type assertion using the '<>' syntax is forbidden. Use the 'as' syntax instead.")
    })
  })

  describe('no-boolean-literal-compare', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-boolean-literal-compare')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-boolean-literal-compare')
      expect(firstError.getFailure()).to.be.equal('This expression is unnecessarily compared to a boolean. Just use it directly.')
    })
  })

  describe('no-consecutive-blank-lines', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-consecutive-blank-lines')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-consecutive-blank-lines')
      expect(firstError.getFailure()).to.be.equal('Consecutive blank lines are forbidden')
    })
  })

  describe('no-trailing-whitespace', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-trailing-whitespace')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-trailing-whitespace')
      expect(firstError.getFailure()).to.be.equal('trailing whitespace')
    })
  })

  describe('no-unnecessary-callback-wrapper', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unnecessary-callback-wrapper')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unnecessary-callback-wrapper')
      expect(firstError.getFailure()).to.be.equal("No need to wrap 'f' in another function. Just use it directly.")
    })
  })

  describe('no-unnecessary-initializer', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unnecessary-initializer')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unnecessary-initializer')
      expect(firstError.getFailure()).to.be.equal("Unnecessary initialization to 'undefined'.")
    })
  })

  describe('no-unnecessary-qualifier', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unnecessary-qualifier')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unnecessary-qualifier')
      expect(firstError.getFailure()).to.be.equal("Qualifier is unnecessary since 'A' is in scope.")
    })
  })

  describe('number-literal-format', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError, secondError] } = linter.lint('number-literal-format')

      expect(errorCount).to.be.equal(2)

      expect(firstError.getRuleName()).to.be.equal('number-literal-format')
      expect(firstError.getFailure()).to.be.equal("Number literal should begin with '0.' and not just '.'.")

      expect(secondError.getRuleName()).to.be.equal('number-literal-format')
      expect(secondError.getFailure()).to.be.equal("Number literal should not have a trailing '0'.")
    })
  })

  describe('object-literal-key-quotes', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('object-literal-key-quotes')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('object-literal-key-quotes')
      expect(firstError.getFailure()).to.be.equal("Unnecessarily quoted property 'prop' found.")
    })
  })

  describe('object-literal-shorthand', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('object-literal-shorthand')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('object-literal-shorthand')
      expect(firstError.getFailure()).to.be.equal("Expected property shorthand in object literal ('{a}').")
    })
  })

  describe('prefer-method-signature', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('prefer-method-signature')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('prefer-method-signature')
      expect(firstError.getFailure()).to.be.equal('Use a method signature instead of a property signature of function type.')
    })
  })

  describe('prefer-template', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('prefer-template')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('prefer-template')
      expect(firstError.getFailure()).to.be.equal('Use a template literal instead of concatenating with a string literal.')
    })
  })

  describe('semicolon', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('semicolon')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('semicolon')
      expect(firstError.getFailure()).to.be.equal('Unnecessary semicolon')
    })
  })

  describe('space-before-function-paren', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('space-before-function-paren')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('space-before-function-paren')
      expect(firstError.getFailure()).to.be.equal('Missing whitespace before function parens')
    })
  })

  describe('space-within-parens', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError, secondError] } = linter.lint('space-within-parens')

      expect(errorCount).to.be.equal(2)

      expect(firstError.getRuleName()).to.be.equal('space-within-parens')
      expect(firstError.getFailure()).to.be.equal('Whitespace within parentheses is not allowed')

      expect(secondError.getRuleName()).to.be.equal('space-within-parens')
      expect(secondError.getFailure()).to.be.equal('Whitespace within parentheses is not allowed')
    })
  })

  describe('switch-final-break', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('switch-final-break')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('switch-final-break')
      expect(firstError.getFailure()).to.be.equal("Final clause in 'switch' statement should end with 'break;'.")
    })
  })

  describe('variable-name', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError, secondError] } = linter.lint('variable-name')

      expect(errorCount).to.be.equal(2)
      expect(firstError.getRuleName()).to.be.equal('variable-name')
      expect(firstError.getFailure()).to.be.equal('variable name must be in lowerCamelCase or UPPER_CASE')

      expect(secondError.getRuleName()).to.be.equal('variable-name')
      expect(secondError.getFailure()).to.be.equal('variable name must be in lowerCamelCase or UPPER_CASE')
    })
  })

  describe('whitespace', () => {
    it('should emit error', () => {
      const { errorCount, failures } = linter.lint('whitespace')

      expect(errorCount).to.be.equal(8)

      expect(failures[0].getRuleName()).to.be.equal('whitespace')
      expect(failures[0].getFailure()).to.be.equal('missing whitespace')

      expect(failures[1].getRuleName()).to.be.equal('whitespace')
      expect(failures[1].getFailure()).to.be.equal('invalid whitespace')

      expect(failures[2].getRuleName()).to.be.equal('whitespace')
      expect(failures[2].getFailure()).to.be.equal('missing whitespace')

      expect(failures[3].getRuleName()).to.be.equal('whitespace')
      expect(failures[3].getFailure()).to.be.equal('missing whitespace')

      expect(failures[4].getRuleName()).to.be.equal('whitespace')
      expect(failures[4].getFailure()).to.be.equal('missing whitespace')

      expect(failures[5].getRuleName()).to.be.equal('whitespace')
      expect(failures[5].getFailure()).to.be.equal('missing whitespace')

      expect(failures[6].getRuleName()).to.be.equal('whitespace')
      expect(failures[6].getFailure()).to.be.equal('missing whitespace')

      expect(failures[7].getRuleName()).to.be.equal('whitespace')
      expect(failures[7].getFailure()).to.be.equal('missing whitespace')
    })
  })

  describe('no-document-write', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-document-write')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-document-write')
      expect(firstError.getFailure()).to.be.equal('Forbidden call to document.write')
    })
  })

  describe('no-exec-script', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-exec-script')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-exec-script')
      expect(firstError.getFailure()).to.be.equal('forbidden execScript: window.execScript')
    })
  })

  describe('no-function-constructor-with-string-args', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-function-constructor-with-string-args')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-function-constructor-with-string-args')
      expect(firstError.getFailure()).to.match(/forbidden: Function constructor with string arguments/)
    })
  })

  describe('no-invalid-regexp', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-invalid-regexp')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-invalid-regexp')
      expect(firstError.getFailure()).to.be.equal('Invalid regular expression: /[/: Unterminated character class')
    })
  })

  describe('no-string-based-set-immediate', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-string-based-set-immediate')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-string-based-set-immediate')
      expect(firstError.getFailure()).to.be.equal("Forbidden setImmediate string parameter: 'string'")
    })
  })

  describe('no-string-based-set-interval', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-string-based-set-interval')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-string-based-set-interval')
      expect(firstError.getFailure()).to.be.equal("Forbidden setInterval string parameter: 'string'")
    })
  })

  describe('no-string-based-set-timeout', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-string-based-set-timeout')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-string-based-set-timeout')
      expect(firstError.getFailure()).to.be.equal("Forbidden setTimeout string parameter: 'string'")
    })
  })

  describe('no-typeof-undefined', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-typeof-undefined')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-typeof-undefined')
      expect(firstError.getFailure()).to.match(/Avoid typeof x === 'undefined' comparisons. Prefer x == undefined or x === undefined/)
    })
  })

  describe('no-unnecessary-bind', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unnecessary-bind')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unnecessary-bind')
      expect(firstError.getFailure()).to.be.equal("Binding function literal with 'this' context. Use lambdas instead")
    })
  })

  describe('no-unnecessary-field-initialization', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unnecessary-field-initialization')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unnecessary-field-initialization')
      expect(firstError.getFailure()).to.be.equal('Unnecessary field initialization. Field explicitly initialized to undefined: prop')
    })
  })

  describe('no-unnecessary-local-variable', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unnecessary-local-variable')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unnecessary-local-variable')
      expect(firstError.getFailure()).to.be.equal('Unnecessary local variable: a')
    })
  })

  describe('no-unnecessary-override', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unnecessary-override')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unnecessary-override')
      expect(firstError.getFailure()).to.be.equal('Unnecessary method override. A method that only calls super can be removed: method')
    })
  })

  describe('prefer-array-literal', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('prefer-array-literal')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('prefer-array-literal')
      expect(firstError.getFailure()).to.be.equal('Replace Array constructor with an array literal: new Array(4, 5)')
    })
  })

  describe('no-ex-assign', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-ex-assign')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-ex-assign')
      expect(firstError.getFailure()).to.be.equal('do not assign to the exception parameter')
    })
  })

  describe('no-unexpected-multiline', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-unexpected-multiline')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-unexpected-multiline')
      expect(firstError.getFailure()).to.be.equal('unexpected newline between function and ( of function call')
    })
  })

  describe('max-func-args', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('max-func-args')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('max-func-args')
      expect(firstError.getFailure()).to.match(/Exceeds maximum function argument list length of 6/)
    })
  })

  describe('no-case-with-or', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-case-with-or')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-case-with-or')
      expect(firstError.getFailure()).to.be.equal('Explicitly specify 2 separate cases that fall through; currently this case clause only works for "1".')
    })
  })

  describe('no-collection-size-mischeck', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-collection-size-mischeck')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-collection-size-mischeck')
      expect(firstError.getFailure()).to.be.equal('The length of "[]" is always ">=0", so fix this test to get the real expected behavior.')
    })
  })

  describe('no-empty-destructuring', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-empty-destructuring')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-empty-destructuring')
      expect(firstError.getFailure()).to.be.equal('Change this pattern to not be empty.')
    })
  })

  describe('no-identical-conditions', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-identical-conditions')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-identical-conditions')
      expect(firstError.getFailure()).to.be.equal('This branch duplicates the one on line 4')
    })
  })

  describe('no-identical-expressions', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-identical-expressions')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-identical-expressions')
      expect(firstError.getFailure()).to.be.equal('Correct one of the identical sub-expressions on both sides of operator "==="')
    })
  })

  describe('no-misspelled-operator', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-misspelled-operator')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-misspelled-operator')
      expect(firstError.getFailure()).to.be.equal('Was "-=" meant instead?')
    })
  })

  describe('no-self-assignment', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-self-assignment')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-self-assignment')
      expect(firstError.getFailure()).to.be.equal('Remove or correct this useless self-assignment.')
    })
  })

  describe('no-redundant-boolean', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-redundant-boolean')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-redundant-boolean')
      expect(firstError.getFailure()).to.be.equal('Remove the unnecessary boolean literal.')
    })
  })

  describe('no-same-line-conditional', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('no-same-line-conditional')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('no-same-line-conditional')
      expect(firstError.getFailure()).to.be.equal('Move this "if" to a new line or add the missing "else".')
    })
  })

  describe('prefer-immediate-return', () => {
    it('should emit error', () => {
      const { errorCount, failures: [firstError] } = linter.lint('prefer-immediate-return')

      expect(errorCount).to.be.equal(1)
      expect(firstError.getRuleName()).to.be.equal('prefer-immediate-return')
      expect(firstError.getFailure()).to.be.equal('Immediately return this expression instead of assigning it to the temporary variable "duration".')
    })
  })
})
