// Aggregates

// Color

// Conditionals

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.LN10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return Math.round(values[0]);
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return Math.min(Math.max(values[0],values[1]),values[2]);
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return Math.floor(values[0]);
};

function fnc_ceil(values, context) {
    return Math.ceil(values[0]);
};

function fnc_pi(values, context) {
    return Math.PI;
};

function fnc_to_int(values, context) {
    var intVal = parseInt(values[0],10);
    if ( isNaN(intVal) ) { return false };
    return intVal;
};

function fnc_to_real(values, context) {
    var realVal = parseFloat(values[0]);
    if ( isNaN(realVal) ) { return false };
    return realVal;
};

function fnc_to_string(values, context) {
    return String(values[0]);
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_coalesce(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return new Date().toISOString();
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toUpperCase();
};

function fnc_title(values, context) {
    if ( typeof values[0] != "string" ) { return false; }
    return values[0].toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

function fnc_trim(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return String(values[0]).trim();
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    if ( isNaN(values[0]) || !values[0]) { return null; } return String.fromCodePoint(values[0]);
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    if ( !values[0] ) { return null; } return String(values[0]).replace(RegExp(values[1]),values[2]);
};

function fnc_regexp_substr(values, context) {
    if ( !values[0] ) { return null; }
    return String(values[0]).match(RegExp(values[1]))[0];
};

function fnc_substr(values, context) {
    var length = values[2]
    if ( !values[0] || isNaN(values[1])) { return false; }
    return String(values[0]).substr(values[1], length);
};

function fnc_concat(values, context) {
    return values.join(''); 
};

function fnc_strpos(values, context) {
   if (!values[0] || !values[1]) {return null}
   return String(values[0]).indexOf(String(values[1]))+1;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_IdiomaWichi_1rule0_eval_expression(context) {
    // Wch >= 1 AND Wch <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  >= 1) && (feature.get('Wch')  <= 5));
    } else {
        return ((feature.get('Wch')  >= 1) && (feature.get('Wch')  <= 5));
    }
}


function exp_IdiomaWichi_1rule1_eval_expression(context) {
    // Wch > 5 AND Wch <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 5) && (feature.get('Wch')  <= 10));
    } else {
        return ((feature.get('Wch')  > 5) && (feature.get('Wch')  <= 10));
    }
}


function exp_IdiomaWichi_1rule2_eval_expression(context) {
    // Wch > 10 AND Wch <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 10) && (feature.get('Wch')  <= 25));
    } else {
        return ((feature.get('Wch')  > 10) && (feature.get('Wch')  <= 25));
    }
}


function exp_IdiomaWichi_1rule3_eval_expression(context) {
    // Wch > 25 AND Wch <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 25) && (feature.get('Wch')  <= 50));
    } else {
        return ((feature.get('Wch')  > 25) && (feature.get('Wch')  <= 50));
    }
}


function exp_IdiomaWichi_1rule4_eval_expression(context) {
    // Wch > 50 AND Wch <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 50) && (feature.get('Wch')  <= 100));
    } else {
        return ((feature.get('Wch')  > 50) && (feature.get('Wch')  <= 100));
    }
}


function exp_IdiomaWichi_1rule5_eval_expression(context) {
    // Wch > 100 AND Wch <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 100) && (feature.get('Wch')  <= 250));
    } else {
        return ((feature.get('Wch')  > 100) && (feature.get('Wch')  <= 250));
    }
}


function exp_IdiomaWichi_1rule6_eval_expression(context) {
    // Wch > 250 AND Wch <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 250) && (feature.get('Wch')  <= 500));
    } else {
        return ((feature.get('Wch')  > 250) && (feature.get('Wch')  <= 500));
    }
}


function exp_IdiomaWichi_1rule7_eval_expression(context) {
    // Wch > 500 AND Wch <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 500) && (feature.get('Wch')  <= 1000));
    } else {
        return ((feature.get('Wch')  > 500) && (feature.get('Wch')  <= 1000));
    }
}


function exp_IdiomaWichi_1rule8_eval_expression(context) {
    // Wch > 1000 AND Wch <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 1000) && (feature.get('Wch')  <= 2500));
    } else {
        return ((feature.get('Wch')  > 1000) && (feature.get('Wch')  <= 2500));
    }
}


function exp_IdiomaWichi_1rule9_eval_expression(context) {
    // Wch > 2500 AND Wch <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 2500) && (feature.get('Wch')  <= 5000));
    } else {
        return ((feature.get('Wch')  > 2500) && (feature.get('Wch')  <= 5000));
    }
}


function exp_IdiomaWichi_1rule10_eval_expression(context) {
    // Wch > 5000 AND Wch <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 5000) && (feature.get('Wch')  <= 10000));
    } else {
        return ((feature.get('Wch')  > 5000) && (feature.get('Wch')  <= 10000));
    }
}


function exp_IdiomaWichi_1rule11_eval_expression(context) {
    // Wch > 10000 AND Wch <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Wch')  > 10000) && (feature.get('Wch')  <= 25000));
    } else {
        return ((feature.get('Wch')  > 10000) && (feature.get('Wch')  <= 25000));
    }
}


function exp_IdiomaTobaQom_2rule0_eval_expression(context) {
    // Tob >= 1 AND Tob <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  >= 1) && (feature.get('Tob')  <= 5));
    } else {
        return ((feature.get('Tob')  >= 1) && (feature.get('Tob')  <= 5));
    }
}


function exp_IdiomaTobaQom_2rule1_eval_expression(context) {
    // Tob > 5 AND Tob <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 5) && (feature.get('Tob')  <= 10));
    } else {
        return ((feature.get('Tob')  > 5) && (feature.get('Tob')  <= 10));
    }
}


