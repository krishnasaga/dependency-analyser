import {Command, Flags} from '@oclif/core'
import {printJSON} from '@analyser/node-api';

export default class Focus extends Command {
  static description = 'enter directory name to focus'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    json: Flags.boolean({char: 'j',description: 'prints output in json format'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const {flags} = await this.parse(Focus)
    if(flags.json){
      this.log(printJSON());
    }
  }
}
