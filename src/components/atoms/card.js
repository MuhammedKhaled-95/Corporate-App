import React from 'react';
import { Button, Card, Title, Paragraph, useTheme, Avatar, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { CustomColors, Shadows } from '_styles';
import CustomTextInput from "./text_input";
import CustomButton from "./button";
import LoadingIndicator from "./loading_indicator";


const CustomCard = props => {
  const theme = useTheme();

  const card = (
    <Card style={{ ...styles.card , ...Shadows.dropShadow, ...Shadows.insetShadow, ...props.style }}>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => { }} />}
      />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        <CustomTextInput label={'Username'} />
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }}  style={{margin: 10}}/>
      <Card.Actions>
        <CustomButton color={theme.colors.primary} name={'Cancel'} mode='outlined' style={{borderColor: theme.colors.primary, borderWidth: 2}}/>
        <LoadingIndicator />
      </Card.Actions>
    </Card>
  );
  return ( card );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: CustomColors.WHITE,
    margin: 10
  }
});

export default CustomCard;