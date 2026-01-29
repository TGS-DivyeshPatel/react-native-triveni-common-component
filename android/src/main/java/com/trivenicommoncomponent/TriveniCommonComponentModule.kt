package com.trivenicommoncomponent

import com.facebook.react.bridge.ReactApplicationContext

class TriveniCommonComponentModule(reactContext: ReactApplicationContext) :
  NativeTriveniCommonComponentSpec(reactContext) {

  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  companion object {
    const val NAME = NativeTriveniCommonComponentSpec.NAME
  }
}