function exp_IdiomaTobaQom_2rule2_eval_expression(context) {
    // Tob > 10 AND Tob <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 10) && (feature.get('Tob')  <= 25));
    } else {
        return ((feature.get('Tob')  > 10) && (feature.get('Tob')  <= 25));
    }
}


function exp_IdiomaTobaQom_2rule3_eval_expression(context) {
    // Tob > 25 AND Tob <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 25) && (feature.get('Tob')  <= 50));
    } else {
        return ((feature.get('Tob')  > 25) && (feature.get('Tob')  <= 50));
    }
}


function exp_IdiomaTobaQom_2rule4_eval_expression(context) {
    // Tob > 50 AND Tob <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 50) && (feature.get('Tob')  <= 100));
    } else {
        return ((feature.get('Tob')  > 50) && (feature.get('Tob')  <= 100));
    }
}


function exp_IdiomaTobaQom_2rule5_eval_expression(context) {
    // Tob > 100 AND Tob <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 100) && (feature.get('Tob')  <= 250));
    } else {
        return ((feature.get('Tob')  > 100) && (feature.get('Tob')  <= 250));
    }
}


function exp_IdiomaTobaQom_2rule6_eval_expression(context) {
    // Tob > 250 AND Tob <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 250) && (feature.get('Tob')  <= 500));
    } else {
        return ((feature.get('Tob')  > 250) && (feature.get('Tob')  <= 500));
    }
}


function exp_IdiomaTobaQom_2rule7_eval_expression(context) {
    // Tob > 500 AND Tob <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 500) && (feature.get('Tob')  <= 1000));
    } else {
        return ((feature.get('Tob')  > 500) && (feature.get('Tob')  <= 1000));
    }
}


function exp_IdiomaTobaQom_2rule8_eval_expression(context) {
    // Tob > 1000 AND Tob <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 1000) && (feature.get('Tob')  <= 2500));
    } else {
        return ((feature.get('Tob')  > 1000) && (feature.get('Tob')  <= 2500));
    }
}


function exp_IdiomaTobaQom_2rule9_eval_expression(context) {
    // Tob > 2500 AND Tob <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 2500) && (feature.get('Tob')  <= 5000));
    } else {
        return ((feature.get('Tob')  > 2500) && (feature.get('Tob')  <= 5000));
    }
}


function exp_IdiomaTobaQom_2rule10_eval_expression(context) {
    // Tob > 5000 AND Tob <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 5000) && (feature.get('Tob')  <= 10000));
    } else {
        return ((feature.get('Tob')  > 5000) && (feature.get('Tob')  <= 10000));
    }
}


function exp_IdiomaTobaQom_2rule11_eval_expression(context) {
    // Tob > 10000 AND Tob <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Tob')  > 10000) && (feature.get('Tob')  <= 25000));
    } else {
        return ((feature.get('Tob')  > 10000) && (feature.get('Tob')  <= 25000));
    }
}


function exp_IdiomaQuechua_3rule0_eval_expression(context) {
    // Qu >= 1 AND Qu <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  >= 1) && (feature.get('Qu')  <= 5));
    } else {
        return ((feature.get('Qu')  >= 1) && (feature.get('Qu')  <= 5));
    }
}


function exp_IdiomaQuechua_3rule1_eval_expression(context) {
    // Qu > 5 AND Qu <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 5) && (feature.get('Qu')  <= 10));
    } else {
        return ((feature.get('Qu')  > 5) && (feature.get('Qu')  <= 10));
    }
}


function exp_IdiomaQuechua_3rule2_eval_expression(context) {
    // Qu > 10 AND Qu <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 10) && (feature.get('Qu')  <= 25));
    } else {
        return ((feature.get('Qu')  > 10) && (feature.get('Qu')  <= 25));
    }
}


function exp_IdiomaQuechua_3rule3_eval_expression(context) {
    // Qu > 25 AND Qu <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 25) && (feature.get('Qu')  <= 50));
    } else {
        return ((feature.get('Qu')  > 25) && (feature.get('Qu')  <= 50));
    }
}


function exp_IdiomaQuechua_3rule4_eval_expression(context) {
    // Qu > 50 AND Qu <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 50) && (feature.get('Qu')  <= 100));
    } else {
        return ((feature.get('Qu')  > 50) && (feature.get('Qu')  <= 100));
    }
}


function exp_IdiomaQuechua_3rule5_eval_expression(context) {
    // Qu > 100 AND Qu <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 100) && (feature.get('Qu')  <= 250));
    } else {
        return ((feature.get('Qu')  > 100) && (feature.get('Qu')  <= 250));
    }
}


function exp_IdiomaQuechua_3rule6_eval_expression(context) {
    // Qu > 250 AND Qu <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 250) && (feature.get('Qu')  <= 500));
    } else {
        return ((feature.get('Qu')  > 250) && (feature.get('Qu')  <= 500));
    }
}


function exp_IdiomaQuechua_3rule7_eval_expression(context) {
    // Qu > 500 AND Qu <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 500) && (feature.get('Qu')  <= 1000));
    } else {
        return ((feature.get('Qu')  > 500) && (feature.get('Qu')  <= 1000));
    }
}


function exp_IdiomaQuechua_3rule8_eval_expression(context) {
    // Qu > 1000 AND Qu <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 1000) && (feature.get('Qu')  <= 2500));
    } else {
        return ((feature.get('Qu')  > 1000) && (feature.get('Qu')  <= 2500));
    }
}


function exp_IdiomaQuechua_3rule9_eval_expression(context) {
    // Qu > 2500 AND Qu <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 2500) && (feature.get('Qu')  <= 5000));
    } else {
        return ((feature.get('Qu')  > 2500) && (feature.get('Qu')  <= 5000));
    }
}


