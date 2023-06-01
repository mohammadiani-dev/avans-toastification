var warapper = document.createElement("div");

warapper.setAttribute("id", "hello-notification");
document.body.appendChild(warapper);

let options = {
    icon_url: "",
    onCreated : (item) => {}
};

function fire({ type, msg, title }) {
    
    var item = document.createElement("div");
    item.classList = `notif-item ${type}`;

    var toast = `<div class="notif-icon">`;

    if (options.icon_url.length) {
        toast += `<img width='24' height="24" src="${options.icon_url}" alt='${type}'>`
    } else {
        toast += get_default_icon(type);
    }
    
    toast += `</div><div class="notif-desc">`;
    
    if (title.length) {
        toast += `<strong class="notif-title">${title}</strong>`;
    }

    if (msg.length) {
        toast += `<p class="notif-content">${msg}</p>`;
    }

    toast += `</div>`;

    item.innerHTML = toast;
    
    warapper.appendChild(item);

    document.dispatchEvent(new CustomEvent("ToastCreated", {
        detail: { type }
    }));
}

if (options.onCreated) {
    document.addEventListener('ToastCreated', options.onCreated );
}


function get_default_icon( type ) {
    var svgIcon = ``;
    switch (type) {
        case 'success':
            svgIcon += `<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`
        break;
        case 'warning':
            svgIcon += `<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 64 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>`
        break;
        case 'info':
            svgIcon += `<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 192 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>`
        break;
        case 'error':
            svgIcon += `<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`
        break;
    }

    return svgIcon;
}


export const toast = {options,fire}