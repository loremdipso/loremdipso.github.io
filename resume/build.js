const yaml = require('js-yaml');
const process = require('process');
const fs = require('fs');
const path = require('path');
const json2md = require("json2md");
const puppeteer = require('puppeteer');

function main() {
	process.chdir(path.dirname(__filename));

	try {
		const data = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));
		// console.log(data);

		const output_dir = "./output";
		if (!fs.existsSync(output_dir)) {
			fs.mkdirSync(output_dir);
		}

		process.chdir(output_dir);
		processConfig(data);
	} catch (e) {
		console.log(e);
	}
}

function processConfig(data) {
	writeJSON(data);
	writeMarkdown(data);
	writePDF(data);
}

function writeJSON(data) {
	fs.writeFileSync("resume.json", JSON.stringify(data));
	fs.copyFileSync("resume.json", "../../static/resume.json");
}

function writeMarkdown(data) {
	const markdown = convertToMarkdown(data);
	fs.writeFileSync("resume.md", markdown);
}

function convertToMarkdown(data) {
	let output = "";

	function getEducation(data) {
		const result = [];
		data.educations.forEach(element => {
			result.push({
				blockquote: `${element.description} - ${element.period}`,
			});
		});
		return result;
	}

	function getSkills(data) {
		const result = [];
		data.skills.forEach(element => {
			result.push(element.name);
		});
		return { ul: result };
	}

	function getExperience(data) {
		const result = [];
		data.experiences.forEach(experience => {
			result.push({ h3: experience.company.name });
			result.push(experience.company.description);
			result.push(experience.company.website);

			experience.positions.forEach(position => {
				result.push(position.name);

				position.teams.forEach(team => {
					if (nn(team.name)) { result.push(team.name); }
					if (nn(team.description)) { result.push(team.description); }
					if (nn(team.period)) { result.push(team.period); }

					if (team.projects) {
						team.projects.forEach(project => {
							result.push({ blockquote: project });
						});
					}
				});
			});
		});
		return result;
	}



	return json2md([
		{ h2: "Education" },
		getEducation(data),
		{ h2: "Skills" },
		getSkills(data),
		{ h2: "Experience" },
		getExperience(data),
	]);
}

function nn(thing) {
	return thing !== null && thing !== undefined;
}

async function writePDF(data) {
	console.log('Connected to server ...');
	console.log('Exporting ...');
	const config = {
		port: 8000
	};

	try {
		const browser = await puppeteer.launch({
			args: ['--no-sandbox']
		});
		const page = await browser.newPage();
		await page.goto(`http://localhost:${config.port}/resume-raw`, {
			waitUntil: 'networkidle2'
		});

		await page.pdf({
			path: `resume.pdf`,
			format: 'A4'
		});
		fs.copyFileSync("resume.pdf", "../../static/resume.pdf");
		await browser.close();
	} catch (err) {
		throw new Error(err);
	}

	console.log('Finished exports.');
};

main();