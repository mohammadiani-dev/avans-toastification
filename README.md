# avans-toastification
**avans-toastification** is a Javascript library for non-blocking notifications. 


## Demo
https://mohammadiani.com/avans-toastification/


## Install


#### [npm](https://www.npmjs.com/package/avans-toastification)
```
npm i avans-toastification
```


## Usage

```javascript
import { toast } from "avans-toastification/js/script";
// Import the CSS
import "avans-toastification/css/toast.css";

toast.options.duration = 50000;

toast.fire({ type : 'success', msg : 'Enter the message here', title : 'Enter the title here' });

```

### For Example
```js
// Display a success toast, with a title
toast.fire({ type : 'success' , msg : 'You have successfully received the certificate!', title : 'Hooray!' })

// Display a warning toast, with no title
toast.fire({ type : 'warning' ,  msg :  'You do not have the necessary conditions to receive a certificate!' })

// Display a info toast, with no title
toast.fire({ type : 'info' , msg :  'You have received three certificates so far!' })

// Display an error toast, with a title
toast.fire({ type : 'error' , msg :  'An error occurred while creating the certificate!', title : 'error!' })
```



### Options
```js

//Optionally disable a close button
toast.options.showCloseIcon = true;

//Visually indicate how long before a toast expires.
toast.options.showProgressbar = true;

//Flip the avans-toastification to be displayed properly for right-to-left languages.
toast.options.direction = 'rtl';

// Show or hide the icon
toast.options.showImageIcon = true;

// change the icon url in a toasts
toast.options.icon_url.success = 'https://yoursite.com/success.png';

// Change the duration of the toast display
toast.options.duration = 5000;

// Change the position of toasts on the page
toast.options.position = 'top-right';

// Change the background of a toasts
toast.options.backgroundColor = '#000';

// Change the color of the title of a toast
toast.options.titleColor = '#fff';

// Change the color of the content of a toast
toast.options.contentColor = '#eee';

// Change the border-radius of a toast
toast.options.borderRadius = '12px';

// Change the thickness of the border of a toast
toast.options.progressbarWidth = '5px';

```


### Callbacks
```js
// Define a callback for when the toast is shown/hidden/clicked
toast.options.onCreated = function() { console.log('hello'); }
toast.options.onClosed = function() { console.log('goodbye'); }
```

