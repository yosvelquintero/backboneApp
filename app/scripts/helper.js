/*global define*/

define(["jquery"], function ($) {
  "use strict";

  const Helper = function () {
    $.fn.serializeObject = function () {
      const o = {};
      const a = this.serializeArray();
      $.each(a, function () {
        if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || "");
        } else {
          o[this.name] = this.value || "";
        }
      });
      return o;
    };

    // $.ajaxPrefilter(function (options) {
    //     if (!options.beforeSend) {
    //         options.beforeSend = function (xhr) {
    //             xhr.setRequestHeader('X-ACCESS-TOKEN', 's8Hzfu4Pyit76OfJWqDVsnRV');
    //         };
    //     }
    // });
  };

  return Helper;
});
