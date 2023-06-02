var warapper = document.createElement("div");
warapper.setAttribute("id", "hello-notification");

document.body.appendChild(warapper);

let options = {
    icon_url : "",
    duration : 5000,
    position : "top right",
    direction: "",
    backgroundColor: "",
    showProgressbar : true,
    showCloseIcon: true,
    showImageIcon: true,
    progressbarColor: '',
    progressbarWidth: '',
    titleColor: '',
    contentColor: '',
    borderRadius: '',
    onCreated : null,
    onClosed : null,
};


function fire({ type, msg, title }) {
    
    var item = document.createElement("div");
    item.classList = `notif-item ${type} ${options.direction}`;

    toast = ``;

    if (options.showImageIcon) {
        var toast = `<div class="notif-icon" >`;
        if (options.icon_url.length) {
            toast += `<img width='24' height="24" src="${options.icon_url}" alt='${type}'>`
        } else {
            toast += get_default_icon(type);
        }
        toast += `</div>`;
    }
    
    toast += `<div class="notif-desc" style="${!options.showImageIcon ? 'padding: 0 12px' : ''}">`;
    
    if (title.length) {
        toast += `<strong class="notif-title"  style="${options.titleColor.length ? 'color:' + options.titleColor : ''}" >${title}</strong>`;
    }

    if (msg.length) {
        toast += `<p class="notif-content" style="${options.contentColor.length ? 'color:' + options.contentColor : ''}" >${msg}</p>`;
    }

    
    toast += `</div>`;

    if (options.showProgressbar) {
        toast += `<div class="notif-progressbar" style="animation-duration: ${options.duration / 1000}s;${options.progressbarWidth.length ? 'height : ' + options.progressbarWidth : ''}"></div>`;
    }

    
    item.innerHTML = toast;

    if (options.showCloseIcon) {
        var closeIcon = document.createElement("span");
        closeIcon.className = "close-notif";
        closeIcon.innerHTML = get_close_icon();
        item.appendChild(closeIcon);

        closeIcon.addEventListener("click", function (e) {
            closeItem(item);
            clearTimeout(clearTimeOut);
            if (options.onClosed) {
                options['onClosed']();
            }
        });
    }

    if (options.borderRadius.length) {
        item.style.borderRadius = options.borderRadius;
    }

    if (options.backgroundColor.length) {
        item.style.backgroundColor = options.backgroundColor;
    }
    
    warapper.appendChild(item);

    let clearTimeOut = setTimeout(function () {
        closeItem(item);
        if (options.onClosed) {
            options['onClosed']();
        }  
    }, options.duration);


    if (options.onCreated) {
        options['onCreated']();
    }  

}



function closeItem(item) {
    item.style.animationName = "closeToast";
    setTimeout(function () {
        item.remove();
    }, 300);
}

function get_default_icon( type ) {
    var svgIcon = ``;
    switch (type) {
        case 'success':
            svgIcon += `<svg  xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`
        break;
        case 'warning':
            svgIcon += `<svg  xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 64 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>`
        break;
        case 'info':
            svgIcon += `<svg  xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 192 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>`
        break;
        case 'error':
            svgIcon += `<svg  xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`
        break;
    }

    return svgIcon;
}

function get_close_icon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 1216 1312"><path fill="currentColor" d="M1202 1066q0 40-28 68l-136 136q-28 28-68 28t-68-28L608 976l-294 294q-28 28-68 28t-68-28L42 1134q-28-28-28-68t28-68l294-294L42 410q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294l294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68L880 704l294 294q28 28 28 68z"/></svg>`;
}


export const toast = {options,fire}