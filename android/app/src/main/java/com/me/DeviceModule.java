package com.me;


import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.Context;

public class DeviceModule extends ReactContextBaseJavaModule {
   //constructor
   public DeviceModule(ReactApplicationContext reactContext) {
       super(reactContext);
   }
   //Mandatory function getName that specifies the module name
   @Override
   public String getName() {
       return "Device";
   }
   //Custom function that we are going to export to JS
   @ReactMethod
   public void getBrowserVersion(Callback cb) {
        try {
            PackageManager pm = getCurrentActivity().getPackageManager();
            cb.invoke(null, pm.getPackageInfo("com.android.chrome", 0).versionName.toString());
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
            cb.invoke(e.toString(), null);
        }
   }
}