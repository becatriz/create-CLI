module.exports = {
  name: 'generate:component', // Comando que será executado
  alias: ['gc'], // Comando curto que poderá ser executado
  description: 'Create new component inside src/components', // Descrição do que o comando fará

  // Run para poder executar o comando
  run: async (toolbox) => {
    const { parameters, createComponent } = toolbox

    const nameComponent = parameters.first

    await createComponent('src/components', nameComponent)
  },
}
