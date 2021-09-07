//
//  GliaSdk.swift
//  ReactNativeExampleApp
//
//  Created by Yurii Dukhovnyi on 05.09.2021.
//

import Foundation
import GliaWidgets
import SalemoveSDK

@objc(GliaSdkModule)
class GliaSdkModule: NSObject {

  @objc func configure(_ props: NSDictionary) {

    DispatchQueue.main.async {

      let visitorContext = VisitorContext(
        type: .page,
        url: "https://www.salemoveinsurance.com"
      )

      Glia.sharedInstance.onEvent = { event in
        switch event {
          case .started:
            print("STARTED")
          case .engagementChanged(let kind):
            print("CHANGED:", kind)
          case .ended:
            print("ENDED")
          case .minimized:
            print("MINIMIZED")
          case .maximized:
            print("MAXIMIZED")
          @unknown default:
            print(event)
        }
      }

        try? Glia.sharedInstance.start(
          EngagementKind.chat,
          configuration: Configuration(
            appToken: props.value(forKey: "appToken") as! String,
            apiToken: props.value(forKey: "apiToken")  as! String,
            environment: .beta,
            site: props.value(forKey: "siteId") as! String
          ),
          queueID: props.value(forKey: "queueId") as! String,
          visitorContext: visitorContext
        )
    }
  }

  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
