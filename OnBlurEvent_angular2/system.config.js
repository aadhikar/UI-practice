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
System.import('app/user_input_onblur_event').then(null, console.error.bind(console));
