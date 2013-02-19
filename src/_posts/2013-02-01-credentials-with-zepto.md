---
layout: post
title: "Credentials with Zepto"
tags: ['ajax', 'zepto', 'cors']
---

If you need to manage cookies on [CORS](http://www.html5rocks.com/en/tutorials/cors/) requests with [Zepto](http://zeptojs.com/) (yes, they do not manage [jQuery xhrFields](http://api.jquery.com/jQuery.ajax/) yet), just add this setting:

{% highlight javascript %}
$.ajaxSettings.beforeSend = function(xhr) {
    xhr.withCredentials = true;
};
{% endhighlight %}

Though, this code will affect every ajax request. Maybe you want it just for one request. In this case:

{% highlight javascript %}
$.ajax({
    url: src,
    dataType: 'json',
    beforeSend: function(xhr) {
        xhr.withCredentials = false;
    },
    success: function (response) {
        callback(response);
    }
});
{% endhighlight %}

Hope they will implement it soon, PR are already in queue.