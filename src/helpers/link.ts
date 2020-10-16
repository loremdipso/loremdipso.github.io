
export function handler<T>(callback: () => T): (event: any) => T {
	return (event: Event) => {
		event.preventDefault();
		return callback();
	};
}