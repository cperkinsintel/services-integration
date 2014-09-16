var data_views   = { group:[], single:[], bindings:{}};

data_views.group.push({"model":{"title":null,"year":null,"mpaa_rating":null,"synopsis":null,"posters.thumbnail":null,"id":null},"child":".uib_w_3","parent":".uib_w_2"});
data_views.single.push({"selector":".uib_w_4","options":{"effect":["html","attributes"]}});
/* prepare controllers */

data_support.prepare_mvc(".uib_w_3", "intel.xdk.services.movie_search", ["movies"], "standard-list", data_views);
data_support.prepare_mvc(".uib_w_4", "uib_w_3_data", [], "null", data_views);
