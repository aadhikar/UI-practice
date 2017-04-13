System.config({
		transpiler: 'typescript',
		typescriptOptions: 
						{ 
							emitDecoratorMetadata: true 
						},
		packages: 
				{'app': 
					{
						defaultExtension: 'ts'
					}
				},
		map: 
			{ 
				'app': './app' 
			}
	});
System.import('app/form_main').then(null, console.error.bind(console));
