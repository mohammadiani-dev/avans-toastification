import {toast} from '../../dist/js/script';

toast.options = {};

toast.options.onCreated = (data) => {
    console.log(data + 'has fired');
}


var buttons = document.querySelectorAll(".test-toast button");

buttons.forEach((item) => {
    item.addEventListener("click", function () {
        var msg = item.getAttribute("data-msg");
        var title = item.getAttribute("data-title");
        var type = item.className;
        toast.fire({ type, msg, title });
    });
});