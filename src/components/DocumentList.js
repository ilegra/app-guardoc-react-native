import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { documentFetch } from '../actions';
import ListItem from './ListItem';

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
    return <ListItem document={document} />;
  }


  render() {
    let imageUrl = require('./img/camera.png');
    const document = {
        name: 'cpf',
        number: '123499999999999999',
        image: imageUrl
      };
    return (
      <View>
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
