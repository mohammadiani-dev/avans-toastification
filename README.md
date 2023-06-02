# avans-toastification
**avans-toastification** is a Javascript library for non-blocking notifications. 

## Current Version
1.0.0

## Demo
It will be added soon



## Install


#### [npm](https://www.npmjs.com/package/avans-toastification)
```
npm i avans-toastification
```


## Usage

```javascript
import { toast } from "avans-toastification/js/script";
// Import the CSS or use your own!
import "avans-toastification/css/toast.css";

toast.options.duration = 50000;
toast.options.direction = 'rtl';

toast.fire({ type, msg, title });

```

### Other Options
```js
// Display a success toast, with a title
toast.fire({ 'success' , 'You have successfully received the certificate!', 'Hooray!' })

// Display a warning toast, with no title
toast.fire({ 'warning' , 'You do not have the necessary conditions to receive a certificate!' })

// Display a info toast, with no title
toast.fire({ 'info' , 'You have received three certificates so far!' })

// Display an error toast, with a title
toast.fire({ 'error' , 'An error occurred while creating the certificate!', 'error!' })


### Close Button
Optionally enable a close button
```js
toast.options.showCloseIcon = true;
````

```

### Callbacks
```js
// Define a callback for when the toast is shown/hidden/clicked
toast.options.onCreated = function() { console.log('hello'); }
toast.options.onClosed = function() { console.log('goodbye'); }
```






### Progress Bar
Visually indicate how long before a toast expires.
```js
toast.options.showProgressbar = true;
```

### rtl
Flip the avans-toastification to be displayed properly for right-to-left languages.
```js
toast.options.direction = 'rtl';
```

## Copyright
Copyright © 2023