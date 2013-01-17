---
layout: post
title: "Issues, the way to manage them"
tags: ['issues', 'github']
---

First of all, a little notice to tell you that what I'll be talking here is two parts mixed in one: it contains a way to write down an issue (bugtracking) && a way to manage it (process in team). It's two different things but I assume you already know what is what and I don't want to spend time about it, there're so many articles on the internet.

So, I won't talk to you about what [scrum](http://en.wikipedia.org/wiki/Scrum_%28development%29) is, what a [bugtracker](http://en.wikipedia.org/wiki/Bugtracker) is. I will talk to you about a tool which allows me to perfectly care my issues in team.

I'm not new in development and managing a bug or an issue is probably one of the hugest part of my job. I worked in some companies and I've seen a lot of ways to manage a bug: it could have been a no-bugtracker-at-all solution and you had to manage yourself the bug coming from an email to another person or it could have been a huge bugtracker with so many options that it was so horrible to use, you lose your mind there.

I've tried all of these bugtrackers for a few months like:

* [trac](http://trac.edgewall.org/)
* [bugzilla](http://www.bugzilla.org/)
* [jira](http://www.atlassian.com/software/jira/)
* [redmine](http://www.redmine.org/)
* a shared google spreadsheet (aye, not fundamentally a bad idea in a small team)
* some others I don't remember the name

Well, and I can say no one satisfied me because I spent more time to try to use it correctly and to respect a process that it wasn't mine. I felt like inflexible and can't write down quickly a note or a bug.

So okay, I've done my part about bugtracking. Now, about process. Well, nothing to say about process to be honest. I just can tell you that I've tried scrum, it works or not, depending on how your entreprise is, how people are, how people take serious this process. 6 months before, I could have said "fuck yeah, work with scrum method, it's the way to succeed!". But now, it ain't anymore. Too much process can kill the process.

Well. throw away all these shits and let's talk about a solution I can say: yes, that's how I will work now.

As professional git repo, we choose [Github](https://github.com/). Ok. [Github](https://github.com/) provides Github issues solution. Well, ok. You have tickets, you can assign a ticket to someone, you can choose a label, comment the ticket. But? There's no priority management. It's a shame, yes. That's where [huboard](http://huboard.com/) comes and saves the world.

[Huboard](http://huboard.com/) is simply an [open source application](https://github.com/rauhryan/huboard) written in ruby which allows you to manage the priorities of github issues. Just that, you see. It's based on [scrum](http://en.wikipedia.org/wiki/Scrum_%28development%29) or [kanban](http://en.wikipedia.org/wiki/Kanban) (yes I don't see for the moment the true difference but anyway) and it lets you to choose the priority of a ticket.

You have four columns: Backlog, Ready, Working, Done. You place tickets wherever you want and you move them between these columns. Aye, you've created life to your tickets! \o/

Now, let's see in picture.

You can filter your tickets by assignment, labels. You can see your milestones, your backlog, etc.

To be linked with github, huboard.com asks some low permissions like - to be honest - almost all permissions. Yes, I see you to be afraid but let me explain how it works.

It has no database, it just asks you permissions and the only things it does are to add some labels (Backlog, Ready, Working, Done) to know the life of the issues and to add a comment like   <!---
 @huboard:{"order":42.6875}
    --> to know the placement about priority (verticale way).


I've tried too trello and kanbanery to organise our cards. Well, nope. I can't use them. Ugly, boring. Kanbanery is ok but I'll tell you why I prefer huboard just after an explanation of huboard itself.
