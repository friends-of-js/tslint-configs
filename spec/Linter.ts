import * as fs from 'fs'
import * as path from 'path'
import { Configuration, Linter as TslintLinter } from 'tslint'
import { Program } from 'typescript'

export class Linter {
  private readonly ts: Program
  private readonly type: string

  public constructor (type: string) {
    this.type = type
    this.ts = TslintLinter.createProgram(path.resolve(__dirname, '../tsconfig.json'))
  }

  public lint (fixture: string) {
    const filePath = path.resolve(__dirname, `./fixtures/${this.type}/${fixture}.ts`)
    const configPath = path.resolve(__dirname, `../src/${this.type}.ts`)

    const options = { fix: false, formatter: 'json', typeCheck: true }
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const linter = new TslintLinter(options, this.ts)
    const configuration = Configuration.findConfiguration(configPath, filePath).results
    linter.lint(filePath, fileContents, configuration)

    return linter.getResult()
  }
}
