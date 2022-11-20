import {Command, Flags} from '@oclif/core'
import {getGraph,GRAPH_FORMAT} from '@analyser/node-api';
import './a';

export default class Scan extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    exclude: Flags.string({char: 'e'}),
    include: Flags.string({char: 'i'}),
    depends: Flags.string({char: 'd'}),
    extensions: Flags.string({char: 'd'}),
    format: Flags.enum({char: 'a',default: 'DOT',options: ['ASCII','JSON','SVG','DOT','DATA_URI']}),
  }

  static args = [{name: 'file'}]

 
  public async run(): Promise<void> {

    const {args, flags} = await this.parse(Scan)
    this.log(getGraph({ format: flags.format as GRAPH_FORMAT, path: '/packages/cli/src/commands/scan.ts' }));
  
  }
}
