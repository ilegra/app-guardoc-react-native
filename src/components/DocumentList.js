import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { documentFetch } from '../actions';

class DocumentList extends Component {
  
  componentWillMount() {
    this.props.documentFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ documents }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(documents);
  }

  renderRow(document) {
    return <Text document={document.name} />;
  }

  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text>Eu sou uma lista de documentoss </Text>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const documents = _.map(state.documents, (val, uid) => {
    return { ...val, uid };
  });

  return { documents };
};

export default connect(mapStateToProps, { documentFetch })(DocumentList);
