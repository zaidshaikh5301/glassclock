(function () {
  'use strict';

  var STORAGE_KEY = 'glass-clock-format';
  var els = {
    greeting: document.getElementById('greeting'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    period: document.getElementById('period'),
    date: document.getElementById('date'),
    hand: document.getElementById('secondHand'),
    dial: document.getElementById('dial'),
    segments: document.querySelectorAll('.segment'),
  };

  var use12h = false;
  try {
    use12h = localStorage.getItem(STORAGE_KEY) === '12';
  } catch (e) {
    use12h = false;
  }

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function greetingFor(date) {
    var h = date.getHours();
    if (h >= 5 && h < 12) return 'Good morning';
    if (h >= 12 && h < 17) return 'Good afternoon';
    if (h >= 17 && h < 21) return 'Good evening';
    return 'Good night';
  }

  function formatTime(date) {
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var period = h >= 12 ? 'PM' : 'AM';
    if (use12h) {
      h = h % 12 || 12;
    }
    return {
      h: String(h).padStart(2, '0'),
      m: String(m).padStart(2, '0'),
      s: String(s).padStart(2, '0'),
      period: period
    };
  }

  function updateClock() {
    var now = new Date();
    var t = formatTime(now);

    els.greeting.textContent = greetingFor(now);
    els.hours.textContent = t.h;
    els.minutes.textContent = t.m;
    els.seconds.textContent = t.s;

    if (use12h) {
      els.period.textContent = t.period;
      els.period.style.display = 'block';
    } else {
      els.period.style.display = 'none';
    }

    els.date.textContent = now.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    rotateSecondHand(now);
  }

  function rotateSecondHand(now) {
    var secs = reduced ? now.getSeconds() : now.getSeconds() + now.getMilliseconds() / 1000;
    var deg = secs * 6;
    els.hand.style.transform = 'translateX(-50%) rotate(' + deg + 'deg)';
  }

  function renderSegments() {
    els.segments.forEach(function (seg) {
      var active = seg.dataset.format === (use12h ? '12' : '24');
      seg.classList.toggle('active', active);
      seg.setAttribute('aria-pressed', String(active));
    });
  }

  function setFormat(format) {
    use12h = format === '12';
    try {
      localStorage.setItem(STORAGE_KEY, use12h ? '12' : '24');
    } catch (e) {
      // storage unavailable; keep in memory only
    }
    renderSegments();
    updateClock();
  }

  function buildTicks() {
    var radius = 92;
    for (var i = 0; i < 12; i++) {
      var tick = document.createElement('div');
      tick.className = 'tick ' + (i % 3 === 0 ? 'tick-long' : 'tick-short');
      tick.style.height = (i % 3 === 0 ? 14 : 8) + 'px';
      tick.style.transform = 'translateX(-50%) rotate(' + (i * 30) + 'deg) translateY(-' + radius + 'px)';
      els.dial.appendChild(tick);
    }
  }

  function sweep() {
    rotateSecondHand(new Date());
    requestAnimationFrame(sweep);
  }

  function init() {
    buildTicks();
    renderSegments();
    updateClock();
    setInterval(updateClock, 1000);
    if (!reduced) {
      requestAnimationFrame(sweep);
    }
    els.segments.forEach(function (seg) {
      seg.addEventListener('click', function () {
        setFormat(seg.dataset.format);
      });
    });
  }

  init();
})();
