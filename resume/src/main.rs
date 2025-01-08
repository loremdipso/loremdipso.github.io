#![allow(dead_code, unused_variables, unused_imports)]
use data::{Data, Metadata, Section, Wrapper};
use pulldown_cmark::{Event, HeadingLevel, Parser, Tag, TextMergeStream};
use std::{collections::BTreeMap, fs::File, io::Write};
mod data;

#[derive(Debug, PartialEq)]
enum Action {
    None,
    Skip(Box<Action>),
    StartDocument,
    StartSection,
    StartSectionExperiences,
    StartOrganization,
    StartTeam,
    StartTeamExperiences,
}

fn main() {
    let content = include_str!("../resume.md");
    let pieces = content
        .split("---")
        .filter(|e| !e.is_empty())
        .collect::<Vec<_>>();
    assert!(pieces.len() == 2, "Invalid format");

    let mut metadata: Metadata = serde_yaml::from_str(pieces[0]).expect("Invalid frontmatter");

    let mut data = Data::default();
    let mut last_action = Action::None;

    for event in TextMergeStream::new(Parser::new(pieces[1])) {
        // dbg!(&event, &last_action);
        match &event {
            Event::Text(text) => {
                match last_action {
                    Action::Skip(next_action) => {
                        last_action = *next_action;
                    }
                    Action::StartDocument => {
                        metadata.page_title = Some(text.to_string());
                    }
                    Action::StartSection => {
                        let section = data.get_last_section();
                        section.title = text.to_string();
                        last_action = Action::StartSectionExperiences;
                    }
                    Action::StartOrganization => {
                        let organization = data.get_last_organization();
                        if organization.title.is_empty() {
                            let pieces = text
                                .split(" | ")
                                .map(|e| e.trim())
                                .filter(|e| !e.is_empty())
                                .collect::<Vec<_>>();
                            if pieces.len() == 3 {
                                organization.title = pieces[0].into();
                                organization.short_description = pieces[1].into();
                                organization.timeframe = pieces[2].into();
                            } else {
                                organization.title = pieces[0].to_string();
                            }
                        } else {
                            organization.long_description = text.to_string();
                        }
                    }
                    Action::StartTeam => {
                        let team = data.get_last_team();
                        let pieces = text
                            .split(" | ")
                            .map(|e| e.trim())
                            .filter(|e| !e.is_empty())
                            .collect::<Vec<_>>();
                        if pieces.len() == 2 {
                            team.title = pieces[0].into();
                            team.timeframe = pieces[1].into();
                        } else {
                            team.title = text.to_string();
                        }
                        last_action = Action::StartTeamExperiences;
                    }
                    Action::StartSectionExperiences => {
                        data.get_last_section().experiences.push(text.to_string());
                    }
                    Action::StartTeamExperiences => {
                        data.get_last_team().experiences.push(text.to_string());
                    }
                    _ => panic!(),
                };
                // last_action = Action::None;
            }
            Event::Start(start_tag) => match start_tag {
                Tag::Link { dest_url, .. } => match last_action {
                    Action::StartOrganization => {
                        data.get_last_organization().url = dest_url.to_string();
                        last_action = Action::Skip(Box::new(Action::StartOrganization));
                    }
                    _ => panic!(),
                },
                Tag::Heading { level, .. } => match level {
                    HeadingLevel::H1 => {
                        last_action = Action::StartDocument;
                    }
                    HeadingLevel::H2 => {
                        data.add_new_section();
                        last_action = Action::StartSection;
                    }
                    HeadingLevel::H3 => {
                        data.add_new_organization();
                        last_action = Action::StartOrganization;
                    }
                    HeadingLevel::H4 => {
                        data.add_new_team();
                        last_action = Action::StartTeam;
                    }
                    _ => panic!(),
                },
                Tag::List(_) => {}
                Tag::Item => {}
                Tag::Paragraph => {
                    //
                }
                _ => {
                    dbg!(&event);
                    panic!();
                }
            },
            Event::End(_) => {
                //     last_action = Action::None;
            }
            _ => panic!(),
        };
    }

    write_to_file(metadata, data);
}

fn write_to_file(metadata: Metadata, data: Data) {
    let mut file = File::create("resume.toml").expect("Can't open output");
    file.write_all(
        toml::to_string(&Wrapper { metadata, data })
            .unwrap()
            .as_bytes(),
    )
    .expect("Error writing to file");
}
