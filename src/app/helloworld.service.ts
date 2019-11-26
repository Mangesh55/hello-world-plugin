import { Plugin, Cordova, IonicNativePlugin } from "@ionic-native/core";
import { Injectable } from "@angular/core";
@Plugin({
  pluginName: "HelloWorld",
  plugin: "cordova-plugin-hello-world",
  pluginRef: "cordova.plugins.HelloWorld",
  repo: "",
  platforms: ["Android", "iOS"],
  install: ""
})
@Injectable()
export class HelloWorld extends IonicNativePlugin {
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  coolMethod(options: {}): Promise<any> {
    return;
  }
}
