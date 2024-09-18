---
title: "GPA Calculator -- an adventure in spreadsheet wheel-reinvention"
date: 2024-09-16
author: Ian Maher
tags: [EdTech, guidance counseling, conditional, GPA]
---

### The problem
Every September, I am asked by students which classes they ought to take. Some of them want different electives, and some just want to be with friends or a favorite teacher. But many, especially the upperclassmen, want to know which classes might boost their GPA the most. My own sense of what a GPA means is colored by my own experiences in school, especially college and later, graduate school. 

But collegiate and secondary school GPAs are computed differently, since courses are weighted in high school. More difficult classes, especially AP clases, are naturally given more weight than a class where a beating pulse is returned with an easy A.

Here is what my high school uses:

![GPA Scale](https://f005.backblazeb2.com/file/ianpmaher/gpascale.png)

Seems simple enough, right? Well it is, but it's also tedious. The Student Information Software (SIS) that the school uses will compute it all on its own, but it does so behind the scene, and it's not great for the most natural question for a student to ask: 
- "What if I got *x* grade in *y* class?"
- Or more precisely, "How can I make sure to maintain my class rank this year?

**It takes roughly 10 minutes to do the arithmetic by hand, and I tired of the tedium.**

**The goal: make GPA calculations so efficient and easy that students can do it themselves.**
---

### Coming up with the formula
To help students understand which courses might boost their GPA the most, I needed a way to compute GPA automatically based on a table of course levels, grades, and credits. I started by defining a table in Google Sheets with each possible combination of letter grade and class level—ranging from AP (Advanced Placement) to regular courses. This table would assign numerical values, or "grade points," to each combination.

Once the table was defined, I used a formula to calculate each student's GPA based on their course load. The basic formula took into account the weight of each class and multiplied the grade points by the credits for that course:

> =ARRAYFORMULA(
> &nbsp;IF(ISBLANK(B2:B),,
> &nbsp;&nbsp;VLOOKUP(B2:B, 
> &nbsp;&nbsp;&nbsp;Table!$A$2:$M$6, 
> &nbsp;&nbsp;&nbsp;MATCH(C2:C, Table!$B$1:$M$1, 0) + 1, 
> &nbsp;&nbsp;&nbsp;FALSE)))

This formula uses `VLOOKUP` to match the student's letter grade to the weighted GPA for that course level (AP, Honors, etc.), then multiplies the result by the number of credits for the course. It allowed students to simply input their class level, grade, and credits for each course, and the formula would take care of the rest.

---

### Creating a web app for accessibility
While the Google Sheets solution worked well for students who were familiar with spreadsheets, I realized it wasn't the most accessible solution for everyone. Many students weren't comfortable with spreadsheet software and found the process of making a copy of the sheet and editing it to be a hassle. Plus, there was always the risk that someone would accidentally delete the formula, leaving them frustrated and confused.

To solve this problem, I decided to take it a step further by building a dedicated web page for students to calculate their GPA. This approach would allow me to lock down the calculations, preventing students from accidentally messing with any of the underlying logic while providing a more user-friendly interface.

The web page would essentially mimic the functionality of the Google Sheet but would offer a cleaner, more interactive experience for students who may not be tech-savvy. I used a combination of front-end technologies like React to create dynamic forms where students could select their course level, enter their grades, and see their GPA instantly. 

This also meant I could handle the GPA calculation on the backend, ensuring the formula would always be correct and removing any guesswork or potential errors from students manually copying the formula. Plus, building a dedicated tool allowed me to make the interface more intuitive, ensuring a better experience overall for students trying to plan their coursework.

---

You can continue your post from here, perhaps elaborating on how you built the web page, the challenges you faced during development, or any feedback you received from students using the tool.

Let me know if you'd like me to expand on specific sections!