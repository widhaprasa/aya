import builder from 'electron-builder'

cd('dist')

const pkg = await fs.readJson('package.json')

const config = {
  directories: {
    output: `../release/${pkg.version}`,
  },
  // files: ['main', 'preload', 'renderer', 'adb', 'server'],
  files: ['main', 'preload', 'renderer'],
  // asarUnpack: ['adb/**/*', 'server/**/*'],
  asarUnpack: [],
  artifactName: '${name}-${version}-${os}-${arch}.${ext}',
  nsis: {
    allowToChangeInstallationDirectory: true,
    oneClick: false,
    installerSidebar: 'build/installerSidebar.bmp',
  },
  win: {
    target: [
      {
        target: 'nsis',
      },
    ],
  },
  mac: {
    // electronLanguages: ['zh_CN', 'en'],
    electronLanguages: ['en'],
  },
}

await builder.build({
  config,
})
