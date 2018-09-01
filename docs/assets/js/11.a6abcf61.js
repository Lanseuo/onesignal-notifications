(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{165:function(t,e,n){"use strict";n.r(e);var i=n(0),a=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("There are different types of notifications:")]),t._v(" "),n("ul",[n("li",[t._v("You can send a "),n("router-link",{attrs:{to:"./segment-notification.html"}},[n("code",[t._v("SegmentNotification")])]),t._v(" to a specific segment of users. For example to all users.")],1),t._v(" "),n("li",[t._v("You can send a "),n("router-link",{attrs:{to:"./filter-notification.html"}},[n("code",[t._v("FilterNotification")])]),t._v(" based on filters. For example only users who have a specific version of the app.")],1),t._v(" "),n("li",[t._v("You can send a "),n("router-link",{attrs:{to:"./device-notification.html"}},[n("code",[t._v("DeviceNotification")])]),t._v(" to specific devices using their id.")],1)]),t._v(" "),n("p",[t._v("Let's send a notification to all users. If the users clicks on the notification, GitHub opens.")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("p",[n("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-content-language",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),n("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("p",[n("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-email-content",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),n("OutboundLink")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[n("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-attachments",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),n("OutboundLink")],1)]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("p",[n("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-action-buttons",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),n("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),n("p",[n("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-appearance",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),n("OutboundLink")],1)]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),n("p",[n("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-delivery",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),n("OutboundLink")],1)]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),n("p",[n("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-grouping-collapsing",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),n("OutboundLink")],1)]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),n("p",[n("a",{attrs:{href:"https://documentation.onesignal.com/reference#section-platform-to-deliver-to",target:"_blank",rel:"noopener noreferrer"}},[t._v("More details"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"send-notifications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-notifications","aria-hidden":"true"}},[this._v("#")]),this._v(" Send Notifications")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" onesignal "),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" OneSignal"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SegmentNotification\n\nclient "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" OneSignal"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"MY_APP_ID"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"MY_REST_API_KEY"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnotification_to_all_users "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SegmentNotification"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    contents"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"en"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Hello from OneSignal-Notifications"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    included_segments"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("SegmentNotification"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALL"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"https://github.com"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclient"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notification_to_all_users"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"common-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Common parameters")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"notification-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notification-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Notification Content")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("contents")]),t._v(" "),n("li",[t._v("headings")]),t._v(" "),n("li",[t._v("subtitle")]),t._v(" "),n("li",[t._v("template_id")]),t._v(" "),n("li",[t._v("content_available")]),t._v(" "),n("li",[t._v("mutable_content")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"e-mail-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#e-mail-content","aria-hidden":"true"}},[this._v("#")]),this._v(" E-Mail Content")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("email_body")]),t._v(" "),n("li",[t._v("email_subject")]),t._v(" "),n("li",[t._v("email_from_name")]),t._v(" "),n("li",[t._v("email_from_address")]),t._v(" "),n("li",[t._v("email_from_address")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"attachments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attachments","aria-hidden":"true"}},[this._v("#")]),this._v(" Attachments")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("data")]),t._v(" "),n("li",[t._v("url")]),t._v(" "),n("li",[t._v("ios_attachments")]),t._v(" "),n("li",[t._v("big_picture")]),t._v(" "),n("li",[t._v("adm_big_picture")]),t._v(" "),n("li",[t._v("chrome_big_picture")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"action-buttons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action-buttons","aria-hidden":"true"}},[this._v("#")]),this._v(" Action Buttons")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("buttons")]),this._v(" "),e("li",[this._v("web_buttons")]),this._v(" "),e("li",[this._v("ios_category")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"appearance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appearance","aria-hidden":"true"}},[this._v("#")]),this._v(" Appearance")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("android_channel_id")]),t._v(" "),n("li",[t._v("existing_android_channel_id")]),t._v(" "),n("li",[t._v("android_background_layout")]),t._v(" "),n("li",[t._v("small_icon")]),t._v(" "),n("li",[t._v("large_icon")]),t._v(" "),n("li",[t._v("adm_small_icon")]),t._v(" "),n("li",[t._v("adm_large_icon")]),t._v(" "),n("li",[t._v("chrome_web_icon")]),t._v(" "),n("li",[t._v("chrome_web_image")]),t._v(" "),n("li",[t._v("chrome_web_badge")]),t._v(" "),n("li",[t._v("firefox_icon")]),t._v(" "),n("li",[t._v("chrome_icon")]),t._v(" "),n("li",[t._v("ios_sound")]),t._v(" "),n("li",[t._v("android_sound")]),t._v(" "),n("li",[t._v("adm_sound")]),t._v(" "),n("li",[t._v("wp_sound")]),t._v(" "),n("li",[t._v("wp_wns_sound")]),t._v(" "),n("li",[t._v("android_led_color")]),t._v(" "),n("li",[t._v("android_accent_color")]),t._v(" "),n("li",[t._v("android_visibility (available values: "),n("code",[t._v("Notification.ANDROID_VISIBILITY_PUBLIC")]),t._v(", "),n("code",[t._v("Notification.ANDROID_VISIBILITY_PRIVATE")]),t._v(", "),n("code",[t._v("Notification.ANDROID_VISIBILITY_SECRET")]),t._v(")")]),t._v(" "),n("li",[t._v("ios_badge_type (available values: "),n("code",[t._v("Notification.IOS_BADGE_TYPE_NONE")]),t._v(", "),n("code",[t._v("Notification.IOS_BADGE_TYPE_SET_TO")]),t._v(", "),n("code",[t._v("Notification.IOS_BADGE_TYPE_INCREASE")]),t._v(")")]),t._v(" "),n("li",[t._v("ios_badge_count")]),t._v(" "),n("li",[t._v("collapse_id")]),t._v(" "),n("li",[t._v("apns_alert")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"delivery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delivery","aria-hidden":"true"}},[this._v("#")]),this._v(" Delivery")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("send_after")]),t._v(" "),n("li",[t._v("delayed_option (available values: "),n("code",[t._v("Notification.DELAYED_OPTION_TIMEZONE")]),t._v(", "),n("code",[t._v("Notification.DELAYED_OPTION_LAST_ACTIVE")]),t._v(")")]),t._v(" "),n("li",[t._v("delivery_time_of_day")]),t._v(" "),n("li",[t._v("ttl")]),t._v(" "),n("li",[t._v("priority")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"grouping-collapsing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grouping-collapsing","aria-hidden":"true"}},[this._v("#")]),this._v(" Grouping & Collapsing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("android_group")]),this._v(" "),e("li",[this._v("android_group_message")]),this._v(" "),e("li",[this._v("adm_group")]),this._v(" "),e("li",[this._v("adm_group_message")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"platform-to-deliver-to"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#platform-to-deliver-to","aria-hidden":"true"}},[this._v("#")]),this._v(" Platform to Deliver To")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("is_ios")]),t._v(" "),n("li",[t._v("is_android")]),t._v(" "),n("li",[t._v("is_any_web")]),t._v(" "),n("li",[t._v("is_email")]),t._v(" "),n("li",[t._v("is_chrome_web")]),t._v(" "),n("li",[t._v("is_firefox")]),t._v(" "),n("li",[t._v("is_wp")]),t._v(" "),n("li",[t._v("is_wp_wns")]),t._v(" "),n("li",[t._v("is_adm")]),t._v(" "),n("li",[t._v("is_chrome")])])}],!1,null,null,null);a.options.__file="send-notification.md";e.default=a.exports}}]);