function exp_IdiomaQuechua_3rule10_eval_expression(context) {
    // Qu > 5000 AND Qu <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 5000) && (feature.get('Qu')  <= 10000));
    } else {
        return ((feature.get('Qu')  > 5000) && (feature.get('Qu')  <= 10000));
    }
}


function exp_IdiomaQuechua_3rule11_eval_expression(context) {
    // Qu > 10000 AND Qu <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Qu')  > 10000) && (feature.get('Qu')  <= 25000));
    } else {
        return ((feature.get('Qu')  > 10000) && (feature.get('Qu')  <= 25000));
    }
}


function exp_IdiomaPortugues_4rule0_eval_expression(context) {
    // Pt >= 1 AND Pt <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  >= 1) && (feature.get('Pt')  <= 5));
    } else {
        return ((feature.get('Pt')  >= 1) && (feature.get('Pt')  <= 5));
    }
}


function exp_IdiomaPortugues_4rule1_eval_expression(context) {
    // Pt > 5 AND Pt <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 5) && (feature.get('Pt')  <= 10));
    } else {
        return ((feature.get('Pt')  > 5) && (feature.get('Pt')  <= 10));
    }
}


function exp_IdiomaPortugues_4rule2_eval_expression(context) {
    // Pt > 10 AND Pt <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 10) && (feature.get('Pt')  <= 25));
    } else {
        return ((feature.get('Pt')  > 10) && (feature.get('Pt')  <= 25));
    }
}


function exp_IdiomaPortugues_4rule3_eval_expression(context) {
    // Pt > 25 AND Pt <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 25) && (feature.get('Pt')  <= 50));
    } else {
        return ((feature.get('Pt')  > 25) && (feature.get('Pt')  <= 50));
    }
}


function exp_IdiomaPortugues_4rule4_eval_expression(context) {
    // Pt > 50 AND Pt <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 50) && (feature.get('Pt')  <= 100));
    } else {
        return ((feature.get('Pt')  > 50) && (feature.get('Pt')  <= 100));
    }
}


function exp_IdiomaPortugues_4rule5_eval_expression(context) {
    // Pt > 100 AND Pt <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 100) && (feature.get('Pt')  <= 250));
    } else {
        return ((feature.get('Pt')  > 100) && (feature.get('Pt')  <= 250));
    }
}


function exp_IdiomaPortugues_4rule6_eval_expression(context) {
    // Pt > 250 AND Pt <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 250) && (feature.get('Pt')  <= 500));
    } else {
        return ((feature.get('Pt')  > 250) && (feature.get('Pt')  <= 500));
    }
}


function exp_IdiomaPortugues_4rule7_eval_expression(context) {
    // Pt > 500 AND Pt <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 500) && (feature.get('Pt')  <= 1000));
    } else {
        return ((feature.get('Pt')  > 500) && (feature.get('Pt')  <= 1000));
    }
}


function exp_IdiomaPortugues_4rule8_eval_expression(context) {
    // Pt > 1000 AND Pt <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 1000) && (feature.get('Pt')  <= 2500));
    } else {
        return ((feature.get('Pt')  > 1000) && (feature.get('Pt')  <= 2500));
    }
}


function exp_IdiomaPortugues_4rule9_eval_expression(context) {
    // Pt > 2500 AND Pt <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 2500) && (feature.get('Pt')  <= 5000));
    } else {
        return ((feature.get('Pt')  > 2500) && (feature.get('Pt')  <= 5000));
    }
}


function exp_IdiomaPortugues_4rule10_eval_expression(context) {
    // Pt > 5000 AND Pt <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 5000) && (feature.get('Pt')  <= 10000));
    } else {
        return ((feature.get('Pt')  > 5000) && (feature.get('Pt')  <= 10000));
    }
}


function exp_IdiomaPortugues_4rule11_eval_expression(context) {
    // Pt > 10000 AND Pt <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Pt')  > 10000) && (feature.get('Pt')  <= 25000));
    } else {
        return ((feature.get('Pt')  > 10000) && (feature.get('Pt')  <= 25000));
    }
}


function exp_IdiomaItaliano_5rule0_eval_expression(context) {
    // It >= 1 AND It <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  >= 1) && (feature.get('It')  <= 5));
    } else {
        return ((feature.get('It')  >= 1) && (feature.get('It')  <= 5));
    }
}


function exp_IdiomaItaliano_5rule1_eval_expression(context) {
    // It > 5 AND It <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 5) && (feature.get('It')  <= 10));
    } else {
        return ((feature.get('It')  > 5) && (feature.get('It')  <= 10));
    }
}


function exp_IdiomaItaliano_5rule2_eval_expression(context) {
    // It > 10 AND It <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 10) && (feature.get('It')  <= 25));
    } else {
        return ((feature.get('It')  > 10) && (feature.get('It')  <= 25));
    }
}


function exp_IdiomaItaliano_5rule3_eval_expression(context) {
    // It > 25 AND It <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 25) && (feature.get('It')  <= 50));
    } else {
        return ((feature.get('It')  > 25) && (feature.get('It')  <= 50));
    }
}


function exp_IdiomaItaliano_5rule4_eval_expression(context) {
    // It > 50 AND It <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 50) && (feature.get('It')  <= 100));
    } else {
        return ((feature.get('It')  > 50) && (feature.get('It')  <= 100));
    }
}


function exp_IdiomaItaliano_5rule5_eval_expression(context) {
    // It > 100 AND It <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 100) && (feature.get('It')  <= 250));
    } else {
        return ((feature.get('It')  > 100) && (feature.get('It')  <= 250));
    }
}


