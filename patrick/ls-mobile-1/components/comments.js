import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../css/stylesheet';

export default class Comments extends React.Component {
  render() {
    return (
      <View>
        <Text>This TEXT is from /components/comments.js</Text>
        <View style={styles.comments}>
          <Text style={styles.commentText}>
            Some User: A comment on the picture
          </Text>
        </View>
        <View style={styles.comments}>
          <Text style={styles.commentText}>
            Another User: A comment on the picture
          </Text>
        </View>
        <View style={styles.comments}>
          <Text style={styles.commentText}>
            And Another User: A comment on the picture
          </Text>
        </View>
      </View>
    );
  }
}
