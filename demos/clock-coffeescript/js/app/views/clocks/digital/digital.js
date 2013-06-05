// Generated by CoffeeScript 1.6.2
(function() {
  (function(clock) {
    "use strict";    return clock.DigitalView = (function() {
      function DigitalView(target) {
        var format, tick;

        this.element = target;
        tick = function(time) {
          return this.element.innerHTML = format(time.hours) + ":" + format(time.minutes) + ":" + format(time.seconds);
        };
        format = function(value) {
          if (value < 10) {
            return "0" + value;
          }
          return value;
        };
        this.update = tick.bind(this);
      }

      DigitalView.prototype.dispose = function() {
        return this.element.innerHTML = "";
      };

      return DigitalView;

    })();
  })(window.clock = window.clock || {});

}).call(this);