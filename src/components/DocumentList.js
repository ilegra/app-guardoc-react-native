import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, ScrollView, Text, ListView } from 'react-native';
import Expo from 'expo';
import { FacebookAds } from 'expo';
import firebase from 'firebase';
import { documentFetch } from '../actions';
import ListItem from './common/ListItem';
import AdComponent from './common/AdComponent';

const adsManager = new FacebookAds.NativeAdsManager('423524284700930_423531444700214', 1);

class DocumentList extends Component {

  componentWillMount() {
    this.props.documentFetch();
    this.createDataSource(this.props);
    this.initAnalytics();
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  initAnalytics() {
    const { currentUser } = firebase.auth();
    Expo.Segment.identify(currentUser.uid);
    Expo.Segment.track('Tela inicial');
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
    return (
      <ScrollView>
        <View>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </View>
        <View>
          <AdComponent adsManager={adsManager} />
        </View>
      </ScrollView>
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
