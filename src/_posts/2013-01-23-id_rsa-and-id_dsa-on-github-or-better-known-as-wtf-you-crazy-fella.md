---
layout: post
title: "id_rsa and id_dsa on Github or better known as WTF YOU CRAZY FELLA"
tags: ['github', 'security']
---

This evening, I was quietly seated on my chair, doing some geek stuff... when came a tweet from nowhere:


    Enjoy! https://github.com/search?q=XXXX (1)

_(1) I have deliberately broken the link not to help people who want to do bad things with this information._


![LimeChat]({{site.baseurl}}/content/img/github-fail.jpg)

Yes, it is: a search on [Github](https://www.github.com) which gives you all people sharing their ```id_rsa``` and ```id_rsa.pub``` on their repos. But for fuck's sake? Are you loony?!

Just to be clear: an ```id_rsa``` is a __private__ key containing the protocol version 2 RSA authentication identity of the user. This file should not be readable by anyone but the user. In other words, it's __your own personal key__ to identify you and allow you to connect to other servers!

The ```id_rsa.pub``` file contains the protocol version 2 RSA public key for authentication. It's the file on the server who says to this same server "Yeah, I accept this kind of person" (kind which is defined by your private key).

So. __Do. Not. Ever. Share. Your private key.__

And about public key, only on server you would like to connect to. On [Github](https://www.github.com), it's there: [github.com/settings/ssh](https://github.com/settings/ssh).

### Bonus

- [DSA](http://en.wikipedia.org/wiki/Digital_Signature_Algorithm)
- [RDA](http://en.wikipedia.org/wiki/RSA_%28algorithm%29)

### Troll

See the languages returned on the result page. :D