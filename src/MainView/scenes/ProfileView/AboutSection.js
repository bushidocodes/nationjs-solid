import React, { Component } from "react";
import styled from "styled-components";
import { List, Value } from "@solid/react";

const SectionWrapper = styled.div`
  background-color: white;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  border: solid 1px #d3d6db;
`;

const SectionBody = styled.div`
  padding: 10px;
`;

const SectionHeader = styled.div`
  background-color: #f5f6f7;
  padding-left: 12px;
  padding-right: 12px;
  border-bottom: solid 1px #d3d6db;
`;

const SubSectionHeader = styled.h4`
  padding-left: 12px;
  padding-right: 12px;
  margin: 0px;
`;

class AboutSection extends Component {
  render() {
    return (
      <SectionWrapper>
        <SectionHeader>
          <h3>About</h3>
        </SectionHeader>
        <SectionBody>
          <SubSectionHeader>Biographic Data</SubSectionHeader>
          <ul>
            <li>
              First Name:
              <Value
                src={`[${decodeURIComponent(this.props.webid)}].firstName`}
              />
            </li>
            <li>
              Last Name:
              <Value
                src={`[${decodeURIComponent(this.props.webid)}].familyName`}
              />
            </li>
            <li>
              Nickname:
              <Value src={`[${decodeURIComponent(this.props.webid)}].nick`} />
            </li>
            <li>
              Birthday:
              <Value
                src={`[${decodeURIComponent(this.props.webid)}].birthday`}
              />
            </li>
            <li>
              Age:
              <Value src={`[${decodeURIComponent(this.props.webid)}].age`} />
            </li>
            <li>
              Gender:
              <Value src={`[${decodeURIComponent(this.props.webid)}].gender`} />
            </li>
          </ul>
          <SubSectionHeader>Pages</SubSectionHeader>
          <ul>
            <List
              src={`[${decodeURIComponent(this.props.webid)}].weblog`}
              // container={items => <ul>{items}</ul>}
              children={(elem, index) => (
                <a href={elem.id}>
                  <li key={index}>{elem.id}</li>
                </a>
              )}
              filter={elem => elem && elem.id}
            />
            <List
              src={`[${decodeURIComponent(this.props.webid)}].homepage`}
              container={items => items}
              children={(elem, index) => (
                <a href={elem.id}>
                  <li key={index}>{elem.id}</li>
                </a>
              )}
              filter={elem => elem && elem.id}
            />
            <List
              src={`[${decodeURIComponent(this.props.webid)}].page`}
              container={items => items}
              children={(elem, index) => (
                <a href={elem.id}>
                  <li key={index}>{elem.id}</li>
                </a>
              )}
              filter={elem => elem && elem.id}
            />
            <List
              src={`[${decodeURIComponent(this.props.webid)}].publications`}
              container={items => items}
              children={(elem, index) => (
                <a href={elem.id}>
                  <li key={index}>{elem.id}</li>
                </a>
              )}
              filter={elem => elem && elem.id}
            />
            <List
              src={`[${decodeURIComponent(this.props.webid)}].account`}
              container={items => items}
              children={(elem, index) => (
                <a href={elem.id}>
                  <li key={index}>{elem.id}</li>
                </a>
              )}
              filter={elem => elem && elem.id}
            />
          </ul>
          <SubSectionHeader>Source Data</SubSectionHeader>
          <ul>
            <a href={decodeURIComponent(this.props.webid)}>
              <li>{decodeURIComponent(this.props.webid)}</li>
            </a>
          </ul>
        </SectionBody>
      </SectionWrapper>
    );
  }
}

export default AboutSection;
