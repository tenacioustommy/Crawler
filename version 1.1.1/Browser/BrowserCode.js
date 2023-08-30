var fs = require('fs');

function GetBrowserCode() {
    var code = "";
    // ----------------------------------EventTarget----------------------------------------
    code += fs.readFileSync(`${__dirname}/EventTarget/EventTargetFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/EventTarget/EventTarget.js`) + '\r\n';

    // ----------------------------------CookieStore----------------------------------------
    code += fs.readFileSync(`${__dirname}/CookieStore/CookieStoreFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/CookieStore/CookieStore.js`) + '\r\n';

    // ----------------------------------Navigation----------------------------------------
    code += fs.readFileSync(`${__dirname}/Navigation/NavigationHistoryEntry/NavigationHistoryEntryFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigation/NavigationHistoryEntry/NavigationHistoryEntry.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigation/NavigationFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigation/Navigation.js`) + '\r\n';

    // ----------------------------------OtherClass----------------------------------------
    code += fs.readFileSync(`${__dirname}/OtherClass/BaseAudioContext/BaseAudioContextFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/BaseAudioContext/BaseAudioContext.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/BaseAudioContext/AudioContext/AudioContextFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/BaseAudioContext/AudioContext/AudioContext.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/OtherClass/RTCPeerConnection/RTCPeerConnectionFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/RTCPeerConnection/RTCPeerConnection.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/OtherClass/ServiceWorker/ServiceWorkerFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/ServiceWorker/ServiceWorker.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/OtherClass/SpeechSynthesis/SpeechSynthesisFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/SpeechSynthesis/SpeechSynthesis.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/OtherClass/Request/RequestFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/Request/Request.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/OtherClass/MutationObserver/MutationObserverFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/MutationObserver/MutationObserver.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/OtherClass/Performance/PerformanceFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/Performance/Performance.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/OtherClass/Response/ResponseFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/Response/Response.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/OtherClass/Crypto/CryptoFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/OtherClass/Crypto/Crypto.js`) + '\r\n';

    // ----------------------------------Window----------------------------------------
    code += fs.readFileSync(`${__dirname}/Window/windowFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Window/window.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Window/caches.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Window/chrome.js`) + '\r\n';

    // ----------------------------------HTMLCollection----------------------------------------
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCollection/HTMLCollectionFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCollection/HTMLCollection.js`) + '\r\n';

    // ----------------------------------NodeList----------------------------------------
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/NodeList/NodeListFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/NodeList/NodeList.js`) + '\r\n';

    // ----------------------------------Plugins----------------------------------------
    code += fs.readFileSync(`${__dirname}/MimeType/MimeTypeFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/MimeType/MimeType.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/MimeType/MimeTypeArray/MimeTypeArrayFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/MimeType/MimeTypeArray/MimeTypeArray.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Plugin/PluginFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Plugin/Plugin.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Plugin/PluginArray/PluginArrayFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Plugin/PluginArray/PluginArray.js`) + '\r\n';

    // ----------------------------------XMLHttpRequest----------------------------------------
    code += fs.readFileSync(`${__dirname}/XMLHttpRequest/XMLHttpRequestEventTarget/XMLHttpRequestEventTargetFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/XMLHttpRequest/XMLHttpRequestEventTarget/XMLHttpRequestEventTarget.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/XMLHttpRequest/XMLHttpRequestFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/XMLHttpRequest/XMLHttpRequest.js`) + '\r\n';

    // ----------------------------------History----------------------------------------
    code += fs.readFileSync(`${__dirname}/History/HistoryFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/History/History.js`) + '\r\n';

    // ----------------------------------navigator----------------------------------------
    code += fs.readFileSync(`${__dirname}/Navigator/Permissions/PermissionsFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/Permissions/Permissions.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Navigator/MediaDevices/MediaDevicesFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/MediaDevices/MediaDevices.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Navigator/CredentialsContainer/CredentialsContainerFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/CredentialsContainer/CredentialsContainer.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Navigator/ServiceWorkerContainer/ServiceWorkerContainerFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/ServiceWorkerContainer/ServiceWorkerContainer.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Navigator/Bluetooth/BluetoothFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/Bluetooth/Bluetooth.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Navigator/Clipboard/ClipboardFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/Clipboard/Clipboard.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Navigator/UserActivation/UserActivationFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/UserActivation/UserActivation.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Navigator/NavigatorUAData/NavigatorUADataFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/NavigatorUAData/NavigatorUAData.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Navigator/NetworkInformation/NetworkInformationFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/NetworkInformation/NetworkInformation.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Navigator/NavigatorFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/Navigator.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Navigator/DeprecatedStorageQuota/DeprecatedStorageQuotaFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Navigator/DeprecatedStorageQuota/DeprecatedStorageQuota.js`) + '\r\n';

    // ----------------------------------Storage----------------------------------------
    code += fs.readFileSync(`${__dirname}/Storage/StorageFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Storage/Storage.js`) + '\r\n';

    // ----------------------------------Screen----------------------------------------
    code += fs.readFileSync(`${__dirname}/Screen/ScreenFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Screen/Screen.js`) + '\r\n';

    // ----------------------------------Location----------------------------------------
    code += fs.readFileSync(`${__dirname}/Location/locationFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Location/Location.js`) + '\r\n';

    // ----------------------------------Node----------------------------------------
    code += fs.readFileSync(`${__dirname}/Node/NodeFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Node/Node.js`) + '\r\n';

    // ----------------------------------Document----------------------------------------
    code += fs.readFileSync(`${__dirname}/Document/Document/DocumentFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Document/Document.js`) + '\r\n';

    // ----------------------------------Element----------------------------------------
    code += fs.readFileSync(`${__dirname}/Document/Element/ElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/Element.js`)

    // ----------------------------------HTMLElement----------------------------------------
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLElement.js`) + '\r\n';

    // ----------------------------------CSSStyleDeclaration----------------------------------------
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/CSSStyleDeclaration/CSSStyleDeclarationFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/CSSStyleDeclaration/CSSStyleDeclaration.js`) + '\r\n';

    // ----------------------------------canvas.getContext----------------------------------------
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCanvasElement/CanvasRenderingContext2D/CanvasRenderingContext2DFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCanvasElement/CanvasRenderingContext2D/CanvasRenderingContext2D.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCanvasElement/WebGLRenderingContext/WebGLExtensions/WebGLExtensions.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCanvasElement/WebGLRenderingContext/WebGLShaders/WebGLShaders.js`) + '\r\n';
    
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCanvasElement/WebGLRenderingContext/WebGLRenderingContextFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCanvasElement/WebGLRenderingContext/WebGLRenderingContext.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCanvasElement/WebGL2RenderingContext/WebGL2RenderingContextFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCanvasElement/WebGL2RenderingContext/WebGL2RenderingContext.js`) + '\r\n';

    // ----------------------------------sub HEMLElement----------------------------------------
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLHeadElement/HTMLHeadElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLHeadElement/HTMLHeadElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLBodyElement/HTMLBodyElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLBodyElement/HTMLBodyElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLSpanElement/HTMLSpanElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLSpanElement/HTMLSpanElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLInputElement/HTMLInputElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLInputElement/HTMLInputElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLAnchorElement/HTMLAnchorElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLAnchorElement/HTMLAnchorElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCanvasElement/HTMLCanvasElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLCanvasElement/HTMLCanvasElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLDivElement/HTMLDivElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLDivElement/HTMLDivElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLScriptElement/HTMLScriptElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLScriptElement/HTMLScriptElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLMetaElement/HTMLMetaElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLMetaElement/HTMLMetaElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLIFrameElement/HTMLIFrameElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLIFrameElement/HTMLIFrameElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLLinkElement/DOMTokenList/DOMTokenListFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLLinkElement/DOMTokenList/DOMTokenList.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLLinkElement/HTMLLinkElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLLinkElement/HTMLLinkElement.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLAllCollection/HTMLAllCollectionFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLAllCollection/HTMLAllCollection.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLHtmlElement/HTMLHtmlElementFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Element/HTMLElement/HTMLHtmlElement/HTMLHtmlElement.js`) + '\r\n';

    // ----------------------------------document----------------------------------------
    code += fs.readFileSync(`${__dirname}/Document/DocumentType/DocumentTypeFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/DocumentType/DocumentType.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/HTMLDocument/HTMLDocument.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/document.js`) + '\r\n';

    // ----------------------------------Event----------------------------------------
    code += fs.readFileSync(`${__dirname}/Document/Event/EventFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Event/Event.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Event/UIEvent/UIEventFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Event/UIEvent/UIEvent.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Event/DeviceOrientationEvent/DeviceOrientationEventFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Event/DeviceOrientationEvent/DeviceOrientationEvent.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Event/DeviceMotionEvent/DeviceMotionEventFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Event/DeviceMotionEvent/DeviceMotionEvent.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Event/UIEvent/MouseEvent/MouseEventFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Event/UIEvent/MouseEvent/MouseEvent.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Event/UIEvent/MouseEvent/PointerEvent/PointerEventFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Event/UIEvent/MouseEvent/PointerEvent/PointerEvent.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/Document/Event/UIEvent/TouchEvent/TouchEventFunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/Document/Event/UIEvent/TouchEvent/TouchEvent.js`) + '\r\n';

    code += fs.readFileSync(`${__dirname}/lib/htmlparser.js`) + '\r\n';
    
    return code;
}

module.exports = {
    GetBrowserCode
}