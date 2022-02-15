const core = require('@actions/core');
const github = require('@actions/github');

try {
	const branchName = core.getInput('branch-name');
	let maxLength = parseInt(core.getInput('max-length'), 10);
	if (!maxLength || isNaN(maxLength)) maxLength = 30;

	console.log(`branch-name: ${branchName}`);
	const sanitizedBranchName = branchName.trim().toLowerCase().replace(/[\W_]+/g, "-").substring(0, 63);
	core.setOutput('sanitized-branch-name', sanitizedBranchName);

	let truncated = sanitizedBranchName.substring(0, maxLength);
	console.log('truncated', truncated);

	// Remove ending '-'
	while (truncated.slice(-1) === '-') {
		truncated = truncated.slice(0, -1);
	}

	console.log(`${branchName} -> ${sanitizedBranchName}`);
} catch (error) {
	core.setFailed(error.message);
}