const yaml = require('js-yaml');
const process = require('process');
const fs = require('fs');
const path = require('path');
const json2md = require("json2md");
const { title } = require('process');


function main() {
	process.chdir(path.dirname(__filename));

	try {
		const config = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));
		console.log(config);

		const output_dir = "./output";
		if (!fs.existsSync(output_dir)) {
			fs.mkdirSync(output_dir);
		}
		process.chdir(output_dir);

		processConfig(config);
	} catch (e) {
		console.log(e);
	}
}


function processConfig(config) {
	writeJSON(config);
	writeMarkdown(config);
}

function writeJSON(config) {
	fs.writeFileSync("resume.json", JSON.stringify(config));
}

function writeMarkdown(config) {
	const markdown = convertToMarkdown(config);
	fs.writeFileSync("resume.md", markdown);
}

function convertToMarkdown(config) {
	let output = "";

	return json2md([
		{ h2: "Education" },
		getEducation(config),
		{ h2: "Skills" },
		getSkills(config),
		{ h2: "Experience" },
		getExperience(config),
	]);
}

function getEducation(config) {
	const result = [];
	config.educations.forEach(element => {
		result.push({
			blockquote: `${element.description} - ${element.period}`,
		});
	});
	return result;
}

function getSkills(config) {
	const result = [];
	config.skills.forEach(element => {
		result.push(element.name);
	});
	return { ul: result };
}

function getExperience(config) {
	const result = [];
	config.experiences.forEach(experience => {
		result.push({ h3: experience.company });

		experience.positions.forEach(position => {
			result.push(position.name);

			position.teams.forEach(team => {
				if (nn(team.name)) { result.push(team.name); }
				if (nn(team.description)) { result.push(team.description); }
				if (nn(team.period)) { result.push(team.period); }

				team.projects.forEach(project => {
					result.push({ blockquote: project });
				});
			});
		});
	});
	return result;
}

function nn(thing) {
	return thing !== null && thing !== undefined;
}

main();