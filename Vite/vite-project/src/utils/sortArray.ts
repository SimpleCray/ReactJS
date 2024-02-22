export function splitAndSortArray(arr: Array<WorkspacePrompt>) {
	// Calculate the size of each part
	const partSize = Math.ceil(arr.length / 3);

	// Split the array into three parts
	const part1 = arr.slice(0, partSize);
	const part2 = arr.slice(partSize, 2 * partSize);
	const part3 = arr.slice(2 * partSize);

	// Sort each part in ascending order
	part1.sort((a, b) => a.sequence - b.sequence);
	part2.sort((a, b) => a.sequence - b.sequence);
	part3.sort((a, b) => a.sequence - b.sequence);

	// Return the sorted parts
	return [...part1, ...part2, ...part3];
}

type WorkspacePrompt = {
	id: string;
	action: [string];
	title: string;
	icon: string;
	credit: string;
	prompt_group_id: number;
	prompt_group_title: string;
	sequence: number;
	prompt_group_sequence: number;
	prompt_position: string;
};