function exp_IdiomaItaliano_5rule6_eval_expression(context) {
    // It > 250 AND It <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 250) && (feature.get('It')  <= 500));
    } else {
        return ((feature.get('It')  > 250) && (feature.get('It')  <= 500));
    }
}


function exp_IdiomaItaliano_5rule7_eval_expression(context) {
    // It > 500 AND It <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 500) && (feature.get('It')  <= 1000));
    } else {
        return ((feature.get('It')  > 500) && (feature.get('It')  <= 1000));
    }
}


function exp_IdiomaItaliano_5rule8_eval_expression(context) {
    // It > 1000 AND It <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 1000) && (feature.get('It')  <= 2500));
    } else {
        return ((feature.get('It')  > 1000) && (feature.get('It')  <= 2500));
    }
}


function exp_IdiomaItaliano_5rule9_eval_expression(context) {
    // It > 2500 AND It <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 2500) && (feature.get('It')  <= 5000));
    } else {
        return ((feature.get('It')  > 2500) && (feature.get('It')  <= 5000));
    }
}


function exp_IdiomaItaliano_5rule10_eval_expression(context) {
    // It > 5000 AND It <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 5000) && (feature.get('It')  <= 10000));
    } else {
        return ((feature.get('It')  > 5000) && (feature.get('It')  <= 10000));
    }
}


function exp_IdiomaItaliano_5rule11_eval_expression(context) {
    // It > 10000 AND It <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('It')  > 10000) && (feature.get('It')  <= 25000));
    } else {
        return ((feature.get('It')  > 10000) && (feature.get('It')  <= 25000));
    }
}


function exp_IdiomaGuarani_6rule0_eval_expression(context) {
    // Gn >= 1 AND Gn <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  >= 1) && (feature.get('Gn')  <= 5));
    } else {
        return ((feature.get('Gn')  >= 1) && (feature.get('Gn')  <= 5));
    }
}


function exp_IdiomaGuarani_6rule1_eval_expression(context) {
    // Gn > 5 AND Gn <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 5) && (feature.get('Gn')  <= 10));
    } else {
        return ((feature.get('Gn')  > 5) && (feature.get('Gn')  <= 10));
    }
}


function exp_IdiomaGuarani_6rule2_eval_expression(context) {
    // Gn > 10 AND Gn <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 10) && (feature.get('Gn')  <= 25));
    } else {
        return ((feature.get('Gn')  > 10) && (feature.get('Gn')  <= 25));
    }
}


function exp_IdiomaGuarani_6rule3_eval_expression(context) {
    // Gn > 25 AND Gn <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 25) && (feature.get('Gn')  <= 50));
    } else {
        return ((feature.get('Gn')  > 25) && (feature.get('Gn')  <= 50));
    }
}


function exp_IdiomaGuarani_6rule4_eval_expression(context) {
    // Gn > 50 AND Gn <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 50) && (feature.get('Gn')  <= 100));
    } else {
        return ((feature.get('Gn')  > 50) && (feature.get('Gn')  <= 100));
    }
}


function exp_IdiomaGuarani_6rule5_eval_expression(context) {
    // Gn > 100 AND Gn <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 100) && (feature.get('Gn')  <= 250));
    } else {
        return ((feature.get('Gn')  > 100) && (feature.get('Gn')  <= 250));
    }
}


function exp_IdiomaGuarani_6rule6_eval_expression(context) {
    // Gn > 250 AND Gn <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 250) && (feature.get('Gn')  <= 500));
    } else {
        return ((feature.get('Gn')  > 250) && (feature.get('Gn')  <= 500));
    }
}


function exp_IdiomaGuarani_6rule7_eval_expression(context) {
    // Gn > 500 AND Gn <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 500) && (feature.get('Gn')  <= 1000));
    } else {
        return ((feature.get('Gn')  > 500) && (feature.get('Gn')  <= 1000));
    }
}


function exp_IdiomaGuarani_6rule8_eval_expression(context) {
    // Gn > 1000 AND Gn <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 1000) && (feature.get('Gn')  <= 2500));
    } else {
        return ((feature.get('Gn')  > 1000) && (feature.get('Gn')  <= 2500));
    }
}


function exp_IdiomaGuarani_6rule9_eval_expression(context) {
    // Gn > 2500 AND Gn <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 2500) && (feature.get('Gn')  <= 5000));
    } else {
        return ((feature.get('Gn')  > 2500) && (feature.get('Gn')  <= 5000));
    }
}


function exp_IdiomaGuarani_6rule10_eval_expression(context) {
    // Gn > 5000 AND Gn <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 5000) && (feature.get('Gn')  <= 10000));
    } else {
        return ((feature.get('Gn')  > 5000) && (feature.get('Gn')  <= 10000));
    }
}


function exp_IdiomaGuarani_6rule11_eval_expression(context) {
    // Gn > 10000 AND Gn <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Gn')  > 10000) && (feature.get('Gn')  <= 25000));
    } else {
        return ((feature.get('Gn')  > 10000) && (feature.get('Gn')  <= 25000));
    }
}


function exp_IdiomaFrances_7rule0_eval_expression(context) {
    // Fr >= 1 AND Fr <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  >= 1) && (feature.get('Fr')  <= 5));
    } else {
        return ((feature.get('Fr')  >= 1) && (feature.get('Fr')  <= 5));
    }
}


function exp_IdiomaFrances_7rule1_eval_expression(context) {
    // Fr > 5 AND Fr <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 5) && (feature.get('Fr')  <= 10));
    } else {
        return ((feature.get('Fr')  > 5) && (feature.get('Fr')  <= 10));
    }
}


