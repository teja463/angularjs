var Blogs = (function () {

    var blogs = [
        {
            "title": "Blog 1",
            "name": "Teja",
            "description": "Anim deserunt officia sit elit. Pariatur duis qui Lorem id id exercitation do commodo eiusmod incididunt anim Lorem fugiat. Voluptate velit ipsum amet irure velit in labore labore sit voluptate deserunt cillum deserunt.",
            "date": "2018-10-10 19:25"
        },
        {
            "title": "Blog 2",
            "name": "Pramod",
            "description": "Anim deserunt officia sit elit. Pariatur duis qui Lorem id id exercitation do commodo eiusmod incididunt anim Lorem fugiat. Voluptate velit ipsum amet irure velit in labore labore sit voluptate deserunt cillum deserunt.",
            "date": "2018-10-10 18:25"
        },
        {
            "title": "Blog 3",
            "name": "Chaitanya",
            "description": "Anim deserunt officia sit elit. Pariatur duis qui Lorem id id exercitation do commodo eiusmod incididunt anim Lorem fugiat. Voluptate velit ipsum amet irure velit in labore labore sit voluptate deserunt cillum deserunt.",
            "date": "2018-09-25 19:25"
        },
        {
            "title": "Blog 4",
            "name": "Seenu",
            "description": "Anim deserunt officia sit elit. Pariatur duis qui Lorem id id exercitation do commodo eiusmod incididunt anim Lorem fugiat. Voluptate velit ipsum amet irure velit in labore labore sit voluptate deserunt cillum deserunt.",
            "date": "2018-08-10 19:25"
        }

    ]

    var blogTemplate = '<div class="blog"><div class="row col-md-12"><h3>${title}</h3></div><div class="row"><div class="col-md-8"><h4>${name}</h4></div><div class="col-md-4 time">${time}</div></div><div class="row col-md-12">${content}</div></div>';
    function displayBlogs() {

        var pattern = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}$/;

        let time = document.getElementById("blogTime").value;
        if (pattern.test(time)) {
            document.getElementById("errorMsg").style.display = "none";
            parseAndShowBlogs(time);

        } else {
            document.getElementById("errorMsg").style.display = "block";
        }
        return false;
    }

    function parseAndShowBlogs(date) {
        var blogsObj = document.getElementById("blogs");
        var allBlogs = '';
        for (var i = 0; i < blogs.length; i++) {
            var tempBlog = blogs[i];
            console.log(tempBlog.date);
            var blogContent = blogTemplate.replace('${title}', tempBlog.title).replace('${name}', tempBlog.name).replace('${time}', getDateDiffText(date, tempBlog.date)).replace('${content}', tempBlog.description);
            allBlogs += blogContent;

        }
        blogsObj.innerHTML = allBlogs;
    }

    function formatDate(date) {
        var d = date.split(' ')[0];
        var t = date.split(' ')[1];
        d = d.split("-").reverse().join("-");
        var dt = d + " " + t;
        return new Date(dt);
    }

    function getDateDiffText(givenDate, blogDate) {

        var formatD = formatDate(givenDate);
        var blogD = new Date(blogDate);
        var diffMins = Math.floor((formatD - blogD ) / 1000 / 60);
        console.log(diffMins);
        if (diffMins <=1) {
            return "Less than 1 minute ago";
        } else if (diffMins > 1 && diffMins < 60) {
            return diffMins + " minutes ago";
        } else if (diffMins >= 60 && diffMins < 1440) {
            return Math.floor((diffMins / 60)) + " hours ago";
        } else if (diffMins>=1440 && diffMins<43200){
            return Math.floor((diffMins / 60 / 30)) + " days ago";
        }
        else {
            return blogD.toDateString();
        }
    }
    return {
        displayBlogs: displayBlogs
    }
})();