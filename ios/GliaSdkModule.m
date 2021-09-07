//
//  GliaSdkModule.h
//  ReactNativeExampleApp
//
//  Created by Yurii Dukhovnyi on 05.09.2021.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(GliaSdkModule, NSObject)

RCT_EXTERN_METHOD(configure:(NSDictionary *)props)

@end
