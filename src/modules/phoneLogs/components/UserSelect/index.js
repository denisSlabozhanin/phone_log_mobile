import React from 'react';
import { View } from 'react-native';
import { Scrollable, Container } from '../../../../shared/styles';
import ActionBar from '../../containers/ActionBar';
import {
  Title,
  SubTitle,
  TitleSection,
} from './style';

const SUBTITLE = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A debitis deserunt dolorem doloribus fugit hic iste iusto quidem.';

const UserSelectCmp = ({
  renderUsers,
}) => (
  <View style={{ flex: 1, backgroundColor: '#282A2D' }}>
    <Container>
      <Scrollable>
        <TitleSection>
          <Title>Switch Phonelogs</Title>
          <SubTitle>{SUBTITLE}</SubTitle>
        </TitleSection>
        {renderUsers()}
      </Scrollable>
    </Container>
    <ActionBar />
  </View>
);

export default UserSelectCmp;
