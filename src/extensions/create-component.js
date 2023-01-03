module.exports = (toolbox) => {
  const {
    filesystem,
    template: { generate },
    print: { success, error },
  } = toolbox

  async function createComponent(folder, name) {
    if (!name) {
      error('Name must be specified')
      return
    }

    const checkIsVueApp = await isVueApp()

    const componentTemplate = checkIsVueApp
      ? 'component-vue.js.ejs'
      : 'component-react.js.ejs'

    const extension = checkIsVueApp ? '.vue' : `.js`

    await generate({
      template: componentTemplate, // De onde vem o template do componente
      target: `${folder}/${name}/index${extension}`, // Para onde eu quero enviar o componente criado (pasta do usuário na maquina local dele)
      props: { name: name },
    })

    if (!checkIsVueApp) {
      await generate({
        template: 'styles.js.ejs', // De onde vem o template do style
        target: `${folder}/${name}/style.js`, // Para onde eu quero enviar o style criado (pasta do usuário na maquina local dele)
      })
    }

    success(`Generated ${folder}/${name}`)
  }

  async function isVueApp() {
    const packageSystem = await filesystem.read('package.json', 'json')
    return !!packageSystem.dependencies['vue']
  }

  toolbox.createComponent = createComponent
}
