use serde::{Deserialize, Serialize};

#[derive(Debug, PartialEq, Serialize, Deserialize, Default)]
pub struct Wrapper {
    pub metadata: Metadata,
    pub data: Data,
}

#[derive(Debug, PartialEq, Serialize, Deserialize, Default)]
pub struct Metadata {
    pub name: String,
    pub title: Option<String>,
    pub page_title: Option<String>,
    pub email: Option<String>,
}

#[derive(Debug, PartialEq, Serialize, Deserialize, Default)]
pub struct Data {
    pub sections: Vec<Section>,
}

// Like EXPERIENCE, SKILLS, etc.
#[derive(Debug, PartialEq, Serialize, Deserialize, Default)]
pub struct Section {
    pub title: String,
    pub organizations: Vec<Organization>,
    pub experiences: Vec<String>,
}

#[derive(Debug, PartialEq, Serialize, Deserialize, Default)]
pub struct Organization {
    pub title: String,
    pub short_description: String,
    pub long_description: String,
    pub url: String,
    pub timeframe: String,
    pub teams: Vec<Team>,
}

#[derive(Debug, PartialEq, Serialize, Deserialize, Default)]
pub struct Team {
    pub title: String,
    pub timeframe: String,
    pub experiences: Vec<String>,
}

impl Data {
    pub fn add_new_section(&mut self) {
        self.sections.push(Section::default());
    }

    pub fn get_last_section(&mut self) -> &mut Section {
        self.sections.last_mut().unwrap()
    }

    pub fn get_last_organization(&mut self) -> &mut Organization {
        self.get_last_section().organizations.last_mut().unwrap()
    }

    pub fn add_new_organization(&mut self) {
        self.get_last_section()
            .organizations
            .push(Organization::default());
    }

    pub fn get_last_team(&mut self) -> &mut Team {
        self.get_last_organization().teams.last_mut().unwrap()
    }

    pub fn add_new_team(&mut self) {
        self.get_last_organization().teams.push(Team::default());
    }
}
