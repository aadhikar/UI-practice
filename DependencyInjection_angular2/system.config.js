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
System.import('app/dependency_injection_main').then(null, console.error.bind(console));