function exp_IdiomaFrances_7rule2_eval_expression(context) {
    // Fr > 10 AND Fr <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 10) && (feature.get('Fr')  <= 25));
    } else {
        return ((feature.get('Fr')  > 10) && (feature.get('Fr')  <= 25));
    }
}


function exp_IdiomaFrances_7rule3_eval_expression(context) {
    // Fr > 25 AND Fr <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 25) && (feature.get('Fr')  <= 50));
    } else {
        return ((feature.get('Fr')  > 25) && (feature.get('Fr')  <= 50));
    }
}


function exp_IdiomaFrances_7rule4_eval_expression(context) {
    // Fr > 50 AND Fr <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 50) && (feature.get('Fr')  <= 100));
    } else {
        return ((feature.get('Fr')  > 50) && (feature.get('Fr')  <= 100));
    }
}


function exp_IdiomaFrances_7rule5_eval_expression(context) {
    // Fr > 100 AND Fr <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 100) && (feature.get('Fr')  <= 250));
    } else {
        return ((feature.get('Fr')  > 100) && (feature.get('Fr')  <= 250));
    }
}


function exp_IdiomaFrances_7rule6_eval_expression(context) {
    // Fr > 250 AND Fr <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 250) && (feature.get('Fr')  <= 500));
    } else {
        return ((feature.get('Fr')  > 250) && (feature.get('Fr')  <= 500));
    }
}


function exp_IdiomaFrances_7rule7_eval_expression(context) {
    // Fr > 500 AND Fr <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 500) && (feature.get('Fr')  <= 1000));
    } else {
        return ((feature.get('Fr')  > 500) && (feature.get('Fr')  <= 1000));
    }
}


function exp_IdiomaFrances_7rule8_eval_expression(context) {
    // Fr > 1000 AND Fr <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 1000) && (feature.get('Fr')  <= 2500));
    } else {
        return ((feature.get('Fr')  > 1000) && (feature.get('Fr')  <= 2500));
    }
}


function exp_IdiomaFrances_7rule9_eval_expression(context) {
    // Fr > 2500 AND Fr <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 2500) && (feature.get('Fr')  <= 5000));
    } else {
        return ((feature.get('Fr')  > 2500) && (feature.get('Fr')  <= 5000));
    }
}


function exp_IdiomaFrances_7rule10_eval_expression(context) {
    // Fr > 5000 AND Fr <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 5000) && (feature.get('Fr')  <= 10000));
    } else {
        return ((feature.get('Fr')  > 5000) && (feature.get('Fr')  <= 10000));
    }
}


function exp_IdiomaFrances_7rule11_eval_expression(context) {
    // Fr > 10000 AND Fr <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Fr')  > 10000) && (feature.get('Fr')  <= 25000));
    } else {
        return ((feature.get('Fr')  > 10000) && (feature.get('Fr')  <= 25000));
    }
}


function exp_IdiomaIngles_8rule0_eval_expression(context) {
    // En >= 1 AND En <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  >= 1) && (feature.get('En')  <= 5));
    } else {
        return ((feature.get('En')  >= 1) && (feature.get('En')  <= 5));
    }
}


function exp_IdiomaIngles_8rule1_eval_expression(context) {
    // En > 5 AND En <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 5) && (feature.get('En')  <= 10));
    } else {
        return ((feature.get('En')  > 5) && (feature.get('En')  <= 10));
    }
}


function exp_IdiomaIngles_8rule2_eval_expression(context) {
    // En > 10 AND En <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 10) && (feature.get('En')  <= 25));
    } else {
        return ((feature.get('En')  > 10) && (feature.get('En')  <= 25));
    }
}


function exp_IdiomaIngles_8rule3_eval_expression(context) {
    // En > 25 AND En <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 25) && (feature.get('En')  <= 50));
    } else {
        return ((feature.get('En')  > 25) && (feature.get('En')  <= 50));
    }
}


function exp_IdiomaIngles_8rule4_eval_expression(context) {
    // En > 50 AND En <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 50) && (feature.get('En')  <= 100));
    } else {
        return ((feature.get('En')  > 50) && (feature.get('En')  <= 100));
    }
}


function exp_IdiomaIngles_8rule5_eval_expression(context) {
    // En > 100 AND En <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 100) && (feature.get('En')  <= 250));
    } else {
        return ((feature.get('En')  > 100) && (feature.get('En')  <= 250));
    }
}


function exp_IdiomaIngles_8rule6_eval_expression(context) {
    // En > 250 AND En <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 250) && (feature.get('En')  <= 500));
    } else {
        return ((feature.get('En')  > 250) && (feature.get('En')  <= 500));
    }
}


function exp_IdiomaIngles_8rule7_eval_expression(context) {
    // En > 500 AND En <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 500) && (feature.get('En')  <= 1000));
    } else {
        return ((feature.get('En')  > 500) && (feature.get('En')  <= 1000));
    }
}


function exp_IdiomaIngles_8rule8_eval_expression(context) {
    // En > 1000 AND En <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 1000) && (feature.get('En')  <= 2500));
    } else {
        return ((feature.get('En')  > 1000) && (feature.get('En')  <= 2500));
    }
}


function exp_IdiomaIngles_8rule9_eval_expression(context) {
    // En > 2500 AND En <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 2500) && (feature.get('En')  <= 5000));
    } else {
        return ((feature.get('En')  > 2500) && (feature.get('En')  <= 5000));
    }
}


function exp_IdiomaIngles_8rule10_eval_expression(context) {
    // En > 5000 AND En <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 5000) && (feature.get('En')  <= 10000));
    } else {
        return ((feature.get('En')  > 5000) && (feature.get('En')  <= 10000));
    }
}


