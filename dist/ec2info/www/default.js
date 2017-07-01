'use strict';

var g_app_initialized = false;
var g_data_table = null;
var g_settings = {};

var g_settings_defaults = {
  cost_duration: 'hourly',
  region: 'us-east-1',
  reserved_term: 'yrTerm1Standard.noUpfront',
  min_memory: 0,
  min_vcpus: 0,
  min_storage: 0,
  selected: '' };


function init_data_table() {
  g_data_table = $('#data').DataTable({
    "bPaginate": false,
    "bInfo": false,
    "bStateSave": true,
    "oSearch": {
      "bRegex": true,
      "bSmart": false },

    "aoColumnDefs": [
    {
      // The columns below are sorted according to the sort attr of the <span> tag within their data cells
      "aTargets": [
      "memory",
      "computeunits",
      "vcpus",
      "storage",
      "ebs-throughput",
      "ebs-iops",
      "ebs-max-bandwidth",
      "networkperf",
      "cost-ondemand",
      "cost-reserved",
      "cost-ebs-optimized"],

      "sType": "span-sort" },

    {
      // The columns below are hidden by default
      "aTargets": [
      "architecture",
      "computeunits",
      "ecu-per-vcpu",
      "gpus",
      "fpgas",
      "enhanced-networking",
      "maxips",
      "linux-virtualization",
      "cost-ondemand-mswinSQLWeb",
      "cost-ondemand-mswinSQL",
      "cost-reserved-mswinSQLWeb",
      "cost-reserved-mswinSQL",
      "ebs-throughput",
      "ebs-iops",
      "ebs-iops",
      "ebs-max-bandwidth",
      "cost-ebs-optimized",
      "trim-support",
      "warmed-up",
      "ipv6-support",
      "placement-group-support",
      "vpc-only"],

      "bVisible": false }],


    // default sort by linux cost
    "aaSorting": [
    [15, "asc"]],

    'initComplete': function () {
      // fire event in separate context so that calls to get_data_table()
      // receive the cached object.
      setTimeout(function () {
        on_data_table_initialized();
      }, 0);
    },
    'drawCallback': function () {
      // abort if initialization hasn't finished yet (initial draw)
      if (g_data_table === null) {
        return;
      }

      // Whenever the table is drawn, update the costs. This is necessary
      // because the cost duration may have changed while a filter was being
      // used and so some rows will need updating.
      redraw_costs();
    },
    // Store filtering, sorting, etc - core datatable feature
    'stateSave': true,
    // Allow export to CSV
    'buttons': ['csv'] });


  g_data_table.
  buttons().
  container().
  find('a').
  addClass('btn btn-primary').
  appendTo($('#menu > div'));

  return g_data_table;
}

$(document).ready(function () {
  init_data_table();
});


function change_cost(duration) {
  // update menu text
  var first = duration.charAt(0).toUpperCase();
  var text = first + duration.substr(1);
  $("#cost-dropdown .dropdown-toggle .text").text(text);

  // update selected menu option
  $('#cost-dropdown li a').each(function (i, e) {
    e = $(e);
    if (e.attr('duration') == duration) {
      e.parent().addClass('active');
    } else {
      e.parent().removeClass('active');
    }
  });

  var hour_multipliers = {
    "hourly": 1,
    "daily": 24,
    "weekly": 7 * 24,
    "monthly": 365 * 24 / 12,
    "annually": 365 * 24 };

  var multiplier = hour_multipliers[duration];
  var per_time;
  $.each($("td.cost-ondemand"), function (i, elem) {
    elem = $(elem);
    per_time = elem.data("pricing")[g_settings.region];
    if (per_time && !isNaN(per_time)) {
      per_time = (per_time * multiplier).toFixed(3);
      elem.html('<span sort="' + per_time + '">$' + per_time + ' ' + duration + '</span>');
    } else {
      elem.html('<span sort="999999">unavailable</span>');
    }
  });

  $.each($("td.cost-reserved"), function (i, elem) {
    elem = $(elem);
    per_time = elem.data("pricing")[g_settings.region];

    if (!per_time) {
      elem.html('<span sort="999999">unavailable</span>');
      return;
    }

    per_time = per_time[g_settings.reserved_term];

    if (per_time && !isNaN(per_time)) {
      per_time = (per_time * multiplier).toFixed(3);
      elem.html('<span sort="' + per_time + '">$' + per_time + ' ' + duration + '</span>');
    } else {
      elem.html('<span sort="999999">unavailable</span>');
    }
  });

  $.each($("td.cost-ebs-optimized"), function (i, elem) {
    elem = $(elem);
    per_time = elem.data("pricing")[g_settings.region];
    if (per_time && !isNaN(per_time)) {
      per_time = (per_time * multiplier).toFixed(3);
      elem.html('<span sort="' + per_time + '">$' + per_time + ' ' + duration + '</span>');
    } else {
      elem.html('<span sort="999999">unavailable</span>');
    }
  });

  g_settings.cost_duration = duration;
  maybe_update_url();
}

function change_region(region) {
  g_settings.region = region;
  var region_name = null;
  $('#region-dropdown li a').each(function (i, e) {
    e = $(e);
    if (e.data('region') === region) {
      e.parent().addClass('active');
      region_name = e.text();
    } else {
      e.parent().removeClass('active');
    }
  });
  $("#region-dropdown .dropdown-toggle .text").text(region_name);
  change_cost(g_settings.cost_duration);

  // redraw table to pick up on new sort values
  g_data_table.rows().invalidate().draw();
}

function change_reserved_term(term) {
  g_settings.reserved_term = term;
  var $dropdown = $('#reserved-term-dropdown'),
  $activeLink = $dropdown.find('li a[data-reserved-term="' + term + '"]'),
  term_name = $activeLink.text();

  $dropdown.find('li').removeClass('active');
  $activeLink.closest('li').addClass('active');

  $dropdown.find('.dropdown-toggle .text').text(term_name);
  change_cost(g_settings.cost_duration);
}

// Update all visible costs to the current duration.
// Called after new columns or rows are shown as their costs may be inaccurate.
function redraw_costs() {
  change_cost(g_settings.cost_duration);
}

function setup_column_toggle() {
  $.each(g_data_table.columns().indexes(), function (i, idx) {
    var column = g_data_table.column(idx);
    $("#filter-dropdown ul").append(
    $('<li>').
    toggleClass('active', column.visible()).
    append(
    $('<a>', { href: "javascript:;" }).
    text($(column.header()).text()).
    click(function (e) {
      toggle_column(i);
      $(this).parent().toggleClass("active");
      $(this).blur(); // prevent focus style from sticking in Firefox
      e.stopPropagation(); // keep dropdown menu open
    })));


  });
}

function setup_clear() {
  $('.btn-clear').click(function () {
    // Reset app.
    g_settings = JSON.parse(JSON.stringify(g_settings_defaults)); // clone
    clear_row_selections();
    maybe_update_url();
    store.clear();
    g_data_table.state.clear();
    window.location.reload();
  });
}

