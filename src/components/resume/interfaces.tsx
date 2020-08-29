export interface IData {
	name: IName;
	about?: any;
	position: string;
	birth: IBirth;
	contact: IContact;
	lang: string;
	educations: IEducation[];
	skills: ISkill[];
	experiences: IExperience[];
}

export interface IName {
	first: string;
	middle?: any;
	last: string;
}

export interface IBirth {
	year: number;
	location: string;
}

export interface IContact {
	email: string;
	phone: string;
	street: string;
	city: string;
	state: string;
	zip: number;
	website: string;
	github: string;
}

export interface IEducation {
	degree?: string;
	period: string;
	description: string;
	extra?: string;
	website: string;
}

export interface ISkill {
	name: string;
	level: number;
}

export interface ITeam {
	name: string;
	role: string;
	description: string;
	period: any;
	projects: string[];
}

export interface IPosition {
	name: string;
	period: string;
	teams: ITeam[];
}

export interface IExperience {
	company: ICompany;
	website: string;
	description: string;
	positions: IPosition[];
}

export interface ICompany {
	name: string;
	description: string;
	website: string;
}
