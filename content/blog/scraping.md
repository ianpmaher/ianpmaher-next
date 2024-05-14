---
title: "Web scraping: Puppeteer & Cheerio"
date: 2024-05-11
author: Ian Maher
tags: [scraping, ri, puppeteer, cheerio]
---
`   `
# 💻 Notes on JavaScript solutions for web scraping 🔧
___

While working on the [RI-API application](https://github.com/ianpmaher/ri-api), I found a roadblock. 
My new idea for a feature was having a list of restaurants. Rhode Island has some of the best food around, and there's always something new going on. I grew up in the millieu of the restaurant business, and I'm grateful to know my way around a menu. 

# 🍴 Food is important to me 🍝

You can find dishes from many different cultures scattered throughout the state. Top of mind, you can find some of the more storied Italian restaurants in New England on Federal Hill in Providence. Find the freshest oysters as Matunuck Oyster Bar. Pick up the best lobster roll in the state at Anthony's Seafood on your way to Newport. I recently wrote up the section on our wedding website for guests to find a bite to eat before the wedding. In just one town, I named fifteen different spots, and **I can honestly recommend all of them, full stop**. 

# 🔍 The search for an API 🕵️‍♂️

The first place I looked, naturally, was Yelp. I am familiar enough with the Yelp Fusion API, and at first I wanted to employ this as a quick(er) solution. However, I found that what I wanted was a bit simpler. At least for now, I want my RI-API endpoint to feature a great many restaurants, and I am _just_ doing the backend. If I were also creating a frontend, I would definitely utilize Yelp to make each entry look and feel like a "real" website.

I happened upon an amazing thing: [VisitRhodeIsland.com](https://www.visitrhodeisland.com/food-drink/restaurants/), which does use Yelp. It's decent enough, but as a reinventor of many wheels, I wanted to make my *own* list. 

![restaurants](https://f005.backblazeb2.com/file/ianpmaher/riwebsite.png)

# 🖥️ Web scraping as concept and as tool 🤖 

The term 'bot' has been bandied about online for as long as I can remember, if not before Tim Berners-Lee did his thing. 
Bots qua social media, we think of spam algorithmically placed onto trending videos and posts. The stuff of phishing attempts and scams. But bots are also indexers, such as the "crawlers" used by search engines like Google. 

I also tend to use the term "web scraping" to mean html **parsing**, extracting out the raw text out of the formatted presentation and readying it for other uses. I first encountered this latter instance of web scraping/parsing when working on my "Study Italian" app. Basically, I was fetching GET requests for the *Collins Italian-to-English Dictionary* API. If you queried a particular word, the response was a string of html. This makes sense for people to just throw into their websites, with `<em>` tags for italics and so forth. But I just wanted the first word of the dictionary definition. This was done with an Express backend as well, and I found **cheerio** to be perfect for the task. 

I've toyed around with the Python solutions for web scraping as well, and they seem to plenty of use cases in the wider Pythonic world. These include **BeautifulSoup** and the very capable **Scrapy**. There's also **Selenium**, which has plenty of capabilities for automation and testing. 

# 👨‍💻 Puppeteer & Cheerio together 🥣

**Puppeteer** is a great npm library. You can automate all sorts of browser interactions, such as navigating pages and clicking elements. You are even able to view the actual page as it is loaded and manipulated (if headless=false). It's pretty incredible and I've barely scratched the surface. 

All webscraping begins with Developer Tools and inspecting the structure of the page. For RI-API, I wanted to take the MANY pages of results found on the VisitRhodeIsland.com website and extract their values. The restaurants listed are all on different pages. 

![pagination](https://f005.backblazeb2.com/file/ianpmaher/paginationissue.png)

Normally this would still be fine, but the website is some Single Page Application, and the pagination of the results does not change the URL you're accessing. I did *not* want to manually click through each page, and copy the names by hand. Let's write a program instead!

![imports](https://f005.backblazeb2.com/file/ianpmaher/scraperFunc.png)

Puppeteer loads the webpage, and Cheerio gets to work. According to my instructions, the html tree is parsed down to the results, and the restaurant names are pushed into an array for safekeeping. 

![try block](https://f005.backblazeb2.com/file/ianpmaher/scraperTry.png)
![target](https://f005.backblazeb2.com/file/ianpmaher/targetvalue.png)

And now Puppeteer looks for the "next page" button on the website (which was rather involved). If it exists, Puppeteer clicks it; Puppeteer waits for the page to load; and Cheerio gets to work once again.



![catch block](https://f005.backblazeb2.com/file/ianpmaher/scraperCatch.png)

For now, I have my code set to take the whole lot of restaurant names, along with a couple other details, and create a json file out of them. 
![json output](https://f005.backblazeb2.com/file/ianpmaher/scraperFileOutput.png)

If you go to the /restaurants/ endpoint, you'll get one random entry. If you go to the /restaurants/all endpoint, you'll get the whole list: over 1000! While I'd love to have the time and luxury to visit all 1000+ restaurants in Rhode Island, being able to collect these data and ready them for other uses is not too bad, either.

# 🤔 Closing thoughts 🤔

This was a fun adventure! I am always eager to jump on ideas and strike while the iron is hot. Not coding professionally (yet) means I have plenty of ideas, but not plenty of time. Getting familiar with new tools like these web scraping tools lead to many paths. Sophisticated tools like the bots/crawlers that comb data for *Large Language Models* and other AI/ML activities fall in this arena. As do the aforementioned indexing crawlers like Google's. There are so many machine learning and data mining use cases for these automations. 

Thanks for reading, and I hope you take the time to play aorund with some of these technologies!