function clear_row_selections() {
  $('#data tbody tr').removeClass('highlight');
}

function url_for_selections() {
  var params = {
    min_memory: g_settings.min_memory,
    min_vcpus: g_settings.min_vcpus,
    min_storage: g_settings.min_storage,
    filter: g_data_table.settings()[0].oPreviousSearch['sSearch'],
    region: g_settings.region,
    cost_duration: g_settings.cost_duration,
    reserved_term: g_settings.reserved_term };


  // avoid storing empty or default values in URL
  for (var key in params) {
    if (params[key] === '' || params[key] == null || params[key] === g_settings_defaults[key]) {
      delete params[key];
    }
  }

  // selected rows
  var selected_row_ids = $('#data tbody tr.highlight').map(function () {
    return this.id;
  }).get();
  if (selected_row_ids.length > 0) {
    params.selected = selected_row_ids;
  }

  var url = location.origin + location.pathname;
  var parameters = [];
  for (var setting in params) {
    if (params[setting] !== undefined) {
      parameters.push(setting + '=' + params[setting]);
    }
  }
  if (parameters.length > 0) {
    url = url + '?' + parameters.join('&');
  }
  return url;
}

function maybe_update_url() {
  // Save localstorage data as well
  store.set('ec2_settings', g_settings);

  if (!history.replaceState) {
    return;
  }

  try {
    var url = url_for_selections();
    if (document.location == url) {
      return;
    }

    history.replaceState(null, '', url);
  } catch (ex) {
    // doesn't matter
  }
}

var apply_min_values = function () {
  var all_filters = $('[data-action="datafilter"]');
  var data_rows = $('#data tr:has(td)');

  data_rows.show();

  all_filters.each(function () {
    var filter_on = $(this).data('type');
    var filter_val = parseFloat($(this).val()) || 0;

    // update global variable for dynamic URL
    g_settings["min_" + filter_on] = filter_val;

    var match_fail = data_rows.filter(function () {
      var row_val;
      row_val = parseFloat(
      $(this).find('td[class~="' + filter_on + '"] span').attr('sort'));

      return row_val < filter_val;
    });

    match_fail.hide();
  });
  maybe_update_url();
};

function on_data_table_initialized() {
  if (g_app_initialized) return;
  g_app_initialized = true;

  load_settings();

  // populate filter inputs
  $('[data-action="datafilter"][data-type="memory"]').val(g_settings['min_memory']);
  $('[data-action="datafilter"][data-type="vcpus"]').val(g_settings['min_vcpus']);
  $('[data-action="datafilter"][data-type="storage"]').val(g_settings['min_storage']);
  apply_min_values();

  // apply highlight to selected rows
  $.each(g_settings.selected.split(','), function (_, id) {
    id = id.replace('.', '\\.');
    $('#' + id).addClass('highlight');
  });

  configure_highlighting();

  // Allow row filtering by min-value match.
  $('[data-action=datafilter]').on('keyup', apply_min_values);

  change_region(g_settings.region);
  change_cost(g_settings.cost_duration);
  change_reserved_term(g_settings.reserved_term);

  $.extend($.fn.dataTableExt.oStdClasses, {
    "sWrapper": "dataTables_wrapper form-inline" });


  setup_column_toggle();

  setup_clear();

  // enable bootstrap tooltips
  $('abbr').tooltip({
    placement: function (tt, el) {
      return this.$element.parents('thead').length ? 'top' : 'right';
    } });


  $("#cost-dropdown li").bind("click", function (e) {
    change_cost(e.target.getAttribute("duration"));
  });

  $("#region-dropdown li").bind("click", function (e) {
    change_region($(e.target).data('region'));
  });

  $("#reserved-term-dropdown li").bind("click", function (e) {
    change_reserved_term($(e.target).data('reservedTerm'));
  });

  // apply classes to search box
  $('div.dataTables_filter input').addClass('form-control search');
}

// sorting for colums with more complex data
// http://datatables.net/plug-ins/sorting#hidden_title
jQuery.extend(jQuery.fn.dataTableExt.oSort, {
  "span-sort-pre": function (elem) {
    var matches = elem.match(/sort="(.*?)"/);
    if (matches) {
      return parseFloat(matches[1]);
    }
    return 0;
  },

  "span-sort-asc": function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  },

  "span-sort-desc": function (a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  } });


// toggle columns
function toggle_column(col_index) {
  var is_visible = g_data_table.column(col_index).visible();
  g_data_table.column(col_index).visible(is_visible ? false : true);
  redraw_costs();
}

// retrieve all the parameters from the location string
function load_settings() {
  // load settings from local storage
  g_settings = store.get('ec2_settings') || {};

  if (location.search) {
    var params = location.search.slice(1).split('&');
    params.forEach(function (param) {
      var parts = param.split('=');
      var key = parts[0];
      var val = parts[1];
      // support legacy key names
      if (key == 'cost') {
        key = 'cost_duration';
      } else if (key == 'term') {
        key = 'reserved_term';
      }
      // store in global settings
      console.log('loaded from url', key, val);
      g_settings[key] = val;
    });
  }

  // use default settings for missing values
  for (var key in g_settings_defaults) {
    if (g_settings[key] === undefined) {
      g_settings[key] = g_settings_defaults[key];
    }
  }

  return g_settings;
}

