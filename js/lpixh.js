//get URL
function getURLParameter(name) {
  return decodeURIComponent(
    (RegExp(name + '=([^&]*)').exec(location.search) || [, null])[1] || '',
  )
}

// Exit Alert
let PreventExitPop = true
function ExitPop() {
  if (PreventExitPop != false) {
    return 'TEXT'
  }
}
window.onbeforeunload = ExitPop


$('#cta-btn-click').on('click', function () {
  window.onbeforeunload = null
})
// click on form button
$('.btn-flat').on('click', function () {
  window.onbeforeunload = null
})

//
// change CSS version using URL
let vcss = getURLParameter('v')
console.log(vcss)
if (vcss) {
  let link = document.createElement('link')
  link.href = `new-style${vcss}.css`
  link.rel = 'stylesheet'
  link.type = 'text/css'
  document.body.appendChild(link)
}

//
//
function sendEvent(eventNumber) {
  var o = document.createElement('img')
  o.src = `https://finmag.com/click.php?event${eventNumber}=1`
  o.referrerPolicy = 'no-referrer-when-downgrade'
}
// Replace the url with the URL of your tracker, without / at the end
var tracker_url = 'https://finmag.com';

function lp_callback(eventNumber, value) {
  var o = document.createElement("img");
  if (typeof window['getUclick'] === 'function') {
    o.src = tracker_url + '/click.php?event' + eventNumber + '=' + value + '&uclick=' + getUclick();
  } else {
    o.src = tracker_url + '/click.php?event' + eventNumber + '=' + value;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  // Page loading event
  lp_callback(2, 1);

  // 3 seconds event
  setTimeout(function () {
    lp_callback(3, 1)
  }, 3 * 1000);

  // 12 seconds event
  setTimeout(function () {
    lp_callback(4, 1)
  }, 12 * 1000);
});

// Scroll event
var scroll = 0;
window.onscroll = function () {
  if (scroll != 1) {
    scroll = 1;
    lp_callback(5, 1)
  }
};

function pushflowCallback(result) {
  // All clicks with a quality less than 1 are recorded as suspicious, event_5
  if (result.quality < 1) {
    lp_callback(6, 1);
  }

  // All clicks with a quality less than or equal to 0.4 are recorded in bots, event_6
  if (result.quality <= 0.4) {
    lp_callback(7, 1);
  }
}

(function (d, t){ var s=d.createElement(t); var op={'callback':pushflowCallback}; s.type='text/javascript'; s.async=true; s.defer=true; s.src="https://cdn.pushflow.net/fraud/current/PushflowTrafficQuality.js"; s.onload=s.onreadystatechange=function (){ var rs=this.readyState; if (rs) if (rs !='complete') if (rs !='loaded') return; try{ PushflowTrafficQuality.init(op)} catch (e){if (PushflowTrafficQuality) { PushflowTrafficQuality.sendError(e); } }}; var scr=d.getElementsByTagName(t)[0]; var par=scr.parentNode; par.insertBefore(s, scr);})(document, 'script');
