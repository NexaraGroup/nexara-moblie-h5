import cluster from 'node:cluster';
import { cpus } from 'node:os';
import process from 'node:process';

const numCPUs = cpus().length;

if (cluster.isPrimary) {
	console.log(`Primary ${process.pid} is running`);
	// all the magic goes here.
	// `setupPrimary` is altering cluster behaviour
	// see docs: https://nodejs.org/api/cluster.html#clustersetupprimarysettings
	cluster.setupPrimary({
		// node_modules/.bin is directory for all runtime scripts,
		// including `next`.
		// we can work with it like with a common node package,
		// so require.resolve simply gives us path for `next` CLI
		// exec: require.resolve('.bin/next'),
		exec: process.env.docker ? './server.js' : require.resolve('.bin/next'),
		// args should skip first 2 arguments,
		// "node" path and file to execute path
		// args: ['start', ...process.argv.slice(2)],
		// just directly passing all the IO to not handle pipes
		stdio: 'inherit',
		// making stdout and stderr colored
		shell: true,
	});

	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`, { code, signal });
	});
}