function configure_highlighting() {
  var compareOn = false,
  $compareBtn = $('.btn-compare'),
  $rows = $('#data tbody tr');

  // Allow row highlighting by clicking.
  $rows.click(function () {
    $(this).toggleClass('highlight');

    if (!compareOn) {
      $compareBtn.prop('disabled', !$rows.is('.highlight'));
    }

    maybe_update_url();
  });

  $compareBtn.prop('disabled', !$($rows).is('.highlight'));
  $compareBtn.text($compareBtn.data('textOff'));

  $compareBtn.click(function () {
    if (compareOn) {
      $rows.show();
      $compareBtn.text($compareBtn.data('textOff')).
      addClass('btn-primary').
      removeClass('btn-success').
      prop('disabled', !$rows.is('.highlight'));
    } else {
      $rows.filter(':not(.highlight)').hide();
      $compareBtn.text($compareBtn.data('textOn')).
      addClass('btn-success').
      removeClass('btn-primary');
    }

    compareOn = !compareOn;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lYzJpbmZvL3d3dy9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbImdfYXBwX2luaXRpYWxpemVkIiwiZ19kYXRhX3RhYmxlIiwiZ19zZXR0aW5ncyIsImdfc2V0dGluZ3NfZGVmYXVsdHMiLCJjb3N0X2R1cmF0aW9uIiwicmVnaW9uIiwicmVzZXJ2ZWRfdGVybSIsIm1pbl9tZW1vcnkiLCJtaW5fdmNwdXMiLCJtaW5fc3RvcmFnZSIsInNlbGVjdGVkIiwiaW5pdF9kYXRhX3RhYmxlIiwiJCIsIkRhdGFUYWJsZSIsInNldFRpbWVvdXQiLCJvbl9kYXRhX3RhYmxlX2luaXRpYWxpemVkIiwicmVkcmF3X2Nvc3RzIiwiYnV0dG9ucyIsImNvbnRhaW5lciIsImZpbmQiLCJhZGRDbGFzcyIsImFwcGVuZFRvIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNoYW5nZV9jb3N0IiwiZHVyYXRpb24iLCJmaXJzdCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwidGV4dCIsInN1YnN0ciIsImVhY2giLCJpIiwiZSIsImF0dHIiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImhvdXJfbXVsdGlwbGllcnMiLCJtdWx0aXBsaWVyIiwicGVyX3RpbWUiLCJlbGVtIiwiZGF0YSIsImlzTmFOIiwidG9GaXhlZCIsImh0bWwiLCJtYXliZV91cGRhdGVfdXJsIiwiY2hhbmdlX3JlZ2lvbiIsInJlZ2lvbl9uYW1lIiwicm93cyIsImludmFsaWRhdGUiLCJkcmF3IiwiY2hhbmdlX3Jlc2VydmVkX3Rlcm0iLCJ0ZXJtIiwiJGRyb3Bkb3duIiwiJGFjdGl2ZUxpbmsiLCJ0ZXJtX25hbWUiLCJjbG9zZXN0Iiwic2V0dXBfY29sdW1uX3RvZ2dsZSIsImNvbHVtbnMiLCJpbmRleGVzIiwiaWR4IiwiY29sdW1uIiwiYXBwZW5kIiwidG9nZ2xlQ2xhc3MiLCJ2aXNpYmxlIiwiaHJlZiIsImhlYWRlciIsImNsaWNrIiwidG9nZ2xlX2NvbHVtbiIsImJsdXIiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXR1cF9jbGVhciIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNsZWFyX3Jvd19zZWxlY3Rpb25zIiwic3RvcmUiLCJjbGVhciIsInN0YXRlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cmxfZm9yX3NlbGVjdGlvbnMiLCJwYXJhbXMiLCJmaWx0ZXIiLCJzZXR0aW5ncyIsIm9QcmV2aW91c1NlYXJjaCIsImtleSIsInNlbGVjdGVkX3Jvd19pZHMiLCJtYXAiLCJpZCIsImdldCIsImxlbmd0aCIsInVybCIsIm9yaWdpbiIsInBhdGhuYW1lIiwicGFyYW1ldGVycyIsInNldHRpbmciLCJ1bmRlZmluZWQiLCJwdXNoIiwiam9pbiIsInNldCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJleCIsImFwcGx5X21pbl92YWx1ZXMiLCJhbGxfZmlsdGVycyIsImRhdGFfcm93cyIsInNob3ciLCJmaWx0ZXJfb24iLCJmaWx0ZXJfdmFsIiwicGFyc2VGbG9hdCIsInZhbCIsIm1hdGNoX2ZhaWwiLCJyb3dfdmFsIiwiaGlkZSIsImxvYWRfc2V0dGluZ3MiLCJzcGxpdCIsIl8iLCJyZXBsYWNlIiwiY29uZmlndXJlX2hpZ2hsaWdodGluZyIsIm9uIiwiZXh0ZW5kIiwiZm4iLCJkYXRhVGFibGVFeHQiLCJvU3RkQ2xhc3NlcyIsInRvb2x0aXAiLCJwbGFjZW1lbnQiLCJ0dCIsImVsIiwiJGVsZW1lbnQiLCJwYXJlbnRzIiwiYmluZCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImpRdWVyeSIsIm9Tb3J0IiwibWF0Y2hlcyIsIm1hdGNoIiwiYSIsImIiLCJjb2xfaW5kZXgiLCJpc192aXNpYmxlIiwic2VhcmNoIiwic2xpY2UiLCJmb3JFYWNoIiwicGFyYW0iLCJwYXJ0cyIsImNvbnNvbGUiLCJsb2ciLCJjb21wYXJlT24iLCIkY29tcGFyZUJ0biIsIiRyb3dzIiwicHJvcCIsImlzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJQSxvQkFBb0IsS0FBeEI7QUFDQSxJQUFJQyxlQUFl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QUNBb0Msa0JBQVkxSCxJQUFaLENBQWlCMEgsWUFBWTlHLElBQVosQ0FBaUIsUUFBakIsQ0FBakI7QUFDR3JCLGNBREgsQ0FDWSxhQURaO0FBRUdnQixpQkFGSCxDQUVlLGFBRmY7QUFHRDs7QUFFRGtILGdCQUFZLENBQUNBLFNBQWI7QUFDRCxHQWZEO0FBZ0JEIiwiZmlsZSI6ImRlZmF1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBnX2FwcF9pbml0aWFsaXplZCA9IGZhbHNlO1xudmFyIGdfZGF0YV90YWJsZSA9IG51bGw7XG52YXIgZ19zZXR0aW5ncyA9IHt9O1xuXG52YXIgZ19zZXR0aW5nc19kZWZhdWx0cyA9IHtcbiAgY29zdF9kdXJhdGlvbjogJ2hvdXJseScsXG4gIHJlZ2lvbjogJ3VzLWVhc3QtMScsXG4gIHJlc2VydmVkX3Rlcm06ICd5clRlcm0xU3RhbmRhcmQubm9VcGZyb250JyxcbiAgbWluX21lbW9yeTogMCxcbiAgbWluX3ZjcHVzOiAwLFxuICBtaW5fc3RvcmFnZTogMCxcbiAgc2VsZWN0ZWQ6ICcnXG59O1xuXG5mdW5jdGlvbiBpbml0X2RhdGFfdGFibGUoKSB7XG4gIGdfZGF0YV90YWJsZSA9ICQoJyNkYXRhJykuRGF0YVRhYmxlKHtcbiAgICBcImJQYWdpbmF0ZVwiOiBmYWxzZSxcbiAgICBcImJJbmZvXCI6IGZhbHNlLFxuICAgIFwiYlN0YXRlU2F2ZVwiOiB0cnVlLFxuICAgIFwib1NlYXJjaFwiOiB7XG4gICAgICBcImJSZWdleFwiOiB0cnVlLFxuICAgICAgXCJiU21hcnRcIjogZmFsc2VcbiAgICB9LFxuICAgIFwiYW9Db2x1bW5EZWZzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gVGhlIGNvbHVtbnMgYmVsb3cgYXJlIHNvcnRlZCBhY2NvcmRpbmcgdG8gdGhlIHNvcnQgYXR0ciBvZiB0aGUgPHNwYW4+IHRhZyB3aXRoaW4gdGhlaXIgZGF0YSBjZWxsc1xuICAgICAgICBcImFUYXJnZXRzXCI6IFtcbiAgICAgICAgICBcIm1lbW9yeVwiLFxuICAgICAgICAgIFwiY29tcHV0ZXVuaXRzXCIsXG4gICAgICAgICAgXCJ2Y3B1c1wiLFxuICAgICAgICAgIFwic3RvcmFnZVwiLFxuICAgICAgICAgIFwiZWJzLXRocm91Z2hwdXRcIixcbiAgICAgICAgICBcImVicy1pb3BzXCIsXG4gICAgICAgICAgXCJlYnMtbWF4LWJhbmR3aWR0aFwiLFxuICAgICAgICAgIFwibmV0d29ya3BlcmZcIixcbiAgICAgICAgICBcImNvc3Qtb25kZW1hbmRcIixcbiAgICAgICAgICBcImNvc3QtcmVzZXJ2ZWRcIixcbiAgICAgICAgICBcImNvc3QtZWJzLW9wdGltaXplZFwiLFxuICAgICAgICBdLFxuICAgICAgICBcInNUeXBlXCI6IFwic3Bhbi1zb3J0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFRoZSBjb2x1bW5zIGJlbG93IGFyZSBoaWRkZW4gYnkgZGVmYXVsdFxuICAgICAgICBcImFUYXJnZXRzXCI6IFtcbiAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiLFxuICAgICAgICAgIFwiY29tcHV0ZXVuaXRzXCIsXG4gICAgICAgICAgXCJlY3UtcGVyLXZjcHVcIixcbiAgICAgICAgICBcImdwdXNcIixcbiAgICAgICAgICBcImZwZ2FzXCIsXG4gICAgICAgICAgXCJlbmhhbmNlZC1uZXR3b3JraW5nXCIsXG4gICAgICAgICAgXCJtYXhpcHNcIixcbiAgICAgICAgICBcImxpbnV4LXZpcnR1YWxpemF0aW9uXCIsXG4gICAgICAgICAgXCJjb3N0LW9uZGVtYW5kLW1zd2luU1FMV2ViXCIsXG4gICAgICAgICAgXCJjb3N0LW9uZGVtYW5kLW1zd2luU1FMXCIsXG4gICAgICAgICAgXCJjb3N0LXJlc2VydmVkLW1zd2luU1FMV2ViXCIsXG4gICAgICAgICAgXCJjb3N0LXJlc2VydmVkLW1zd2luU1FMXCIsXG4gICAgICAgICAgXCJlYnMtdGhyb3VnaHB1dFwiLFxuICAgICAgICAgIFwiZWJzLWlvcHNcIixcbiAgICAgICAgICBcImVicy1pb3BzXCIsXG4gICAgICAgICAgXCJlYnMtbWF4LWJhbmR3aWR0aFwiLFxuICAgICAgICAgIFwiY29zdC1lYnMtb3B0aW1pemVkXCIsXG4gICAgICAgICAgXCJ0cmltLXN1cHBvcnRcIixcbiAgICAgICAgICBcIndhcm1lZC11cFwiLFxuICAgICAgICAgIFwiaXB2Ni1zdXBwb3J0XCIsXG4gICAgICAgICAgXCJwbGFjZW1lbnQtZ3JvdXAtc3VwcG9ydFwiLFxuICAgICAgICAgIFwidnBjLW9ubHlcIlxuICAgICAgICBdLFxuICAgICAgICBcImJWaXNpYmxlXCI6IGZhbHNlXG4gICAgICB9XG4gICAgXSxcbiAgICAvLyBkZWZhdWx0IHNvcnQgYnkgbGludXggY29zdFxuICAgIFwiYWFTb3J0aW5nXCI6IFtcbiAgICAgIFsxNSwgXCJhc2NcIl1cbiAgICBdLFxuICAgICdpbml0Q29tcGxldGUnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBmaXJlIGV2ZW50IGluIHNlcGFyYXRlIGNvbnRleHQgc28gdGhhdCBjYWxscyB0byBnZXRfZGF0YV90YWJsZSgpXG4gICAgICAvLyByZWNlaXZlIHRoZSBjYWNoZWQgb2JqZWN0LlxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uX2RhdGFfdGFibGVfaW5pdGlhbGl6ZWQoKTtcbiAgICAgIH0sIDApO1xuICAgIH0sXG4gICAgJ2RyYXdDYWxsYmFjayc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGFib3J0IGlmIGluaXRpYWxpemF0aW9uIGhhc24ndCBmaW5pc2hlZCB5ZXQgKGluaXRpYWwgZHJhdylcbiAgICAgIGlmIChnX2RhdGFfdGFibGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBXaGVuZXZlciB0aGUgdGFibGUgaXMgZHJhd24sIHVwZGF0ZSB0aGUgY29zdHMuIFRoaXMgaXMgbmVjZXNzYXJ5XG4gICAgICAvLyBiZWNhdXNlIHRoZSBjb3N0IGR1cmF0aW9uIG1heSBoYXZlIGNoYW5nZWQgd2hpbGUgYSBmaWx0ZXIgd2FzIGJlaW5nXG4gICAgICAvLyB1c2VkIGFuZCBzbyBzb21lIHJvd3Mgd2lsbCBuZWVkIHVwZGF0aW5nLlxuICAgICAgcmVkcmF3X2Nvc3RzKCk7XG4gICAgfSxcbiAgICAvLyBTdG9yZSBmaWx0ZXJpbmcsIHNvcnRpbmcsIGV0YyAtIGNvcmUgZGF0YXRhYmxlIGZlYXR1cmVcbiAgICAnc3RhdGVTYXZlJzogdHJ1ZSxcbiAgICAvLyBBbGxvdyBleHBvcnQgdG8gQ1NWXG4gICAgJ2J1dHRvbnMnOiBbJ2NzdiddXG4gIH0pO1xuXG4gIGdfZGF0YV90YWJsZVxuICAgIC5idXR0b25zKClcbiAgICAuY29udGFpbmVyKClcbiAgICAuZmluZCgnYScpXG4gICAgLmFkZENsYXNzKCdidG4gYnRuLXByaW1hcnknKVxuICAgIC5hcHBlbmRUbygkKCcjbWVudSA+IGRpdicpKTtcblxuICByZXR1cm4gZ19kYXRhX3RhYmxlO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGluaXRfZGF0YV90YWJsZSgpO1xufSk7XG5cblxuZnVuY3Rpb24gY2hhbmdlX2Nvc3QoZHVyYXRpb24pIHtcbiAgLy8gdXBkYXRlIG1lbnUgdGV4dFxuICB2YXIgZmlyc3QgPSBkdXJhdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgdmFyIHRleHQgPSBmaXJzdCArIGR1cmF0aW9uLnN1YnN0cigxKTtcbiAgJChcIiNjb3N0LWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUgLnRleHRcIikudGV4dCh0ZXh0KTtcblxuICAvLyB1cGRhdGUgc2VsZWN0ZWQgbWVudSBvcHRpb25cbiAgJCgnI2Nvc3QtZHJvcGRvd24gbGkgYScpLmVhY2goZnVuY3Rpb24gKGksIGUpIHtcbiAgICBlID0gJChlKTtcbiAgICBpZiAoZS5hdHRyKCdkdXJhdGlvbicpID09IGR1cmF0aW9uKSB7XG4gICAgICBlLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgaG91cl9tdWx0aXBsaWVycyA9IHtcbiAgICBcImhvdXJseVwiOiAxLFxuICAgIFwiZGFpbHlcIjogMjQsXG4gICAgXCJ3ZWVrbHlcIjogKDcgKiAyNCksXG4gICAgXCJtb250aGx5XCI6ICgzNjUgKiAyNCAvIDEyKSxcbiAgICBcImFubnVhbGx5XCI6ICgzNjUgKiAyNClcbiAgfTtcbiAgdmFyIG11bHRpcGxpZXIgPSBob3VyX211bHRpcGxpZXJzW2R1cmF0aW9uXTtcbiAgdmFyIHBlcl90aW1lO1xuICAkLmVhY2goJChcInRkLmNvc3Qtb25kZW1hbmRcIiksIGZ1bmN0aW9uIChpLCBlbGVtKSB7XG4gICAgZWxlbSA9ICQoZWxlbSk7XG4gICAgcGVyX3RpbWUgPSBlbGVtLmRhdGEoXCJwcmljaW5nXCIpW2dfc2V0dGluZ3MucmVnaW9uXTtcbiAgICBpZiAocGVyX3RpbWUgJiYgIWlzTmFOKHBlcl90aW1lKSkge1xuICAgICAgcGVyX3RpbWUgPSAocGVyX3RpbWUgKiBtdWx0aXBsaWVyKS50b0ZpeGVkKDMpO1xuICAgICAgZWxlbS5odG1sKCc8c3BhbiBzb3J0PVwiJyArIHBlcl90aW1lICsgJ1wiPiQnICsgcGVyX3RpbWUgKyAnICcgKyBkdXJhdGlvbiArICc8L3NwYW4+Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uaHRtbCgnPHNwYW4gc29ydD1cIjk5OTk5OVwiPnVuYXZhaWxhYmxlPC9zcGFuPicpO1xuICAgIH1cbiAgfSk7XG5cbiAgJC5lYWNoKCQoXCJ0ZC5jb3N0LXJlc2VydmVkXCIpLCBmdW5jdGlvbiAoaSwgZWxlbSkge1xuICAgIGVsZW0gPSAkKGVsZW0pO1xuICAgIHBlcl90aW1lID0gZWxlbS5kYXRhKFwicHJpY2luZ1wiKVtnX3NldHRpbmdzLnJlZ2lvbl07XG5cbiAgICBpZiAoIXBlcl90aW1lKSB7XG4gICAgICBlbGVtLmh0bWwoJzxzcGFuIHNvcnQ9XCI5OTk5OTlcIj51bmF2YWlsYWJsZTwvc3Bhbj4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwZXJfdGltZSA9IHBlcl90aW1lW2dfc2V0dGluZ3MucmVzZXJ2ZWRfdGVybV07XG5cbiAgICBpZiAocGVyX3RpbWUgJiYgIWlzTmFOKHBlcl90aW1lKSkge1xuICAgICAgcGVyX3RpbWUgPSAocGVyX3RpbWUgKiBtdWx0aXBsaWVyKS50b0ZpeGVkKDMpO1xuICAgICAgZWxlbS5odG1sKCc8c3BhbiBzb3J0PVwiJyArIHBlcl90aW1lICsgJ1wiPiQnICsgcGVyX3RpbWUgKyAnICcgKyBkdXJhdGlvbiArICc8L3NwYW4+Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uaHRtbCgnPHNwYW4gc29ydD1cIjk5OTk5OVwiPnVuYXZhaWxhYmxlPC9zcGFuPicpO1xuICAgIH1cbiAgfSk7XG5cbiAgJC5lYWNoKCQoXCJ0ZC5jb3N0LWVicy1vcHRpbWl6ZWRcIiksIGZ1bmN0aW9uIChpLCBlbGVtKSB7XG4gICAgZWxlbSA9ICQoZWxlbSk7XG4gICAgcGVyX3RpbWUgPSBlbGVtLmRhdGEoXCJwcmljaW5nXCIpW2dfc2V0dGluZ3MucmVnaW9uXTtcbiAgICBpZiAocGVyX3RpbWUgJiYgIWlzTmFOKHBlcl90aW1lKSkge1xuICAgICAgcGVyX3RpbWUgPSAocGVyX3RpbWUgKiBtdWx0aXBsaWVyKS50b0ZpeGVkKDMpO1xuICAgICAgZWxlbS5odG1sKCc8c3BhbiBzb3J0PVwiJyArIHBlcl90aW1lICsgJ1wiPiQnICsgcGVyX3RpbWUgKyAnICcgKyBkdXJhdGlvbiArICc8L3NwYW4+Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uaHRtbCgnPHNwYW4gc29ydD1cIjk5OTk5OVwiPnVuYXZhaWxhYmxlPC9zcGFuPicpO1xuICAgIH1cbiAgfSk7XG5cbiAgZ19zZXR0aW5ncy5jb3N0X2R1cmF0aW9uID0gZHVyYXRpb247XG4gIG1heWJlX3VwZGF0ZV91cmwoKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlX3JlZ2lvbihyZWdpb24pIHtcbiAgZ19zZXR0aW5ncy5yZWdpb24gPSByZWdpb247XG4gIHZhciByZWdpb25fbmFtZSA9IG51bGw7XG4gICQoJyNyZWdpb24tZHJvcGRvd24gbGkgYScpLmVhY2goZnVuY3Rpb24gKGksIGUpIHtcbiAgICBlID0gJChlKTtcbiAgICBpZiAoZS5kYXRhKCdyZWdpb24nKSA9PT0gcmVnaW9uKSB7XG4gICAgICBlLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIHJlZ2lvbl9uYW1lID0gZS50ZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gICQoXCIjcmVnaW9uLWRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUgLnRleHRcIikudGV4dChyZWdpb25fbmFtZSk7XG4gIGNoYW5nZV9jb3N0KGdfc2V0dGluZ3MuY29zdF9kdXJhdGlvbik7XG5cbiAgLy8gcmVkcmF3IHRhYmxlIHRvIHBpY2sgdXAgb24gbmV3IHNvcnQgdmFsdWVzXG4gIGdfZGF0YV90YWJsZS5yb3dzKCkuaW52YWxpZGF0ZSgpLmRyYXcoKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlX3Jlc2VydmVkX3Rlcm0odGVybSkge1xuICBnX3NldHRpbmdzLnJlc2VydmVkX3Rlcm0gPSB0ZXJtO1xuICB2YXIgJGRyb3Bkb3duID0gJCgnI3Jlc2VydmVkLXRlcm0tZHJvcGRvd24nKSxcbiAgICAkYWN0aXZlTGluayA9ICRkcm9wZG93bi5maW5kKCdsaSBhW2RhdGEtcmVzZXJ2ZWQtdGVybT1cIicgKyB0ZXJtICsgJ1wiXScpLFxuICAgIHRlcm1fbmFtZSA9ICRhY3RpdmVMaW5rLnRleHQoKTtcblxuICAkZHJvcGRvd24uZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICRhY3RpdmVMaW5rLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICRkcm9wZG93bi5maW5kKCcuZHJvcGRvd24tdG9nZ2xlIC50ZXh0JykudGV4dCh0ZXJtX25hbWUpO1xuICBjaGFuZ2VfY29zdChnX3NldHRpbmdzLmNvc3RfZHVyYXRpb24pO1xufVxuXG4vLyBVcGRhdGUgYWxsIHZpc2libGUgY29zdHMgdG8gdGhlIGN1cnJlbnQgZHVyYXRpb24uXG4vLyBDYWxsZWQgYWZ0ZXIgbmV3IGNvbHVtbnMgb3Igcm93cyBhcmUgc2hvd24gYXMgdGhlaXIgY29zdHMgbWF5IGJlIGluYWNjdXJhdGUuXG5mdW5jdGlvbiByZWRyYXdfY29zdHMoKSB7XG4gIGNoYW5nZV9jb3N0KGdfc2V0dGluZ3MuY29zdF9kdXJhdGlvbik7XG59XG5cbmZ1bmN0aW9uIHNldHVwX2NvbHVtbl90b2dnbGUoKSB7XG4gICQuZWFjaChnX2RhdGFfdGFibGUuY29sdW1ucygpLmluZGV4ZXMoKSwgZnVuY3Rpb24gKGksIGlkeCkge1xuICAgIHZhciBjb2x1bW4gPSBnX2RhdGFfdGFibGUuY29sdW1uKGlkeCk7XG4gICAgJChcIiNmaWx0ZXItZHJvcGRvd24gdWxcIikuYXBwZW5kKFxuICAgICAgJCgnPGxpPicpXG4gICAgICAgIC50b2dnbGVDbGFzcygnYWN0aXZlJywgY29sdW1uLnZpc2libGUoKSlcbiAgICAgICAgLmFwcGVuZChcbiAgICAgICAgICAkKCc8YT4nLCB7aHJlZjogXCJqYXZhc2NyaXB0OjtcIn0pXG4gICAgICAgICAgICAudGV4dCgkKGNvbHVtbi5oZWFkZXIoKSkudGV4dCgpKVxuICAgICAgICAgICAgLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHRvZ2dsZV9jb2x1bW4oaSk7XG4gICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICQodGhpcykuYmx1cigpOyAvLyBwcmV2ZW50IGZvY3VzIHN0eWxlIGZyb20gc3RpY2tpbmcgaW4gRmlyZWZveFxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBrZWVwIGRyb3Bkb3duIG1lbnUgb3BlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cF9jbGVhcigpIHtcbiAgJCgnLmJ0bi1jbGVhcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXNldCBhcHAuXG4gICAgZ19zZXR0aW5ncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ19zZXR0aW5nc19kZWZhdWx0cykpOyAvLyBjbG9uZVxuICAgIGNsZWFyX3Jvd19zZWxlY3Rpb25zKCk7XG4gICAgbWF5YmVfdXBkYXRlX3VybCgpO1xuICAgIHN0b3JlLmNsZWFyKCk7XG4gICAgZ19kYXRhX3RhYmxlLnN0YXRlLmNsZWFyKCk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJfcm93X3NlbGVjdGlvbnMoKSB7XG4gICQoJyNkYXRhIHRib2R5IHRyJykucmVtb3ZlQ2xhc3MoJ2hpZ2hsaWdodCcpO1xufVxuXG5mdW5jdGlvbiB1cmxfZm9yX3NlbGVjdGlvbnMoKSB7XG4gIHZhciBwYXJhbXMgPSB7XG4gICAgbWluX21lbW9yeTogZ19zZXR0aW5ncy5taW5fbWVtb3J5LFxuICAgIG1pbl92Y3B1czogZ19zZXR0aW5ncy5taW5fdmNwdXMsXG4gICAgbWluX3N0b3JhZ2U6IGdfc2V0dGluZ3MubWluX3N0b3JhZ2UsXG4gICAgZmlsdGVyOiBnX2RhdGFfdGFibGUuc2V0dGluZ3MoKVswXS5vUHJldmlvdXNTZWFyY2hbJ3NTZWFyY2gnXSxcbiAgICByZWdpb246IGdfc2V0dGluZ3MucmVnaW9uLFxuICAgIGNvc3RfZHVyYXRpb246IGdfc2V0dGluZ3MuY29zdF9kdXJhdGlvbixcbiAgICByZXNlcnZlZF90ZXJtOiBnX3NldHRpbmdzLnJlc2VydmVkX3Rlcm1cbiAgfTtcblxuICAvLyBhdm9pZCBzdG9yaW5nIGVtcHR5IG9yIGRlZmF1bHQgdmFsdWVzIGluIFVSTFxuICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtc1trZXldID09PSAnJyB8fCBwYXJhbXNba2V5XSA9PSBudWxsIHx8IHBhcmFtc1trZXldID09PSBnX3NldHRpbmdzX2RlZmF1bHRzW2tleV0pIHtcbiAgICAgIGRlbGV0ZSBwYXJhbXNba2V5XTtcbiAgICB9XG4gIH1cblxuICAvLyBzZWxlY3RlZCByb3dzXG4gIHZhciBzZWxlY3RlZF9yb3dfaWRzID0gJCgnI2RhdGEgdGJvZHkgdHIuaGlnaGxpZ2h0JykubWFwKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfSkuZ2V0KCk7XG4gIGlmIChzZWxlY3RlZF9yb3dfaWRzLmxlbmd0aCA+IDApIHtcbiAgICBwYXJhbXMuc2VsZWN0ZWQgPSBzZWxlY3RlZF9yb3dfaWRzO1xuICB9XG5cbiAgdmFyIHVybCA9IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lO1xuICB2YXIgcGFyYW1ldGVycyA9IFtdO1xuICBmb3IgKHZhciBzZXR0aW5nIGluIHBhcmFtcykge1xuICAgIGlmIChwYXJhbXNbc2V0dGluZ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1ldGVycy5wdXNoKHNldHRpbmcgKyAnPScgKyBwYXJhbXNbc2V0dGluZ10pO1xuICAgIH1cbiAgfVxuICBpZiAocGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XG4gICAgdXJsID0gdXJsICsgJz8nICsgcGFyYW1ldGVycy5qb2luKCcmJyk7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gbWF5YmVfdXBkYXRlX3VybCgpIHtcbiAgLy8gU2F2ZSBsb2NhbHN0b3JhZ2UgZGF0YSBhcyB3ZWxsXG4gIHN0b3JlLnNldCgnZWMyX3NldHRpbmdzJywgZ19zZXR0aW5ncyk7XG5cbiAgaWYgKCFoaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIHVybCA9IHVybF9mb3Jfc2VsZWN0aW9ucygpO1xuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbiA9PSB1cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCAnJywgdXJsKTtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICAvLyBkb2Vzbid0IG1hdHRlclxuICB9XG59XG5cbnZhciBhcHBseV9taW5fdmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYWxsX2ZpbHRlcnMgPSAkKCdbZGF0YS1hY3Rpb249XCJkYXRhZmlsdGVyXCJdJyk7XG4gIHZhciBkYXRhX3Jvd3MgPSAkKCcjZGF0YSB0cjpoYXModGQpJyk7XG5cbiAgZGF0YV9yb3dzLnNob3coKTtcblxuICBhbGxfZmlsdGVycy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlsdGVyX29uID0gJCh0aGlzKS5kYXRhKCd0eXBlJyk7XG4gICAgdmFyIGZpbHRlcl92YWwgPSBwYXJzZUZsb2F0KCQodGhpcykudmFsKCkpIHx8IDA7XG5cbiAgICAvLyB1cGRhdGUgZ2xvYmFsIHZhcmlhYmxlIGZvciBkeW5hbWljIFVSTFxuICAgIGdfc2V0dGluZ3NbXCJtaW5fXCIgKyBmaWx0ZXJfb25dID0gZmlsdGVyX3ZhbDtcblxuICAgIHZhciBtYXRjaF9mYWlsID0gZGF0YV9yb3dzLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcm93X3ZhbDtcbiAgICAgIHJvd192YWwgPSBwYXJzZUZsb2F0KFxuICAgICAgICAkKHRoaXMpLmZpbmQoJ3RkW2NsYXNzfj1cIicgKyBmaWx0ZXJfb24gKyAnXCJdIHNwYW4nKS5hdHRyKCdzb3J0JylcbiAgICAgICk7XG4gICAgICByZXR1cm4gcm93X3ZhbCA8IGZpbHRlcl92YWw7XG4gICAgfSk7XG5cbiAgICBtYXRjaF9mYWlsLmhpZGUoKTtcbiAgfSk7XG4gIG1heWJlX3VwZGF0ZV91cmwoKTtcbn07XG5cbmZ1bmN0aW9uIG9uX2RhdGFfdGFibGVfaW5pdGlhbGl6ZWQoKSB7XG4gIGlmIChnX2FwcF9pbml0aWFsaXplZCkgcmV0dXJuO1xuICBnX2FwcF9pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgbG9hZF9zZXR0aW5ncygpO1xuXG4gIC8vIHBvcHVsYXRlIGZpbHRlciBpbnB1dHNcbiAgJCgnW2RhdGEtYWN0aW9uPVwiZGF0YWZpbHRlclwiXVtkYXRhLXR5cGU9XCJtZW1vcnlcIl0nKS52YWwoZ19zZXR0aW5nc1snbWluX21lbW9yeSddKTtcbiAgJCgnW2RhdGEtYWN0aW9uPVwiZGF0YWZpbHRlclwiXVtkYXRhLXR5cGU9XCJ2Y3B1c1wiXScpLnZhbChnX3NldHRpbmdzWydtaW5fdmNwdXMnXSk7XG4gICQoJ1tkYXRhLWFjdGlvbj1cImRhdGFmaWx0ZXJcIl1bZGF0YS10eXBlPVwic3RvcmFnZVwiXScpLnZhbChnX3NldHRpbmdzWydtaW5fc3RvcmFnZSddKTtcbiAgYXBwbHlfbWluX3ZhbHVlcygpO1xuXG4gIC8vIGFwcGx5IGhpZ2hsaWdodCB0byBzZWxlY3RlZCByb3dzXG4gICQuZWFjaChnX3NldHRpbmdzLnNlbGVjdGVkLnNwbGl0KCcsJyksIGZ1bmN0aW9uIChfLCBpZCkge1xuICAgIGlkID0gaWQucmVwbGFjZSgnLicsICdcXFxcLicpO1xuICAgICQoJyMnICsgaWQpLmFkZENsYXNzKCdoaWdobGlnaHQnKTtcbiAgfSk7XG5cbiAgY29uZmlndXJlX2hpZ2hsaWdodGluZygpO1xuXG4gIC8vIEFsbG93IHJvdyBmaWx0ZXJpbmcgYnkgbWluLXZhbHVlIG1hdGNoLlxuICAkKCdbZGF0YS1hY3Rpb249ZGF0YWZpbHRlcl0nKS5vbigna2V5dXAnLCBhcHBseV9taW5fdmFsdWVzKTtcblxuICBjaGFuZ2VfcmVnaW9uKGdfc2V0dGluZ3MucmVnaW9uKTtcbiAgY2hhbmdlX2Nvc3QoZ19zZXR0aW5ncy5jb3N0X2R1cmF0aW9uKTtcbiAgY2hhbmdlX3Jlc2VydmVkX3Rlcm0oZ19zZXR0aW5ncy5yZXNlcnZlZF90ZXJtKTtcblxuICAkLmV4dGVuZCgkLmZuLmRhdGFUYWJsZUV4dC5vU3RkQ2xhc3Nlcywge1xuICAgIFwic1dyYXBwZXJcIjogXCJkYXRhVGFibGVzX3dyYXBwZXIgZm9ybS1pbmxpbmVcIlxuICB9KTtcblxuICBzZXR1cF9jb2x1bW5fdG9nZ2xlKCk7XG5cbiAgc2V0dXBfY2xlYXIoKTtcblxuICAvLyBlbmFibGUgYm9vdHN0cmFwIHRvb2x0aXBzXG4gICQoJ2FiYnInKS50b29sdGlwKHtcbiAgICBwbGFjZW1lbnQ6IGZ1bmN0aW9uICh0dCwgZWwpIHtcbiAgICAgIHJldHVybiAodGhpcy4kZWxlbWVudC5wYXJlbnRzKCd0aGVhZCcpLmxlbmd0aCkgPyAndG9wJyA6ICdyaWdodCc7XG4gICAgfVxuICB9KTtcblxuICAkKFwiI2Nvc3QtZHJvcGRvd24gbGlcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2hhbmdlX2Nvc3QoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZHVyYXRpb25cIikpO1xuICB9KTtcblxuICAkKFwiI3JlZ2lvbi1kcm9wZG93biBsaVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjaGFuZ2VfcmVnaW9uKCQoZS50YXJnZXQpLmRhdGEoJ3JlZ2lvbicpKTtcbiAgfSk7XG5cbiAgJChcIiNyZXNlcnZlZC10ZXJtLWRyb3Bkb3duIGxpXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGNoYW5nZV9yZXNlcnZlZF90ZXJtKCQoZS50YXJnZXQpLmRhdGEoJ3Jlc2VydmVkVGVybScpKTtcbiAgfSk7XG5cbiAgLy8gYXBwbHkgY2xhc3NlcyB0byBzZWFyY2ggYm94XG4gICQoJ2Rpdi5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dCcpLmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgc2VhcmNoJyk7XG59XG5cbi8vIHNvcnRpbmcgZm9yIGNvbHVtcyB3aXRoIG1vcmUgY29tcGxleCBkYXRhXG4vLyBodHRwOi8vZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvc29ydGluZyNoaWRkZW5fdGl0bGVcbmpRdWVyeS5leHRlbmQoalF1ZXJ5LmZuLmRhdGFUYWJsZUV4dC5vU29ydCwge1xuICBcInNwYW4tc29ydC1wcmVcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGVsZW0ubWF0Y2goL3NvcnQ9XCIoLio/KVwiLyk7XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hdGNoZXNbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICBcInNwYW4tc29ydC1hc2NcIjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gKChhIDwgYikgPyAtMSA6ICgoYSA+IGIpID8gMSA6IDApKTtcbiAgfSxcblxuICBcInNwYW4tc29ydC1kZXNjXCI6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuICgoYSA8IGIpID8gMSA6ICgoYSA+IGIpID8gLTEgOiAwKSk7XG4gIH1cbn0pO1xuXG4vLyB0b2dnbGUgY29sdW1uc1xuZnVuY3Rpb24gdG9nZ2xlX2NvbHVtbihjb2xfaW5kZXgpIHtcbiAgdmFyIGlzX3Zpc2libGUgPSBnX2RhdGFfdGFibGUuY29sdW1uKGNvbF9pbmRleCkudmlzaWJsZSgpO1xuICBnX2RhdGFfdGFibGUuY29sdW1uKGNvbF9pbmRleCkudmlzaWJsZShpc192aXNpYmxlID8gZmFsc2UgOiB0cnVlKTtcbiAgcmVkcmF3X2Nvc3RzKCk7XG59XG5cbi8vIHJldHJpZXZlIGFsbCB0aGUgcGFyYW1ldGVycyBmcm9tIHRoZSBsb2NhdGlvbiBzdHJpbmdcbmZ1bmN0aW9uIGxvYWRfc2V0dGluZ3MoKSB7XG4gIC8vIGxvYWQgc2V0dGluZ3MgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGdfc2V0dGluZ3MgPSBzdG9yZS5nZXQoJ2VjMl9zZXR0aW5ncycpIHx8IHt9O1xuXG4gIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICB2YXIgcGFyYW1zID0gbG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJyk7XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICB2YXIgcGFydHMgPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgdmFyIGtleSA9IHBhcnRzWzBdO1xuICAgICAgdmFyIHZhbCA9IHBhcnRzWzFdO1xuICAgICAgLy8gc3VwcG9ydCBsZWdhY3kga2V5IG5hbWVzXG4gICAgICBpZiAoa2V5ID09ICdjb3N0Jykge1xuICAgICAgICBrZXkgPSAnY29zdF9kdXJhdGlvbic7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PSAndGVybScpIHtcbiAgICAgICAga2V5ID0gJ3Jlc2VydmVkX3Rlcm0nO1xuICAgICAgfVxuICAgICAgLy8gc3RvcmUgaW4gZ2xvYmFsIHNldHRpbmdzXG4gICAgICBjb25zb2xlLmxvZygnbG9hZGVkIGZyb20gdXJsJywga2V5LCB2YWwpO1xuICAgICAgZ19zZXR0aW5nc1trZXldID0gdmFsO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gdXNlIGRlZmF1bHQgc2V0dGluZ3MgZm9yIG1pc3NpbmcgdmFsdWVzXG4gIGZvciAodmFyIGtleSBpbiBnX3NldHRpbmdzX2RlZmF1bHRzKSB7XG4gICAgaWYgKGdfc2V0dGluZ3Nba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBnX3NldHRpbmdzW2tleV0gPSBnX3NldHRpbmdzX2RlZmF1bHRzW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdfc2V0dGluZ3M7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZV9oaWdobGlnaHRpbmcoKSB7XG4gIHZhciBjb21wYXJlT24gPSBmYWxzZSxcbiAgICAkY29tcGFyZUJ0biA9ICQoJy5idG4tY29tcGFyZScpLFxuICAgICRyb3dzID0gJCgnI2RhdGEgdGJvZHkgdHInKTtcblxuICAvLyBBbGxvdyByb3cgaGlnaGxpZ2h0aW5nIGJ5IGNsaWNraW5nLlxuICAkcm93cy5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaGlnaGxpZ2h0Jyk7XG5cbiAgICBpZiAoIWNvbXBhcmVPbikge1xuICAgICAgJGNvbXBhcmVCdG4ucHJvcCgnZGlzYWJsZWQnLCAhJHJvd3MuaXMoJy5oaWdobGlnaHQnKSk7XG4gICAgfVxuXG4gICAgbWF5YmVfdXBkYXRlX3VybCgpO1xuICB9KTtcblxuICAkY29tcGFyZUJ0bi5wcm9wKCdkaXNhYmxlZCcsICEkKCRyb3dzKS5pcygnLmhpZ2hsaWdodCcpKTtcbiAgJGNvbXBhcmVCdG4udGV4dCgkY29tcGFyZUJ0bi5kYXRhKCd0ZXh0T2ZmJykpO1xuXG4gICRjb21wYXJlQnRuLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29tcGFyZU9uKSB7XG4gICAgICAkcm93cy5zaG93KCk7XG4gICAgICAkY29tcGFyZUJ0bi50ZXh0KCRjb21wYXJlQnRuLmRhdGEoJ3RleHRPZmYnKSlcbiAgICAgICAgLmFkZENsYXNzKCdidG4tcHJpbWFyeScpXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYnRuLXN1Y2Nlc3MnKVxuICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCAhJHJvd3MuaXMoJy5oaWdobGlnaHQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRyb3dzLmZpbHRlcignOm5vdCguaGlnaGxpZ2h0KScpLmhpZGUoKTtcbiAgICAgICRjb21wYXJlQnRuLnRleHQoJGNvbXBhcmVCdG4uZGF0YSgndGV4dE9uJykpXG4gICAgICAgIC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3MnKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XG4gICAgfVxuXG4gICAgY29tcGFyZU9uID0gIWNvbXBhcmVPbjtcbiAgfSk7XG59XG4iXX0=