import React from 'react';
import { FacebookAds } from 'expo';
import { View } from 'react-native';
import Expo from 'expo';

const AdBanner = ({ placementId, styleBanner }) => {
    return (
        <View style={[styleBanner]}>
            <FacebookAds.BannerView
                placementId={placementId}
                type="standard"
            />
        </View>
    );
};
export default AdBanner;