function exp_IdiomaIngles_8rule11_eval_expression(context) {
    // En > 10000 AND En <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('En')  > 10000) && (feature.get('En')  <= 25000));
    } else {
        return ((feature.get('En')  > 10000) && (feature.get('En')  <= 25000));
    }
}


function exp_IdiomaAleman_9rule0_eval_expression(context) {
    // De >= 1 AND De <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  >= 1) && (feature.get('De')  <= 5));
    } else {
        return ((feature.get('De')  >= 1) && (feature.get('De')  <= 5));
    }
}


function exp_IdiomaAleman_9rule1_eval_expression(context) {
    // De > 5 AND De <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 5) && (feature.get('De')  <= 10));
    } else {
        return ((feature.get('De')  > 5) && (feature.get('De')  <= 10));
    }
}


function exp_IdiomaAleman_9rule2_eval_expression(context) {
    // De > 10 AND De <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 10) && (feature.get('De')  <= 25));
    } else {
        return ((feature.get('De')  > 10) && (feature.get('De')  <= 25));
    }
}


function exp_IdiomaAleman_9rule3_eval_expression(context) {
    // De > 25 AND De <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 25) && (feature.get('De')  <= 50));
    } else {
        return ((feature.get('De')  > 25) && (feature.get('De')  <= 50));
    }
}


function exp_IdiomaAleman_9rule4_eval_expression(context) {
    // De > 50 AND De <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 50) && (feature.get('De')  <= 100));
    } else {
        return ((feature.get('De')  > 50) && (feature.get('De')  <= 100));
    }
}


function exp_IdiomaAleman_9rule5_eval_expression(context) {
    // De > 100 AND De <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 100) && (feature.get('De')  <= 250));
    } else {
        return ((feature.get('De')  > 100) && (feature.get('De')  <= 250));
    }
}


function exp_IdiomaAleman_9rule6_eval_expression(context) {
    // De > 250 AND De <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 250) && (feature.get('De')  <= 500));
    } else {
        return ((feature.get('De')  > 250) && (feature.get('De')  <= 500));
    }
}


function exp_IdiomaAleman_9rule7_eval_expression(context) {
    // De > 500 AND De <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 500) && (feature.get('De')  <= 1000));
    } else {
        return ((feature.get('De')  > 500) && (feature.get('De')  <= 1000));
    }
}


function exp_IdiomaAleman_9rule8_eval_expression(context) {
    // De > 1000 AND De <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 1000) && (feature.get('De')  <= 2500));
    } else {
        return ((feature.get('De')  > 1000) && (feature.get('De')  <= 2500));
    }
}


function exp_IdiomaAleman_9rule9_eval_expression(context) {
    // De > 2500 AND De <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 2500) && (feature.get('De')  <= 5000));
    } else {
        return ((feature.get('De')  > 2500) && (feature.get('De')  <= 5000));
    }
}


function exp_IdiomaAleman_9rule10_eval_expression(context) {
    // De > 5000 AND De <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 5000) && (feature.get('De')  <= 10000));
    } else {
        return ((feature.get('De')  > 5000) && (feature.get('De')  <= 10000));
    }
}


function exp_IdiomaAleman_9rule11_eval_expression(context) {
    // De > 10000 AND De <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 10000) && (feature.get('De')  <= 25000));
    } else {
        return ((feature.get('De')  > 10000) && (feature.get('De')  <= 25000));
    }
}


function exp_IdiomaChinoMandarin_10rule0_eval_expression(context) {
    // Cmn >= 1 AND Cmn <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  >= 1) && (feature.get('Cmn')  <= 5));
    } else {
        return ((feature.get('Cmn')  >= 1) && (feature.get('Cmn')  <= 5));
    }
}


function exp_IdiomaChinoMandarin_10rule1_eval_expression(context) {
    // Cmn > 5 AND Cmn <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 5) && (feature.get('Cmn')  <= 10));
    } else {
        return ((feature.get('Cmn')  > 5) && (feature.get('Cmn')  <= 10));
    }
}


function exp_IdiomaChinoMandarin_10rule2_eval_expression(context) {
    // Cmn > 10 AND Cmn <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 10) && (feature.get('Cmn')  <= 25));
    } else {
        return ((feature.get('Cmn')  > 10) && (feature.get('Cmn')  <= 25));
    }
}


function exp_IdiomaChinoMandarin_10rule3_eval_expression(context) {
    // Cmn > 25 AND Cmn <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 25) && (feature.get('Cmn')  <= 50));
    } else {
        return ((feature.get('Cmn')  > 25) && (feature.get('Cmn')  <= 50));
    }
}


function exp_IdiomaChinoMandarin_10rule4_eval_expression(context) {
    // Cmn > 50 AND Cmn <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 50) && (feature.get('Cmn')  <= 100));
    } else {
        return ((feature.get('Cmn')  > 50) && (feature.get('Cmn')  <= 100));
    }
}


function exp_IdiomaChinoMandarin_10rule5_eval_expression(context) {
    // Cmn > 100 AND Cmn <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 100) && (feature.get('Cmn')  <= 250));
    } else {
        return ((feature.get('Cmn')  > 100) && (feature.get('Cmn')  <= 250));
    }
}


function exp_IdiomaChinoMandarin_10rule6_eval_expression(context) {
    // Cmn > 250 AND Cmn <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 250) && (feature.get('Cmn')  <= 500));
    } else {
        return ((feature.get('Cmn')  > 250) && (feature.get('Cmn')  <= 500));
    }
}


function exp_IdiomaChinoMandarin_10rule7_eval_expression(context) {
    // Cmn > 500 AND Cmn <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 500) && (feature.get('Cmn')  <= 1000));
    } else {
        return ((feature.get('Cmn')  > 500) && (feature.get('Cmn')  <= 1000));
    }
}


