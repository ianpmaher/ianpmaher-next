---
title: "Automated Attendance"
date: 2024-11-13
author: Ian Maher
tags: [EdTech, guidance counseling, automation, raspberry pi]
---

### Attendance Reports
Student attendance is the best barometer for students' academic and personal well-being. A student who shows up on time is ready to learn. Students who are ready to learn will retain information, complete their work, and do well on tests, and eventually, grades.

But if they are absent: are they sick? Did something happen? Are they having trouble with transportation? Is there something bigger going on at home? 

### New Day, Same Thing
I am responsible for my own day, and I look at students' schedules when I am managing my own schedule. I need to call down a certain student at specific time: during an elective, not Math. But if a student is absent, the whole process comes to a halt.

### SCRIPTING
I had previously used JavaScript and Puppeteer/Cheerio to do some web scraping, but this time I wanted to flex my Python muscles. I used Selenium and other Python packages to automate the generation of reports, as well as to send out emails. I also set up a cronjob (crontab -e) to perform this script every weekday at 8:00.