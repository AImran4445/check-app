// alert
// Please hide it if do not need it
// let b1 = getURLParameter('b1')
// let b2 = getURLParameter('b2')
// let d1 = getURLParameter('d1')
// console.log(getURLParameter('b1'))
// window.setTimeout(function () {
//   alert(`${d1} to claim ${b1} ${b2}! Get it now!`)
// }, 2000)

//
// do not open Exit alert for this events

// click on CTA link
$('#cta-btn-click').on('click', function () {
  window.onbeforeunload = null
})
// click on form button
$('.btn-flat').on('click', function () {
  window.onbeforeunload = null
})

//
// event - Submit form
// $('.big-form').submit(function (event) {
//   sendEvent(8)
// })

//
// event - for a bot
if (typeof window.orientation == 'undefined') {
  var o = document.createElement('img')
  o.src = 'https://finmag.com/click.php?event9=0'
  o.referrerPolicy = 'no-referrer-when-downgrade'
} else {
  var o = document.createElement('img')
  o.src = 'https://finmag.com/click.php?event9=1'
  o.referrerPolicy = 'no-referrer-when-downgrade'
}

//
// change value in hidden form field using URL parameters
document.getElementById('CID').value = getURLParameter('clickid')
document.getElementById('LANDER').value = getURLParameter('lander')
document.getElementById('CAMPAIGN').value = getURLParameter('campaign')

//
// change form action
// $(document).ready(function () {
//   let form_par = getURLParameter('par')
//   let new_action = `"https://app.confirmedsender.com/lists/${form_par}/subscribe/cccc"`
//   if (form_par) {
//     $('form.big-form').attr('action', new_action)
//   }
// })
