import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const response = await fetch('http://localhost:5173/api/update', {
	headers: {
		authentication: 'Bearer <device-token>'
	}
});

if (response.status == 401) {
	console.log('Invalid token');
} else if (response.status == 204 || !response.body) {
	console.log('No Update');
} else {
	const fileStream = createWriteStream('output.png');
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	await finished(Readable.fromWeb(response.body).pipe(fileStream));
	console.log('Done');
}
