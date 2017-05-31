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
      elem.text("$" + per_time + " " + duration);
    } else {
      elem.text("unavailable");
    }
  });

  $.each($("td.cost-reserved"), function (i, elem) {
    elem = $(elem);
    per_time = elem.data("pricing")[g_settings.region];

    if (!per_time) {
      elem.text("unavailable");
      return;
    }

    per_time = per_time[g_settings.reserved_term];

    if (per_time && !isNaN(per_time)) {
      per_time = (per_time * multiplier).toFixed(3);
      elem.text("$" + per_time + " " + duration);
    } else {
      elem.text("unavailable");
    }
  });

  $.each($("td.cost-ebs-optimized"), function (i, elem) {
    elem = $(elem);
    per_time = elem.data("pricing")[g_settings.region];
    if (per_time && !isNaN(per_time)) {
      per_time = (per_time * multiplier).toFixed(3);
      elem.text("$" + per_time + " " + duration);
    } else {
      elem.text("unavailable");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lYzJpbmZvL3d3dy9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbImdfYXBwX2luaXRpYWxpemVkIiwiZ19kYXRhX3RhYmxlIiwiZ19zZXR0aW5ncyIsImdfc2V0dGluZ3NfZGVmYXVsdHMiLCJjb3N0X2R1cmF0aW9uIiwicmVnaW9uIiwicmVzZXJ2ZWRfdGVybSIsIm1pbl9tZW1vcnkiLCJtaW5fdmNwdXMiLCJtaW5fc3RvcmFnZSIsInNlbGVjdGVkIiwiaW5pdF9kYXRhX3RhYmxlIiwiJCIsIkRhdGFUYWJsZSIsInNldFRpbWVvdXQiLCJvbl9kYXRhX3RhYmxlX2luaXRpYWxpemVkIiwicmVkcmF3X2Nvc3RzIiwiYnV0dG9ucyIsImNvbnRhaW5lciIsImZpbmQiLCJhZGRDbGFzcyIsImFwcGVuZFRvIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNoYW5nZV9jb3N0IiwiZHVyYXRpb24iLCJmaXJzdCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwidGV4dCIsInN1YnN0ciIsImVhY2giLCJpIiwiZSIsImF0dHIiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImhvdXJfbXVsdGlwbGllcnMiLCJtdWx0aXBsaWVyIiwicGVyX3RpbWUiLCJlbGVtIiwiZGF0YSIsImlzTmFOIiwidG9GaXhlZCIsIm1heWJlX3VwZGF0ZV91cmwiLCJjaGFuZ2VfcmVnaW9uIiwicmVnaW9uX25hbWUiLCJjaGFuZ2VfcmVzZXJ2ZWRfdGVybSIsInRlcm0iLCIkZHJvcGRvd24iLCIkYWN0aXZlTGluayIsInRlcm1fbmFtZSIsImNsb3Nlc3QiLCJzZXR1cF9jb2x1bW5fdG9nZ2xlIiwiY29sdW1ucyIsImluZGV4ZXMiLCJpZHgiLCJjb2x1bW4iLCJhcHBlbmQiLCJ0b2dnbGVDbGFzcyIsInZpc2libGUiLCJocmVmIiwiaGVhZGVyIiwiY2xpY2siLCJ0b2dnbGVfY29sdW1uIiwiYmx1ciIsInN0b3BQcm9wYWdhdGlvbiIsInNldHVwX2NsZWFyIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY2xlYXJfcm93X3NlbGVjdGlvbnMiLCJzdG9yZSIsImNsZWFyIiwic3RhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInVybF9mb3Jfc2VsZWN0aW9ucyIsInBhcmFtcyIsImZpbHRlciIsInNldHRpbmdzIiwib1ByZXZpb3VzU2VhcmNoIiwia2V5Iiwic2VsZWN0ZWRfcm93X2lkcyIsIm1hcCIsImlkIiwiZ2V0IiwibGVuZ3RoIiwidXJsIiwib3JpZ2luIiwicGF0aG5hbWUiLCJwYXJhbWV0ZXJzIiwic2V0dGluZyIsInVuZGVmaW5lZCIsInB1c2giLCJqb2luIiwic2V0IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImV4IiwiYXBwbHlfbWluX3ZhbHVlcyIsImFsbF9maWx0ZXJzIiwiZGF0YV9yb3dzIiwic2hvdyIsImZpbHRlcl9vbiIsImZpbHRlcl92YWwiLCJwYXJzZUZsb2F0IiwidmFsIiwibWF0Y2hfZmFpbCIsInJvd192YWwiLCJoaWRlIiwibG9hZF9zZXR0aW5ncyIsInNwbGl0IiwiXyIsInJlcGxhY2UiLCJjb25maWd1cmVfaGlnaGxpZ2h0aW5nIiwib24iLCJleHRlbmQiLCJmbiIsImRhdGFUYWJsZUV4dCIsIm9TdGRDbGFzc2VzIiwidG9vbHRpcCIsInBsYWNlbWVudCIsInR0IiwiZWwiLCIkZWxlbWVudCIsInBhcmVudHMiLCJiaW5kIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwialF1ZXJ5Iiwib1NvcnQiLCJtYXRjaGVzIiwibWF0Y2giLCJhIiwiYiIsImNvbF9pbmRleCIsImlzX3Zpc2libGUiLCJzZWFyY2giLCJzbGljZSIsImZvckVhY2giLCJwYXJhbSIsInBhcnRzIiwiY29uc29sZSIsImxvZyIsImNvbXBhcmVPbiIsIiRjb21wYXJlQnRuIiwiJHJvd3MiLCJwcm9wIiwiaXMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQUlBLG9CQUFvQixLQUF4QjtBQUNBLElBQUlDLGVBQWUsSUFBbkI7QUFDQSxJQUFJQyxhQUFhLEVBQWpCOztBQUVB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Z19hcHBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbnZhciBnX2RhdGFfdGFibGUgPSBudWxsO1xudmFyIGdfc2V0dGluZ3MgPSB7fTtcblxudmFyIGdfc2V0dGluZ3NfZGVmYXVsdHMgPSB7XG4gIGNvc3RfZHVyYXRpb246ICdob3VybHknLFxuICByZWdpb246ICd1cy1lYXN0LTEnLFxuICByZXNlcnZlZF90ZXJtOiAneXJUZXJtMVN0YW5kYXJkLm5vVXBmcm9udCcsXG4gIG1pbl9tZW1vcnk6IDAsXG4gIG1pbl92Y3B1czogMCxcbiAgbWluX3N0b3JhZ2U6IDAsXG4gIHNlbGVjdGVkOiAnJ1xufTtcblxuZnVuY3Rpb24gaW5pdF9kYXRhX3RhYmxlKCkge1xuICBnX2RhdGFfdGFibGUgPSAkKCcjZGF0YScpLkRhdGFUYWJsZSh7XG4gICAgXCJiUGFnaW5hdGVcIjogZmFsc2UsXG4gICAgXCJiSW5mb1wiOiBmYWxzZSxcbiAgICBcImJTdGF0ZVNhdmVcIjogdHJ1ZSxcbiAgICBcIm9TZWFyY2hcIjoge1xuICAgICAgXCJiUmVnZXhcIjogdHJ1ZSxcbiAgICAgIFwiYlNtYXJ0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImFvQ29sdW1uRGVmc1wiOiBbXG4gICAgICB7XG4gICAgICAgIC8vIFRoZSBjb2x1bW5zIGJlbG93IGFyZSBzb3J0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzb3J0IGF0dHIgb2YgdGhlIDxzcGFuPiB0YWcgd2l0aGluIHRoZWlyIGRhdGEgY2VsbHNcbiAgICAgICAgXCJhVGFyZ2V0c1wiOiBbXG4gICAgICAgICAgXCJtZW1vcnlcIixcbiAgICAgICAgICBcImNvbXB1dGV1bml0c1wiLFxuICAgICAgICAgIFwidmNwdXNcIixcbiAgICAgICAgICBcInN0b3JhZ2VcIixcbiAgICAgICAgICBcImVicy10aHJvdWdocHV0XCIsXG4gICAgICAgICAgXCJlYnMtaW9wc1wiLFxuICAgICAgICAgIFwiZWJzLW1heC1iYW5kd2lkdGhcIixcbiAgICAgICAgICBcIm5ldHdvcmtwZXJmXCIsXG4gICAgICAgICAgXCJjb3N0LW9uZGVtYW5kXCIsXG4gICAgICAgICAgXCJjb3N0LXJlc2VydmVkXCIsXG4gICAgICAgICAgXCJjb3N0LWVicy1vcHRpbWl6ZWRcIixcbiAgICAgICAgXSxcbiAgICAgICAgXCJzVHlwZVwiOiBcInNwYW4tc29ydFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBUaGUgY29sdW1ucyBiZWxvdyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHRcbiAgICAgICAgXCJhVGFyZ2V0c1wiOiBbXG4gICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIixcbiAgICAgICAgICBcImNvbXB1dGV1bml0c1wiLFxuICAgICAgICAgIFwiZWN1LXBlci12Y3B1XCIsXG4gICAgICAgICAgXCJncHVzXCIsXG4gICAgICAgICAgXCJmcGdhc1wiLFxuICAgICAgICAgIFwiZW5oYW5jZWQtbmV0d29ya2luZ1wiLFxuICAgICAgICAgIFwibWF4aXBzXCIsXG4gICAgICAgICAgXCJsaW51eC12aXJ0dWFsaXphdGlvblwiLFxuICAgICAgICAgIFwiY29zdC1vbmRlbWFuZC1tc3dpblNRTFdlYlwiLFxuICAgICAgICAgIFwiY29zdC1vbmRlbWFuZC1tc3dpblNRTFwiLFxuICAgICAgICAgIFwiY29zdC1yZXNlcnZlZC1tc3dpblNRTFdlYlwiLFxuICAgICAgICAgIFwiY29zdC1yZXNlcnZlZC1tc3dpblNRTFwiLFxuICAgICAgICAgIFwiZWJzLXRocm91Z2hwdXRcIixcbiAgICAgICAgICBcImVicy1pb3BzXCIsXG4gICAgICAgICAgXCJlYnMtaW9wc1wiLFxuICAgICAgICAgIFwiZWJzLW1heC1iYW5kd2lkdGhcIixcbiAgICAgICAgICBcImNvc3QtZWJzLW9wdGltaXplZFwiLFxuICAgICAgICAgIFwidHJpbS1zdXBwb3J0XCIsXG4gICAgICAgICAgXCJ3YXJtZWQtdXBcIixcbiAgICAgICAgICBcImlwdjYtc3VwcG9ydFwiLFxuICAgICAgICAgIFwicGxhY2VtZW50LWdyb3VwLXN1cHBvcnRcIixcbiAgICAgICAgICBcInZwYy1vbmx5XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJiVmlzaWJsZVwiOiBmYWxzZVxuICAgICAgfVxuICAgIF0sXG4gICAgLy8gZGVmYXVsdCBzb3J0IGJ5IGxpbnV4IGNvc3RcbiAgICBcImFhU29ydGluZ1wiOiBbXG4gICAgICBbMTUsIFwiYXNjXCJdXG4gICAgXSxcbiAgICAnaW5pdENvbXBsZXRlJzogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZmlyZSBldmVudCBpbiBzZXBhcmF0ZSBjb250ZXh0IHNvIHRoYXQgY2FsbHMgdG8gZ2V0X2RhdGFfdGFibGUoKVxuICAgICAgLy8gcmVjZWl2ZSB0aGUgY2FjaGVkIG9iamVjdC5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvbl9kYXRhX3RhYmxlX2luaXRpYWxpemVkKCk7XG4gICAgICB9LCAwKTtcbiAgICB9LFxuICAgICdkcmF3Q2FsbGJhY2snOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBhYm9ydCBpZiBpbml0aWFsaXphdGlvbiBoYXNuJ3QgZmluaXNoZWQgeWV0IChpbml0aWFsIGRyYXcpXG4gICAgICBpZiAoZ19kYXRhX3RhYmxlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gV2hlbmV2ZXIgdGhlIHRhYmxlIGlzIGRyYXduLCB1cGRhdGUgdGhlIGNvc3RzLiBUaGlzIGlzIG5lY2Vzc2FyeVxuICAgICAgLy8gYmVjYXVzZSB0aGUgY29zdCBkdXJhdGlvbiBtYXkgaGF2ZSBjaGFuZ2VkIHdoaWxlIGEgZmlsdGVyIHdhcyBiZWluZ1xuICAgICAgLy8gdXNlZCBhbmQgc28gc29tZSByb3dzIHdpbGwgbmVlZCB1cGRhdGluZy5cbiAgICAgIHJlZHJhd19jb3N0cygpO1xuICAgIH0sXG4gICAgLy8gU3RvcmUgZmlsdGVyaW5nLCBzb3J0aW5nLCBldGMgLSBjb3JlIGRhdGF0YWJsZSBmZWF0dXJlXG4gICAgJ3N0YXRlU2F2ZSc6IHRydWUsXG4gICAgLy8gQWxsb3cgZXhwb3J0IHRvIENTVlxuICAgICdidXR0b25zJzogWydjc3YnXVxuICB9KTtcblxuICBnX2RhdGFfdGFibGVcbiAgICAuYnV0dG9ucygpXG4gICAgLmNvbnRhaW5lcigpXG4gICAgLmZpbmQoJ2EnKVxuICAgIC5hZGRDbGFzcygnYnRuIGJ0bi1wcmltYXJ5JylcbiAgICAuYXBwZW5kVG8oJCgnI21lbnUgPiBkaXYnKSk7XG5cbiAgcmV0dXJuIGdfZGF0YV90YWJsZTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBpbml0X2RhdGFfdGFibGUoKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIGNoYW5nZV9jb3N0KGR1cmF0aW9uKSB7XG4gIC8vIHVwZGF0ZSBtZW51IHRleHRcbiAgdmFyIGZpcnN0ID0gZHVyYXRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gIHZhciB0ZXh0ID0gZmlyc3QgKyBkdXJhdGlvbi5zdWJzdHIoMSk7XG4gICQoXCIjY29zdC1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlIC50ZXh0XCIpLnRleHQodGV4dCk7XG5cbiAgLy8gdXBkYXRlIHNlbGVjdGVkIG1lbnUgb3B0aW9uXG4gICQoJyNjb3N0LWRyb3Bkb3duIGxpIGEnKS5lYWNoKGZ1bmN0aW9uIChpLCBlKSB7XG4gICAgZSA9ICQoZSk7XG4gICAgaWYgKGUuYXR0cignZHVyYXRpb24nKSA9PSBkdXJhdGlvbikge1xuICAgICAgZS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGhvdXJfbXVsdGlwbGllcnMgPSB7XG4gICAgXCJob3VybHlcIjogMSxcbiAgICBcImRhaWx5XCI6IDI0LFxuICAgIFwid2Vla2x5XCI6ICg3ICogMjQpLFxuICAgIFwibW9udGhseVwiOiAoMzY1ICogMjQgLyAxMiksXG4gICAgXCJhbm51YWxseVwiOiAoMzY1ICogMjQpXG4gIH07XG4gIHZhciBtdWx0aXBsaWVyID0gaG91cl9tdWx0aXBsaWVyc1tkdXJhdGlvbl07XG4gIHZhciBwZXJfdGltZTtcbiAgJC5lYWNoKCQoXCJ0ZC5jb3N0LW9uZGVtYW5kXCIpLCBmdW5jdGlvbiAoaSwgZWxlbSkge1xuICAgIGVsZW0gPSAkKGVsZW0pO1xuICAgIHBlcl90aW1lID0gZWxlbS5kYXRhKFwicHJpY2luZ1wiKVtnX3NldHRpbmdzLnJlZ2lvbl07XG4gICAgaWYgKHBlcl90aW1lICYmICFpc05hTihwZXJfdGltZSkpIHtcbiAgICAgIHBlcl90aW1lID0gKHBlcl90aW1lICogbXVsdGlwbGllcikudG9GaXhlZCgzKTtcbiAgICAgIGVsZW0udGV4dChcIiRcIiArIHBlcl90aW1lICsgXCIgXCIgKyBkdXJhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0udGV4dChcInVuYXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgJC5lYWNoKCQoXCJ0ZC5jb3N0LXJlc2VydmVkXCIpLCBmdW5jdGlvbiAoaSwgZWxlbSkge1xuICAgIGVsZW0gPSAkKGVsZW0pO1xuICAgIHBlcl90aW1lID0gZWxlbS5kYXRhKFwicHJpY2luZ1wiKVtnX3NldHRpbmdzLnJlZ2lvbl07XG5cbiAgICBpZiAoIXBlcl90aW1lKSB7XG4gICAgICBlbGVtLnRleHQoXCJ1bmF2YWlsYWJsZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwZXJfdGltZSA9IHBlcl90aW1lW2dfc2V0dGluZ3MucmVzZXJ2ZWRfdGVybV07XG5cbiAgICBpZiAocGVyX3RpbWUgJiYgIWlzTmFOKHBlcl90aW1lKSkge1xuICAgICAgcGVyX3RpbWUgPSAocGVyX3RpbWUgKiBtdWx0aXBsaWVyKS50b0ZpeGVkKDMpO1xuICAgICAgZWxlbS50ZXh0KFwiJFwiICsgcGVyX3RpbWUgKyBcIiBcIiArIGR1cmF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS50ZXh0KFwidW5hdmFpbGFibGVcIik7XG4gICAgfVxuICB9KTtcblxuICAkLmVhY2goJChcInRkLmNvc3QtZWJzLW9wdGltaXplZFwiKSwgZnVuY3Rpb24gKGksIGVsZW0pIHtcbiAgICBlbGVtID0gJChlbGVtKTtcbiAgICBwZXJfdGltZSA9IGVsZW0uZGF0YShcInByaWNpbmdcIilbZ19zZXR0aW5ncy5yZWdpb25dO1xuICAgIGlmIChwZXJfdGltZSAmJiAhaXNOYU4ocGVyX3RpbWUpKSB7XG4gICAgICBwZXJfdGltZSA9IChwZXJfdGltZSAqIG11bHRpcGxpZXIpLnRvRml4ZWQoMyk7XG4gICAgICBlbGVtLnRleHQoXCIkXCIgKyBwZXJfdGltZSArIFwiIFwiICsgZHVyYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnRleHQoXCJ1bmF2YWlsYWJsZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGdfc2V0dGluZ3MuY29zdF9kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICBtYXliZV91cGRhdGVfdXJsKCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZV9yZWdpb24ocmVnaW9uKSB7XG4gIGdfc2V0dGluZ3MucmVnaW9uID0gcmVnaW9uO1xuICB2YXIgcmVnaW9uX25hbWUgPSBudWxsO1xuICAkKCcjcmVnaW9uLWRyb3Bkb3duIGxpIGEnKS5lYWNoKGZ1bmN0aW9uIChpLCBlKSB7XG4gICAgZSA9ICQoZSk7XG4gICAgaWYgKGUuZGF0YSgncmVnaW9uJykgPT09IHJlZ2lvbikge1xuICAgICAgZS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICByZWdpb25fbmFtZSA9IGUudGV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuICAkKFwiI3JlZ2lvbi1kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlIC50ZXh0XCIpLnRleHQocmVnaW9uX25hbWUpO1xuICBjaGFuZ2VfY29zdChnX3NldHRpbmdzLmNvc3RfZHVyYXRpb24pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VfcmVzZXJ2ZWRfdGVybSh0ZXJtKSB7XG4gIGdfc2V0dGluZ3MucmVzZXJ2ZWRfdGVybSA9IHRlcm07XG4gIHZhciAkZHJvcGRvd24gPSAkKCcjcmVzZXJ2ZWQtdGVybS1kcm9wZG93bicpLFxuICAgICRhY3RpdmVMaW5rID0gJGRyb3Bkb3duLmZpbmQoJ2xpIGFbZGF0YS1yZXNlcnZlZC10ZXJtPVwiJyArIHRlcm0gKyAnXCJdJyksXG4gICAgdGVybV9uYW1lID0gJGFjdGl2ZUxpbmsudGV4dCgpO1xuXG4gICRkcm9wZG93bi5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgJGFjdGl2ZUxpbmsuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgJGRyb3Bkb3duLmZpbmQoJy5kcm9wZG93bi10b2dnbGUgLnRleHQnKS50ZXh0KHRlcm1fbmFtZSk7XG4gIGNoYW5nZV9jb3N0KGdfc2V0dGluZ3MuY29zdF9kdXJhdGlvbik7XG59XG5cbi8vIFVwZGF0ZSBhbGwgdmlzaWJsZSBjb3N0cyB0byB0aGUgY3VycmVudCBkdXJhdGlvbi5cbi8vIENhbGxlZCBhZnRlciBuZXcgY29sdW1ucyBvciByb3dzIGFyZSBzaG93biBhcyB0aGVpciBjb3N0cyBtYXkgYmUgaW5hY2N1cmF0ZS5cbmZ1bmN0aW9uIHJlZHJhd19jb3N0cygpIHtcbiAgY2hhbmdlX2Nvc3QoZ19zZXR0aW5ncy5jb3N0X2R1cmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBfY29sdW1uX3RvZ2dsZSgpIHtcbiAgJC5lYWNoKGdfZGF0YV90YWJsZS5jb2x1bW5zKCkuaW5kZXhlcygpLCBmdW5jdGlvbiAoaSwgaWR4KSB7XG4gICAgdmFyIGNvbHVtbiA9IGdfZGF0YV90YWJsZS5jb2x1bW4oaWR4KTtcbiAgICAkKFwiI2ZpbHRlci1kcm9wZG93biB1bFwiKS5hcHBlbmQoXG4gICAgICAkKCc8bGk+JylcbiAgICAgICAgLnRvZ2dsZUNsYXNzKCdhY3RpdmUnLCBjb2x1bW4udmlzaWJsZSgpKVxuICAgICAgICAuYXBwZW5kKFxuICAgICAgICAgICQoJzxhPicsIHtocmVmOiBcImphdmFzY3JpcHQ6O1wifSlcbiAgICAgICAgICAgIC50ZXh0KCQoY29sdW1uLmhlYWRlcigpKS50ZXh0KCkpXG4gICAgICAgICAgICAuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdG9nZ2xlX2NvbHVtbihpKTtcbiAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7IC8vIHByZXZlbnQgZm9jdXMgc3R5bGUgZnJvbSBzdGlja2luZyBpbiBGaXJlZm94XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIGtlZXAgZHJvcGRvd24gbWVudSBvcGVuXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwX2NsZWFyKCkge1xuICAkKCcuYnRuLWNsZWFyJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlc2V0IGFwcC5cbiAgICBnX3NldHRpbmdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnX3NldHRpbmdzX2RlZmF1bHRzKSk7IC8vIGNsb25lXG4gICAgY2xlYXJfcm93X3NlbGVjdGlvbnMoKTtcbiAgICBtYXliZV91cGRhdGVfdXJsKCk7XG4gICAgc3RvcmUuY2xlYXIoKTtcbiAgICBnX2RhdGFfdGFibGUuc3RhdGUuY2xlYXIoKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhcl9yb3dfc2VsZWN0aW9ucygpIHtcbiAgJCgnI2RhdGEgdGJvZHkgdHInKS5yZW1vdmVDbGFzcygnaGlnaGxpZ2h0Jyk7XG59XG5cbmZ1bmN0aW9uIHVybF9mb3Jfc2VsZWN0aW9ucygpIHtcbiAgdmFyIHBhcmFtcyA9IHtcbiAgICBtaW5fbWVtb3J5OiBnX3NldHRpbmdzLm1pbl9tZW1vcnksXG4gICAgbWluX3ZjcHVzOiBnX3NldHRpbmdzLm1pbl92Y3B1cyxcbiAgICBtaW5fc3RvcmFnZTogZ19zZXR0aW5ncy5taW5fc3RvcmFnZSxcbiAgICBmaWx0ZXI6IGdfZGF0YV90YWJsZS5zZXR0aW5ncygpWzBdLm9QcmV2aW91c1NlYXJjaFsnc1NlYXJjaCddLFxuICAgIHJlZ2lvbjogZ19zZXR0aW5ncy5yZWdpb24sXG4gICAgY29zdF9kdXJhdGlvbjogZ19zZXR0aW5ncy5jb3N0X2R1cmF0aW9uLFxuICAgIHJlc2VydmVkX3Rlcm06IGdfc2V0dGluZ3MucmVzZXJ2ZWRfdGVybVxuICB9O1xuXG4gIC8vIGF2b2lkIHN0b3JpbmcgZW1wdHkgb3IgZGVmYXVsdCB2YWx1ZXMgaW4gVVJMXG4gIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zW2tleV0gPT09ICcnIHx8IHBhcmFtc1trZXldID09IG51bGwgfHwgcGFyYW1zW2tleV0gPT09IGdfc2V0dGluZ3NfZGVmYXVsdHNba2V5XSkge1xuICAgICAgZGVsZXRlIHBhcmFtc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlbGVjdGVkIHJvd3NcbiAgdmFyIHNlbGVjdGVkX3Jvd19pZHMgPSAkKCcjZGF0YSB0Ym9keSB0ci5oaWdobGlnaHQnKS5tYXAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9KS5nZXQoKTtcbiAgaWYgKHNlbGVjdGVkX3Jvd19pZHMubGVuZ3RoID4gMCkge1xuICAgIHBhcmFtcy5zZWxlY3RlZCA9IHNlbGVjdGVkX3Jvd19pZHM7XG4gIH1cblxuICB2YXIgdXJsID0gbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWU7XG4gIHZhciBwYXJhbWV0ZXJzID0gW107XG4gIGZvciAodmFyIHNldHRpbmcgaW4gcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtc1tzZXR0aW5nXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2goc2V0dGluZyArICc9JyArIHBhcmFtc1tzZXR0aW5nXSk7XG4gICAgfVxuICB9XG4gIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICB1cmwgPSB1cmwgKyAnPycgKyBwYXJhbWV0ZXJzLmpvaW4oJyYnKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiBtYXliZV91cGRhdGVfdXJsKCkge1xuICAvLyBTYXZlIGxvY2Fsc3RvcmFnZSBkYXRhIGFzIHdlbGxcbiAgc3RvcmUuc2V0KCdlYzJfc2V0dGluZ3MnLCBnX3NldHRpbmdzKTtcblxuICBpZiAoIWhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICB2YXIgdXJsID0gdXJsX2Zvcl9zZWxlY3Rpb25zKCk7XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uID09IHVybCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsICcnLCB1cmwpO1xuICB9IGNhdGNoIChleCkge1xuICAgIC8vIGRvZXNuJ3QgbWF0dGVyXG4gIH1cbn1cblxudmFyIGFwcGx5X21pbl92YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhbGxfZmlsdGVycyA9ICQoJ1tkYXRhLWFjdGlvbj1cImRhdGFmaWx0ZXJcIl0nKTtcbiAgdmFyIGRhdGFfcm93cyA9ICQoJyNkYXRhIHRyOmhhcyh0ZCknKTtcblxuICBkYXRhX3Jvd3Muc2hvdygpO1xuXG4gIGFsbF9maWx0ZXJzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaWx0ZXJfb24gPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKTtcbiAgICB2YXIgZmlsdGVyX3ZhbCA9IHBhcnNlRmxvYXQoJCh0aGlzKS52YWwoKSkgfHwgMDtcblxuICAgIC8vIHVwZGF0ZSBnbG9iYWwgdmFyaWFibGUgZm9yIGR5bmFtaWMgVVJMXG4gICAgZ19zZXR0aW5nc1tcIm1pbl9cIiArIGZpbHRlcl9vbl0gPSBmaWx0ZXJfdmFsO1xuXG4gICAgdmFyIG1hdGNoX2ZhaWwgPSBkYXRhX3Jvd3MuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByb3dfdmFsO1xuICAgICAgcm93X3ZhbCA9IHBhcnNlRmxvYXQoXG4gICAgICAgICQodGhpcykuZmluZCgndGRbY2xhc3N+PVwiJyArIGZpbHRlcl9vbiArICdcIl0gc3BhbicpLmF0dHIoJ3NvcnQnKVxuICAgICAgKTtcbiAgICAgIHJldHVybiByb3dfdmFsIDwgZmlsdGVyX3ZhbDtcbiAgICB9KTtcblxuICAgIG1hdGNoX2ZhaWwuaGlkZSgpO1xuICB9KTtcbiAgbWF5YmVfdXBkYXRlX3VybCgpO1xufTtcblxuZnVuY3Rpb24gb25fZGF0YV90YWJsZV9pbml0aWFsaXplZCgpIHtcbiAgaWYgKGdfYXBwX2luaXRpYWxpemVkKSByZXR1cm47XG4gIGdfYXBwX2luaXRpYWxpemVkID0gdHJ1ZTtcblxuICBsb2FkX3NldHRpbmdzKCk7XG5cbiAgLy8gcG9wdWxhdGUgZmlsdGVyIGlucHV0c1xuICAkKCdbZGF0YS1hY3Rpb249XCJkYXRhZmlsdGVyXCJdW2RhdGEtdHlwZT1cIm1lbW9yeVwiXScpLnZhbChnX3NldHRpbmdzWydtaW5fbWVtb3J5J10pO1xuICAkKCdbZGF0YS1hY3Rpb249XCJkYXRhZmlsdGVyXCJdW2RhdGEtdHlwZT1cInZjcHVzXCJdJykudmFsKGdfc2V0dGluZ3NbJ21pbl92Y3B1cyddKTtcbiAgJCgnW2RhdGEtYWN0aW9uPVwiZGF0YWZpbHRlclwiXVtkYXRhLXR5cGU9XCJzdG9yYWdlXCJdJykudmFsKGdfc2V0dGluZ3NbJ21pbl9zdG9yYWdlJ10pO1xuICBhcHBseV9taW5fdmFsdWVzKCk7XG5cbiAgLy8gYXBwbHkgaGlnaGxpZ2h0IHRvIHNlbGVjdGVkIHJvd3NcbiAgJC5lYWNoKGdfc2V0dGluZ3Muc2VsZWN0ZWQuc3BsaXQoJywnKSwgZnVuY3Rpb24gKF8sIGlkKSB7XG4gICAgaWQgPSBpZC5yZXBsYWNlKCcuJywgJ1xcXFwuJyk7XG4gICAgJCgnIycgKyBpZCkuYWRkQ2xhc3MoJ2hpZ2hsaWdodCcpO1xuICB9KTtcblxuICBjb25maWd1cmVfaGlnaGxpZ2h0aW5nKCk7XG5cbiAgLy8gQWxsb3cgcm93IGZpbHRlcmluZyBieSBtaW4tdmFsdWUgbWF0Y2guXG4gICQoJ1tkYXRhLWFjdGlvbj1kYXRhZmlsdGVyXScpLm9uKCdrZXl1cCcsIGFwcGx5X21pbl92YWx1ZXMpO1xuXG4gIGNoYW5nZV9yZWdpb24oZ19zZXR0aW5ncy5yZWdpb24pO1xuICBjaGFuZ2VfY29zdChnX3NldHRpbmdzLmNvc3RfZHVyYXRpb24pO1xuICBjaGFuZ2VfcmVzZXJ2ZWRfdGVybShnX3NldHRpbmdzLnJlc2VydmVkX3Rlcm0pO1xuXG4gICQuZXh0ZW5kKCQuZm4uZGF0YVRhYmxlRXh0Lm9TdGRDbGFzc2VzLCB7XG4gICAgXCJzV3JhcHBlclwiOiBcImRhdGFUYWJsZXNfd3JhcHBlciBmb3JtLWlubGluZVwiXG4gIH0pO1xuXG4gIHNldHVwX2NvbHVtbl90b2dnbGUoKTtcblxuICBzZXR1cF9jbGVhcigpO1xuXG4gIC8vIGVuYWJsZSBib290c3RyYXAgdG9vbHRpcHNcbiAgJCgnYWJicicpLnRvb2x0aXAoe1xuICAgIHBsYWNlbWVudDogZnVuY3Rpb24gKHR0LCBlbCkge1xuICAgICAgcmV0dXJuICh0aGlzLiRlbGVtZW50LnBhcmVudHMoJ3RoZWFkJykubGVuZ3RoKSA/ICd0b3AnIDogJ3JpZ2h0JztcbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjY29zdC1kcm9wZG93biBsaVwiKS5iaW5kKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjaGFuZ2VfY29zdChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkdXJhdGlvblwiKSk7XG4gIH0pO1xuXG4gICQoXCIjcmVnaW9uLWRyb3Bkb3duIGxpXCIpLmJpbmQoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGNoYW5nZV9yZWdpb24oJChlLnRhcmdldCkuZGF0YSgncmVnaW9uJykpO1xuICB9KTtcblxuICAkKFwiI3Jlc2VydmVkLXRlcm0tZHJvcGRvd24gbGlcIikuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2hhbmdlX3Jlc2VydmVkX3Rlcm0oJChlLnRhcmdldCkuZGF0YSgncmVzZXJ2ZWRUZXJtJykpO1xuICB9KTtcblxuICAvLyBhcHBseSBjbGFzc2VzIHRvIHNlYXJjaCBib3hcbiAgJCgnZGl2LmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0JykuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBzZWFyY2gnKTtcbn1cblxuLy8gc29ydGluZyBmb3IgY29sdW1zIHdpdGggbW9yZSBjb21wbGV4IGRhdGFcbi8vIGh0dHA6Ly9kYXRhdGFibGVzLm5ldC9wbHVnLWlucy9zb3J0aW5nI2hpZGRlbl90aXRsZVxualF1ZXJ5LmV4dGVuZChqUXVlcnkuZm4uZGF0YVRhYmxlRXh0Lm9Tb3J0LCB7XG4gIFwic3Bhbi1zb3J0LXByZVwiOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgIHZhciBtYXRjaGVzID0gZWxlbS5tYXRjaCgvc29ydD1cIiguKj8pXCIvKTtcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hlc1sxXSk7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIFwic3Bhbi1zb3J0LWFzY1wiOiBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiAoKGEgPCBiKSA/IC0xIDogKChhID4gYikgPyAxIDogMCkpO1xuICB9LFxuXG4gIFwic3Bhbi1zb3J0LWRlc2NcIjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gKChhIDwgYikgPyAxIDogKChhID4gYikgPyAtMSA6IDApKTtcbiAgfVxufSk7XG5cbi8vIHRvZ2dsZSBjb2x1bW5zXG5mdW5jdGlvbiB0b2dnbGVfY29sdW1uKGNvbF9pbmRleCkge1xuICB2YXIgaXNfdmlzaWJsZSA9IGdfZGF0YV90YWJsZS5jb2x1bW4oY29sX2luZGV4KS52aXNpYmxlKCk7XG4gIGdfZGF0YV90YWJsZS5jb2x1bW4oY29sX2luZGV4KS52aXNpYmxlKGlzX3Zpc2libGUgPyBmYWxzZSA6IHRydWUpO1xuICByZWRyYXdfY29zdHMoKTtcbn1cblxuLy8gcmV0cmlldmUgYWxsIHRoZSBwYXJhbWV0ZXJzIGZyb20gdGhlIGxvY2F0aW9uIHN0cmluZ1xuZnVuY3Rpb24gbG9hZF9zZXR0aW5ncygpIHtcbiAgLy8gbG9hZCBzZXR0aW5ncyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgZ19zZXR0aW5ncyA9IHN0b3JlLmdldCgnZWMyX3NldHRpbmdzJykgfHwge307XG5cbiAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgIHZhciBwYXJhbXMgPSBsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkuc3BsaXQoJyYnKTtcbiAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHZhciBwYXJ0cyA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgICB2YXIga2V5ID0gcGFydHNbMF07XG4gICAgICB2YXIgdmFsID0gcGFydHNbMV07XG4gICAgICAvLyBzdXBwb3J0IGxlZ2FjeSBrZXkgbmFtZXNcbiAgICAgIGlmIChrZXkgPT0gJ2Nvc3QnKSB7XG4gICAgICAgIGtleSA9ICdjb3N0X2R1cmF0aW9uJztcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09ICd0ZXJtJykge1xuICAgICAgICBrZXkgPSAncmVzZXJ2ZWRfdGVybSc7XG4gICAgICB9XG4gICAgICAvLyBzdG9yZSBpbiBnbG9iYWwgc2V0dGluZ3NcbiAgICAgIGNvbnNvbGUubG9nKCdsb2FkZWQgZnJvbSB1cmwnLCBrZXksIHZhbCk7XG4gICAgICBnX3NldHRpbmdzW2tleV0gPSB2YWw7XG4gICAgfSk7XG4gIH1cblxuICAvLyB1c2UgZGVmYXVsdCBzZXR0aW5ncyBmb3IgbWlzc2luZyB2YWx1ZXNcbiAgZm9yICh2YXIga2V5IGluIGdfc2V0dGluZ3NfZGVmYXVsdHMpIHtcbiAgICBpZiAoZ19zZXR0aW5nc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGdfc2V0dGluZ3Nba2V5XSA9IGdfc2V0dGluZ3NfZGVmYXVsdHNba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ19zZXR0aW5ncztcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlX2hpZ2hsaWdodGluZygpIHtcbiAgdmFyIGNvbXBhcmVPbiA9IGZhbHNlLFxuICAgICRjb21wYXJlQnRuID0gJCgnLmJ0bi1jb21wYXJlJyksXG4gICAgJHJvd3MgPSAkKCcjZGF0YSB0Ym9keSB0cicpO1xuXG4gIC8vIEFsbG93IHJvdyBoaWdobGlnaHRpbmcgYnkgY2xpY2tpbmcuXG4gICRyb3dzLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoaWdobGlnaHQnKTtcblxuICAgIGlmICghY29tcGFyZU9uKSB7XG4gICAgICAkY29tcGFyZUJ0bi5wcm9wKCdkaXNhYmxlZCcsICEkcm93cy5pcygnLmhpZ2hsaWdodCcpKTtcbiAgICB9XG5cbiAgICBtYXliZV91cGRhdGVfdXJsKCk7XG4gIH0pO1xuXG4gICRjb21wYXJlQnRuLnByb3AoJ2Rpc2FibGVkJywgISQoJHJvd3MpLmlzKCcuaGlnaGxpZ2h0JykpO1xuICAkY29tcGFyZUJ0bi50ZXh0KCRjb21wYXJlQnRuLmRhdGEoJ3RleHRPZmYnKSk7XG5cbiAgJGNvbXBhcmVCdG4uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChjb21wYXJlT24pIHtcbiAgICAgICRyb3dzLnNob3coKTtcbiAgICAgICRjb21wYXJlQnRuLnRleHQoJGNvbXBhcmVCdG4uZGF0YSgndGV4dE9mZicpKVxuICAgICAgICAuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JylcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdidG4tc3VjY2VzcycpXG4gICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsICEkcm93cy5pcygnLmhpZ2hsaWdodCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHJvd3MuZmlsdGVyKCc6bm90KC5oaWdobGlnaHQpJykuaGlkZSgpO1xuICAgICAgJGNvbXBhcmVCdG4udGV4dCgkY29tcGFyZUJ0bi5kYXRhKCd0ZXh0T24nKSlcbiAgICAgICAgLmFkZENsYXNzKCdidG4tc3VjY2VzcycpXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKTtcbiAgICB9XG5cbiAgICBjb21wYXJlT24gPSAhY29tcGFyZU9uO1xuICB9KTtcbn1cbiJdfQ==