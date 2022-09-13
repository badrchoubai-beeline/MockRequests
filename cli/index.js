const { Command } = require('commander')

const program = new Command()

program
  .option('--appsettings | -as <appsettings.json>', "Use an dotnet project's appsettings.json file")
  .option('--config | -c <config>', "Specify the server's configuration")
  .option('--port | -p <port>', "Specify the server's port")
  .option('--simple', 'Create a simple server where the response codes are VERB-related')

program.parse()
