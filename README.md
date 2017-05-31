Progressive Web Application Demos
=============================
A PWD demo project the demonstrate all the features of the PWA supports, implementing a clinical care
application.

What is Progressive Web Application and Why do we need it?
-------------

Well, that was simple, But why PWAs? What does it do? And what the hell does progressive mean in relation with web apps?

The thing is Humanity is going mobile, Not leaving the Earth but using mobile devices for everything from communications to entertainment to gaming to productivity, We are using our mobile devices for everything.

That's not really a bad thing., We're connected all the time and information is just a tap away., We're using our mobile more often and we're sharing like it's breathing.


> Goal isn't to get the user to install the **app**, it's to get the  user to use your service

You might ask couldn't we just build a native app for mobile devices and web app for the web?
-------------

This will make the user experience wonderful across all platforms.
How many apps have you installed on your mobile device? I assume Gmail, Facebook, Twitter, CoC and few other apps but not Hundreds or Thousands... But there are millions (Google: ~2.8, Apple: 2.2) of applications available on the app stores.

Do you really stand a chance?

What are we supposed to do then?
----------
We could at very least optimize our app for mobile devices by Making it's UI look great, making our app load faster, Caching everything we can and maybe.. also making our app work offline when there's no internet connection.

Seems like too much work? Not really., But we must architect our app with these things in mind.

And this is what a PWA is., You can read more about it here. *[PWA Checklist](https://developers.google.com/web/progressive-web-apps/)*
#### <i class="icon-mobile"></i> Checklist

**HTTPS** 
 > Make sure our application is served over https making it more secure., These days you can get SSL certificates for free.
 
**Responsive UI**
> Our app must look good on mobile devices.

**Application Shell**
> Using an application shell is a great idea as we can cache this shell and display it to the user as soon as they open the app and then load our content from backend or from local cache/db

**Offline**
> Making our app work offline, It would be great if the app can work offline 100%, If that's not possible at least handling the offline usage in some way will be great.

**Service Worker**
> This will take care of caching all of our assets, api resonses. We can also customize this to return response from cache when offline.

**Add to Home Screen**
> We can prompt the user to add our app to their home screen, If they do allow it our app icon will appear in their homescreen and they can use our app like a normal mobile application.

**Splash Screen**
> If a user adds our app to their home screen, We can display a splash screen while the app is loading, This will make the User Experience great.

**Address Bar Color**
> We can go little further and customize the color of address bar using Meta Tags, This gives us more control and we can take our app branding little further.

**Fast Load Even on Slow Networks**
> Making our app load faster even on 3G network will help a lot with perceived performance., This is very important and we will dig deeper into this.

**Push Notifications**
> Hell Yeah, We will use push notifications to send notifications to the users., They must ofcourse allow our app to send push notifications though.

**Experimental Features**
> Depending on what we build, We will also play around with the Credential Management and Payment Request APIs

**Hosting**
> This app will be 100% static and can be served from a CDN, I will be using Firebase hosting, they also provide free SSL. 
 
### Useful PWA links

[1]: <http://google.com/>
[Add to home]: <https://codelabs.developers.google.com/codelabs/add-to-home-screen>
