var util = {
    arrayEach: function (a, callback) {
        for(var i = 0; i < a.length; i++) {
            callback(a[i], i);
        }
    },

    listBuilder: function(arr, cl) {
        var ul = $("<ul></ul>");
        for(var i = 0; i < arr.length; i++) {
            var li = $("<li class='"+ cl +"'></li>");
            li.html(arr[i]);
            ul.append(li);
        }
        return ul;
    },

    currentTime: function() {
        var d = new Date();
        return d.toLocaleTimeString();
    },

    currentMinute: function() {
        var d  = new Date();
        return d.getMinutes();
    }
};