function exp_IdiomaChinoMandarin_10rule8_eval_expression(context) {
    // Cmn > 1000 AND Cmn <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 1000) && (feature.get('Cmn')  <= 2500));
    } else {
        return ((feature.get('Cmn')  > 1000) && (feature.get('Cmn')  <= 2500));
    }
}


function exp_IdiomaChinoMandarin_10rule9_eval_expression(context) {
    // Cmn > 2500 AND Cmn <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 2500) && (feature.get('Cmn')  <= 5000));
    } else {
        return ((feature.get('Cmn')  > 2500) && (feature.get('Cmn')  <= 5000));
    }
}


function exp_IdiomaChinoMandarin_10rule10_eval_expression(context) {
    // Cmn > 5000 AND Cmn <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 5000) && (feature.get('Cmn')  <= 10000));
    } else {
        return ((feature.get('Cmn')  > 5000) && (feature.get('Cmn')  <= 10000));
    }
}


function exp_IdiomaChinoMandarin_10rule11_eval_expression(context) {
    // Cmn > 10000 AND Cmn <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Cmn')  > 10000) && (feature.get('Cmn')  <= 25000));
    } else {
        return ((feature.get('Cmn')  > 10000) && (feature.get('Cmn')  <= 25000));
    }
}


function exp_IdiomaAymara_11rule0_eval_expression(context) {
    // Ay >= 1 AND Ay <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  >= 1) && (feature.get('Ay')  <= 5));
    } else {
        return ((feature.get('Ay')  >= 1) && (feature.get('Ay')  <= 5));
    }
}


function exp_IdiomaAymara_11rule1_eval_expression(context) {
    // Ay > 5 AND Ay <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 5) && (feature.get('Ay')  <= 10));
    } else {
        return ((feature.get('Ay')  > 5) && (feature.get('Ay')  <= 10));
    }
}


function exp_IdiomaAymara_11rule2_eval_expression(context) {
    // Ay > 10 AND Ay <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 10) && (feature.get('Ay')  <= 25));
    } else {
        return ((feature.get('Ay')  > 10) && (feature.get('Ay')  <= 25));
    }
}


function exp_IdiomaAymara_11rule3_eval_expression(context) {
    // Ay > 25 AND Ay <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 25) && (feature.get('Ay')  <= 50));
    } else {
        return ((feature.get('Ay')  > 25) && (feature.get('Ay')  <= 50));
    }
}


function exp_IdiomaAymara_11rule4_eval_expression(context) {
    // Ay > 50 AND Ay <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 50) && (feature.get('Ay')  <= 100));
    } else {
        return ((feature.get('Ay')  > 50) && (feature.get('Ay')  <= 100));
    }
}


function exp_IdiomaAymara_11rule5_eval_expression(context) {
    // Ay > 100 AND Ay <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 100) && (feature.get('Ay')  <= 250));
    } else {
        return ((feature.get('Ay')  > 100) && (feature.get('Ay')  <= 250));
    }
}


function exp_IdiomaAymara_11rule6_eval_expression(context) {
    // Ay > 250 AND Ay <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 250) && (feature.get('Ay')  <= 500));
    } else {
        return ((feature.get('Ay')  > 250) && (feature.get('Ay')  <= 500));
    }
}


function exp_IdiomaAymara_11rule7_eval_expression(context) {
    // Ay > 500 AND Ay <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 500) && (feature.get('Ay')  <= 1000));
    } else {
        return ((feature.get('Ay')  > 500) && (feature.get('Ay')  <= 1000));
    }
}


function exp_IdiomaAymara_11rule8_eval_expression(context) {
    // Ay > 1000 AND Ay <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 1000) && (feature.get('Ay')  <= 2500));
    } else {
        return ((feature.get('Ay')  > 1000) && (feature.get('Ay')  <= 2500));
    }
}


function exp_IdiomaAymara_11rule9_eval_expression(context) {
    // Ay > 2500 AND Ay <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 2500) && (feature.get('Ay')  <= 5000));
    } else {
        return ((feature.get('Ay')  > 2500) && (feature.get('Ay')  <= 5000));
    }
}


function exp_IdiomaAymara_11rule10_eval_expression(context) {
    // Ay > 5000 AND Ay <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 5000) && (feature.get('Ay')  <= 10000));
    } else {
        return ((feature.get('Ay')  > 5000) && (feature.get('Ay')  <= 10000));
    }
}


function exp_IdiomaAymara_11rule11_eval_expression(context) {
    // Ay > 10000 AND Ay <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ay')  > 10000) && (feature.get('Ay')  <= 25000));
    } else {
        return ((feature.get('Ay')  > 10000) && (feature.get('Ay')  <= 25000));
    }
}


function exp_IdiomaMapundungun_12rule0_eval_expression(context) {
    // De >= 1 AND De <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  >= 1) && (feature.get('De')  <= 5));
    } else {
        return ((feature.get('De')  >= 1) && (feature.get('De')  <= 5));
    }
}


function exp_IdiomaMapundungun_12rule1_eval_expression(context) {
    // De > 5 AND De <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 5) && (feature.get('De')  <= 10));
    } else {
        return ((feature.get('De')  > 5) && (feature.get('De')  <= 10));
    }
}


function exp_IdiomaMapundungun_12rule2_eval_expression(context) {
    // De > 10 AND De <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 10) && (feature.get('De')  <= 25));
    } else {
        return ((feature.get('De')  > 10) && (feature.get('De')  <= 25));
    }
}


function exp_IdiomaMapundungun_12rule3_eval_expression(context) {
    // De > 25 AND De <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 25) && (feature.get('De')  <= 50));
    } else {
        return ((feature.get('De')  > 25) && (feature.get('De')  <= 50));
    }
}


