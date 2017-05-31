'use strict'; /*!
               * Bootstrap v3.2.0 (http://getbootstrap.com)
               * Copyright 2011-2014 Twitter, Inc.
               * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
               */

if (typeof jQuery === 'undefined') {throw new Error('Bootstrap\'s JavaScript requires jQuery');}

/* ========================================================================
                                                                                                  * Bootstrap: transition.js v3.2.0
                                                                                                  * http://getbootstrap.com/javascript/#transitions
                                                                                                  * ========================================================================
                                                                                                  * Copyright 2011-2014 Twitter, Inc.
                                                                                                  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
                                                                                                  * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap');

    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend' };


    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] };
      }
    }

    return false; // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false;
    var $el = this;
    $(this).one('bsTransitionEnd', function () {called = true;});
    var callback = function () {if (!called) $($el).trigger($.support.transition.end);};
    setTimeout(callback, duration);
    return this;
  };

  $(function () {
    $.support.transition = transitionEnd();

    if (!$.support.transition) return;

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      } };

  });

}(jQuery);

/* ========================================================================
            * Bootstrap: alert.js v3.2.0
            * http://getbootstrap.com/javascript/#alerts
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]';
  var Alert = function (el) {
    $(el).on('click', dismiss, this.close);
  };

  Alert.VERSION = '3.2.0';

  Alert.prototype.close = function (e) {
    var $this = $(this);
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = $(selector);

    if (e) e.preventDefault();

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent();
    }

    $parent.trigger(e = $.Event('close.bs.alert'));

    if (e.isDefaultPrevented()) return;

    $parent.removeClass('in');

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove();
    }

    $.support.transition && $parent.hasClass('fade') ?
    $parent.
    one('bsTransitionEnd', removeElement).
    emulateTransitionEnd(150) :
    removeElement();
  };


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.alert');

      if (!data) $this.data('bs.alert', data = new Alert(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.alert;

  $.fn.alert = Plugin;
  $.fn.alert.Constructor = Alert;


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old;
    return this;
  };


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);

}(jQuery);

/* ========================================================================
            * Bootstrap: button.js v3.2.0
            * http://getbootstrap.com/javascript/#buttons
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    this.isLoading = false;
  };

  Button.VERSION = '3.2.0';

  Button.DEFAULTS = {
    loadingText: 'loading...' };


  Button.prototype.setState = function (state) {
    var d = 'disabled';
    var $el = this.$element;
    var val = $el.is('input') ? 'val' : 'html';
    var data = $el.data();

    state = state + 'Text';

    if (data.resetText == null) $el.data('resetText', $el[val]());

    $el[val](data[state] == null ? this.options[state] : data[state]);

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true;
        $el.addClass(d).attr(d, d);
      } else if (this.isLoading) {
        this.isLoading = false;
        $el.removeClass(d).removeAttr(d);
      }
    }, this), 0);
  };

  Button.prototype.toggle = function () {
    var changed = true;
    var $parent = this.$element.closest('[data-toggle="buttons"]');

    if ($parent.length) {
      var $input = this.$element.find('input');
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false;else
        $parent.find('.active').removeClass('active');
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change');
    }

    if (changed) this.$element.toggleClass('active');
  };


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.button');
      var options = typeof option == 'object' && option;

      if (!data) $this.data('bs.button', data = new Button(this, options));

      if (option == 'toggle') data.toggle();else
      if (option) data.setState(option);
    });
  }

  var old = $.fn.button;

  $.fn.button = Plugin;
  $.fn.button.Constructor = Button;


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old;
    return this;
  };


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target);
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn');
    Plugin.call($btn, 'toggle');
    e.preventDefault();
  });

}(jQuery);

/* ========================================================================
            * Bootstrap: carousel.js v3.2.0
            * http://getbootstrap.com/javascript/#carousel
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this));
    this.$indicators = this.$element.find('.carousel-indicators');
    this.options = options;
    this.paused =
    this.sliding =
    this.interval =
    this.$active =
    this.$items = null;

    this.options.pause == 'hover' && this.$element.
    on('mouseenter.bs.carousel', $.proxy(this.pause, this)).
    on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
  };

  Carousel.VERSION = '3.2.0';

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true };


  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
      case 37:this.prev();break;
      case 39:this.next();break;
      default:return;}


    e.preventDefault();
  };

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false);

    this.interval && clearInterval(this.interval);

    this.options.interval &&
    !this.paused && (
    this.interval = setInterval($.proxy(this.next, this), this.options.interval));

    return this;
  };

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item');
    return this.$items.index(item || this.$active);
  };

  Carousel.prototype.to = function (pos) {
    var that = this;
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));

    if (pos > this.$items.length - 1 || pos < 0) return;

    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {that.to(pos);}); // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle();

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]));
  };

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true);

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end);
      this.cycle(true);
    }

    this.interval = clearInterval(this.interval);

    return this;
  };

  Carousel.prototype.next = function () {
    if (this.sliding) return;
    return this.slide('next');
  };

  Carousel.prototype.prev = function () {
    if (this.sliding) return;
    return this.slide('prev');
  };

  Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find('.item.active');
    var $next = next || $active[type]();
    var isCycling = this.interval;
    var direction = type == 'next' ? 'left' : 'right';
    var fallback = type == 'next' ? 'first' : 'last';
    var that = this;

    if (!$next.length) {
      if (!this.options.wrap) return;
      $next = this.$element.find('.item')[fallback]();
    }

    if ($next.hasClass('active')) return this.sliding = false;

    var relatedTarget = $next[0];
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction });

    this.$element.trigger(slideEvent);
    if (slideEvent.isDefaultPrevented()) return;

    this.sliding = true;

    isCycling && this.pause();

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active');
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
      $nextIndicator && $nextIndicator.addClass('active');
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type);
      $next[0].offsetWidth; // force reflow
      $active.addClass(direction);
      $next.addClass(direction);
      $active.
      one('bsTransitionEnd', function () {
        $next.removeClass([type, direction].join(' ')).addClass('active');
        $active.removeClass(['active', direction].join(' '));
        that.sliding = false;
        setTimeout(function () {
          that.$element.trigger(slidEvent);
        }, 0);
      }).
      emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000);
    } else {
      $active.removeClass('active');
      $next.addClass('active');
      this.sliding = false;
      this.$element.trigger(slidEvent);
    }

    isCycling && this.cycle();

    return this;
  };


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.carousel');
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option);
      var action = typeof option == 'string' ? option : options.slide;

      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
      if (typeof option == 'number') data.to(option);else
      if (action) data[action]();else
      if (options.interval) data.pause().cycle();
    });
  }

  var old = $.fn.carousel;

  $.fn.carousel = Plugin;
  $.fn.carousel.Constructor = Carousel;


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old;
    return this;
  };


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var href;
    var $this = $(this);
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    if (!$target.hasClass('carousel')) return;
    var options = $.extend({}, $target.data(), $this.data());
    var slideIndex = $this.attr('data-slide-to');
    if (slideIndex) options.interval = false;

    Plugin.call($target, options);

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex);
    }

    e.preventDefault();
  });

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
      Plugin.call($carousel, $carousel.data());
    });
  });

}(jQuery);

/* ========================================================================
            * Bootstrap: collapse.js v3.2.0
            * http://getbootstrap.com/javascript/#collapse
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.transitioning = null;

    if (this.options.parent) this.$parent = $(this.options.parent);
    if (this.options.toggle) this.toggle();
  };

  Collapse.VERSION = '3.2.0';

  Collapse.DEFAULTS = {
    toggle: true };


  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width');
    return hasWidth ? 'width' : 'height';
  };

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return;

    var startEvent = $.Event('show.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    var actives = this.$parent && this.$parent.find('> .panel > .in');

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse');
      if (hasData && hasData.transitioning) return;
      Plugin.call(actives, 'hide');
      hasData || actives.data('bs.collapse', null);
    }

    var dimension = this.dimension();

    this.$element.
    removeClass('collapse').
    addClass('collapsing')[dimension](0);

    this.transitioning = 1;

    var complete = function () {
      this.$element.
      removeClass('collapsing').
      addClass('collapse in')[dimension]('');
      this.transitioning = 0;
      this.$element.
      trigger('shown.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);

    var scrollSize = $.camelCase(['scroll', dimension].join('-'));

    this.$element.
    one('bsTransitionEnd', $.proxy(complete, this)).
    emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize]);
  };

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return;

    var startEvent = $.Event('hide.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    var dimension = this.dimension();

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

    this.$element.
    addClass('collapsing').
    removeClass('collapse').
    removeClass('in');

    this.transitioning = 1;

    var complete = function () {
      this.transitioning = 0;
      this.$element.
      trigger('hidden.bs.collapse').
      removeClass('collapsing').
      addClass('collapse');
    };

    if (!$.support.transition) return complete.call(this);

    this.$element[
    dimension](0).
    one('bsTransitionEnd', $.proxy(complete, this)).
    emulateTransitionEnd(350);
  };

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.collapse');
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);

      if (!data && options.toggle && option == 'show') option = !option;
      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.collapse;

  $.fn.collapse = Plugin;
  $.fn.collapse.Constructor = Collapse;


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  };


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var href;
    var $this = $(this);
    var target = $this.attr('data-target') ||
    e.preventDefault() ||
    (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7
    var $target = $(target);
    var data = $target.data('bs.collapse');
    var option = data ? 'toggle' : $this.data();
    var parent = $this.attr('data-parent');
    var $parent = parent && $(parent);

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed');
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed');
    }

    Plugin.call($target, option);
  });

}(jQuery);

/* ========================================================================
            * Bootstrap: dropdown.js v3.2.0
            * http://getbootstrap.com/javascript/#dropdowns
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop';
  var toggle = '[data-toggle="dropdown"]';
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle);
  };

  Dropdown.VERSION = '3.2.0';

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this);

    if ($this.is('.disabled, :disabled')) return;

    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');

    clearMenus();

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus);
      }

      var relatedTarget = { relatedTarget: this };
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

      if (e.isDefaultPrevented()) return;

      $this.trigger('focus');

      $parent.
      toggleClass('open').
      trigger('shown.bs.dropdown', relatedTarget);
    }

    return false;
  };

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return;

    var $this = $(this);

    e.preventDefault();
    e.stopPropagation();

    if ($this.is('.disabled, :disabled')) return;

    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');

    if (!isActive || isActive && e.keyCode == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus');
      return $this.trigger('click');
    }

    var desc = ' li:not(.divider):visible a';
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);

    if (!$items.length) return;

    var index = $items.index($items.filter(':focus'));

    if (e.keyCode == 38 && index > 0) index--; // up
    if (e.keyCode == 40 && index < $items.length - 1) index++; // down
    if (!~index) index = 0;

    $items.eq(index).trigger('focus');
  };

  function clearMenus(e) {
    if (e && e.which === 3) return;
    $(backdrop).remove();
    $(toggle).each(function () {
      var $parent = getParent($(this));
      var relatedTarget = { relatedTarget: this };
      if (!$parent.hasClass('open')) return;
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented()) return;
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget);
    });
  }

  function getParent($this) {
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = selector && $(selector);

    return $parent && $parent.length ? $parent : $this.parent();
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.dropdown');

      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.dropdown;

  $.fn.dropdown = Plugin;
  $.fn.dropdown.Constructor = Dropdown;


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old;
    return this;
  };


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document).
  on('click.bs.dropdown.data-api', clearMenus).
  on('click.bs.dropdown.data-api', '.dropdown form', function (e) {e.stopPropagation();}).
  on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).
  on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown);

}(jQuery);

/* ========================================================================
            * Bootstrap: modal.js v3.2.0
            * http://getbootstrap.com/javascript/#modals
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$backdrop =
    this.isShown = null;
    this.scrollbarWidth = 0;

    if (this.options.remote) {
      this.$element.
      find('.modal-content').
      load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };

  Modal.VERSION = '3.2.0';

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true };


  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };

  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

    this.$element.trigger(e);

    if (this.isShown || e.isDefaultPrevented()) return;

    this.isShown = true;

    this.checkScrollbar();
    this.$body.addClass('modal-open');

    this.setScrollbar();
    this.escape();

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body); // don't move modals dom position
      }

      that.$element.
      show().
      scrollTop(0);

      if (transition) {
        that.$element[0].offsetWidth; // force reflow
      }

      that.$element.
      addClass('in').
      attr('aria-hidden', false);

      that.enforceFocus();

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

      transition ?
      that.$element.find('.modal-dialog') // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).
      emulateTransitionEnd(300) :
      that.$element.trigger('focus').trigger(e);
    });
  };

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault();

    e = $.Event('hide.bs.modal');

    this.$element.trigger(e);

    if (!this.isShown || e.isDefaultPrevented()) return;

    this.isShown = false;

    this.$body.removeClass('modal-open');

    this.resetScrollbar();
    this.escape();

    $(document).off('focusin.bs.modal');

    this.$element.
    removeClass('in').
    attr('aria-hidden', true).
    off('click.dismiss.bs.modal');

    $.support.transition && this.$element.hasClass('fade') ?
    this.$element.
    one('bsTransitionEnd', $.proxy(this.hideModal, this)).
    emulateTransitionEnd(300) :
    this.hideModal();
  };

  Modal.prototype.enforceFocus = function () {
    $(document).
    off('focusin.bs.modal') // guard against infinite focus loop
    .on('focusin.bs.modal', $.proxy(function (e) {
      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal');
    }
  };

  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal');
    });
  };

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };

  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').
      appendTo(this.$body);

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return;
        this.options.backdrop == 'static' ?
        this.$element[0].focus.call(this.$element[0]) :
        this.hide.call(this);
      }, this));

      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass('in');

      if (!callback) return;

      doAnimate ?
      this.$backdrop.
      one('bsTransitionEnd', callback).
      emulateTransitionEnd(150) :
      callback();

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');

      var callbackRemove = function () {
        that.removeBackdrop();
        callback && callback();
      };
      $.support.transition && this.$element.hasClass('fade') ?
      this.$backdrop.
      one('bsTransitionEnd', callbackRemove).
      emulateTransitionEnd(150) :
      callbackRemove();

    } else if (callback) {
      callback();
    }
  };

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return;
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar();
  };

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '');
  };

  Modal.prototype.measureScrollbar = function () {// thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  };


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);

      if (!data) $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else
      if (options.show) data.show(_relatedTarget);
    });
  }

  var old = $.fn.modal;

  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal;


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  };


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

    if ($this.is('a')) e.preventDefault();

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });

}(jQuery);

/* ========================================================================
            * Bootstrap: tooltip.js v3.2.0
            * http://getbootstrap.com/javascript/#tooltip
            * Inspired by the original jQuery.tipsy by Jason Frame
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type =
    this.options =
    this.enabled =
    this.timeout =
    this.hoverState =
    this.$element = null;

    this.init('tooltip', element, options);
  };

  Tooltip.VERSION = '3.2.0';

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0 } };



  Tooltip.prototype.init = function (type, element, options) {
    this.enabled = true;
    this.type = type;
    this.$element = $(element);
    this.options = this.getOptions(options);
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);

    var triggers = this.options.trigger.split(' ');

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i];

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else if (trigger != 'manual') {
        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
      }
    }

    this.options.selector ?
    this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) :
    this.fixTitle();
  };

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS;
  };

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options);

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay };

    }

    return options;
  };

  Tooltip.prototype.getDelegateOptions = function () {
    var options = {};
    var defaults = this.getDefaults();

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value;
    });

    return options;
  };

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
    obj : $(obj.currentTarget).data('bs.' + this.type);

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }

    clearTimeout(self.timeout);

    self.hoverState = 'in';

    if (!self.options.delay || !self.options.delay.show) return self.show();

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show();
    }, self.options.delay.show);
  };

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
    obj : $(obj.currentTarget).data('bs.' + this.type);

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }

    clearTimeout(self.timeout);

    self.hoverState = 'out';

    if (!self.options.delay || !self.options.delay.hide) return self.hide();

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide();
    }, self.options.delay.hide);
  };

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);

      var inDom = $.contains(document.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !inDom) return;
      var that = this;

      var $tip = this.tip();

      var tipId = this.getUID(this.type);

      this.setContent();
      $tip.attr('id', tipId);
      this.$element.attr('aria-describedby', tipId);

      if (this.options.animation) $tip.addClass('fade');

      var placement = typeof this.options.placement == 'function' ?
      this.options.placement.call(this, $tip[0], this.$element[0]) :
      this.options.placement;

      var autoToken = /\s?auto?\s?/i;
      var autoPlace = autoToken.test(placement);
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

      $tip.
      detach().
      css({ top: 0, left: 0, display: 'block' }).
      addClass(placement).
      data('bs.' + this.type, this);

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);

      var pos = this.getPosition();
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;

      if (autoPlace) {
        var orgPlacement = placement;
        var $parent = this.$element.parent();
        var parentDim = this.getPosition($parent);

        placement = placement == 'bottom' && pos.top + pos.height + actualHeight - parentDim.scroll > parentDim.height ? 'top' :
        placement == 'top' && pos.top - parentDim.scroll - actualHeight < 0 ? 'bottom' :
        placement == 'right' && pos.right + actualWidth > parentDim.width ? 'left' :
        placement == 'left' && pos.left - actualWidth < parentDim.left ? 'right' :
        placement;

        $tip.
        removeClass(orgPlacement).
        addClass(placement);
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

      this.applyPlacement(calculatedOffset, placement);

      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type);
        that.hoverState = null;
      };

      $.support.transition && this.$tip.hasClass('fade') ?
      $tip.
      one('bsTransitionEnd', complete).
      emulateTransitionEnd(150) :
      complete();
    }
  };

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip = this.tip();
    var width = $tip[0].offsetWidth;
    var height = $tip[0].offsetHeight;

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10);
    var marginLeft = parseInt($tip.css('margin-left'), 10);

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop)) marginTop = 0;
    if (isNaN(marginLeft)) marginLeft = 0;

    offset.top = offset.top + marginTop;
    offset.left = offset.left + marginLeft;

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left) });

      } },
    offset), 0);

    $tip.addClass('in');

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight;
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

    if (delta.left) offset.left += delta.left;else
    offset.top += delta.top;

    var arrowDelta = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
    var arrowPosition = delta.left ? 'left' : 'top';
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight';

    $tip.offset(offset);
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition);
  };

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? 50 * (1 - delta / dimension) + '%' : '');
  };

  Tooltip.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
    $tip.removeClass('fade in top bottom left right');
  };

  Tooltip.prototype.hide = function () {
    var that = this;
    var $tip = this.tip();
    var e = $.Event('hide.bs.' + this.type);

    this.$element.removeAttr('aria-describedby');

    function complete() {
      if (that.hoverState != 'in') $tip.detach();
      that.$element.trigger('hidden.bs.' + that.type);
    }

    this.$element.trigger(e);

    if (e.isDefaultPrevented()) return;

    $tip.removeClass('in');

    $.support.transition && this.$tip.hasClass('fade') ?
    $tip.
    one('bsTransitionEnd', complete).
    emulateTransitionEnd(150) :
    complete();

    this.hoverState = null;

    return this;
  };

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element;
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
    }
  };

  Tooltip.prototype.hasContent = function () {
    return this.getTitle();
  };

  Tooltip.prototype.getPosition = function ($element) {
    $element = $element || this.$element;
    var el = $element[0];
    var isBody = el.tagName == 'BODY';
    return $.extend({}, typeof el.getBoundingClientRect == 'function' ? el.getBoundingClientRect() : null, {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width: isBody ? $(window).width() : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight() },
    isBody ? { top: 0, left: 0 } : $element.offset());
  };

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } :
    placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
    placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
    /* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };

  };

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 };
    if (!this.$viewport) return delta;

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
    var viewportDimensions = this.getPosition(this.$viewport);

    if (/right|left/.test(placement)) {
      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
      if (topEdgeOffset < viewportDimensions.top) {// top overflow
        delta.top = viewportDimensions.top - topEdgeOffset;
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {// bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
      }
    } else {
      var leftEdgeOffset = pos.left - viewportPadding;
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
      if (leftEdgeOffset < viewportDimensions.left) {// left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset;
      } else if (rightEdgeOffset > viewportDimensions.width) {// right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
      }
    }

    return delta;
  };

  Tooltip.prototype.getTitle = function () {
    var title;
    var $e = this.$element;
    var o = this.options;

    title = $e.attr('data-original-title') || (
    typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

    return title;
  };

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000); while (
    document.getElementById(prefix));
    return prefix;
  };

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template);
  };

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  };

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide();
      this.$element = null;
      this.options = null;
    }
  };

  Tooltip.prototype.enable = function () {
    this.enabled = true;
  };

  Tooltip.prototype.disable = function () {
    this.enabled = false;
  };

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  };

  Tooltip.prototype.toggle = function (e) {
    var self = this;
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type);
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
        $(e.currentTarget).data('bs.' + this.type, self);
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
  };

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout);
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type);
  };


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tooltip');
      var options = typeof option == 'object' && option;

      if (!data && option == 'destroy') return;
      if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.tooltip;

  $.fn.tooltip = Plugin;
  $.fn.tooltip.Constructor = Tooltip;


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old;
    return this;
  };

}(jQuery);

/* ========================================================================
            * Bootstrap: popover.js v3.2.0
            * http://getbootstrap.com/javascript/#popovers
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options);
  };

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

  Popover.VERSION = '3.2.0';

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' });



  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

  Popover.prototype.constructor = Popover;

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS;
  };

  Popover.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    var content = this.getContent();

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
    $tip.find('.popover-content').empty()[// we use append for html objects to maintain js events
    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](
    content);

    $tip.removeClass('fade top bottom left right in');

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
  };

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  };

  Popover.prototype.getContent = function () {
    var $e = this.$element;
    var o = this.options;

    return $e.attr('data-content') || (
    typeof o.content == 'function' ?
    o.content.call($e[0]) :
    o.content);
  };

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow');
  };

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template);
    return this.$tip;
  };


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.popover');
      var options = typeof option == 'object' && option;

      if (!data && option == 'destroy') return;
      if (!data) $this.data('bs.popover', data = new Popover(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.popover;

  $.fn.popover = Plugin;
  $.fn.popover.Constructor = Popover;


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old;
    return this;
  };

}(jQuery);

/* ========================================================================
            * Bootstrap: scrollspy.js v3.2.0
            * http://getbootstrap.com/javascript/#scrollspy
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this);

    this.$body = $('body');
    this.$scrollElement = $(element).is('body') ? $(window) : $(element);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
    this.selector = (this.options.target || '') + ' .nav li > a';
    this.offsets = [];
    this.targets = [];
    this.activeTarget = null;
    this.scrollHeight = 0;

    this.$scrollElement.on('scroll.bs.scrollspy', process);
    this.refresh();
    this.process();
  }

  ScrollSpy.VERSION = '3.2.0';

  ScrollSpy.DEFAULTS = {
    offset: 10 };


  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  };

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset';
    var offsetBase = 0;

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position';
      offsetBase = this.$scrollElement.scrollTop();
    }

    this.offsets = [];
    this.targets = [];
    this.scrollHeight = this.getScrollHeight();

    var self = this;

    this.$body.
    find(this.selector).
    map(function () {
      var $el = $(this);
      var href = $el.data('target') || $el.attr('href');
      var $href = /^#./.test(href) && $(href);

      return $href &&
      $href.length &&
      $href.is(':visible') &&
      [[$href[offsetMethod]().top + offsetBase, href]] || null;
    }).
    sort(function (a, b) {return a[0] - b[0];}).
    each(function () {
      self.offsets.push(this[0]);
      self.targets.push(this[1]);
    });
  };

  ScrollSpy.prototype.process = function () {
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.getScrollHeight();
    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
    var offsets = this.offsets;
    var targets = this.targets;
    var activeTarget = this.activeTarget;
    var i;

    if (this.scrollHeight != scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i);
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i] &&
      scrollTop >= offsets[i] && (
      !offsets[i + 1] || scrollTop <= offsets[i + 1]) &&
      this.activate(targets[i]);
    }
  };

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target;

    $(this.selector).
    parentsUntil(this.options.target, '.active').
    removeClass('active');

    var selector = this.selector +
    '[data-target="' + target + '"],' +
    this.selector + '[href="' + target + '"]';

    var active = $(selector).
    parents('li').
    addClass('active');

    if (active.parent('.dropdown-menu').length) {
      active = active.
      closest('li.dropdown').
      addClass('active');
    }

    active.trigger('activate.bs.scrollspy');
  };


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.scrollspy');
      var options = typeof option == 'object' && option;

      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.scrollspy;

  $.fn.scrollspy = Plugin;
  $.fn.scrollspy.Constructor = ScrollSpy;


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old;
    return this;
  };


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this);
      Plugin.call($spy, $spy.data());
    });
  });

}(jQuery);

/* ========================================================================
            * Bootstrap: tab.js v3.2.0
            * http://getbootstrap.com/javascript/#tabs
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element);
  };

  Tab.VERSION = '3.2.0';

  Tab.prototype.show = function () {
    var $this = this.element;
    var $ul = $this.closest('ul:not(.dropdown-menu)');
    var selector = $this.data('target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return;

    var previous = $ul.find('.active:last a')[0];
    var e = $.Event('show.bs.tab', {
      relatedTarget: previous });


    $this.trigger(e);

    if (e.isDefaultPrevented()) return;

    var $target = $(selector);

    this.activate($this.closest('li'), $ul);
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous });

    });
  };

  Tab.prototype.activate = function (element, container, callback) {
    var $active = container.find('> .active');
    var transition = callback &&
    $.support.transition &&
    $active.hasClass('fade');

    function next() {
      $active.
      removeClass('active').
      find('> .dropdown-menu > .active').
      removeClass('active');

      element.addClass('active');

      if (transition) {
        element[0].offsetWidth; // reflow for transition
        element.addClass('in');
      } else {
        element.removeClass('fade');
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active');
      }

      callback && callback();
    }

    transition ?
    $active.
    one('bsTransitionEnd', next).
    emulateTransitionEnd(150) :
    next();

    $active.removeClass('in');
  };


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tab');

      if (!data) $this.data('bs.tab', data = new Tab(this));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.tab;

  $.fn.tab = Plugin;
  $.fn.tab.Constructor = Tab;


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old;
    return this;
  };


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault();
    Plugin.call($(this), 'show');
  });

}(jQuery);

/* ========================================================================
            * Bootstrap: affix.js v3.2.0
            * http://getbootstrap.com/javascript/#affix
            * ========================================================================
            * Copyright 2011-2014 Twitter, Inc.
            * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);

    this.$target = $(this.options.target).
    on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).
    on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

    this.$element = $(element);
    this.affixed =
    this.unpin =
    this.pinnedOffset = null;

    this.checkPosition();
  };

  Affix.VERSION = '3.2.0';

  Affix.RESET = 'affix affix-top affix-bottom';

  Affix.DEFAULTS = {
    offset: 0,
    target: window };


  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(Affix.RESET).addClass('affix');
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return;

    var scrollHeight = $(document).height();
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    var offset = this.options.offset;
    var offsetTop = offset.top;
    var offsetBottom = offset.bottom;

    if (typeof offset != 'object') offsetBottom = offsetTop = offset;
    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

    var affix = this.unpin != null && scrollTop + this.unpin <= position.top ? false :
    offsetBottom != null && position.top + this.$element.height() >= scrollHeight - offsetBottom ? 'bottom' :
    offsetTop != null && scrollTop <= offsetTop ? 'top' : false;

    if (this.affixed === affix) return;
    if (this.unpin != null) this.$element.css('top', '');

    var affixType = 'affix' + (affix ? '-' + affix : '');
    var e = $.Event(affixType + '.bs.affix');

    this.$element.trigger(e);

    if (e.isDefaultPrevented()) return;

    this.affixed = affix;
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

    this.$element.
    removeClass(Affix.RESET).
    addClass(affixType).
    trigger($.Event(affixType.replace('affix', 'affixed')));

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - this.$element.height() - offsetBottom });

    }
  };


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.affix');
      var options = typeof option == 'object' && option;

      if (!data) $this.data('bs.affix', data = new Affix(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.affix;

  $.fn.affix = Plugin;
  $.fn.affix.Constructor = Affix;


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old;
    return this;
  };


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this);
      var data = $spy.data();

      data.offset = data.offset || {};

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom;
      if (data.offsetTop) data.offset.top = data.offsetTop;

      Plugin.call($spy, data);
    });
  });

}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9lYzJpbmZvL3d3dy9ib290c3RyYXAvanMvYm9vdHN0cmFwLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsIkVycm9yIiwiJCIsInRyYW5zaXRpb25FbmQiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zRW5kRXZlbnROYW1lcyIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwibmFtZSIsInN0eWxlIiwidW5kZWZpbmVkIiwiZW5kIiwiZm4iLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsImR1cmF0aW9uIiwiY2FsbGVkIiwiJGVsIiwib25lIiwiY2FsbGJhY2siLCJ0cmlnZ2VyIiwic3VwcG9ydCIsInNldFRpbWVvdXQiLCJldmVudCIsInNwZWNpYWwiLCJic1RyYW5zaXRpb25FbmQiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImhhbmRsZSIsImUiLCJ0YXJnZXQiLCJpcyIsImhhbmRsZU9iaiIsImhhbmRsZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsImRpc21pc3MiLCJBbGVydCIsIm9uIiwiY2xvc2UiLCJWRVJTSU9OIiwicHJvdG90eXBlIiwiJHRoaXMiLCJzZWxlY3RvciIsImF0dHIiLCJyZXBsYWNlIiwiJHBhcmVudCIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJwYXJlbnQiLCJFdmVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlRWxlbWVudCIsImRldGFjaCIsInJlbW92ZSIsIlBsdWdpbiIsIm9wdGlvbiIsImVhY2giLCJkYXRhIiwiY2FsbCIsIm9sZCIsImFsZXJ0IiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwiQnV0dG9uIiwiZWxlbWVudCIsIm9wdGlvbnMiLCIkZWxlbWVudCIsImV4dGVuZCIsIkRFRkFVTFRTIiwiaXNMb2FkaW5nIiwibG9hZGluZ1RleHQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiZCIsInZhbCIsInJlc2V0VGV4dCIsInByb3h5IiwiYWRkQ2xhc3MiLCJyZW1vdmVBdHRyIiwidG9nZ2xlIiwiY2hhbmdlZCIsImNsb3Nlc3QiLCIkaW5wdXQiLCJmaW5kIiwicHJvcCIsInRvZ2dsZUNsYXNzIiwiYnV0dG9uIiwiJGJ0biIsIkNhcm91c2VsIiwia2V5ZG93biIsIiRpbmRpY2F0b3JzIiwicGF1c2VkIiwic2xpZGluZyIsImludGVydmFsIiwiJGFjdGl2ZSIsIiRpdGVtcyIsInBhdXNlIiwiY3ljbGUiLCJ3cmFwIiwid2hpY2giLCJwcmV2IiwibmV4dCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImdldEl0ZW1JbmRleCIsIml0ZW0iLCJjaGlsZHJlbiIsImluZGV4IiwidG8iLCJwb3MiLCJ0aGF0IiwiYWN0aXZlSW5kZXgiLCJzbGlkZSIsInR5cGUiLCIkbmV4dCIsImlzQ3ljbGluZyIsImRpcmVjdGlvbiIsImZhbGxiYWNrIiwicmVsYXRlZFRhcmdldCIsInNsaWRlRXZlbnQiLCIkbmV4dEluZGljYXRvciIsInNsaWRFdmVudCIsIm9mZnNldFdpZHRoIiwiam9pbiIsImNzcyIsInNsaWNlIiwiYWN0aW9uIiwiY2Fyb3VzZWwiLCJocmVmIiwiJHRhcmdldCIsInNsaWRlSW5kZXgiLCJ3aW5kb3ciLCIkY2Fyb3VzZWwiLCJDb2xsYXBzZSIsInRyYW5zaXRpb25pbmciLCJkaW1lbnNpb24iLCJoYXNXaWR0aCIsInNob3ciLCJzdGFydEV2ZW50IiwiYWN0aXZlcyIsImhhc0RhdGEiLCJjb21wbGV0ZSIsInNjcm9sbFNpemUiLCJjYW1lbENhc2UiLCJoaWRlIiwib2Zmc2V0SGVpZ2h0IiwiY29sbGFwc2UiLCJub3QiLCJiYWNrZHJvcCIsIkRyb3Bkb3duIiwiZ2V0UGFyZW50IiwiaXNBY3RpdmUiLCJjbGVhck1lbnVzIiwiZG9jdW1lbnRFbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJ0ZXN0Iiwia2V5Q29kZSIsInN0b3BQcm9wYWdhdGlvbiIsImRlc2MiLCJmaWx0ZXIiLCJlcSIsImRyb3Bkb3duIiwiTW9kYWwiLCIkYm9keSIsImJvZHkiLCIkYmFja2Ryb3AiLCJpc1Nob3duIiwic2Nyb2xsYmFyV2lkdGgiLCJyZW1vdGUiLCJsb2FkIiwia2V5Ym9hcmQiLCJfcmVsYXRlZFRhcmdldCIsImNoZWNrU2Nyb2xsYmFyIiwic2V0U2Nyb2xsYmFyIiwiZXNjYXBlIiwiYXBwZW5kVG8iLCJzY3JvbGxUb3AiLCJlbmZvcmNlRm9jdXMiLCJyZXNldFNjcm9sbGJhciIsIm9mZiIsImhpZGVNb2RhbCIsImhhcyIsInJlbW92ZUJhY2tkcm9wIiwiYW5pbWF0ZSIsImRvQW5pbWF0ZSIsImN1cnJlbnRUYXJnZXQiLCJmb2N1cyIsImNhbGxiYWNrUmVtb3ZlIiwiY2xpZW50V2lkdGgiLCJpbm5lcldpZHRoIiwibWVhc3VyZVNjcm9sbGJhciIsImJvZHlQYWQiLCJwYXJzZUludCIsInNjcm9sbERpdiIsImNsYXNzTmFtZSIsImFwcGVuZCIsInJlbW92ZUNoaWxkIiwibW9kYWwiLCJzaG93RXZlbnQiLCJUb29sdGlwIiwiZW5hYmxlZCIsInRpbWVvdXQiLCJob3ZlclN0YXRlIiwiaW5pdCIsImFuaW1hdGlvbiIsInBsYWNlbWVudCIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImh0bWwiLCJjb250YWluZXIiLCJ2aWV3cG9ydCIsInBhZGRpbmciLCJnZXRPcHRpb25zIiwiJHZpZXdwb3J0IiwidHJpZ2dlcnMiLCJzcGxpdCIsImkiLCJldmVudEluIiwiZXZlbnRPdXQiLCJlbnRlciIsImxlYXZlIiwiX29wdGlvbnMiLCJmaXhUaXRsZSIsImdldERlZmF1bHRzIiwiZ2V0RGVsZWdhdGVPcHRpb25zIiwiZGVmYXVsdHMiLCJrZXkiLCJ2YWx1ZSIsIm9iaiIsInNlbGYiLCJjb25zdHJ1Y3RvciIsImNsZWFyVGltZW91dCIsImhhc0NvbnRlbnQiLCJpbkRvbSIsImNvbnRhaW5zIiwiJHRpcCIsInRpcCIsInRpcElkIiwiZ2V0VUlEIiwic2V0Q29udGVudCIsImF1dG9Ub2tlbiIsImF1dG9QbGFjZSIsInRvcCIsImxlZnQiLCJkaXNwbGF5IiwiZ2V0UG9zaXRpb24iLCJhY3R1YWxXaWR0aCIsImFjdHVhbEhlaWdodCIsIm9yZ1BsYWNlbWVudCIsInBhcmVudERpbSIsImhlaWdodCIsInNjcm9sbCIsInJpZ2h0Iiwid2lkdGgiLCJjYWxjdWxhdGVkT2Zmc2V0IiwiZ2V0Q2FsY3VsYXRlZE9mZnNldCIsImFwcGx5UGxhY2VtZW50Iiwib2Zmc2V0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImlzTmFOIiwic2V0T2Zmc2V0IiwidXNpbmciLCJwcm9wcyIsIk1hdGgiLCJyb3VuZCIsImRlbHRhIiwiZ2V0Vmlld3BvcnRBZGp1c3RlZERlbHRhIiwiYXJyb3dEZWx0YSIsImFycm93UG9zaXRpb24iLCJhcnJvd09mZnNldFBvc2l0aW9uIiwicmVwbGFjZUFycm93IiwicG9zaXRpb24iLCJhcnJvdyIsImdldFRpdGxlIiwiJGUiLCJpc0JvZHkiLCJ0YWdOYW1lIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0Iiwidmlld3BvcnRQYWRkaW5nIiwidmlld3BvcnREaW1lbnNpb25zIiwidG9wRWRnZU9mZnNldCIsImJvdHRvbUVkZ2VPZmZzZXQiLCJsZWZ0RWRnZU9mZnNldCIsInJpZ2h0RWRnZU9mZnNldCIsIm8iLCJwcmVmaXgiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsIiRhcnJvdyIsInZhbGlkYXRlIiwicGFyZW50Tm9kZSIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiZGVzdHJveSIsInJlbW92ZURhdGEiLCJ0b29sdGlwIiwiUG9wb3ZlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZW1wdHkiLCJwb3BvdmVyIiwiU2Nyb2xsU3B5IiwicHJvY2VzcyIsIiRzY3JvbGxFbGVtZW50Iiwib2Zmc2V0cyIsInRhcmdldHMiLCJhY3RpdmVUYXJnZXQiLCJzY3JvbGxIZWlnaHQiLCJyZWZyZXNoIiwiZ2V0U2Nyb2xsSGVpZ2h0IiwibWF4Iiwib2Zmc2V0TWV0aG9kIiwib2Zmc2V0QmFzZSIsImlzV2luZG93IiwibWFwIiwiJGhyZWYiLCJzb3J0IiwiYSIsImIiLCJwdXNoIiwibWF4U2Nyb2xsIiwiYWN0aXZhdGUiLCJwYXJlbnRzVW50aWwiLCJhY3RpdmUiLCJwYXJlbnRzIiwic2Nyb2xsc3B5IiwiJHNweSIsIlRhYiIsIiR1bCIsInByZXZpb3VzIiwidGFiIiwiQWZmaXgiLCJjaGVja1Bvc2l0aW9uIiwiY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AiLCJhZmZpeGVkIiwidW5waW4iLCJwaW5uZWRPZmZzZXQiLCJSRVNFVCIsImdldFBpbm5lZE9mZnNldCIsIm9mZnNldFRvcCIsIm9mZnNldEJvdHRvbSIsImJvdHRvbSIsImFmZml4IiwiYWZmaXhUeXBlIl0sIm1hcHBpbmdzIjoiY0FBQTs7Ozs7O0FBTUEsSUFBSSxPQUFPQSxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DLENBQUUsTUFBTSxJQUFJQyxLQUFKLENBQVUseUNBQVYsQ0FBTixDQUE0RDs7QUFFakc7Ozs7Ozs7OztBQVNBLENBQUMsVUFBVUMsQ0FBVixFQUFhO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQSxXQUFTQyxhQUFULEdBQXlCO0FBQ3ZCLFFBQUlDLEtBQUtDLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBVDs7QUFFQSxRQUFJQyxxQkFBcUI7QUFDdkJDLHdCQUFtQixxQkFESTtBQUV2QkMscUJBQW1CLGVBRkk7QUFHdkJDLG1CQUFtQiwrQkFISTtBQUl2QkMsa0JBQW1CLGVBSkksRUFBekI7OztBQU9BLFNBQUssSUFBSUMsSUFBVCxJQUFpQkwsa0JBQWpCLEVBQXFDO0FBQ25DLFVBQUlILEdBQUdTLEtBQUgsQ0FBU0QsSUFBVCxNQUFtQkUsU0FBdkIsRUFBa0M7QUFDaEMsZUFBTyxFQUFFQyxLQUFLUixtQkFBbUJLLElBQW5CLENBQVAsRUFBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBTyxLQUFQLENBaEJ1QixDQWdCVjtBQUNkOztBQUVEO0FBQ0FW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OiJib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEJvb3RzdHJhcCB2My4yLjAgKGh0dHA6Ly9nZXRib290c3RyYXAuY29tKVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG5cbmlmICh0eXBlb2YgalF1ZXJ5ID09PSAndW5kZWZpbmVkJykgeyB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnknKSB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiB0cmFuc2l0aW9uLmpzIHYzLjIuMFxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jdHJhbnNpdGlvbnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDU1MgVFJBTlNJVElPTiBTVVBQT1JUIChTaG91dG91dDogaHR0cDovL3d3dy5tb2Rlcm5penIuY29tLylcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZCgpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib290c3RyYXAnKVxuXG4gICAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAgIFdlYmtpdFRyYW5zaXRpb24gOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgICBNb3pUcmFuc2l0aW9uICAgIDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgT1RyYW5zaXRpb24gICAgICA6ICdvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCcsXG4gICAgICB0cmFuc2l0aW9uICAgICAgIDogJ3RyYW5zaXRpb25lbmQnXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbmFtZSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICAgIGlmIChlbC5zdHlsZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7IGVuZDogdHJhbnNFbmRFdmVudE5hbWVzW25hbWVdIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2UgLy8gZXhwbGljaXQgZm9yIGllOCAoICAuXy4pXG4gIH1cblxuICAvLyBodHRwOi8vYmxvZy5hbGV4bWFjY2F3LmNvbS9jc3MtdHJhbnNpdGlvbnNcbiAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgIHZhciBjYWxsZWQgPSBmYWxzZVxuICAgIHZhciAkZWwgPSB0aGlzXG4gICAgJCh0aGlzKS5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uICgpIHsgY2FsbGVkID0gdHJ1ZSB9KVxuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgaWYgKCFjYWxsZWQpICQoJGVsKS50cmlnZ2VyKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCkgfVxuICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIGR1cmF0aW9uKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25FbmQoKVxuXG4gICAgaWYgKCEkLnN1cHBvcnQudHJhbnNpdGlvbikgcmV0dXJuXG5cbiAgICAkLmV2ZW50LnNwZWNpYWwuYnNUcmFuc2l0aW9uRW5kID0ge1xuICAgICAgYmluZFR5cGU6ICQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxcbiAgICAgIGRlbGVnYXRlVHlwZTogJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLFxuICAgICAgaGFuZGxlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJChlLnRhcmdldCkuaXModGhpcykpIHJldHVybiBlLmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGFsZXJ0LmpzIHYzLjIuMFxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jYWxlcnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQUxFUlQgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGRpc21pc3MgPSAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuICB2YXIgQWxlcnQgICA9IGZ1bmN0aW9uIChlbCkge1xuICAgICQoZWwpLm9uKCdjbGljaycsIGRpc21pc3MsIHRoaXMuY2xvc2UpXG4gIH1cblxuICBBbGVydC5WRVJTSU9OID0gJzMuMi4wJ1xuXG4gIEFsZXJ0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICR0aGlzICAgID0gJCh0aGlzKVxuICAgIHZhciBzZWxlY3RvciA9ICR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JylcblxuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIHNlbGVjdG9yID0gJHRoaXMuYXR0cignaHJlZicpXG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yICYmIHNlbGVjdG9yLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sICcnKSAvLyBzdHJpcCBmb3IgaWU3XG4gICAgfVxuXG4gICAgdmFyICRwYXJlbnQgPSAkKHNlbGVjdG9yKVxuXG4gICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKCEkcGFyZW50Lmxlbmd0aCkge1xuICAgICAgJHBhcmVudCA9ICR0aGlzLmhhc0NsYXNzKCdhbGVydCcpID8gJHRoaXMgOiAkdGhpcy5wYXJlbnQoKVxuICAgIH1cblxuICAgICRwYXJlbnQudHJpZ2dlcihlID0gJC5FdmVudCgnY2xvc2UuYnMuYWxlcnQnKSlcblxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgICRwYXJlbnQucmVtb3ZlQ2xhc3MoJ2luJylcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoKSB7XG4gICAgICAvLyBkZXRhY2ggZnJvbSBwYXJlbnQsIGZpcmUgZXZlbnQgdGhlbiBjbGVhbiB1cCBkYXRhXG4gICAgICAkcGFyZW50LmRldGFjaCgpLnRyaWdnZXIoJ2Nsb3NlZC5icy5hbGVydCcpLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgJHBhcmVudC5oYXNDbGFzcygnZmFkZScpID9cbiAgICAgICRwYXJlbnRcbiAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgcmVtb3ZlRWxlbWVudClcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCkgOlxuICAgICAgcmVtb3ZlRWxlbWVudCgpXG4gIH1cblxuXG4gIC8vIEFMRVJUIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgID0gJHRoaXMuZGF0YSgnYnMuYWxlcnQnKVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmFsZXJ0JywgKGRhdGEgPSBuZXcgQWxlcnQodGhpcykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXS5jYWxsKCR0aGlzKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi5hbGVydFxuXG4gICQuZm4uYWxlcnQgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5hbGVydC5Db25zdHJ1Y3RvciA9IEFsZXJ0XG5cblxuICAvLyBBTEVSVCBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uYWxlcnQubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmFsZXJ0ID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQUxFUlQgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMuYWxlcnQuZGF0YS1hcGknLCBkaXNtaXNzLCBBbGVydC5wcm90b3R5cGUuY2xvc2UpXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGJ1dHRvbi5qcyB2My4yLjBcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2J1dHRvbnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBCVVRUT04gUFVCTElDIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIEJ1dHRvbiA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy5vcHRpb25zICAgPSAkLmV4dGVuZCh7fSwgQnV0dG9uLkRFRkFVTFRTLCBvcHRpb25zKVxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgfVxuXG4gIEJ1dHRvbi5WRVJTSU9OICA9ICczLjIuMCdcblxuICBCdXR0b24uREVGQVVMVFMgPSB7XG4gICAgbG9hZGluZ1RleHQ6ICdsb2FkaW5nLi4uJ1xuICB9XG5cbiAgQnV0dG9uLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHZhciBkICAgID0gJ2Rpc2FibGVkJ1xuICAgIHZhciAkZWwgID0gdGhpcy4kZWxlbWVudFxuICAgIHZhciB2YWwgID0gJGVsLmlzKCdpbnB1dCcpID8gJ3ZhbCcgOiAnaHRtbCdcbiAgICB2YXIgZGF0YSA9ICRlbC5kYXRhKClcblxuICAgIHN0YXRlID0gc3RhdGUgKyAnVGV4dCdcblxuICAgIGlmIChkYXRhLnJlc2V0VGV4dCA9PSBudWxsKSAkZWwuZGF0YSgncmVzZXRUZXh0JywgJGVsW3ZhbF0oKSlcblxuICAgICRlbFt2YWxdKGRhdGFbc3RhdGVdID09IG51bGwgPyB0aGlzLm9wdGlvbnNbc3RhdGVdIDogZGF0YVtzdGF0ZV0pXG5cbiAgICAvLyBwdXNoIHRvIGV2ZW50IGxvb3AgdG8gYWxsb3cgZm9ybXMgdG8gc3VibWl0XG4gICAgc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzdGF0ZSA9PSAnbG9hZGluZ1RleHQnKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICAkZWwuYWRkQ2xhc3MoZCkuYXR0cihkLCBkKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTG9hZGluZykge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICRlbC5yZW1vdmVDbGFzcyhkKS5yZW1vdmVBdHRyKGQpXG4gICAgICB9XG4gICAgfSwgdGhpcyksIDApXG4gIH1cblxuICBCdXR0b24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hhbmdlZCA9IHRydWVcbiAgICB2YXIgJHBhcmVudCA9IHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScpXG5cbiAgICBpZiAoJHBhcmVudC5sZW5ndGgpIHtcbiAgICAgIHZhciAkaW5wdXQgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2lucHV0JylcbiAgICAgIGlmICgkaW5wdXQucHJvcCgndHlwZScpID09ICdyYWRpbycpIHtcbiAgICAgICAgaWYgKCRpbnB1dC5wcm9wKCdjaGVja2VkJykgJiYgdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJykpIGNoYW5nZWQgPSBmYWxzZVxuICAgICAgICBlbHNlICRwYXJlbnQuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWQpICRpbnB1dC5wcm9wKCdjaGVja2VkJywgIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKS50cmlnZ2VyKCdjaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkKSB0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxuICB9XG5cblxuICAvLyBCVVRUT04gUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLmJ1dHRvbicpXG4gICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuYnV0dG9uJywgKGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMsIG9wdGlvbnMpKSlcblxuICAgICAgaWYgKG9wdGlvbiA9PSAndG9nZ2xlJykgZGF0YS50b2dnbGUoKVxuICAgICAgZWxzZSBpZiAob3B0aW9uKSBkYXRhLnNldFN0YXRlKG9wdGlvbilcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4uYnV0dG9uXG5cbiAgJC5mbi5idXR0b24gICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5idXR0b24uQ29uc3RydWN0b3IgPSBCdXR0b25cblxuXG4gIC8vIEJVVFRPTiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmJ1dHRvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uYnV0dG9uID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQlVUVE9OIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy5idXR0b24uZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICRidG4gPSAkKGUudGFyZ2V0KVxuICAgIGlmICghJGJ0bi5oYXNDbGFzcygnYnRuJykpICRidG4gPSAkYnRuLmNsb3Nlc3QoJy5idG4nKVxuICAgIFBsdWdpbi5jYWxsKCRidG4sICd0b2dnbGUnKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBjYXJvdXNlbC5qcyB2My4yLjBcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2Nhcm91c2VsXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQ0FST1VTRUwgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIENhcm91c2VsID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ICAgID0gJChlbGVtZW50KS5vbigna2V5ZG93bi5icy5jYXJvdXNlbCcsICQucHJveHkodGhpcy5rZXlkb3duLCB0aGlzKSlcbiAgICB0aGlzLiRpbmRpY2F0b3JzID0gdGhpcy4kZWxlbWVudC5maW5kKCcuY2Fyb3VzZWwtaW5kaWNhdG9ycycpXG4gICAgdGhpcy5vcHRpb25zICAgICA9IG9wdGlvbnNcbiAgICB0aGlzLnBhdXNlZCAgICAgID1cbiAgICB0aGlzLnNsaWRpbmcgICAgID1cbiAgICB0aGlzLmludGVydmFsICAgID1cbiAgICB0aGlzLiRhY3RpdmUgICAgID1cbiAgICB0aGlzLiRpdGVtcyAgICAgID0gbnVsbFxuXG4gICAgdGhpcy5vcHRpb25zLnBhdXNlID09ICdob3ZlcicgJiYgdGhpcy4kZWxlbWVudFxuICAgICAgLm9uKCdtb3VzZWVudGVyLmJzLmNhcm91c2VsJywgJC5wcm94eSh0aGlzLnBhdXNlLCB0aGlzKSlcbiAgICAgIC5vbignbW91c2VsZWF2ZS5icy5jYXJvdXNlbCcsICQucHJveHkodGhpcy5jeWNsZSwgdGhpcykpXG4gIH1cblxuICBDYXJvdXNlbC5WRVJTSU9OICA9ICczLjIuMCdcblxuICBDYXJvdXNlbC5ERUZBVUxUUyA9IHtcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBwYXVzZTogJ2hvdmVyJyxcbiAgICB3cmFwOiB0cnVlXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgc3dpdGNoIChlLndoaWNoKSB7XG4gICAgICBjYXNlIDM3OiB0aGlzLnByZXYoKTsgYnJlYWtcbiAgICAgIGNhc2UgMzk6IHRoaXMubmV4dCgpOyBicmVha1xuICAgICAgZGVmYXVsdDogcmV0dXJuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUuY3ljbGUgPSBmdW5jdGlvbiAoZSkge1xuICAgIGUgfHwgKHRoaXMucGF1c2VkID0gZmFsc2UpXG5cbiAgICB0aGlzLmludGVydmFsICYmIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcblxuICAgIHRoaXMub3B0aW9ucy5pbnRlcnZhbFxuICAgICAgJiYgIXRoaXMucGF1c2VkXG4gICAgICAmJiAodGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCQucHJveHkodGhpcy5uZXh0LCB0aGlzKSwgdGhpcy5vcHRpb25zLmludGVydmFsKSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUuZ2V0SXRlbUluZGV4ID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB0aGlzLiRpdGVtcyA9IGl0ZW0ucGFyZW50KCkuY2hpbGRyZW4oJy5pdGVtJylcbiAgICByZXR1cm4gdGhpcy4kaXRlbXMuaW5kZXgoaXRlbSB8fCB0aGlzLiRhY3RpdmUpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUudG8gPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgdmFyIHRoYXQgICAgICAgID0gdGhpc1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KHRoaXMuJGFjdGl2ZSA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLml0ZW0uYWN0aXZlJykpXG5cbiAgICBpZiAocG9zID4gKHRoaXMuJGl0ZW1zLmxlbmd0aCAtIDEpIHx8IHBvcyA8IDApIHJldHVyblxuXG4gICAgaWYgKHRoaXMuc2xpZGluZykgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQub25lKCdzbGlkLmJzLmNhcm91c2VsJywgZnVuY3Rpb24gKCkgeyB0aGF0LnRvKHBvcykgfSkgLy8geWVzLCBcInNsaWRcIlxuICAgIGlmIChhY3RpdmVJbmRleCA9PSBwb3MpIHJldHVybiB0aGlzLnBhdXNlKCkuY3ljbGUoKVxuXG4gICAgcmV0dXJuIHRoaXMuc2xpZGUocG9zID4gYWN0aXZlSW5kZXggPyAnbmV4dCcgOiAncHJldicsICQodGhpcy4kaXRlbXNbcG9zXSkpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIGUgfHwgKHRoaXMucGF1c2VkID0gdHJ1ZSlcblxuICAgIGlmICh0aGlzLiRlbGVtZW50LmZpbmQoJy5uZXh0LCAucHJldicpLmxlbmd0aCAmJiAkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZClcbiAgICAgIHRoaXMuY3ljbGUodHJ1ZSlcbiAgICB9XG5cbiAgICB0aGlzLmludGVydmFsID0gY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnNsaWRpbmcpIHJldHVyblxuICAgIHJldHVybiB0aGlzLnNsaWRlKCduZXh0JylcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnNsaWRpbmcpIHJldHVyblxuICAgIHJldHVybiB0aGlzLnNsaWRlKCdwcmV2JylcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS5zbGlkZSA9IGZ1bmN0aW9uICh0eXBlLCBuZXh0KSB7XG4gICAgdmFyICRhY3RpdmUgICA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLml0ZW0uYWN0aXZlJylcbiAgICB2YXIgJG5leHQgICAgID0gbmV4dCB8fCAkYWN0aXZlW3R5cGVdKClcbiAgICB2YXIgaXNDeWNsaW5nID0gdGhpcy5pbnRlcnZhbFxuICAgIHZhciBkaXJlY3Rpb24gPSB0eXBlID09ICduZXh0JyA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICB2YXIgZmFsbGJhY2sgID0gdHlwZSA9PSAnbmV4dCcgPyAnZmlyc3QnIDogJ2xhc3QnXG4gICAgdmFyIHRoYXQgICAgICA9IHRoaXNcblxuICAgIGlmICghJG5leHQubGVuZ3RoKSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy53cmFwKSByZXR1cm5cbiAgICAgICRuZXh0ID0gdGhpcy4kZWxlbWVudC5maW5kKCcuaXRlbScpW2ZhbGxiYWNrXSgpXG4gICAgfVxuXG4gICAgaWYgKCRuZXh0Lmhhc0NsYXNzKCdhY3RpdmUnKSkgcmV0dXJuICh0aGlzLnNsaWRpbmcgPSBmYWxzZSlcblxuICAgIHZhciByZWxhdGVkVGFyZ2V0ID0gJG5leHRbMF1cbiAgICB2YXIgc2xpZGVFdmVudCA9ICQuRXZlbnQoJ3NsaWRlLmJzLmNhcm91c2VsJywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldCxcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgfSlcbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoc2xpZGVFdmVudClcbiAgICBpZiAoc2xpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB0aGlzLnNsaWRpbmcgPSB0cnVlXG5cbiAgICBpc0N5Y2xpbmcgJiYgdGhpcy5wYXVzZSgpXG5cbiAgICBpZiAodGhpcy4kaW5kaWNhdG9ycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuJGluZGljYXRvcnMuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgdmFyICRuZXh0SW5kaWNhdG9yID0gJCh0aGlzLiRpbmRpY2F0b3JzLmNoaWxkcmVuKClbdGhpcy5nZXRJdGVtSW5kZXgoJG5leHQpXSlcbiAgICAgICRuZXh0SW5kaWNhdG9yICYmICRuZXh0SW5kaWNhdG9yLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIHZhciBzbGlkRXZlbnQgPSAkLkV2ZW50KCdzbGlkLmJzLmNhcm91c2VsJywgeyByZWxhdGVkVGFyZ2V0OiByZWxhdGVkVGFyZ2V0LCBkaXJlY3Rpb246IGRpcmVjdGlvbiB9KSAvLyB5ZXMsIFwic2xpZFwiXG4gICAgaWYgKCQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWRlJykpIHtcbiAgICAgICRuZXh0LmFkZENsYXNzKHR5cGUpXG4gICAgICAkbmV4dFswXS5vZmZzZXRXaWR0aCAvLyBmb3JjZSByZWZsb3dcbiAgICAgICRhY3RpdmUuYWRkQ2xhc3MoZGlyZWN0aW9uKVxuICAgICAgJG5leHQuYWRkQ2xhc3MoZGlyZWN0aW9uKVxuICAgICAgJGFjdGl2ZVxuICAgICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJG5leHQucmVtb3ZlQ2xhc3MoW3R5cGUsIGRpcmVjdGlvbl0uam9pbignICcpKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKFsnYWN0aXZlJywgZGlyZWN0aW9uXS5qb2luKCcgJykpXG4gICAgICAgICAgdGhhdC5zbGlkaW5nID0gZmFsc2VcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcihzbGlkRXZlbnQpXG4gICAgICAgICAgfSwgMClcbiAgICAgICAgfSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKCRhY3RpdmUuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJykuc2xpY2UoMCwgLTEpICogMTAwMClcbiAgICB9IGVsc2Uge1xuICAgICAgJGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICRuZXh0LmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgdGhpcy5zbGlkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihzbGlkRXZlbnQpXG4gICAgfVxuXG4gICAgaXNDeWNsaW5nICYmIHRoaXMuY3ljbGUoKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQ0FST1VTRUwgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuY2Fyb3VzZWwnKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQ2Fyb3VzZWwuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG4gICAgICB2YXIgYWN0aW9uICA9IHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycgPyBvcHRpb24gOiBvcHRpb25zLnNsaWRlXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuY2Fyb3VzZWwnLCAoZGF0YSA9IG5ldyBDYXJvdXNlbCh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnbnVtYmVyJykgZGF0YS50byhvcHRpb24pXG4gICAgICBlbHNlIGlmIChhY3Rpb24pIGRhdGFbYWN0aW9uXSgpXG4gICAgICBlbHNlIGlmIChvcHRpb25zLmludGVydmFsKSBkYXRhLnBhdXNlKCkuY3ljbGUoKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi5jYXJvdXNlbFxuXG4gICQuZm4uY2Fyb3VzZWwgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5jYXJvdXNlbC5Db25zdHJ1Y3RvciA9IENhcm91c2VsXG5cblxuICAvLyBDQVJPVVNFTCBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uY2Fyb3VzZWwubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmNhcm91c2VsID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQ0FST1VTRUwgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMuY2Fyb3VzZWwuZGF0YS1hcGknLCAnW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b10nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBocmVmXG4gICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgdmFyICR0YXJnZXQgPSAkKCR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JykgfHwgKGhyZWYgPSAkdGhpcy5hdHRyKCdocmVmJykpICYmIGhyZWYucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgJycpKSAvLyBzdHJpcCBmb3IgaWU3XG4gICAgaWYgKCEkdGFyZ2V0Lmhhc0NsYXNzKCdjYXJvdXNlbCcpKSByZXR1cm5cbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCAkdGFyZ2V0LmRhdGEoKSwgJHRoaXMuZGF0YSgpKVxuICAgIHZhciBzbGlkZUluZGV4ID0gJHRoaXMuYXR0cignZGF0YS1zbGlkZS10bycpXG4gICAgaWYgKHNsaWRlSW5kZXgpIG9wdGlvbnMuaW50ZXJ2YWwgPSBmYWxzZVxuXG4gICAgUGx1Z2luLmNhbGwoJHRhcmdldCwgb3B0aW9ucylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAkdGFyZ2V0LmRhdGEoJ2JzLmNhcm91c2VsJykudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfSlcblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGNhcm91c2VsID0gJCh0aGlzKVxuICAgICAgUGx1Z2luLmNhbGwoJGNhcm91c2VsLCAkY2Fyb3VzZWwuZGF0YSgpKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGNvbGxhcHNlLmpzIHYzLjIuMFxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jY29sbGFwc2VcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDT0xMQVBTRSBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBDb2xsYXBzZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCAgICAgID0gJChlbGVtZW50KVxuICAgIHRoaXMub3B0aW9ucyAgICAgICA9ICQuZXh0ZW5kKHt9LCBDb2xsYXBzZS5ERUZBVUxUUywgb3B0aW9ucylcbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSBudWxsXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBhcmVudCkgdGhpcy4kcGFyZW50ID0gJCh0aGlzLm9wdGlvbnMucGFyZW50KVxuICAgIGlmICh0aGlzLm9wdGlvbnMudG9nZ2xlKSB0aGlzLnRvZ2dsZSgpXG4gIH1cblxuICBDb2xsYXBzZS5WRVJTSU9OICA9ICczLjIuMCdcblxuICBDb2xsYXBzZS5ERUZBVUxUUyA9IHtcbiAgICB0b2dnbGU6IHRydWVcbiAgfVxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5kaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhc1dpZHRoID0gdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnd2lkdGgnKVxuICAgIHJldHVybiBoYXNXaWR0aCA/ICd3aWR0aCcgOiAnaGVpZ2h0J1xuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZyB8fCB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpbicpKSByZXR1cm5cblxuICAgIHZhciBzdGFydEV2ZW50ID0gJC5FdmVudCgnc2hvdy5icy5jb2xsYXBzZScpXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdmFyIGFjdGl2ZXMgPSB0aGlzLiRwYXJlbnQgJiYgdGhpcy4kcGFyZW50LmZpbmQoJz4gLnBhbmVsID4gLmluJylcblxuICAgIGlmIChhY3RpdmVzICYmIGFjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgaGFzRGF0YSA9IGFjdGl2ZXMuZGF0YSgnYnMuY29sbGFwc2UnKVxuICAgICAgaWYgKGhhc0RhdGEgJiYgaGFzRGF0YS50cmFuc2l0aW9uaW5nKSByZXR1cm5cbiAgICAgIFBsdWdpbi5jYWxsKGFjdGl2ZXMsICdoaWRlJylcbiAgICAgIGhhc0RhdGEgfHwgYWN0aXZlcy5kYXRhKCdicy5jb2xsYXBzZScsIG51bGwpXG4gICAgfVxuXG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKClcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2UnKVxuICAgICAgLmFkZENsYXNzKCdjb2xsYXBzaW5nJylbZGltZW5zaW9uXSgwKVxuXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gMVxuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNpbmcnKVxuICAgICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNlIGluJylbZGltZW5zaW9uXSgnJylcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDBcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLnRyaWdnZXIoJ3Nob3duLmJzLmNvbGxhcHNlJylcbiAgICB9XG5cbiAgICBpZiAoISQuc3VwcG9ydC50cmFuc2l0aW9uKSByZXR1cm4gY29tcGxldGUuY2FsbCh0aGlzKVxuXG4gICAgdmFyIHNjcm9sbFNpemUgPSAkLmNhbWVsQ2FzZShbJ3Njcm9sbCcsIGRpbWVuc2lvbl0uam9pbignLScpKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgJC5wcm94eShjb21wbGV0ZSwgdGhpcykpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMzUwKVtkaW1lbnNpb25dKHRoaXMuJGVsZW1lbnRbMF1bc2Nyb2xsU2l6ZV0pXG4gIH1cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uaW5nIHx8ICF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpbicpKSByZXR1cm5cblxuICAgIHZhciBzdGFydEV2ZW50ID0gJC5FdmVudCgnaGlkZS5icy5jb2xsYXBzZScpXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKClcblxuICAgIHRoaXMuJGVsZW1lbnRbZGltZW5zaW9uXSh0aGlzLiRlbGVtZW50W2RpbWVuc2lvbl0oKSlbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNpbmcnKVxuICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2luJylcblxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDFcblxuICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDBcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLnRyaWdnZXIoJ2hpZGRlbi5icy5jb2xsYXBzZScpXG4gICAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpXG4gICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UnKVxuICAgIH1cblxuICAgIGlmICghJC5zdXBwb3J0LnRyYW5zaXRpb24pIHJldHVybiBjb21wbGV0ZS5jYWxsKHRoaXMpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICBbZGltZW5zaW9uXSgwKVxuICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgJC5wcm94eShjb21wbGV0ZSwgdGhpcykpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMzUwKVxuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzW3RoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2luJykgPyAnaGlkZScgOiAnc2hvdyddKClcbiAgfVxuXG5cbiAgLy8gQ09MTEFQU0UgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuY29sbGFwc2UnKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQ29sbGFwc2UuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG5cbiAgICAgIGlmICghZGF0YSAmJiBvcHRpb25zLnRvZ2dsZSAmJiBvcHRpb24gPT0gJ3Nob3cnKSBvcHRpb24gPSAhb3B0aW9uXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmNvbGxhcHNlJywgKGRhdGEgPSBuZXcgQ29sbGFwc2UodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLmNvbGxhcHNlXG5cbiAgJC5mbi5jb2xsYXBzZSAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLmNvbGxhcHNlLkNvbnN0cnVjdG9yID0gQ29sbGFwc2VcblxuXG4gIC8vIENPTExBUFNFIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5jb2xsYXBzZS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uY29sbGFwc2UgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBDT0xMQVBTRSBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy5jb2xsYXBzZS5kYXRhLWFwaScsICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGhyZWZcbiAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICB2YXIgdGFyZ2V0ICA9ICR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JylcbiAgICAgICAgfHwgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHx8IChocmVmID0gJHRoaXMuYXR0cignaHJlZicpKSAmJiBocmVmLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sICcnKSAvLyBzdHJpcCBmb3IgaWU3XG4gICAgdmFyICR0YXJnZXQgPSAkKHRhcmdldClcbiAgICB2YXIgZGF0YSAgICA9ICR0YXJnZXQuZGF0YSgnYnMuY29sbGFwc2UnKVxuICAgIHZhciBvcHRpb24gID0gZGF0YSA/ICd0b2dnbGUnIDogJHRoaXMuZGF0YSgpXG4gICAgdmFyIHBhcmVudCAgPSAkdGhpcy5hdHRyKCdkYXRhLXBhcmVudCcpXG4gICAgdmFyICRwYXJlbnQgPSBwYXJlbnQgJiYgJChwYXJlbnQpXG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEudHJhbnNpdGlvbmluZykge1xuICAgICAgaWYgKCRwYXJlbnQpICRwYXJlbnQuZmluZCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCInICsgcGFyZW50ICsgJ1wiXScpLm5vdCgkdGhpcykuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpXG4gICAgICAkdGhpc1skdGFyZ2V0Lmhhc0NsYXNzKCdpbicpID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKCdjb2xsYXBzZWQnKVxuICAgIH1cblxuICAgIFBsdWdpbi5jYWxsKCR0YXJnZXQsIG9wdGlvbilcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogZHJvcGRvd24uanMgdjMuMi4wXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNkcm9wZG93bnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBEUk9QRE9XTiBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgYmFja2Ryb3AgPSAnLmRyb3Bkb3duLWJhY2tkcm9wJ1xuICB2YXIgdG9nZ2xlICAgPSAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG4gIHZhciBEcm9wZG93biA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS5vbignY2xpY2suYnMuZHJvcGRvd24nLCB0aGlzLnRvZ2dsZSlcbiAgfVxuXG4gIERyb3Bkb3duLlZFUlNJT04gPSAnMy4yLjAnXG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyICR0aGlzID0gJCh0aGlzKVxuXG4gICAgaWYgKCR0aGlzLmlzKCcuZGlzYWJsZWQsIDpkaXNhYmxlZCcpKSByZXR1cm5cblxuICAgIHZhciAkcGFyZW50ICA9IGdldFBhcmVudCgkdGhpcylcbiAgICB2YXIgaXNBY3RpdmUgPSAkcGFyZW50Lmhhc0NsYXNzKCdvcGVuJylcblxuICAgIGNsZWFyTWVudXMoKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhJHBhcmVudC5jbG9zZXN0KCcubmF2YmFyLW5hdicpLmxlbmd0aCkge1xuICAgICAgICAvLyBpZiBtb2JpbGUgd2UgdXNlIGEgYmFja2Ryb3AgYmVjYXVzZSBjbGljayBldmVudHMgZG9uJ3QgZGVsZWdhdGVcbiAgICAgICAgJCgnPGRpdiBjbGFzcz1cImRyb3Bkb3duLWJhY2tkcm9wXCIvPicpLmluc2VydEFmdGVyKCQodGhpcykpLm9uKCdjbGljaycsIGNsZWFyTWVudXMpXG4gICAgICB9XG5cbiAgICAgIHZhciByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0OiB0aGlzIH1cbiAgICAgICRwYXJlbnQudHJpZ2dlcihlID0gJC5FdmVudCgnc2hvdy5icy5kcm9wZG93bicsIHJlbGF0ZWRUYXJnZXQpKVxuXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAgICR0aGlzLnRyaWdnZXIoJ2ZvY3VzJylcblxuICAgICAgJHBhcmVudFxuICAgICAgICAudG9nZ2xlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAudHJpZ2dlcignc2hvd24uYnMuZHJvcGRvd24nLCByZWxhdGVkVGFyZ2V0KVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghLygzOHw0MHwyNykvLnRlc3QoZS5rZXlDb2RlKSkgcmV0dXJuXG5cbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoJHRoaXMuaXMoJy5kaXNhYmxlZCwgOmRpc2FibGVkJykpIHJldHVyblxuXG4gICAgdmFyICRwYXJlbnQgID0gZ2V0UGFyZW50KCR0aGlzKVxuICAgIHZhciBpc0FjdGl2ZSA9ICRwYXJlbnQuaGFzQ2xhc3MoJ29wZW4nKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCAoaXNBY3RpdmUgJiYgZS5rZXlDb2RlID09IDI3KSkge1xuICAgICAgaWYgKGUud2hpY2ggPT0gMjcpICRwYXJlbnQuZmluZCh0b2dnbGUpLnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgIHJldHVybiAkdGhpcy50cmlnZ2VyKCdjbGljaycpXG4gICAgfVxuXG4gICAgdmFyIGRlc2MgPSAnIGxpOm5vdCguZGl2aWRlcik6dmlzaWJsZSBhJ1xuICAgIHZhciAkaXRlbXMgPSAkcGFyZW50LmZpbmQoJ1tyb2xlPVwibWVudVwiXScgKyBkZXNjICsgJywgW3JvbGU9XCJsaXN0Ym94XCJdJyArIGRlc2MpXG5cbiAgICBpZiAoISRpdGVtcy5sZW5ndGgpIHJldHVyblxuXG4gICAgdmFyIGluZGV4ID0gJGl0ZW1zLmluZGV4KCRpdGVtcy5maWx0ZXIoJzpmb2N1cycpKVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PSAzOCAmJiBpbmRleCA+IDApICAgICAgICAgICAgICAgICBpbmRleC0tICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBcbiAgICBpZiAoZS5rZXlDb2RlID09IDQwICYmIGluZGV4IDwgJGl0ZW1zLmxlbmd0aCAtIDEpIGluZGV4KysgICAgICAgICAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgaWYgKCF+aW5kZXgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDBcblxuICAgICRpdGVtcy5lcShpbmRleCkudHJpZ2dlcignZm9jdXMnKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJNZW51cyhlKSB7XG4gICAgaWYgKGUgJiYgZS53aGljaCA9PT0gMykgcmV0dXJuXG4gICAgJChiYWNrZHJvcCkucmVtb3ZlKClcbiAgICAkKHRvZ2dsZSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHBhcmVudCA9IGdldFBhcmVudCgkKHRoaXMpKVxuICAgICAgdmFyIHJlbGF0ZWRUYXJnZXQgPSB7IHJlbGF0ZWRUYXJnZXQ6IHRoaXMgfVxuICAgICAgaWYgKCEkcGFyZW50Lmhhc0NsYXNzKCdvcGVuJykpIHJldHVyblxuICAgICAgJHBhcmVudC50cmlnZ2VyKGUgPSAkLkV2ZW50KCdoaWRlLmJzLmRyb3Bkb3duJywgcmVsYXRlZFRhcmdldCkpXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG4gICAgICAkcGFyZW50LnJlbW92ZUNsYXNzKCdvcGVuJykudHJpZ2dlcignaGlkZGVuLmJzLmRyb3Bkb3duJywgcmVsYXRlZFRhcmdldClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFyZW50KCR0aGlzKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgJiYgLyNbQS1aYS16XS8udGVzdChzZWxlY3RvcikgJiYgc2VsZWN0b3IucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLywgJycpIC8vIHN0cmlwIGZvciBpZTdcbiAgICB9XG5cbiAgICB2YXIgJHBhcmVudCA9IHNlbGVjdG9yICYmICQoc2VsZWN0b3IpXG5cbiAgICByZXR1cm4gJHBhcmVudCAmJiAkcGFyZW50Lmxlbmd0aCA/ICRwYXJlbnQgOiAkdGhpcy5wYXJlbnQoKVxuICB9XG5cblxuICAvLyBEUk9QRE9XTiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICA9ICR0aGlzLmRhdGEoJ2JzLmRyb3Bkb3duJylcblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5kcm9wZG93bicsIChkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0uY2FsbCgkdGhpcylcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4uZHJvcGRvd25cblxuICAkLmZuLmRyb3Bkb3duICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4uZHJvcGRvd24uQ29uc3RydWN0b3IgPSBEcm9wZG93blxuXG5cbiAgLy8gRFJPUERPV04gTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmRyb3Bkb3duLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5kcm9wZG93biA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIEFQUExZIFRPIFNUQU5EQVJEIERST1BET1dOIEVMRU1FTlRTXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudClcbiAgICAub24oJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgY2xlYXJNZW51cylcbiAgICAub24oJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgJy5kcm9wZG93biBmb3JtJywgZnVuY3Rpb24gKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKSB9KVxuICAgIC5vbignY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGknLCB0b2dnbGUsIERyb3Bkb3duLnByb3RvdHlwZS50b2dnbGUpXG4gICAgLm9uKCdrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgdG9nZ2xlICsgJywgW3JvbGU9XCJtZW51XCJdLCBbcm9sZT1cImxpc3Rib3hcIl0nLCBEcm9wZG93bi5wcm90b3R5cGUua2V5ZG93bilcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogbW9kYWwuanMgdjMuMi4wXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNtb2RhbHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBNT0RBTCBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgTW9kYWwgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyAgICAgICAgPSBvcHRpb25zXG4gICAgdGhpcy4kYm9keSAgICAgICAgICA9ICQoZG9jdW1lbnQuYm9keSlcbiAgICB0aGlzLiRlbGVtZW50ICAgICAgID0gJChlbGVtZW50KVxuICAgIHRoaXMuJGJhY2tkcm9wICAgICAgPVxuICAgIHRoaXMuaXNTaG93biAgICAgICAgPSBudWxsXG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IDBcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3RlKSB7XG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5maW5kKCcubW9kYWwtY29udGVudCcpXG4gICAgICAgIC5sb2FkKHRoaXMub3B0aW9ucy5yZW1vdGUsICQucHJveHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignbG9hZGVkLmJzLm1vZGFsJylcbiAgICAgICAgfSwgdGhpcykpXG4gICAgfVxuICB9XG5cbiAgTW9kYWwuVkVSU0lPTiAgPSAnMy4yLjAnXG5cbiAgTW9kYWwuREVGQVVMVFMgPSB7XG4gICAgYmFja2Ryb3A6IHRydWUsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgc2hvdzogdHJ1ZVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChfcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmlzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhfcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKF9yZWxhdGVkVGFyZ2V0KSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdmFyIGUgICAgPSAkLkV2ZW50KCdzaG93LmJzLm1vZGFsJywgeyByZWxhdGVkVGFyZ2V0OiBfcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICBpZiAodGhpcy5pc1Nob3duIHx8IGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc1Nob3duID0gdHJ1ZVxuXG4gICAgdGhpcy5jaGVja1Njcm9sbGJhcigpXG4gICAgdGhpcy4kYm9keS5hZGRDbGFzcygnbW9kYWwtb3BlbicpXG5cbiAgICB0aGlzLnNldFNjcm9sbGJhcigpXG4gICAgdGhpcy5lc2NhcGUoKVxuXG4gICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2suZGlzbWlzcy5icy5tb2RhbCcsICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLCAkLnByb3h5KHRoaXMuaGlkZSwgdGhpcykpXG5cbiAgICB0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0cmFuc2l0aW9uID0gJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhhdC4kZWxlbWVudC5oYXNDbGFzcygnZmFkZScpXG5cbiAgICAgIGlmICghdGhhdC4kZWxlbWVudC5wYXJlbnQoKS5sZW5ndGgpIHtcbiAgICAgICAgdGhhdC4kZWxlbWVudC5hcHBlbmRUbyh0aGF0LiRib2R5KSAvLyBkb24ndCBtb3ZlIG1vZGFscyBkb20gcG9zaXRpb25cbiAgICAgIH1cblxuICAgICAgdGhhdC4kZWxlbWVudFxuICAgICAgICAuc2hvdygpXG4gICAgICAgIC5zY3JvbGxUb3AoMClcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhhdC4kZWxlbWVudFswXS5vZmZzZXRXaWR0aCAvLyBmb3JjZSByZWZsb3dcbiAgICAgIH1cblxuICAgICAgdGhhdC4kZWxlbWVudFxuICAgICAgICAuYWRkQ2xhc3MoJ2luJylcbiAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpXG5cbiAgICAgIHRoYXQuZW5mb3JjZUZvY3VzKClcblxuICAgICAgdmFyIGUgPSAkLkV2ZW50KCdzaG93bi5icy5tb2RhbCcsIHsgcmVsYXRlZFRhcmdldDogX3JlbGF0ZWRUYXJnZXQgfSlcblxuICAgICAgdHJhbnNpdGlvbiA/XG4gICAgICAgIHRoYXQuJGVsZW1lbnQuZmluZCgnLm1vZGFsLWRpYWxvZycpIC8vIHdhaXQgZm9yIG1vZGFsIHRvIHNsaWRlIGluXG4gICAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdmb2N1cycpLnRyaWdnZXIoZSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgzMDApIDpcbiAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdmb2N1cycpLnRyaWdnZXIoZSlcbiAgICB9KVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGUgPSAkLkV2ZW50KCdoaWRlLmJzLm1vZGFsJylcblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgaWYgKCF0aGlzLmlzU2hvd24gfHwgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzU2hvd24gPSBmYWxzZVxuXG4gICAgdGhpcy4kYm9keS5yZW1vdmVDbGFzcygnbW9kYWwtb3BlbicpXG5cbiAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyKClcbiAgICB0aGlzLmVzY2FwZSgpXG5cbiAgICAkKGRvY3VtZW50KS5vZmYoJ2ZvY3VzaW4uYnMubW9kYWwnKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLnJlbW92ZUNsYXNzKCdpbicpXG4gICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgICAgLm9mZignY2xpY2suZGlzbWlzcy5icy5tb2RhbCcpXG5cbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCAkLnByb3h5KHRoaXMuaGlkZU1vZGFsLCB0aGlzKSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDMwMCkgOlxuICAgICAgdGhpcy5oaWRlTW9kYWwoKVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmVuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9mZignZm9jdXNpbi5icy5tb2RhbCcpIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKCdmb2N1c2luLmJzLm1vZGFsJywgJC5wcm94eShmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGhpcy4kZWxlbWVudFswXSAhPT0gZS50YXJnZXQgJiYgIXRoaXMuJGVsZW1lbnQuaGFzKGUudGFyZ2V0KS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcykpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuZXNjYXBlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzU2hvd24gJiYgdGhpcy5vcHRpb25zLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCdrZXl1cC5kaXNtaXNzLmJzLm1vZGFsJywgJC5wcm94eShmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLndoaWNoID09IDI3ICYmIHRoaXMuaGlkZSgpXG4gICAgICB9LCB0aGlzKSlcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdrZXl1cC5kaXNtaXNzLmJzLm1vZGFsJylcbiAgICB9XG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuaGlkZU1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHRoaXMuJGVsZW1lbnQuaGlkZSgpXG4gICAgdGhpcy5iYWNrZHJvcChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgfSlcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5yZW1vdmVCYWNrZHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRiYWNrZHJvcCAmJiB0aGlzLiRiYWNrZHJvcC5yZW1vdmUoKVxuICAgIHRoaXMuJGJhY2tkcm9wID0gbnVsbFxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmJhY2tkcm9wID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdmFyIGFuaW1hdGUgPSB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJykgPyAnZmFkZScgOiAnJ1xuXG4gICAgaWYgKHRoaXMuaXNTaG93biAmJiB0aGlzLm9wdGlvbnMuYmFja2Ryb3ApIHtcbiAgICAgIHZhciBkb0FuaW1hdGUgPSAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiBhbmltYXRlXG5cbiAgICAgIHRoaXMuJGJhY2tkcm9wID0gJCgnPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wICcgKyBhbmltYXRlICsgJ1wiIC8+JylcbiAgICAgICAgLmFwcGVuZFRvKHRoaXMuJGJvZHkpXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrLmRpc21pc3MuYnMubW9kYWwnLCAkLnByb3h5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSByZXR1cm5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJhY2tkcm9wID09ICdzdGF0aWMnXG4gICAgICAgICAgPyB0aGlzLiRlbGVtZW50WzBdLmZvY3VzLmNhbGwodGhpcy4kZWxlbWVudFswXSlcbiAgICAgICAgICA6IHRoaXMuaGlkZS5jYWxsKHRoaXMpXG4gICAgICB9LCB0aGlzKSlcblxuICAgICAgaWYgKGRvQW5pbWF0ZSkgdGhpcy4kYmFja2Ryb3BbMF0ub2Zmc2V0V2lkdGggLy8gZm9yY2UgcmVmbG93XG5cbiAgICAgIHRoaXMuJGJhY2tkcm9wLmFkZENsYXNzKCdpbicpXG5cbiAgICAgIGlmICghY2FsbGJhY2spIHJldHVyblxuXG4gICAgICBkb0FuaW1hdGUgP1xuICAgICAgICB0aGlzLiRiYWNrZHJvcFxuICAgICAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIGNhbGxiYWNrKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApIDpcbiAgICAgICAgY2FsbGJhY2soKVxuXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc1Nob3duICYmIHRoaXMuJGJhY2tkcm9wKSB7XG4gICAgICB0aGlzLiRiYWNrZHJvcC5yZW1vdmVDbGFzcygnaW4nKVxuXG4gICAgICB2YXIgY2FsbGJhY2tSZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoYXQucmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgICB0aGlzLiRiYWNrZHJvcFxuICAgICAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIGNhbGxiYWNrUmVtb3ZlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApIDpcbiAgICAgICAgY2FsbGJhY2tSZW1vdmUoKVxuXG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5jaGVja1Njcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+PSB3aW5kb3cuaW5uZXJXaWR0aCkgcmV0dXJuXG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuc2Nyb2xsYmFyV2lkdGggfHwgdGhpcy5tZWFzdXJlU2Nyb2xsYmFyKClcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5zZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJvZHlQYWQgPSBwYXJzZUludCgodGhpcy4kYm9keS5jc3MoJ3BhZGRpbmctcmlnaHQnKSB8fCAwKSwgMTApXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyV2lkdGgpIHRoaXMuJGJvZHkuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYm9keVBhZCArIHRoaXMuc2Nyb2xsYmFyV2lkdGgpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUucmVzZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kYm9keS5jc3MoJ3BhZGRpbmctcmlnaHQnLCAnJylcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5tZWFzdXJlU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkgeyAvLyB0aHggd2Fsc2hcbiAgICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJ1xuICAgIHRoaXMuJGJvZHkuYXBwZW5kKHNjcm9sbERpdilcbiAgICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGhcbiAgICB0aGlzLiRib2R5WzBdLnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgfVxuXG5cbiAgLy8gTU9EQUwgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uLCBfcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLm1vZGFsJylcbiAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIE1vZGFsLkRFRkFVTFRTLCAkdGhpcy5kYXRhKCksIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLm1vZGFsJywgKGRhdGEgPSBuZXcgTW9kYWwodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXShfcmVsYXRlZFRhcmdldClcbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuc2hvdykgZGF0YS5zaG93KF9yZWxhdGVkVGFyZ2V0KVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi5tb2RhbFxuXG4gICQuZm4ubW9kYWwgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi5tb2RhbC5Db25zdHJ1Y3RvciA9IE1vZGFsXG5cblxuICAvLyBNT0RBTCBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gICQuZm4ubW9kYWwubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLm1vZGFsID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gTU9EQUwgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMubW9kYWwuZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgIHZhciBocmVmICAgID0gJHRoaXMuYXR0cignaHJlZicpXG4gICAgdmFyICR0YXJnZXQgPSAkKCR0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JykgfHwgKGhyZWYgJiYgaHJlZi5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLCAnJykpKSAvLyBzdHJpcCBmb3IgaWU3XG4gICAgdmFyIG9wdGlvbiAgPSAkdGFyZ2V0LmRhdGEoJ2JzLm1vZGFsJykgPyAndG9nZ2xlJyA6ICQuZXh0ZW5kKHsgcmVtb3RlOiAhLyMvLnRlc3QoaHJlZikgJiYgaHJlZiB9LCAkdGFyZ2V0LmRhdGEoKSwgJHRoaXMuZGF0YSgpKVxuXG4gICAgaWYgKCR0aGlzLmlzKCdhJykpIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgJHRhcmdldC5vbmUoJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoc2hvd0V2ZW50KSB7XG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm4gLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgJHRhcmdldC5vbmUoJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHRoaXMuaXMoJzp2aXNpYmxlJykgJiYgJHRoaXMudHJpZ2dlcignZm9jdXMnKVxuICAgICAgfSlcbiAgICB9KVxuICAgIFBsdWdpbi5jYWxsKCR0YXJnZXQsIG9wdGlvbiwgdGhpcylcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogdG9vbHRpcC5qcyB2My4yLjBcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3Rvb2x0aXBcbiAqIEluc3BpcmVkIGJ5IHRoZSBvcmlnaW5hbCBqUXVlcnkudGlwc3kgYnkgSmFzb24gRnJhbWVcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBUT09MVElQIFBVQkxJQyBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlICAgICAgID1cbiAgICB0aGlzLm9wdGlvbnMgICAgPVxuICAgIHRoaXMuZW5hYmxlZCAgICA9XG4gICAgdGhpcy50aW1lb3V0ICAgID1cbiAgICB0aGlzLmhvdmVyU3RhdGUgPVxuICAgIHRoaXMuJGVsZW1lbnQgICA9IG51bGxcblxuICAgIHRoaXMuaW5pdCgndG9vbHRpcCcsIGVsZW1lbnQsIG9wdGlvbnMpXG4gIH1cblxuICBUb29sdGlwLlZFUlNJT04gID0gJzMuMi4wJ1xuXG4gIFRvb2x0aXAuREVGQVVMVFMgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICAgIHRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRlbGF5OiAwLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgdmlld3BvcnQ6IHtcbiAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICBwYWRkaW5nOiAwXG4gICAgfVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0eXBlLCBlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbmFibGVkICAgPSB0cnVlXG4gICAgdGhpcy50eXBlICAgICAgPSB0eXBlXG4gICAgdGhpcy4kZWxlbWVudCAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy5vcHRpb25zICAgPSB0aGlzLmdldE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLiR2aWV3cG9ydCA9IHRoaXMub3B0aW9ucy52aWV3cG9ydCAmJiAkKHRoaXMub3B0aW9ucy52aWV3cG9ydC5zZWxlY3RvciB8fCB0aGlzLm9wdGlvbnMudmlld3BvcnQpXG5cbiAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLm9wdGlvbnMudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICBmb3IgKHZhciBpID0gdHJpZ2dlcnMubGVuZ3RoOyBpLS07KSB7XG4gICAgICB2YXIgdHJpZ2dlciA9IHRyaWdnZXJzW2ldXG5cbiAgICAgIGlmICh0cmlnZ2VyID09ICdjbGljaycpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2suJyArIHRoaXMudHlwZSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCAkLnByb3h5KHRoaXMudG9nZ2xlLCB0aGlzKSlcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPSAnbWFudWFsJykge1xuICAgICAgICB2YXIgZXZlbnRJbiAgPSB0cmlnZ2VyID09ICdob3ZlcicgPyAnbW91c2VlbnRlcicgOiAnZm9jdXNpbidcbiAgICAgICAgdmFyIGV2ZW50T3V0ID0gdHJpZ2dlciA9PSAnaG92ZXInID8gJ21vdXNlbGVhdmUnIDogJ2ZvY3Vzb3V0J1xuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub24oZXZlbnRJbiAgKyAnLicgKyB0aGlzLnR5cGUsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgJC5wcm94eSh0aGlzLmVudGVyLCB0aGlzKSlcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbihldmVudE91dCArICcuJyArIHRoaXMudHlwZSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCAkLnByb3h5KHRoaXMubGVhdmUsIHRoaXMpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvciA/XG4gICAgICAodGhpcy5fb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIHsgdHJpZ2dlcjogJ21hbnVhbCcsIHNlbGVjdG9yOiAnJyB9KSkgOlxuICAgICAgdGhpcy5maXhUaXRsZSgpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gVG9vbHRpcC5ERUZBVUxUU1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmdldERlZmF1bHRzKCksIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKVxuXG4gICAgaWYgKG9wdGlvbnMuZGVsYXkgJiYgdHlwZW9mIG9wdGlvbnMuZGVsYXkgPT0gJ251bWJlcicpIHtcbiAgICAgIG9wdGlvbnMuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IG9wdGlvbnMuZGVsYXksXG4gICAgICAgIGhpZGU6IG9wdGlvbnMuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0RGVsZWdhdGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zICA9IHt9XG4gICAgdmFyIGRlZmF1bHRzID0gdGhpcy5nZXREZWZhdWx0cygpXG5cbiAgICB0aGlzLl9vcHRpb25zICYmICQuZWFjaCh0aGlzLl9vcHRpb25zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKGRlZmF1bHRzW2tleV0gIT0gdmFsdWUpIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5lbnRlciA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgc2VsZiA9IG9iaiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IgP1xuICAgICAgb2JqIDogJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnYnMuJyArIHRoaXMudHlwZSlcblxuICAgIGlmICghc2VsZikge1xuICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG9iai5jdXJyZW50VGFyZ2V0LCB0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKVxuICAgICAgJChvYmouY3VycmVudFRhcmdldCkuZGF0YSgnYnMuJyArIHRoaXMudHlwZSwgc2VsZilcbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoc2VsZi50aW1lb3V0KVxuXG4gICAgc2VsZi5ob3ZlclN0YXRlID0gJ2luJ1xuXG4gICAgaWYgKCFzZWxmLm9wdGlvbnMuZGVsYXkgfHwgIXNlbGYub3B0aW9ucy5kZWxheS5zaG93KSByZXR1cm4gc2VsZi5zaG93KClcblxuICAgIHNlbGYudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuaG92ZXJTdGF0ZSA9PSAnaW4nKSBzZWxmLnNob3coKVxuICAgIH0sIHNlbGYub3B0aW9ucy5kZWxheS5zaG93KVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUubGVhdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIHNlbGYgPSBvYmogaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yID9cbiAgICAgIG9iaiA6ICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUpXG5cbiAgICBpZiAoIXNlbGYpIHtcbiAgICAgIHNlbGYgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihvYmouY3VycmVudFRhcmdldCwgdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSlcbiAgICAgICQob2JqLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUsIHNlbGYpXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHNlbGYudGltZW91dClcblxuICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdvdXQnXG5cbiAgICBpZiAoIXNlbGYub3B0aW9ucy5kZWxheSB8fCAhc2VsZi5vcHRpb25zLmRlbGF5LmhpZGUpIHJldHVybiBzZWxmLmhpZGUoKVxuXG4gICAgc2VsZi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5ob3ZlclN0YXRlID09ICdvdXQnKSBzZWxmLmhpZGUoKVxuICAgIH0sIHNlbGYub3B0aW9ucy5kZWxheS5oaWRlKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZSA9ICQuRXZlbnQoJ3Nob3cuYnMuJyArIHRoaXMudHlwZSlcblxuICAgIGlmICh0aGlzLmhhc0NvbnRlbnQoKSAmJiB0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgICB2YXIgaW5Eb20gPSAkLmNvbnRhaW5zKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy4kZWxlbWVudFswXSlcbiAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8ICFpbkRvbSkgcmV0dXJuXG4gICAgICB2YXIgdGhhdCA9IHRoaXNcblxuICAgICAgdmFyICR0aXAgPSB0aGlzLnRpcCgpXG5cbiAgICAgIHZhciB0aXBJZCA9IHRoaXMuZ2V0VUlEKHRoaXMudHlwZSlcblxuICAgICAgdGhpcy5zZXRDb250ZW50KClcbiAgICAgICR0aXAuYXR0cignaWQnLCB0aXBJZClcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbikgJHRpcC5hZGRDbGFzcygnZmFkZScpXG5cbiAgICAgIHZhciBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5vcHRpb25zLnBsYWNlbWVudCA9PSAnZnVuY3Rpb24nID9cbiAgICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudC5jYWxsKHRoaXMsICR0aXBbMF0sIHRoaXMuJGVsZW1lbnRbMF0pIDpcbiAgICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudFxuXG4gICAgICB2YXIgYXV0b1Rva2VuID0gL1xccz9hdXRvP1xccz8vaVxuICAgICAgdmFyIGF1dG9QbGFjZSA9IGF1dG9Ub2tlbi50ZXN0KHBsYWNlbWVudClcbiAgICAgIGlmIChhdXRvUGxhY2UpIHBsYWNlbWVudCA9IHBsYWNlbWVudC5yZXBsYWNlKGF1dG9Ub2tlbiwgJycpIHx8ICd0b3AnXG5cbiAgICAgICR0aXBcbiAgICAgICAgLmRldGFjaCgpXG4gICAgICAgIC5jc3MoeyB0b3A6IDAsIGxlZnQ6IDAsIGRpc3BsYXk6ICdibG9jaycgfSlcbiAgICAgICAgLmFkZENsYXNzKHBsYWNlbWVudClcbiAgICAgICAgLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUsIHRoaXMpXG5cbiAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIgPyAkdGlwLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5jb250YWluZXIpIDogJHRpcC5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KVxuXG4gICAgICB2YXIgcG9zICAgICAgICAgID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgICB2YXIgYWN0dWFsV2lkdGggID0gJHRpcFswXS5vZmZzZXRXaWR0aFxuICAgICAgdmFyIGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICAgIGlmIChhdXRvUGxhY2UpIHtcbiAgICAgICAgdmFyIG9yZ1BsYWNlbWVudCA9IHBsYWNlbWVudFxuICAgICAgICB2YXIgJHBhcmVudCAgICAgID0gdGhpcy4kZWxlbWVudC5wYXJlbnQoKVxuICAgICAgICB2YXIgcGFyZW50RGltICAgID0gdGhpcy5nZXRQb3NpdGlvbigkcGFyZW50KVxuXG4gICAgICAgIHBsYWNlbWVudCA9IHBsYWNlbWVudCA9PSAnYm90dG9tJyAmJiBwb3MudG9wICAgKyBwb3MuaGVpZ2h0ICAgICAgICsgYWN0dWFsSGVpZ2h0IC0gcGFyZW50RGltLnNjcm9sbCA+IHBhcmVudERpbS5oZWlnaHQgPyAndG9wJyAgICA6XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PSAndG9wJyAgICAmJiBwb3MudG9wICAgLSBwYXJlbnREaW0uc2Nyb2xsIC0gYWN0dWFsSGVpZ2h0IDwgMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm90dG9tJyA6XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PSAncmlnaHQnICAmJiBwb3MucmlnaHQgKyBhY3R1YWxXaWR0aCAgICAgID4gcGFyZW50RGltLndpZHRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnbGVmdCcgICA6XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PSAnbGVmdCcgICAmJiBwb3MubGVmdCAgLSBhY3R1YWxXaWR0aCAgICAgIDwgcGFyZW50RGltLmxlZnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAncmlnaHQnICA6XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudFxuXG4gICAgICAgICR0aXBcbiAgICAgICAgICAucmVtb3ZlQ2xhc3Mob3JnUGxhY2VtZW50KVxuICAgICAgICAgIC5hZGRDbGFzcyhwbGFjZW1lbnQpXG4gICAgICB9XG5cbiAgICAgIHZhciBjYWxjdWxhdGVkT2Zmc2V0ID0gdGhpcy5nZXRDYWxjdWxhdGVkT2Zmc2V0KHBsYWNlbWVudCwgcG9zLCBhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0KVxuXG4gICAgICB0aGlzLmFwcGx5UGxhY2VtZW50KGNhbGN1bGF0ZWRPZmZzZXQsIHBsYWNlbWVudClcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ3Nob3duLmJzLicgKyB0aGF0LnR5cGUpXG4gICAgICAgIHRoYXQuaG92ZXJTdGF0ZSA9IG51bGxcbiAgICAgIH1cblxuICAgICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kdGlwLmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgICAkdGlwXG4gICAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgY29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCkgOlxuICAgICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuYXBwbHlQbGFjZW1lbnQgPSBmdW5jdGlvbiAob2Zmc2V0LCBwbGFjZW1lbnQpIHtcbiAgICB2YXIgJHRpcCAgID0gdGhpcy50aXAoKVxuICAgIHZhciB3aWR0aCAgPSAkdGlwWzBdLm9mZnNldFdpZHRoXG4gICAgdmFyIGhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICAvLyBtYW51YWxseSByZWFkIG1hcmdpbnMgYmVjYXVzZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaW5jbHVkZXMgZGlmZmVyZW5jZVxuICAgIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUludCgkdGlwLmNzcygnbWFyZ2luLXRvcCcpLCAxMClcbiAgICB2YXIgbWFyZ2luTGVmdCA9IHBhcnNlSW50KCR0aXAuY3NzKCdtYXJnaW4tbGVmdCcpLCAxMClcblxuICAgIC8vIHdlIG11c3QgY2hlY2sgZm9yIE5hTiBmb3IgaWUgOC85XG4gICAgaWYgKGlzTmFOKG1hcmdpblRvcCkpICBtYXJnaW5Ub3AgID0gMFxuICAgIGlmIChpc05hTihtYXJnaW5MZWZ0KSkgbWFyZ2luTGVmdCA9IDBcblxuICAgIG9mZnNldC50b3AgID0gb2Zmc2V0LnRvcCAgKyBtYXJnaW5Ub3BcbiAgICBvZmZzZXQubGVmdCA9IG9mZnNldC5sZWZ0ICsgbWFyZ2luTGVmdFxuXG4gICAgLy8gJC5mbi5vZmZzZXQgZG9lc24ndCByb3VuZCBwaXhlbCB2YWx1ZXNcbiAgICAvLyBzbyB3ZSB1c2Ugc2V0T2Zmc2V0IGRpcmVjdGx5IHdpdGggb3VyIG93biBmdW5jdGlvbiBCLTBcbiAgICAkLm9mZnNldC5zZXRPZmZzZXQoJHRpcFswXSwgJC5leHRlbmQoe1xuICAgICAgdXNpbmc6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAkdGlwLmNzcyh7XG4gICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHByb3BzLnRvcCksXG4gICAgICAgICAgbGVmdDogTWF0aC5yb3VuZChwcm9wcy5sZWZ0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sIG9mZnNldCksIDApXG5cbiAgICAkdGlwLmFkZENsYXNzKCdpbicpXG5cbiAgICAvLyBjaGVjayB0byBzZWUgaWYgcGxhY2luZyB0aXAgaW4gbmV3IG9mZnNldCBjYXVzZWQgdGhlIHRpcCB0byByZXNpemUgaXRzZWxmXG4gICAgdmFyIGFjdHVhbFdpZHRoICA9ICR0aXBbMF0ub2Zmc2V0V2lkdGhcbiAgICB2YXIgYWN0dWFsSGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHRcblxuICAgIGlmIChwbGFjZW1lbnQgPT0gJ3RvcCcgJiYgYWN0dWFsSGVpZ2h0ICE9IGhlaWdodCkge1xuICAgICAgb2Zmc2V0LnRvcCA9IG9mZnNldC50b3AgKyBoZWlnaHQgLSBhY3R1YWxIZWlnaHRcbiAgICB9XG5cbiAgICB2YXIgZGVsdGEgPSB0aGlzLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YShwbGFjZW1lbnQsIG9mZnNldCwgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodClcblxuICAgIGlmIChkZWx0YS5sZWZ0KSBvZmZzZXQubGVmdCArPSBkZWx0YS5sZWZ0XG4gICAgZWxzZSBvZmZzZXQudG9wICs9IGRlbHRhLnRvcFxuXG4gICAgdmFyIGFycm93RGVsdGEgICAgICAgICAgPSBkZWx0YS5sZWZ0ID8gZGVsdGEubGVmdCAqIDIgLSB3aWR0aCArIGFjdHVhbFdpZHRoIDogZGVsdGEudG9wICogMiAtIGhlaWdodCArIGFjdHVhbEhlaWdodFxuICAgIHZhciBhcnJvd1Bvc2l0aW9uICAgICAgID0gZGVsdGEubGVmdCA/ICdsZWZ0JyAgICAgICAgOiAndG9wJ1xuICAgIHZhciBhcnJvd09mZnNldFBvc2l0aW9uID0gZGVsdGEubGVmdCA/ICdvZmZzZXRXaWR0aCcgOiAnb2Zmc2V0SGVpZ2h0J1xuXG4gICAgJHRpcC5vZmZzZXQob2Zmc2V0KVxuICAgIHRoaXMucmVwbGFjZUFycm93KGFycm93RGVsdGEsICR0aXBbMF1bYXJyb3dPZmZzZXRQb3NpdGlvbl0sIGFycm93UG9zaXRpb24pXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5yZXBsYWNlQXJyb3cgPSBmdW5jdGlvbiAoZGVsdGEsIGRpbWVuc2lvbiwgcG9zaXRpb24pIHtcbiAgICB0aGlzLmFycm93KCkuY3NzKHBvc2l0aW9uLCBkZWx0YSA/ICg1MCAqICgxIC0gZGVsdGEgLyBkaW1lbnNpb24pICsgJyUnKSA6ICcnKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRpcCAgPSB0aGlzLnRpcCgpXG4gICAgdmFyIHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpXG5cbiAgICAkdGlwLmZpbmQoJy50b29sdGlwLWlubmVyJylbdGhpcy5vcHRpb25zLmh0bWwgPyAnaHRtbCcgOiAndGV4dCddKHRpdGxlKVxuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2ZhZGUgaW4gdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0JylcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdmFyICR0aXAgPSB0aGlzLnRpcCgpXG4gICAgdmFyIGUgICAgPSAkLkV2ZW50KCdoaWRlLmJzLicgKyB0aGlzLnR5cGUpXG5cbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknKVxuXG4gICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICBpZiAodGhhdC5ob3ZlclN0YXRlICE9ICdpbicpICR0aXAuZGV0YWNoKClcbiAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignaGlkZGVuLmJzLicgKyB0aGF0LnR5cGUpXG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKCdpbicpXG5cbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiR0aXAuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICAkdGlwXG4gICAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKSA6XG4gICAgICBjb21wbGV0ZSgpXG5cbiAgICB0aGlzLmhvdmVyU3RhdGUgPSBudWxsXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZml4VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRlID0gdGhpcy4kZWxlbWVudFxuICAgIGlmICgkZS5hdHRyKCd0aXRsZScpIHx8IHR5cGVvZiAoJGUuYXR0cignZGF0YS1vcmlnaW5hbC10aXRsZScpKSAhPSAnc3RyaW5nJykge1xuICAgICAgJGUuYXR0cignZGF0YS1vcmlnaW5hbC10aXRsZScsICRlLmF0dHIoJ3RpdGxlJykgfHwgJycpLmF0dHIoJ3RpdGxlJywgJycpXG4gICAgfVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuaGFzQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgICRlbGVtZW50ICAgPSAkZWxlbWVudCB8fCB0aGlzLiRlbGVtZW50XG4gICAgdmFyIGVsICAgICA9ICRlbGVtZW50WzBdXG4gICAgdmFyIGlzQm9keSA9IGVsLnRhZ05hbWUgPT0gJ0JPRFknXG4gICAgcmV0dXJuICQuZXh0ZW5kKHt9LCAodHlwZW9mIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PSAnZnVuY3Rpb24nKSA/IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbCwge1xuICAgICAgc2Nyb2xsOiBpc0JvZHkgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIDogJGVsZW1lbnQuc2Nyb2xsVG9wKCksXG4gICAgICB3aWR0aDogIGlzQm9keSA/ICQod2luZG93KS53aWR0aCgpICA6ICRlbGVtZW50Lm91dGVyV2lkdGgoKSxcbiAgICAgIGhlaWdodDogaXNCb2R5ID8gJCh3aW5kb3cpLmhlaWdodCgpIDogJGVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuICAgIH0sIGlzQm9keSA/IHsgdG9wOiAwLCBsZWZ0OiAwIH0gOiAkZWxlbWVudC5vZmZzZXQoKSlcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldENhbGN1bGF0ZWRPZmZzZXQgPSBmdW5jdGlvbiAocGxhY2VtZW50LCBwb3MsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50ID09ICdib3R0b20nID8geyB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0LCAgIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMiAgfSA6XG4gICAgICAgICAgIHBsYWNlbWVudCA9PSAndG9wJyAgICA/IHsgdG9wOiBwb3MudG9wIC0gYWN0dWFsSGVpZ2h0LCBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCAvIDIgLSBhY3R1YWxXaWR0aCAvIDIgIH0gOlxuICAgICAgICAgICBwbGFjZW1lbnQgPT0gJ2xlZnQnICAgPyB7IHRvcDogcG9zLnRvcCArIHBvcy5oZWlnaHQgLyAyIC0gYWN0dWFsSGVpZ2h0IC8gMiwgbGVmdDogcG9zLmxlZnQgLSBhY3R1YWxXaWR0aCB9IDpcbiAgICAgICAgLyogcGxhY2VtZW50ID09ICdyaWdodCcgKi8geyB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0IC8gMiAtIGFjdHVhbEhlaWdodCAvIDIsIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoICAgfVxuXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRWaWV3cG9ydEFkanVzdGVkRGVsdGEgPSBmdW5jdGlvbiAocGxhY2VtZW50LCBwb3MsIGFjdHVhbFdpZHRoLCBhY3R1YWxIZWlnaHQpIHtcbiAgICB2YXIgZGVsdGEgPSB7IHRvcDogMCwgbGVmdDogMCB9XG4gICAgaWYgKCF0aGlzLiR2aWV3cG9ydCkgcmV0dXJuIGRlbHRhXG5cbiAgICB2YXIgdmlld3BvcnRQYWRkaW5nID0gdGhpcy5vcHRpb25zLnZpZXdwb3J0ICYmIHRoaXMub3B0aW9ucy52aWV3cG9ydC5wYWRkaW5nIHx8IDBcbiAgICB2YXIgdmlld3BvcnREaW1lbnNpb25zID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydClcblxuICAgIGlmICgvcmlnaHR8bGVmdC8udGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB2YXIgdG9wRWRnZU9mZnNldCAgICA9IHBvcy50b3AgLSB2aWV3cG9ydFBhZGRpbmcgLSB2aWV3cG9ydERpbWVuc2lvbnMuc2Nyb2xsXG4gICAgICB2YXIgYm90dG9tRWRnZU9mZnNldCA9IHBvcy50b3AgKyB2aWV3cG9ydFBhZGRpbmcgLSB2aWV3cG9ydERpbWVuc2lvbnMuc2Nyb2xsICsgYWN0dWFsSGVpZ2h0XG4gICAgICBpZiAodG9wRWRnZU9mZnNldCA8IHZpZXdwb3J0RGltZW5zaW9ucy50b3ApIHsgLy8gdG9wIG92ZXJmbG93XG4gICAgICAgIGRlbHRhLnRvcCA9IHZpZXdwb3J0RGltZW5zaW9ucy50b3AgLSB0b3BFZGdlT2Zmc2V0XG4gICAgICB9IGVsc2UgaWYgKGJvdHRvbUVkZ2VPZmZzZXQgPiB2aWV3cG9ydERpbWVuc2lvbnMudG9wICsgdmlld3BvcnREaW1lbnNpb25zLmhlaWdodCkgeyAvLyBib3R0b20gb3ZlcmZsb3dcbiAgICAgICAgZGVsdGEudG9wID0gdmlld3BvcnREaW1lbnNpb25zLnRvcCArIHZpZXdwb3J0RGltZW5zaW9ucy5oZWlnaHQgLSBib3R0b21FZGdlT2Zmc2V0XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsZWZ0RWRnZU9mZnNldCAgPSBwb3MubGVmdCAtIHZpZXdwb3J0UGFkZGluZ1xuICAgICAgdmFyIHJpZ2h0RWRnZU9mZnNldCA9IHBvcy5sZWZ0ICsgdmlld3BvcnRQYWRkaW5nICsgYWN0dWFsV2lkdGhcbiAgICAgIGlmIChsZWZ0RWRnZU9mZnNldCA8IHZpZXdwb3J0RGltZW5zaW9ucy5sZWZ0KSB7IC8vIGxlZnQgb3ZlcmZsb3dcbiAgICAgICAgZGVsdGEubGVmdCA9IHZpZXdwb3J0RGltZW5zaW9ucy5sZWZ0IC0gbGVmdEVkZ2VPZmZzZXRcbiAgICAgIH0gZWxzZSBpZiAocmlnaHRFZGdlT2Zmc2V0ID4gdmlld3BvcnREaW1lbnNpb25zLndpZHRoKSB7IC8vIHJpZ2h0IG92ZXJmbG93XG4gICAgICAgIGRlbHRhLmxlZnQgPSB2aWV3cG9ydERpbWVuc2lvbnMubGVmdCArIHZpZXdwb3J0RGltZW5zaW9ucy53aWR0aCAtIHJpZ2h0RWRnZU9mZnNldFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWx0YVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRpdGxlXG4gICAgdmFyICRlID0gdGhpcy4kZWxlbWVudFxuICAgIHZhciBvICA9IHRoaXMub3B0aW9uc1xuXG4gICAgdGl0bGUgPSAkZS5hdHRyKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcbiAgICAgIHx8ICh0eXBlb2Ygby50aXRsZSA9PSAnZnVuY3Rpb24nID8gby50aXRsZS5jYWxsKCRlWzBdKSA6ICBvLnRpdGxlKVxuXG4gICAgcmV0dXJuIHRpdGxlXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRVSUQgPSBmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgZG8gcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKVxuICAgIHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuICAgIHJldHVybiBwcmVmaXhcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLnRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuJHRpcCA9IHRoaXMuJHRpcCB8fCAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSkpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5hcnJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuJGFycm93ID0gdGhpcy4kYXJyb3cgfHwgdGhpcy50aXAoKS5maW5kKCcudG9vbHRpcC1hcnJvdycpKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLiRlbGVtZW50WzBdLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB0aGlzLiRlbGVtZW50ID0gbnVsbFxuICAgICAgdGhpcy5vcHRpb25zICA9IG51bGxcbiAgICB9XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUudG9nZ2xlRW5hYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSAhdGhpcy5lbmFibGVkXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGlmIChlKSB7XG4gICAgICBzZWxmID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUpXG4gICAgICBpZiAoIXNlbGYpIHtcbiAgICAgICAgc2VsZiA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGUuY3VycmVudFRhcmdldCwgdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSlcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUsIHNlbGYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi50aXAoKS5oYXNDbGFzcygnaW4nKSA/IHNlbGYubGVhdmUoc2VsZikgOiBzZWxmLmVudGVyKHNlbGYpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgdGhpcy5oaWRlKCkuJGVsZW1lbnQub2ZmKCcuJyArIHRoaXMudHlwZSkucmVtb3ZlRGF0YSgnYnMuJyArIHRoaXMudHlwZSlcbiAgfVxuXG5cbiAgLy8gVE9PTFRJUCBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLnRvb2x0aXAnKVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuXG4gICAgICBpZiAoIWRhdGEgJiYgb3B0aW9uID09ICdkZXN0cm95JykgcmV0dXJuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnRvb2x0aXAnLCAoZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICB2YXIgb2xkID0gJC5mbi50b29sdGlwXG5cbiAgJC5mbi50b29sdGlwICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4udG9vbHRpcC5Db25zdHJ1Y3RvciA9IFRvb2x0aXBcblxuXG4gIC8vIFRPT0xUSVAgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4udG9vbHRpcC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4udG9vbHRpcCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogcG9wb3Zlci5qcyB2My4yLjBcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3BvcG92ZXJzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gUE9QT1ZFUiBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIFBvcG92ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuaW5pdCgncG9wb3ZlcicsIGVsZW1lbnQsIG9wdGlvbnMpXG4gIH1cblxuICBpZiAoISQuZm4udG9vbHRpcCkgdGhyb3cgbmV3IEVycm9yKCdQb3BvdmVyIHJlcXVpcmVzIHRvb2x0aXAuanMnKVxuXG4gIFBvcG92ZXIuVkVSU0lPTiAgPSAnMy4yLjAnXG5cbiAgUG9wb3Zlci5ERUZBVUxUUyA9ICQuZXh0ZW5kKHt9LCAkLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IuREVGQVVMVFMsIHtcbiAgICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+PC9kaXY+PC9kaXY+J1xuICB9KVxuXG5cbiAgLy8gTk9URTogUE9QT1ZFUiBFWFRFTkRTIHRvb2x0aXAuanNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBQb3BvdmVyLnByb3RvdHlwZSA9ICQuZXh0ZW5kKHt9LCAkLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IucHJvdG90eXBlKVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUG9wb3ZlclxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmdldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBQb3BvdmVyLkRFRkFVTFRTXG4gIH1cblxuICBQb3BvdmVyLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGlwICAgID0gdGhpcy50aXAoKVxuICAgIHZhciB0aXRsZSAgID0gdGhpcy5nZXRUaXRsZSgpXG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKVxuXG4gICAgJHRpcC5maW5kKCcucG9wb3Zlci10aXRsZScpW3RoaXMub3B0aW9ucy5odG1sID8gJ2h0bWwnIDogJ3RleHQnXSh0aXRsZSlcbiAgICAkdGlwLmZpbmQoJy5wb3BvdmVyLWNvbnRlbnQnKS5lbXB0eSgpWyAvLyB3ZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgICB0aGlzLm9wdGlvbnMuaHRtbCA/ICh0eXBlb2YgY29udGVudCA9PSAnc3RyaW5nJyA/ICdodG1sJyA6ICdhcHBlbmQnKSA6ICd0ZXh0J1xuICAgIF0oY29udGVudClcblxuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2ZhZGUgdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0IGluJylcblxuICAgIC8vIElFOCBkb2Vzbid0IGFjY2VwdCBoaWRpbmcgdmlhIHRoZSBgOmVtcHR5YCBwc2V1ZG8gc2VsZWN0b3IsIHdlIGhhdmUgdG8gZG9cbiAgICAvLyB0aGlzIG1hbnVhbGx5IGJ5IGNoZWNraW5nIHRoZSBjb250ZW50cy5cbiAgICBpZiAoISR0aXAuZmluZCgnLnBvcG92ZXItdGl0bGUnKS5odG1sKCkpICR0aXAuZmluZCgnLnBvcG92ZXItdGl0bGUnKS5oaWRlKClcbiAgfVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmhhc0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLmdldENvbnRlbnQoKVxuICB9XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUuZ2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGUgPSB0aGlzLiRlbGVtZW50XG4gICAgdmFyIG8gID0gdGhpcy5vcHRpb25zXG5cbiAgICByZXR1cm4gJGUuYXR0cignZGF0YS1jb250ZW50JylcbiAgICAgIHx8ICh0eXBlb2Ygby5jb250ZW50ID09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgby5jb250ZW50LmNhbGwoJGVbMF0pIDpcbiAgICAgICAgICAgIG8uY29udGVudClcbiAgfVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmFycm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy4kYXJyb3cgPSB0aGlzLiRhcnJvdyB8fCB0aGlzLnRpcCgpLmZpbmQoJy5hcnJvdycpKVxuICB9XG5cbiAgUG9wb3Zlci5wcm90b3R5cGUudGlwID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy4kdGlwKSB0aGlzLiR0aXAgPSAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSlcbiAgICByZXR1cm4gdGhpcy4kdGlwXG4gIH1cblxuXG4gIC8vIFBPUE9WRVIgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5wb3BvdmVyJylcbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb25cblxuICAgICAgaWYgKCFkYXRhICYmIG9wdGlvbiA9PSAnZGVzdHJveScpIHJldHVyblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5wb3BvdmVyJywgKGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4ucG9wb3ZlclxuXG4gICQuZm4ucG9wb3ZlciAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLnBvcG92ZXIuQ29uc3RydWN0b3IgPSBQb3BvdmVyXG5cblxuICAvLyBQT1BPVkVSIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLnBvcG92ZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnBvcG92ZXIgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IHNjcm9sbHNweS5qcyB2My4yLjBcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3Njcm9sbHNweVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFNDUk9MTFNQWSBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gU2Nyb2xsU3B5KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgcHJvY2VzcyAgPSAkLnByb3h5KHRoaXMucHJvY2VzcywgdGhpcylcblxuICAgIHRoaXMuJGJvZHkgICAgICAgICAgPSAkKCdib2R5JylcbiAgICB0aGlzLiRzY3JvbGxFbGVtZW50ID0gJChlbGVtZW50KS5pcygnYm9keScpID8gJCh3aW5kb3cpIDogJChlbGVtZW50KVxuICAgIHRoaXMub3B0aW9ucyAgICAgICAgPSAkLmV4dGVuZCh7fSwgU2Nyb2xsU3B5LkRFRkFVTFRTLCBvcHRpb25zKVxuICAgIHRoaXMuc2VsZWN0b3IgICAgICAgPSAodGhpcy5vcHRpb25zLnRhcmdldCB8fCAnJykgKyAnIC5uYXYgbGkgPiBhJ1xuICAgIHRoaXMub2Zmc2V0cyAgICAgICAgPSBbXVxuICAgIHRoaXMudGFyZ2V0cyAgICAgICAgPSBbXVxuICAgIHRoaXMuYWN0aXZlVGFyZ2V0ICAgPSBudWxsXG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgICA9IDBcblxuICAgIHRoaXMuJHNjcm9sbEVsZW1lbnQub24oJ3Njcm9sbC5icy5zY3JvbGxzcHknLCBwcm9jZXNzKVxuICAgIHRoaXMucmVmcmVzaCgpXG4gICAgdGhpcy5wcm9jZXNzKClcbiAgfVxuXG4gIFNjcm9sbFNweS5WRVJTSU9OICA9ICczLjIuMCdcblxuICBTY3JvbGxTcHkuREVGQVVMVFMgPSB7XG4gICAgb2Zmc2V0OiAxMFxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5nZXRTY3JvbGxIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHNjcm9sbEVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KHRoaXMuJGJvZHlbMF0uc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KVxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvZmZzZXRNZXRob2QgPSAnb2Zmc2V0J1xuICAgIHZhciBvZmZzZXRCYXNlICAgPSAwXG5cbiAgICBpZiAoISQuaXNXaW5kb3codGhpcy4kc2Nyb2xsRWxlbWVudFswXSkpIHtcbiAgICAgIG9mZnNldE1ldGhvZCA9ICdwb3NpdGlvbidcbiAgICAgIG9mZnNldEJhc2UgICA9IHRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKClcbiAgICB9XG5cbiAgICB0aGlzLm9mZnNldHMgPSBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5zY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCgpXG5cbiAgICB2YXIgc2VsZiAgICAgPSB0aGlzXG5cbiAgICB0aGlzLiRib2R5XG4gICAgICAuZmluZCh0aGlzLnNlbGVjdG9yKVxuICAgICAgLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWwgICA9ICQodGhpcylcbiAgICAgICAgdmFyIGhyZWYgID0gJGVsLmRhdGEoJ3RhcmdldCcpIHx8ICRlbC5hdHRyKCdocmVmJylcbiAgICAgICAgdmFyICRocmVmID0gL14jLi8udGVzdChocmVmKSAmJiAkKGhyZWYpXG5cbiAgICAgICAgcmV0dXJuICgkaHJlZlxuICAgICAgICAgICYmICRocmVmLmxlbmd0aFxuICAgICAgICAgICYmICRocmVmLmlzKCc6dmlzaWJsZScpXG4gICAgICAgICAgJiYgW1skaHJlZltvZmZzZXRNZXRob2RdKCkudG9wICsgb2Zmc2V0QmFzZSwgaHJlZl1dKSB8fCBudWxsXG4gICAgICB9KVxuICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGFbMF0gLSBiWzBdIH0pXG4gICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYub2Zmc2V0cy5wdXNoKHRoaXNbMF0pXG4gICAgICAgIHNlbGYudGFyZ2V0cy5wdXNoKHRoaXNbMV0pXG4gICAgICB9KVxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzY3JvbGxUb3AgICAgPSB0aGlzLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpICsgdGhpcy5vcHRpb25zLm9mZnNldFxuICAgIHZhciBzY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCgpXG4gICAgdmFyIG1heFNjcm9sbCAgICA9IHRoaXMub3B0aW9ucy5vZmZzZXQgKyBzY3JvbGxIZWlnaHQgLSB0aGlzLiRzY3JvbGxFbGVtZW50LmhlaWdodCgpXG4gICAgdmFyIG9mZnNldHMgICAgICA9IHRoaXMub2Zmc2V0c1xuICAgIHZhciB0YXJnZXRzICAgICAgPSB0aGlzLnRhcmdldHNcbiAgICB2YXIgYWN0aXZlVGFyZ2V0ID0gdGhpcy5hY3RpdmVUYXJnZXRcbiAgICB2YXIgaVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsSGVpZ2h0ICE9IHNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZVRhcmdldCAhPSAoaSA9IHRhcmdldHNbdGFyZ2V0cy5sZW5ndGggLSAxXSkgJiYgdGhpcy5hY3RpdmF0ZShpKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDw9IG9mZnNldHNbMF0pIHtcbiAgICAgIHJldHVybiBhY3RpdmVUYXJnZXQgIT0gKGkgPSB0YXJnZXRzWzBdKSAmJiB0aGlzLmFjdGl2YXRlKGkpXG4gICAgfVxuXG4gICAgZm9yIChpID0gb2Zmc2V0cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGFjdGl2ZVRhcmdldCAhPSB0YXJnZXRzW2ldXG4gICAgICAgICYmIHNjcm9sbFRvcCA+PSBvZmZzZXRzW2ldXG4gICAgICAgICYmICghb2Zmc2V0c1tpICsgMV0gfHwgc2Nyb2xsVG9wIDw9IG9mZnNldHNbaSArIDFdKVxuICAgICAgICAmJiB0aGlzLmFjdGl2YXRlKHRhcmdldHNbaV0pXG4gICAgfVxuICB9XG5cbiAgU2Nyb2xsU3B5LnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0aGlzLmFjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgJCh0aGlzLnNlbGVjdG9yKVxuICAgICAgLnBhcmVudHNVbnRpbCh0aGlzLm9wdGlvbnMudGFyZ2V0LCAnLmFjdGl2ZScpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICB2YXIgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yICtcbiAgICAgICAgJ1tkYXRhLXRhcmdldD1cIicgKyB0YXJnZXQgKyAnXCJdLCcgK1xuICAgICAgICB0aGlzLnNlbGVjdG9yICsgJ1tocmVmPVwiJyArIHRhcmdldCArICdcIl0nXG5cbiAgICB2YXIgYWN0aXZlID0gJChzZWxlY3RvcilcbiAgICAgIC5wYXJlbnRzKCdsaScpXG4gICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICBpZiAoYWN0aXZlLnBhcmVudCgnLmRyb3Bkb3duLW1lbnUnKS5sZW5ndGgpIHtcbiAgICAgIGFjdGl2ZSA9IGFjdGl2ZVxuICAgICAgICAuY2xvc2VzdCgnbGkuZHJvcGRvd24nKVxuICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgYWN0aXZlLnRyaWdnZXIoJ2FjdGl2YXRlLmJzLnNjcm9sbHNweScpXG4gIH1cblxuXG4gIC8vIFNDUk9MTFNQWSBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuc2Nyb2xsc3B5JylcbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb25cblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5zY3JvbGxzcHknLCAoZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLnNjcm9sbHNweVxuXG4gICQuZm4uc2Nyb2xsc3B5ICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4uc2Nyb2xsc3B5LkNvbnN0cnVjdG9yID0gU2Nyb2xsU3B5XG5cblxuICAvLyBTQ1JPTExTUFkgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5zY3JvbGxzcHkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnNjcm9sbHNweSA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIFNDUk9MTFNQWSBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT09PT1cblxuICAkKHdpbmRvdykub24oJ2xvYWQuYnMuc2Nyb2xsc3B5LmRhdGEtYXBpJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXNweT1cInNjcm9sbFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRzcHkgPSAkKHRoaXMpXG4gICAgICBQbHVnaW4uY2FsbCgkc3B5LCAkc3B5LmRhdGEoKSlcbiAgICB9KVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiB0YWIuanMgdjMuMi4wXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyN0YWJzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gVEFCIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgVGFiID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSAkKGVsZW1lbnQpXG4gIH1cblxuICBUYWIuVkVSU0lPTiA9ICczLjIuMCdcblxuICBUYWIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR0aGlzICAgID0gdGhpcy5lbGVtZW50XG4gICAgdmFyICR1bCAgICAgID0gJHRoaXMuY2xvc2VzdCgndWw6bm90KC5kcm9wZG93bi1tZW51KScpXG4gICAgdmFyIHNlbGVjdG9yID0gJHRoaXMuZGF0YSgndGFyZ2V0JylcblxuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIHNlbGVjdG9yID0gJHRoaXMuYXR0cignaHJlZicpXG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yICYmIHNlbGVjdG9yLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sICcnKSAvLyBzdHJpcCBmb3IgaWU3XG4gICAgfVxuXG4gICAgaWYgKCR0aGlzLnBhcmVudCgnbGknKS5oYXNDbGFzcygnYWN0aXZlJykpIHJldHVyblxuXG4gICAgdmFyIHByZXZpb3VzID0gJHVsLmZpbmQoJy5hY3RpdmU6bGFzdCBhJylbMF1cbiAgICB2YXIgZSAgICAgICAgPSAkLkV2ZW50KCdzaG93LmJzLnRhYicsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgfSlcblxuICAgICR0aGlzLnRyaWdnZXIoZSlcblxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciAkdGFyZ2V0ID0gJChzZWxlY3RvcilcblxuICAgIHRoaXMuYWN0aXZhdGUoJHRoaXMuY2xvc2VzdCgnbGknKSwgJHVsKVxuICAgIHRoaXMuYWN0aXZhdGUoJHRhcmdldCwgJHRhcmdldC5wYXJlbnQoKSwgZnVuY3Rpb24gKCkge1xuICAgICAgJHRoaXMudHJpZ2dlcih7XG4gICAgICAgIHR5cGU6ICdzaG93bi5icy50YWInLFxuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgVGFiLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgdmFyICRhY3RpdmUgICAgPSBjb250YWluZXIuZmluZCgnPiAuYWN0aXZlJylcbiAgICB2YXIgdHJhbnNpdGlvbiA9IGNhbGxiYWNrXG4gICAgICAmJiAkLnN1cHBvcnQudHJhbnNpdGlvblxuICAgICAgJiYgJGFjdGl2ZS5oYXNDbGFzcygnZmFkZScpXG5cbiAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgJGFjdGl2ZVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIC5maW5kKCc+IC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZScpXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcblxuICAgICAgZWxlbWVudC5hZGRDbGFzcygnYWN0aXZlJylcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgZWxlbWVudFswXS5vZmZzZXRXaWR0aCAvLyByZWZsb3cgZm9yIHRyYW5zaXRpb25cbiAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW4nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnZmFkZScpXG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50LnBhcmVudCgnLmRyb3Bkb3duLW1lbnUnKSkge1xuICAgICAgICBlbGVtZW50LmNsb3Nlc3QoJ2xpLmRyb3Bkb3duJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uID9cbiAgICAgICRhY3RpdmVcbiAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgbmV4dClcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCkgOlxuICAgICAgbmV4dCgpXG5cbiAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdpbicpXG4gIH1cblxuXG4gIC8vIFRBQiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgPSAkdGhpcy5kYXRhKCdicy50YWInKVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnRhYicsIChkYXRhID0gbmV3IFRhYih0aGlzKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4udGFiXG5cbiAgJC5mbi50YWIgICAgICAgICAgICAgPSBQbHVnaW5cbiAgJC5mbi50YWIuQ29uc3RydWN0b3IgPSBUYWJcblxuXG4gIC8vIFRBQiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT1cblxuICAkLmZuLnRhYi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4udGFiID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gVEFCIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy50YWIuZGF0YS1hcGknLCAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBQbHVnaW4uY2FsbCgkKHRoaXMpLCAnc2hvdycpXG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGFmZml4LmpzIHYzLjIuMFxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jYWZmaXhcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBBRkZJWCBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgQWZmaXggPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBZmZpeC5ERUZBVUxUUywgb3B0aW9ucylcblxuICAgIHRoaXMuJHRhcmdldCA9ICQodGhpcy5vcHRpb25zLnRhcmdldClcbiAgICAgIC5vbignc2Nyb2xsLmJzLmFmZml4LmRhdGEtYXBpJywgJC5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sIHRoaXMpKVxuICAgICAgLm9uKCdjbGljay5icy5hZmZpeC5kYXRhLWFwaScsICAkLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AsIHRoaXMpKVxuXG4gICAgdGhpcy4kZWxlbWVudCAgICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy5hZmZpeGVkICAgICAgPVxuICAgIHRoaXMudW5waW4gICAgICAgID1cbiAgICB0aGlzLnBpbm5lZE9mZnNldCA9IG51bGxcblxuICAgIHRoaXMuY2hlY2tQb3NpdGlvbigpXG4gIH1cblxuICBBZmZpeC5WRVJTSU9OICA9ICczLjIuMCdcblxuICBBZmZpeC5SRVNFVCAgICA9ICdhZmZpeCBhZmZpeC10b3AgYWZmaXgtYm90dG9tJ1xuXG4gIEFmZml4LkRFRkFVTFRTID0ge1xuICAgIG9mZnNldDogMCxcbiAgICB0YXJnZXQ6IHdpbmRvd1xuICB9XG5cbiAgQWZmaXgucHJvdG90eXBlLmdldFBpbm5lZE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5waW5uZWRPZmZzZXQpIHJldHVybiB0aGlzLnBpbm5lZE9mZnNldFxuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoQWZmaXguUkVTRVQpLmFkZENsYXNzKCdhZmZpeCcpXG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuJHRhcmdldC5zY3JvbGxUb3AoKVxuICAgIHZhciBwb3NpdGlvbiAgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpXG4gICAgcmV0dXJuICh0aGlzLnBpbm5lZE9mZnNldCA9IHBvc2l0aW9uLnRvcCAtIHNjcm9sbFRvcClcbiAgfVxuXG4gIEFmZml4LnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KCQucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLCB0aGlzKSwgMSlcbiAgfVxuXG4gIEFmZml4LnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKSkgcmV0dXJuXG5cbiAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KClcbiAgICB2YXIgc2Nyb2xsVG9wICAgID0gdGhpcy4kdGFyZ2V0LnNjcm9sbFRvcCgpXG4gICAgdmFyIHBvc2l0aW9uICAgICA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KClcbiAgICB2YXIgb2Zmc2V0ICAgICAgID0gdGhpcy5vcHRpb25zLm9mZnNldFxuICAgIHZhciBvZmZzZXRUb3AgICAgPSBvZmZzZXQudG9wXG4gICAgdmFyIG9mZnNldEJvdHRvbSA9IG9mZnNldC5ib3R0b21cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9ICdvYmplY3QnKSAgICAgICAgIG9mZnNldEJvdHRvbSA9IG9mZnNldFRvcCA9IG9mZnNldFxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0VG9wID09ICdmdW5jdGlvbicpICAgIG9mZnNldFRvcCAgICA9IG9mZnNldC50b3AodGhpcy4kZWxlbWVudClcbiAgICBpZiAodHlwZW9mIG9mZnNldEJvdHRvbSA9PSAnZnVuY3Rpb24nKSBvZmZzZXRCb3R0b20gPSBvZmZzZXQuYm90dG9tKHRoaXMuJGVsZW1lbnQpXG5cbiAgICB2YXIgYWZmaXggPSB0aGlzLnVucGluICAgIT0gbnVsbCAmJiAoc2Nyb2xsVG9wICsgdGhpcy51bnBpbiA8PSBwb3NpdGlvbi50b3ApID8gZmFsc2UgOlxuICAgICAgICAgICAgICAgIG9mZnNldEJvdHRvbSAhPSBudWxsICYmIChwb3NpdGlvbi50b3AgKyB0aGlzLiRlbGVtZW50LmhlaWdodCgpID49IHNjcm9sbEhlaWdodCAtIG9mZnNldEJvdHRvbSkgPyAnYm90dG9tJyA6XG4gICAgICAgICAgICAgICAgb2Zmc2V0VG9wICAgICE9IG51bGwgJiYgKHNjcm9sbFRvcCA8PSBvZmZzZXRUb3ApID8gJ3RvcCcgOiBmYWxzZVxuXG4gICAgaWYgKHRoaXMuYWZmaXhlZCA9PT0gYWZmaXgpIHJldHVyblxuICAgIGlmICh0aGlzLnVucGluICE9IG51bGwpIHRoaXMuJGVsZW1lbnQuY3NzKCd0b3AnLCAnJylcblxuICAgIHZhciBhZmZpeFR5cGUgPSAnYWZmaXgnICsgKGFmZml4ID8gJy0nICsgYWZmaXggOiAnJylcbiAgICB2YXIgZSAgICAgICAgID0gJC5FdmVudChhZmZpeFR5cGUgKyAnLmJzLmFmZml4JylcblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdGhpcy5hZmZpeGVkID0gYWZmaXhcbiAgICB0aGlzLnVucGluID0gYWZmaXggPT0gJ2JvdHRvbScgPyB0aGlzLmdldFBpbm5lZE9mZnNldCgpIDogbnVsbFxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLnJlbW92ZUNsYXNzKEFmZml4LlJFU0VUKVxuICAgICAgLmFkZENsYXNzKGFmZml4VHlwZSlcbiAgICAgIC50cmlnZ2VyKCQuRXZlbnQoYWZmaXhUeXBlLnJlcGxhY2UoJ2FmZml4JywgJ2FmZml4ZWQnKSkpXG5cbiAgICBpZiAoYWZmaXggPT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub2Zmc2V0KHtcbiAgICAgICAgdG9wOiBzY3JvbGxIZWlnaHQgLSB0aGlzLiRlbGVtZW50LmhlaWdodCgpIC0gb2Zmc2V0Qm90dG9tXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gQUZGSVggUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuYWZmaXgnKVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmFmZml4JywgKGRhdGEgPSBuZXcgQWZmaXgodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLmFmZml4XG5cbiAgJC5mbi5hZmZpeCAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLmFmZml4LkNvbnN0cnVjdG9yID0gQWZmaXhcblxuXG4gIC8vIEFGRklYIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5hZmZpeC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uYWZmaXggPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBBRkZJWCBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PVxuXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS1zcHk9XCJhZmZpeFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRzcHkgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSA9ICRzcHkuZGF0YSgpXG5cbiAgICAgIGRhdGEub2Zmc2V0ID0gZGF0YS5vZmZzZXQgfHwge31cblxuICAgICAgaWYgKGRhdGEub2Zmc2V0Qm90dG9tKSBkYXRhLm9mZnNldC5ib3R0b20gPSBkYXRhLm9mZnNldEJvdHRvbVxuICAgICAgaWYgKGRhdGEub2Zmc2V0VG9wKSAgICBkYXRhLm9mZnNldC50b3AgICAgPSBkYXRhLm9mZnNldFRvcFxuXG4gICAgICBQbHVnaW4uY2FsbCgkc3B5LCBkYXRhKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcbiJdfQ==