module.exports = {
  name: 'generate:pages', // Comando que será executado
  alias: ['gp'], // Comando curto que poderá ser executado
  description: 'Create new pages inside src/pages', // Descrição do que o comando fará

  // Run para poder executar o comando
  run: async (toolbox) => {
    const { parameters, createComponent } = toolbox

    const nameComponent = parameters.first

    await createComponent('src/pages', nameComponent)
  },
}