function exp_IdiomaMapundungun_12rule4_eval_expression(context) {
    // De > 50 AND De <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 50) && (feature.get('De')  <= 100));
    } else {
        return ((feature.get('De')  > 50) && (feature.get('De')  <= 100));
    }
}


function exp_IdiomaMapundungun_12rule5_eval_expression(context) {
    // De > 100 AND De <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 100) && (feature.get('De')  <= 250));
    } else {
        return ((feature.get('De')  > 100) && (feature.get('De')  <= 250));
    }
}


function exp_IdiomaMapundungun_12rule6_eval_expression(context) {
    // De > 250 AND De <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 250) && (feature.get('De')  <= 500));
    } else {
        return ((feature.get('De')  > 250) && (feature.get('De')  <= 500));
    }
}


function exp_IdiomaMapundungun_12rule7_eval_expression(context) {
    // De > 500 AND De <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 500) && (feature.get('De')  <= 1000));
    } else {
        return ((feature.get('De')  > 500) && (feature.get('De')  <= 1000));
    }
}


function exp_IdiomaMapundungun_12rule8_eval_expression(context) {
    // De > 1000 AND De <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 1000) && (feature.get('De')  <= 2500));
    } else {
        return ((feature.get('De')  > 1000) && (feature.get('De')  <= 2500));
    }
}


function exp_IdiomaMapundungun_12rule9_eval_expression(context) {
    // De > 2500 AND De <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 2500) && (feature.get('De')  <= 5000));
    } else {
        return ((feature.get('De')  > 2500) && (feature.get('De')  <= 5000));
    }
}


function exp_IdiomaMapundungun_12rule10_eval_expression(context) {
    // De > 5000 AND De <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 5000) && (feature.get('De')  <= 10000));
    } else {
        return ((feature.get('De')  > 5000) && (feature.get('De')  <= 10000));
    }
}


function exp_IdiomaMapundungun_12rule11_eval_expression(context) {
    // De > 10000 AND De <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('De')  > 10000) && (feature.get('De')  <= 25000));
    } else {
        return ((feature.get('De')  > 10000) && (feature.get('De')  <= 25000));
    }
}


function exp_IdiomaArabe_13rule0_eval_expression(context) {
    // Ar >= 1 AND Ar <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  >= 1) && (feature.get('Ar')  <= 5));
    } else {
        return ((feature.get('Ar')  >= 1) && (feature.get('Ar')  <= 5));
    }
}


function exp_IdiomaArabe_13rule1_eval_expression(context) {
    // Ar > 5 AND Ar <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 5) && (feature.get('Ar')  <= 10));
    } else {
        return ((feature.get('Ar')  > 5) && (feature.get('Ar')  <= 10));
    }
}


function exp_IdiomaArabe_13rule2_eval_expression(context) {
    // Ar > 10 AND Ar <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 10) && (feature.get('Ar')  <= 25));
    } else {
        return ((feature.get('Ar')  > 10) && (feature.get('Ar')  <= 25));
    }
}


function exp_IdiomaArabe_13rule3_eval_expression(context) {
    // Ar > 25 AND Ar <= 50

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 25) && (feature.get('Ar')  <= 50));
    } else {
        return ((feature.get('Ar')  > 25) && (feature.get('Ar')  <= 50));
    }
}


function exp_IdiomaArabe_13rule4_eval_expression(context) {
    // Ar > 50 AND Ar <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 50) && (feature.get('Ar')  <= 100));
    } else {
        return ((feature.get('Ar')  > 50) && (feature.get('Ar')  <= 100));
    }
}


function exp_IdiomaArabe_13rule5_eval_expression(context) {
    // Ar > 100 AND Ar <= 250

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 100) && (feature.get('Ar')  <= 250));
    } else {
        return ((feature.get('Ar')  > 100) && (feature.get('Ar')  <= 250));
    }
}


function exp_IdiomaArabe_13rule6_eval_expression(context) {
    // Ar > 250 AND Ar <= 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 250) && (feature.get('Ar')  <= 500));
    } else {
        return ((feature.get('Ar')  > 250) && (feature.get('Ar')  <= 500));
    }
}


function exp_IdiomaArabe_13rule7_eval_expression(context) {
    // Ar > 500 AND Ar <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 500) && (feature.get('Ar')  <= 1000));
    } else {
        return ((feature.get('Ar')  > 500) && (feature.get('Ar')  <= 1000));
    }
}


function exp_IdiomaArabe_13rule8_eval_expression(context) {
    // Ar > 1000 AND Ar <= 2500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 1000) && (feature.get('Ar')  <= 2500));
    } else {
        return ((feature.get('Ar')  > 1000) && (feature.get('Ar')  <= 2500));
    }
}


function exp_IdiomaArabe_13rule9_eval_expression(context) {
    // Ar > 2500 AND Ar <= 5000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 2500) && (feature.get('Ar')  <= 5000));
    } else {
        return ((feature.get('Ar')  > 2500) && (feature.get('Ar')  <= 5000));
    }
}


function exp_IdiomaArabe_13rule10_eval_expression(context) {
    // Ar > 5000 AND Ar <= 10000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 5000) && (feature.get('Ar')  <= 10000));
    } else {
        return ((feature.get('Ar')  > 5000) && (feature.get('Ar')  <= 10000));
    }
}


function exp_IdiomaArabe_13rule11_eval_expression(context) {
    // Ar > 10000 AND Ar <= 25000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('Ar')  > 10000) && (feature.get('Ar')  <= 25000));
    } else {
        return ((feature.get('Ar')  > 10000) && (feature.get('Ar')  <= 25000));
    }
}