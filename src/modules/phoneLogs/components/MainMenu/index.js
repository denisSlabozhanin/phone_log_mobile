import React from 'react';
import {
  Panel,
  Container,
  PanelTitle,
  PanelItem,
  ItemText,
} from './style';

const MainMenuComponent = () => (
  <Container>
    <Panel>
      <PanelTitle>Filter</PanelTitle>
      <PanelItem>
        <ItemText>Incoming</ItemText>
      </PanelItem>
      <PanelItem>
        <ItemText>Outgoing</ItemText>
      </PanelItem>
      <PanelItem>
        <ItemText>Stopped by</ItemText>
      </PanelItem>
    </Panel>

    <Panel style={additionalStyles.panelMargin}>
      <PanelItem>
        <ItemText>Date Range</ItemText>
      </PanelItem>
    </Panel>

    <Panel style={additionalStyles.panelMargin}>
      <PanelTitle>Settings</PanelTitle>
      <PanelItem>
        <ItemText>Preferences</ItemText>
      </PanelItem>
      <PanelItem>
        <ItemText>Change Phonelog</ItemText>
      </PanelItem>
      <PanelItem>
        <ItemText>Logout</ItemText>
      </PanelItem>
    </Panel>
  </Container>
);

const additionalStyles = {
  panelMargin: {
    marginTop: 15,
  },
};

export default MainMenuComponent;
